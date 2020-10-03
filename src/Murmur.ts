import {
  credentials,
  ClientReadableStream,
  makeClientConstructor,
} from "@grpc/grpc-js";
import * as MurmurService from "../lib/MurmurRPC_grpc_pb";
import { Server, TextMessage, Channel } from "../lib/MurmurRPC_pb";
import {
  Bridge,
  RoomBridgeStore,
  MatrixRoom,
  WeakEvent,
  RemoteRoom,
} from "matrix-appservice-bridge";
import { MurmurConfig } from "./types";
import { MatrixClient } from "matrix-js-sdk";

export default class Murmur {
  private addr: string;
  private server: Server | undefined;
  private matrixClient: MatrixClient | undefined;
  client: MurmurService.V1Client | undefined;

  constructor(addr: string) {
    this.addr = addr;
    return;
  }

  // Init connection
  connectClient(): void {
    const MurmurClient = makeClientConstructor(
      // @ts-expect-error - bindings issue
      MurmurService["MurmurRPC.V1"],
      "MurmurRPC.V1"
    );
    // @ts-expect-error - we know that this is a MurmurService client
    this.client = new MurmurClient(this.addr, credentials.createInsecure());
    return;
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
            console.log("No servers running!");
            process.exit(1);
            return;
          }

          this.server = server;
          resolve(this.client.serverEvents(this.server));
        }
      });
    });
  }

  async setupCallbacks(
    bridge: Bridge,
    roomLinks: RoomBridgeStore,
    config: MurmurConfig
  ): Promise<void> {
    const stream = await this.getServerStream();

    const getMatrixRooms = async (
      channelId?: Channel[]
    ): Promise<MatrixRoom[]> => {
      if (!channelId) {
        return [];
      }

      const recursiveMumbleChans = await roomLinks.getEntriesByRemoteRoomData({
        recurse: true,
      });
      const recursiveMumbleChanIds: number[] = [];
      for (let i = 0; i < recursiveMumbleChans.length; i++) {
        const id = recursiveMumbleChans[i].remote?.getId();
        if (id) {
          recursiveMumbleChanIds.push(Number(id));
        } else {
          recursiveMumbleChans.splice(i, 1);
        }
      }

      let mtxRooms: MatrixRoom[] = [];
      for (const channel of channelId) {
        mtxRooms = mtxRooms.concat(
          await roomLinks.getLinkedMatrixRooms(String(channel.getId()))
        );

        // If there are recursive channels, then figure out if this channel
        //  is a child of a linked recursive channel.
        // TODO: possibly make an in-memory cache to store known hits?
        if (recursiveMumbleChans.length) {
          const channelInfo = await this.queryChannel(channel);
          let parentChannel = channelInfo?.getParent();
          console.log(parentChannel);
          while (typeof parentChannel !== "undefined") {
            const chanId = parentChannel.getId();
            if (chanId) {
              const searchIndex = recursiveMumbleChanIds.indexOf(chanId);
              console.log(`${searchIndex} a: ${parentChannel.getName()}`);
              const mtxRoom = recursiveMumbleChans[searchIndex].matrix;
              if (mtxRoom) mtxRooms.push(mtxRoom);
            }

            parentChannel = parentChannel.getParent();
          }
        }
      }
      return mtxRooms;
    };

    const eventCallback = async (event: Server.Event) => {
      {
        switch (event.getType()) {
          case Server.Event.Type.USERCONNECTED: {
            const connMtxRooms = await roomLinks.getEntriesByLinkData({
              send_join_part: true,
            });
            if (!connMtxRooms.length) {
              break;
            }

            const connIntent = bridge.getIntent();
            for (const room of connMtxRooms) {
              const mtxId = room.matrix?.getId();
              if (!mtxId) {
                continue;
              }
              const userName =
                event.getUser()?.getName() || "[Bridge error: Unknown user]";
              void connIntent.sendMessage(mtxId, {
                body: `${userName} has connected to the server.`,
                msgtype: "m.notice",
              });
            }
            break;
          }
          case Server.Event.Type.USERDISCONNECTED: {
            const disconnMtxRooms = await roomLinks.getEntriesByLinkData({
              send_join_part: true,
            });
            if (!disconnMtxRooms.length) {
              break;
            }

            const disconnIntent = bridge.getIntent();
            for (const room of disconnMtxRooms) {
              const mtxId = room.matrix?.getId();
              if (!mtxId) {
                continue;
              }
              const userName =
                event.getUser()?.getName() || "[Bridge error: Unknown user]";
              void disconnIntent.sendMessage(mtxId, {
                body: `${userName} has disconnected from the server.`,
                msgtype: "m.notice",
              });
            }
            break;
          }
          case Server.Event.Type.USERTEXTMESSAGE: {
            // Get linked mtx rooms
            const textMtxRooms = await getMatrixRooms(
              event.getMessage()?.getChannelsList()
            );

            // If a room is linked to all channels, send messages there.
            const sendAllRooms = await roomLinks.getEntriesByRemoteId("-1");
            sendAllRooms.forEach((room) =>
              room.matrix ? textMtxRooms.push(room.matrix) : undefined
            );

            if (!textMtxRooms.length) {
              break;
            }

            const userName = event.getUser()?.getName() || "err_unknown_user";
            const textIntent = bridge.getIntent(
              `@mumble_${userName}:${config.domain}`
            );
            for (const room of textMtxRooms) {
              void textIntent.sendMessage(room.getId(), {
                body: event.getMessage()?.getText(),
                format: "org.matrix.custom.html",
                formatted_body: event.getMessage()?.getText(),
                msgtype: "m.text",
              });
            }
            break;
          }
          default:
            break;
        }
        return;
      }
    };

    stream.on("data", (event: Server.Event) => void eventCallback(event));

    // stream.on error
    return;
  }

  setMatrixClient(client: MatrixClient): void {
    this.matrixClient = client;
    return;
  }

  // Matrix message -> Mumble
  sendMessage(
    event: WeakEvent,
    linkedChannels: RemoteRoom[],
    displayname?: string
  ): void {
    if (!this.client || !this.server || !this.matrixClient || !event.content) {
      return;
    }

    let messageContent =
      typeof event.content.body === "string" ? event.content.body : "";
    if (
      (event.content.msgtype === "m.image" ||
        event.content.msgtype === "m.file") &&
      typeof event.content.url === "string"
    ) {
      const url = this.matrixClient.mxcUrlToHttp(
        event.content.url,
        null,
        null,
        null,
        true
      );
      if (url) {
        messageContent = `<a href="${url}">${
          typeof event.content.body === "string" ? event.content.body : ""
        }</a>`;
      }
    }

    if (
      event.content.msgtype === "m.text" &&
      event.content.format === "org.matrix.custom.html" &&
      typeof event.content.formatted_body === "string"
    ) {
      messageContent = event.content.formatted_body;
    }

    // If displayname was not provided, fall back to username
    if (!displayname) {
      displayname = event.sender;
    }

    const message = new TextMessage();
    message.setServer(this.server);
    for (const channel of linkedChannels) {
      const channelId = Number(channel.getId());
      const channelWithId = new Channel().setId(channelId);

      // -1 === send to all channels. If nothing is added to message, it will send to all channels.
      if (channelId === -1) {
        // do nothing
      } else if (channel.get("recurse")) {
        message.addTrees(channelWithId);
      } else {
        message.addChannels(channelWithId);
      }
    }
    message.setText(`${displayname}: ${messageContent}`);

    this.client.textMessageSend(message, () => {
      return;
    });

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

  async queryChannel(channel: Channel): Promise<Channel | undefined> {
    return await new Promise((resolve) => {
      const id = channel.getId();
      if (!this.client || !id) {
        resolve();
        return;
      }

      this.client.channelGet(channel, (response: Channel | Error | null) => {
        if (response instanceof Channel) {
          resolve(response);
          return;
        } else if (response !== null) {
          console.error(response);
        }
        resolve();
        return;
      });
    });
  }
}
