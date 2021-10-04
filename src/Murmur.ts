import {ClientReadableStream, credentials, makeClientConstructor} from "@grpc/grpc-js";
import * as MurmurService from '../lib/MurmurRPC_grpc_pb';
import {Channel, Server, TextMessage} from '../lib/MurmurRPC_pb';
import {Bridge, Intent, MatrixRoom, RoomBridgeStore, WeakEvent} from 'matrix-appservice-bridge';
import {MatrixClient} from "matrix-bot-sdk/lib/MatrixClient";

export default class Murmur {
  private readonly addr: string;
  private server: Server | undefined;
  private matrixClient: MatrixClient | undefined;
  client: MurmurService.V1Client | undefined;

  constructor(addr: string) {
    this.addr = addr;
    return;
  }

  // Init connection
  connectClient() {
    // @ts-ignore - bindings are wrong?
    const MurmurClient = makeClientConstructor(MurmurService["MurmurRPC.V1"], "MurmurRPC.V1")
    // @ts-ignore
    this.client = new MurmurClient(
      this.addr,
      credentials.createInsecure());
    return this.client;
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

    async function getMatrixRooms(channelId?: number | Channel[]): Promise<MatrixRoom[]> {
      if (!channelId) {
        return [];
      }

      if (typeof channelId === "object") {
        let mtxRooms: MatrixRoom[] = [];
        for (const channel of channelId) {
          mtxRooms = mtxRooms.concat(await roomLinks.getLinkedMatrixRooms(String(channel.getId())));
        }
        return mtxRooms;
      } else {
        return await roomLinks.getLinkedMatrixRooms(String(channelId));
      }
    }

    async function onUserConnected(event: Server.Event, intent: Intent) {
      const connMtxRooms = await roomLinks.getEntriesByLinkData({send_join_part: true});
      if (!connMtxRooms.length) {
        return;
      }

      for (const room of connMtxRooms) {
        const mtxId = room.matrix?.getId();
        if (!mtxId) {
          continue;
        }
        await intent.sendMessage(mtxId, {
          body: `${event.getUser()?.getName()} has connected to the server.`,
          msgtype: "m.notice"
        });
      }
    }

    async function onUserDisconnected(event: Server.Event, intent: Intent) {
      const disconnMtxRooms = await roomLinks.getEntriesByLinkData({send_join_part: true});
      if (!disconnMtxRooms.length) {
        return;
      }

      for (const room of disconnMtxRooms) {
        const mtxId = room.matrix?.getId();
        if (!mtxId) {
          continue;
        }
        await intent.sendMessage(mtxId, {
          body: `${event.getUser()?.getName()} has disconnected from the server.`,
          msgtype: "m.notice"
        });
      }
    }

    async function onTextMessage(event: Server.Event) {
      const textMtxRooms = await getMatrixRooms(event.getMessage()?.getChannelsList());
      if (!textMtxRooms.length) {
        return;
      }

      const userIntent = bridge.getIntent(`@mumble_${event.getUser()?.getName()}:${config.domain}`);
      for (const room of textMtxRooms) {
        await userIntent.sendMessage(room.getId(), {
          body: event.getMessage()?.getText(),
          format: "org.matrix.custom.html",
          formatted_body: event.getMessage()?.getText(),
          msgtype: "m.text"
        });
      }
    }

    stream.on('data', (event: Server.Event) => {
      switch (event.getType()) {
        case Server.Event.Type.USERCONNECTED:
          onUserConnected(event, bridge.getIntent())
            .catch((err) => console.error("Error when sending user connection message:", err));
          break;
        case Server.Event.Type.USERDISCONNECTED:
          onUserDisconnected(event, bridge.getIntent())
            .catch((err) => console.error("Error when sending user disconnection message:", err));
          break;
        case Server.Event.Type.USERTEXTMESSAGE:
          onTextMessage(event)
            .catch((err) => console.error("Error when sending text message:", err));
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
  sendMessage(event: WeakEvent, linkedRooms: number[], displayname?: string) {
    if (!this.client || !this.server || !this.matrixClient || !event.content) {
      return;
    }

    let messageContent = event.content.body;
    if (event.content.msgtype === "m.image" || event.content.msgtype === "m.file") {
      const url = this.matrixClient.mxcToHttp(event.content.url as string);
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
          resolve(undefined);
          return;
        }

        for (const channel of res.getChannelsList()) {
          if (channelName.trim() === channel.getName()?.trim()) {
            resolve(channel.getId());
            return;
          }
        }

        resolve(undefined);
      });
    });
  }
};
