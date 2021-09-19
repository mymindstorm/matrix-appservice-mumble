import Murmur from './Murmur';
import {
  AppServiceRegistration,
  Bridge,
  BridgeContext,
  Cli,
  CliOpts,
  MatrixRoom,
  RemoteRoom,
  Request,
  RoomBridgeStore,
  WeakEvent
} from 'matrix-appservice-bridge';
import nedb from 'nedb';
import helpText from './helpText';

async function asyncOnEvent(
  bridge: Bridge,
  config: MurmurConfig,
  roomLinks: RoomBridgeStore,
  murmur: Murmur,
  event: WeakEvent,
) {
  // FIXME: so many async problems here
  const intent = bridge.getIntent();
  if (event.room_id === config.matrixRoom && event.content.msgtype === "m.text") {
    // Process admin room commands
    // TODO: consider using a library to parse input
    const splitCommand = (event.content.body as string)?.split(' ') || ["invalid command"];
    switch (splitCommand[0]) {
      case "link":
        const mtxRoomId = splitCommand[1];
        let mumbleChanName = splitCommand.slice(2).join(' ');
        let sendJoinPart = false;

        if (mumbleChanName.substring(mumbleChanName.length - 4) === "true") {
          sendJoinPart = true;
          mumbleChanName = mumbleChanName.substring(0, mumbleChanName.length - 4);
        }
        mumbleChanName = mumbleChanName.trim();

        if (!mtxRoomId && !mumbleChanName) {
          intent.sendText(config.matrixRoom, "Invalid command. Type 'help' for valid commands.");
          break;
        }

        // try to join the room
        try {
          await intent.join(mtxRoomId);
        } catch (err) {
          intent.sendText(config.matrixRoom, "Could not join Matrix room.");
          break;
        }

        let mumbleChanId: number | undefined;
        if (mumbleChanName === "root_channel") {
          mumbleChanId = 0;
        } else {
          mumbleChanId = await murmur.getChannelId(mumbleChanName);
          if (!mumbleChanId) {
            intent.sendText(config.matrixRoom, "Could not find Mumble channel.");
            break;
          }
        }

        await roomLinks.linkRooms(new MatrixRoom(mtxRoomId), new RemoteRoom(String(mumbleChanId)), { send_join_part: sendJoinPart });
        intent.sendText(config.matrixRoom, "Link successful!");
        break;
      case "unlink":
        const delinkType = splitCommand[1];

        if (delinkType === "matrix") {
          const mtxRoomId = splitCommand[2];
          if (!mtxRoomId) {
            intent.sendText(config.matrixRoom, "Invalid command. Type 'help' for valid commands.");
            break;
          }

          await roomLinks.removeEntriesByMatrixRoomId(mtxRoomId);
          intent.sendText(config.matrixRoom, "Unlink successful!");
        } else if (delinkType === "mumble") {
          const mumbleChanName = splitCommand.slice(2).join(' ').trim();
          if (!mumbleChanName) {
            intent.sendText(config.matrixRoom, "Invalid command. Type 'help' for valid commands.");
            break;
          }

          let mumbleChanId: number | undefined;
          if (mumbleChanName === "root_channel") {
            mumbleChanId = 0;
          } else {
            mumbleChanId = await murmur.getChannelId(mumbleChanName);
            if (!mumbleChanId) {
              intent.sendText(config.matrixRoom, "Could not find Mumble channel.");
              break;
            }
          }

          await roomLinks.removeEntriesByRemoteRoomId(String(mumbleChanId));
          intent.sendText(config.matrixRoom, "Unlink successful!");
        } else {
          intent.sendText(config.matrixRoom, "Invalid command. Type 'help' for valid commands.");
        }
        break;
      case "help":
        intent.sendMessage(config.matrixRoom, {
          ...helpText,
          format: "org.matrix.custom.html",
          msgtype: "m.text"
        });
        break;
      default:
        break;
    }
  } else {
    const linkedRooms = await roomLinks.getLinkedRemoteRooms(event.room_id);

    if (!linkedRooms.length) {
      // If no linked rooms do not bridge message
      return;
    }

    // Send message to linked rooms
    // Get user display name
    let displayname;
    try {
      // Retrieve the display name
      const profile = await intent.getProfileInfo(event.sender, 'displayname');
      displayname = profile.displayname;
    } catch (e) {
      console.log('Exception fetching matrix profile of %s:', event.sender);
      console.log(e);
    }

    let linkedRoomIds: number[] = [];
    for (const mumbleChannel of linkedRooms) {
      linkedRoomIds.push(Number(mumbleChannel.getId()))
    }
    murmur.sendMessage(event, linkedRoomIds, displayname);
  }
}

async function main() {
  // Persistent DB with Matrix room <-> Mumble channel links
  const roomLinkDb = new nedb({
    filename: "./room-links.db",
    autoload: true
   });
  const roomLinks = new RoomBridgeStore(roomLinkDb);

  new Cli(new class implements CliOpts<MurmurConfig> {
    registrationPath = 'mumble-registration.yaml';

    generateRegistration(reg: AppServiceRegistration, cb: (finalReg: AppServiceRegistration) => void) {
      reg.setId(AppServiceRegistration.generateToken());
      reg.setHomeserverToken(AppServiceRegistration.generateToken());
      reg.setAppServiceToken(AppServiceRegistration.generateToken());
      reg.setSenderLocalpart('mumblebot');
      reg.addRegexPattern('users', '@mumble_.*', true);
      cb(reg);
    }

    bridgeConfig = {
      schema: __dirname + '/mumble-config-schema.yaml',
      defaults: {},
    };

    async asyncRun(port: number, config: MurmurConfig) {
      console.log('Connecting to Murmur...');
      const murmur = new Murmur(config.mumble_grpc_endpoint);
      await murmur.connectClient();
      if (!murmur.client) {
        console.log('Connection error.');
        process.exit(1);
      }
      console.log('Connetion to Murmur established!');

      const bridge = new Bridge({
        homeserverUrl: config.homeserverURL,
        domain: config.domain,
        registration: 'mumble-registration.yaml',
        controller: {


          onEvent(request: Request<WeakEvent>, _: BridgeContext | undefined): void {
            const event = request.getData();
            if (event.type !== 'm.room.message' || !event.content) {
              return;
            } else if (event.sender === `@mumblebot:${config.domain}`) {
              return;
            }

            // FIXME: returned promise is ignored
            asyncOnEvent(bridge, config, roomLinks, murmur, event);
          }
        },
      });
      console.log('Matrix-side listening on port %s', port);
      await murmur.setupCallbacks(bridge, roomLinks, config);
      // FIXME: returned promise is ignored
      bridge.run(port);
      murmur.setMatrixClient(bridge.getBot().getClient());
      // FIXME: returned promise is ignored
      bridge.getIntent().sendText(config.matrixRoom, "Bridge running");
    }

    run(port: number | null, config: MurmurConfig | null, _: AppServiceRegistration | null): void {
      if (config == null) {
        console.error("No config provided. Cannot start.");
        process.exit(1);
      }
      if (port == null) {
        port = 8080;
      }
      // FIXME: returned promise is ignored
      this.asyncRun(port, config)
    }
  }).run();
}

// FIXME: returned promise is ignored
main();
