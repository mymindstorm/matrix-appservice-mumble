import { credentials, ClientReadableStream, makeClientConstructor } from "@grpc/grpc-js";
import * as murmurGrpcPb from '../lib/MurmurRPC_grpc_pb';
import { Server, TextMessage, Channel, User } from '../lib/MurmurRPC_pb';
import { Bridge, RoomBridgeStore, Event, MatrixRoom } from 'matrix-appservice-bridge';
import { MatrixClient } from 'matrix-js-sdk';

export default class Murmur {
  private addr: string;
  private server: Server | undefined;
  private matrixClient: MatrixClient | undefined;
  client: murmurGrpcPb.IV1Client | undefined;

  constructor(addr: string) {
    this.addr = addr;
    return;
  }

  // Init connection
  connectClient() {
    const MurmurClient = makeClientConstructor(murmurGrpcPb["V1Service"], "V1Service")
    return new MurmurClient(
      this.addr,
      credentials.createInsecure());
  }

  // Sets server to the first running one and returns server stream
  getServerStream(): Promise<ClientReadableStream<Server.Event>> {
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

  async setupCallbacks(bridge: Bridge, roomLinks: RoomBridgeStore, config: MurmurConfig) {
    const stream = await this.getServerStream();
    const getMatrixRooms = async (channelId?: number): Promise<MatrixRoom[]> => {
      if (!channelId) {
        return [];
      }
      return await roomLinks.getLinkedMatrixRooms(String(channelId));
    }
    stream.on('data', async (event: Server.Event) => {
      let matrixRooms: MatrixRoom[] = [];
      switch (event.getType()) {
        case Server.Event.Type.USERCONNECTED:
          matrixRooms = await getMatrixRooms(event.getChannel()?.getId());
          if (!matrixRooms.length) {
            break;
          }

          const connIntent = bridge.getIntent();
          for (const room of matrixRooms) {
            connIntent.sendMessage(room.getId(), {
              body: `${event.getUser()?.getName()} has connected to the server.`,
              msgtype: "m.notice"
            });
          }
          break;
        case Server.Event.Type.USERDISCONNECTED:
          matrixRooms = await getMatrixRooms(event.getChannel()?.getId());
          if (!matrixRooms.length) {
            break;
          }

          const disconnIntent = bridge.getIntent();
          for (const room of matrixRooms) {
            disconnIntent.sendMessage(room.getId(), {
              body: `${event.getUser()?.getName()} has disconnected from the server.`,
              msgtype: "m.notice"
            });
          }
          break;
        case Server.Event.Type.USERTEXTMESSAGE:
          matrixRooms = await getMatrixRooms(event.getChannel()?.getId());
          if (!matrixRooms.length) {
            break;
          }

          const textIntent = bridge.getIntent(`@mumble_${event.getUser()?.getName()}:${config.domain}`);
          for (const room of matrixRooms) {
            textIntent.sendMessage(room.getId(), {
              body: event.getMessage()?.getText,
              format: "org.matrix.custom.html",
              formatted_body: event.getMessage()?.getText(),
              msgtype: "m.text"
            });
          }
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

  // Matrix message -> Mumble
  sendMessage(event: Event, linkedRooms: number[], displayname?: string) {
    if (!this.client || !this.server || !this.matrixClient || !event.content) {
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
      // @ts-ignore
      && event.content.format === "org.matrix.custom.html"
      // @ts-ignore
      && event.content.formatted_body) {
      // @ts-ignore
      messageContent = event.content.formatted_body;
    }

    // If displayname was not provided, fall back to username
    if (!displayname) {
      displayname = event.sender;
    }

    const message = new TextMessage();
    message.setServer(this.server);
    for (const roomId of linkedRooms) {
      message.addChannels(new Channel().setId(roomId));
    }
    message.setText(`${displayname}: ${messageContent}`);

    this.client.textMessageSend(message, () => { });

    return;
  }

  // Get Mumble channel id from channel name
  getChannelId(channelName: string): Promise<number | undefined> {
    const query = new Channel.Query();
    query.setServer(this.server);
    return new Promise((resolve) => {
      this.client?.channelQuery(query, (err, res) => {
        if (err) {
          console.error("Murmur channel lookup error:", err);
          resolve();
          return;
        }

        for (const channel of res.getChannelsList()) {
          if (channelName.trim() === channel.getName()?.trim()) {
            resolve(channel.getId());
            return;
          }
        }

        resolve();
      });
    });
  }
};
