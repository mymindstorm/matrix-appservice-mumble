import {loadPackageDefinition, credentials} from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { MurmurClient, MurmurServer, MurmurConfig } from './types';

export default class Murmur {
  private addr: string;
  private server: MurmurServer | undefined;
  client: MurmurClient | undefined;

  constructor(addr: string) {
    this.addr = addr;
    return;
  }

  // Init connection
  connectClient() {
    return new Promise((resolve) => {
      const pkgDef = protoLoader.loadSync(
          __dirname + '/MurmurRPC.proto',
          {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true,
          });
      const MurmurRPC = loadPackageDefinition(pkgDef).MurmurRPC;
      // @ts-ignore
      const client = new MurmurRPC.V1(
          this.addr,
          credentials.createInsecure()) as MurmurClient;
      client.waitForReady(Infinity, (err) => {
        if (err) {
          console.log(err);
          process.exit(1);
        }
        this.client = client;
        resolve();
      });
    });
  }

  // Sets server and returns server stream
  getServerStream() {
    return new Promise((resolve) => {
      if (!this.client) {
        console.log("Murmur client connection null!");
        process.exit(1);
        return;
      }

      this.client.serverQuery({}, (e, r) => {
        if (!this.client) {
          console.log("Murmur client connection null!");
          process.exit(1);
          return;
        }

        if (e) {
          console.log(e);
          process.exit(1);
          return;
        } else if (r) {
          let server;
          for (const currentServer of r.servers) {
            if (currentServer.running) {
              server = currentServer;
              break;
            }
          }
  
          if (!server) {
            console.log('No servers running!');
            process.exit(1);
            return;
          }
  
          this.server = server;
          resolve(this.client.serverEvents(this.server));
        }
      });
    });
  }

  async setupCallbacks(bridge: any, config: MurmurConfig) {
    const stream = await this.getServerStream() as NodeJS.ReadableStream;
    stream.on('data', (chunk) => {
      switch (chunk.type) {
        case 'UserConnected':
          const connIntent = bridge.getIntent();
          connIntent.sendText(config.matrixRoom,
              `${chunk.user.name} has connected to the server.`);
          break;
        case 'UserDisconnected':
          const disconnIntent = bridge.getIntent();
          disconnIntent.sendText(config.matrixRoom,
              `${chunk.user.name} has disconnected from the server.`);
          break;
        case 'UserTextMessage':
          const textIntent = bridge
              .getIntent(`@mumble_${chunk.user.name}:${config.domain}`);
          textIntent.sendText(config.matrixRoom, chunk.message.text);
          break;
        default:
          break;
      }
      return;
    });

    // stream.on error
    return;
  }

  async sendMessage(event: { sender: string, content: { body: string }}, config: MurmurConfig) {
    if (!this.client || !this.server) {
      return;
    }

    this.client.textMessageSend({
      server: this.server,
      text: `${event.sender}: ${event.content.body}`,
    }, () => {});

    return;
  }
};