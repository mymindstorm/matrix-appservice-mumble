import { credentials } from "@grpc/grpc-js";
import { V1Client as MurmurClient } from '../lib/MurmurRPC_grpc_pb';
import { Server, TextMessage } from '../lib/MurmurRPC_pb';
import { Bridge } from 'matrix-appservice-bridge';
import { MatrixClient } from 'matrix-js-sdk';

export default class Murmur {
  private addr: string;
  private server: Server | undefined;
  private matrixClient: MatrixClient | undefined;
  client: MurmurClient | undefined;

  constructor(addr: string) {
    this.addr = addr;
    return;
  }

  // Init connection
  connectClient() {
      return new MurmurClient(
        this.addr,
        credentials.createInsecure());
  }

  // Sets server to the first running one and returns server stream
  getServerStream() {
    return new Promise((resolve) => {
      if (!this.client) {
        console.log("Murmur client connection null!");
        process.exit(1);
      }

      this.client.serverQuery(new Server.Query(), (e, r) => {
        if (!this.client) {
          console.log("Murmur client connection null!");
          process.exit(1);
        }

        if (e) {
          console.log(e);
          process.exit(1);
        } else if (r) {
          let server;
          for (const currentServer of r.getServersList()) {
            if (currentServer.getRunning()) {
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

  async setupCallbacks(bridge: Bridge, config: MurmurConfig) {
    const stream = await this.getServerStream() as NodeJS.ReadableStream;
    stream.on('data', (chunk) => {
      switch (chunk.type) {
        case 'UserConnected':
          const connIntent = bridge.getIntent();
          connIntent.sendMessage(config.matrixRoom, {
            body: `${chunk.user.name} has connected to the server.`,
            msgtype: "m.notice"
          });
          break;
        case 'UserDisconnected':
          const disconnIntent = bridge.getIntent();
          disconnIntent.sendMessage(config.matrixRoom, {
            body: `${chunk.user.name} has disconnected from the server.`,
            msgtype: "m.notice"
          });
          break;
        case 'UserTextMessage':
          // is this a message we should bridge?
          if (!chunk.message.channels) {
            return;
          } else {
            let shouldSend = false;
            for (const channel of chunk.message.channels) {
              if (config.channels && !config.channels.includes(channel.name)) {
                  continue;
              }
              shouldSend = true;
            }
            if (!shouldSend) {
              return;
            }
          }

          const textIntent = bridge
            .getIntent(`@mumble_${chunk.user.name}:${config.domain}`);
          textIntent.sendMessage(config.matrixRoom, {
            body: chunk.message.text,
            format: "org.matrix.custom.html",
            formatted_body: chunk.message.text,
            msgtype: "m.text"
          });
          break;
        default:
          break;
      }
      return;
    });

    // stream.on error
    return;
  }

  setMatrixClient(client: MatrixClient) {
    this.matrixClient = client;
    return;
  }

  async sendMessage(event: MessageEvent, displayname?: string) {
    if (!this.client || !this.server || !this.matrixClient) {
      return;
    }

    let messageContent = event.content.body;
    if (event.content.msgtype === "m.image" || event.content.msgtype === "m.file") {
      // @ts-ignore - this is nullable
      const url = this.matrixClient.mxcUrlToHttp(event.content.url, null, null, null, true);
      if (url) {
        messageContent = `<a href="${url}">${event.content.body}</a>`;
      }
    }

    if (event.content.msgtype === "m.text"
      && event.content.format === "org.matrix.custom.html"
      && event.content.formatted_body) {
      messageContent = event.content.formatted_body;
    }

    // If displayname was not provided, fall back to username
    if (!displayname) {
      displayname = event.sender;
    }

    const message = new TextMessage();
    message.setServer(this.server);
    message.setText(`${displayname}: ${messageContent}`);

    this.client.textMessageSend(message, () => { });

    return;
  }
};
