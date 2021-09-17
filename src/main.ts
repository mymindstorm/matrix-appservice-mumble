import Murmur from './Murmur';
import {
  AppServiceRegistration,
  Bridge,
  BridgeContext,
  Cli,
  CliOpts,
  Intent,
  MatrixRoom,
  RemoteRoom,
  Request,
  RoomBridgeStore,
  WeakEvent
} from 'matrix-appservice-bridge';
import nedb from 'nedb';
import helpText from './helpText';

async function runBridge(config: MurmurConfig, port: number) {
  // Persistent DB with Matrix room <-> Mumble channel links
  const roomLinkDb = new nedb({
    filename: "./room-links.db",
    autoload: true
  });
  const roomLinks = new RoomBridgeStore(roomLinkDb);

  console.log('Connecting to Murmur...');
  const murmur = new Murmur(config.mumble_grpc_endpoint);
  await murmur.connectClient();
  if (!murmur.client) {
    console.log('Connection error.');
    process.exit(1);
  }
  console.log('Connetion to Murmur established!');

  async function linkCommand(args: string[], intent: Intent) {
    const mtxRoomId = args[1];
    let mumbleChanName = args.slice(2).join(' ');
    let sendJoinPart = false;

    if (mumbleChanName.substring(mumbleChanName.length - 4) === "true") {
      sendJoinPart = true;
      mumbleChanName = mumbleChanName.substring(0, mumbleChanName.length - 4);
    }
    mumbleChanName = mumbleChanName.trim();

    if (!mtxRoomId && !mumbleChanName) {
      await intent.sendText(config.matrixRoom, "Invalid command. Type 'help' for valid commands.");
      return;
    }

    // try to join the room
    try {
      await intent.join(mtxRoomId);
    } catch (err) {
      await intent.sendText(config.matrixRoom, "Could not join Matrix room.");
      return;
    }

    let mumbleChanId: number | undefined;
    if (mumbleChanName === "root_channel") {
      mumbleChanId = 0;
    } else {
      mumbleChanId = await murmur.getChannelId(mumbleChanName);
      if (!mumbleChanId) {
        await intent.sendText(config.matrixRoom, "Could not find Mumble channel.");
        return;
      }
    }

    await roomLinks.linkRooms(new MatrixRoom(mtxRoomId), new RemoteRoom(String(mumbleChanId)), {send_join_part: sendJoinPart});
    await intent.sendText(config.matrixRoom, "Link successful!");
  }

  async function unlinkCommand(args: string[], intent: Intent) {
    const delinkType = args[1];

    if (delinkType === "matrix") {
      const mtxRoomId = args[2];
      if (!mtxRoomId) {
        await intent.sendText(config.matrixRoom, "Invalid command. Type 'help' for valid commands.");
        return;
      }

      await roomLinks.removeEntriesByMatrixRoomId(mtxRoomId);
      await intent.sendText(config.matrixRoom, "Unlink successful!");
    } else if (delinkType === "mumble") {
      const mumbleChanName = args.slice(2).join(' ').trim();
      if (!mumbleChanName) {
        await intent.sendText(config.matrixRoom, "Invalid command. Type 'help' for valid commands.");
        return;
      }

      let mumbleChanId: number | undefined;
      if (mumbleChanName === "root_channel") {
        mumbleChanId = 0;
      } else {
        mumbleChanId = await murmur.getChannelId(mumbleChanName);
        if (!mumbleChanId) {
          await intent.sendText(config.matrixRoom, "Could not find Mumble channel.");
          return;
        }
      }

      await roomLinks.removeEntriesByRemoteRoomId(String(mumbleChanId));
      await intent.sendText(config.matrixRoom, "Unlink successful!");
    } else {
      await intent.sendText(config.matrixRoom, "Invalid command. Type 'help' for valid commands.");
    }
  }

  async function sendMessageToMumble(event: WeakEvent, intent: Intent) {
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
    } catch (err) {
      console.error(`Exception fetching matrix profile of ${event.sender}:`, err);
    }

    let linkedRoomIds: number[] = [];
    for (const mumbleChannel of linkedRooms) {
      linkedRoomIds.push(Number(mumbleChannel.getId()))
    }
    murmur.sendMessage(event, linkedRoomIds, displayname);
  }

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

        if (event.room_id === config.matrixRoom && event.content.msgtype === "m.text") {
          // Process admin room commands
          // TODO: consider using a library to parse input
          const commandArgs = (event.content.body as string)?.split(' ') || ["invalid command"];
          switch (commandArgs[0]) {
            case "link":
              linkCommand(commandArgs, bridge.getIntent())
                .catch((err) => console.error("Error when linking rooms:", err));
              break;
            case "unlink":
              unlinkCommand(commandArgs, bridge.getIntent())
                .catch((err) => console.error("Error when unlinking rooms:", err));
              break;
            case "help":
              bridge.getIntent().sendMessage(config.matrixRoom, {
                ...helpText,
                format: "org.matrix.custom.html",
                msgtype: "m.text"
              }).catch((err) => console.error("Error when sending help:", err));
              break;
            default:
              break;
          }
        } else {
          sendMessageToMumble(event, bridge.getIntent())
        }
      }
    },
  });
  console.log('Matrix-side listening on port %s', port);
  await murmur.setupCallbacks(bridge, roomLinks, config);
  await bridge.initalise();
  await bridge.listen(port);
  murmur.setMatrixClient(bridge.getBot().getClient());
  await bridge.getIntent().sendText(config.matrixRoom, "Bridge running");

  return async () => {
    await bridge.close()
    murmur.client?.close()
  }
}

function main() {

  new Cli(new class implements CliOpts<MurmurConfig> {
    registrationPath = 'mumble-registration.yaml';

    generateRegistration(reg: AppServiceRegistration, cb: (finalReg: AppServiceRegistration) => void): void {
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

    run(port: number | null, config: MurmurConfig | null, _: AppServiceRegistration | null): void {
      if (config == null) {
        console.error("No config provided. Cannot start.");
        process.exit(1);
      }
      if (port == null) {
        port = 8080;
      }
      console.log('Bridge startup...');
      runBridge(config, port)
        .then((stopCallback) => {
          console.log("Bridge startup complete!");
          process.on("SIGTERM", async () => {
            console.log("Got SIGTERM");
            try {
              await stopCallback();
            } catch (err) {
              console.error("Failed to stop bridge", err);
              process.exit(1);
            }
            process.exit(0);
          });
        })
        .catch((err) => {
          console.error("Error when starting bridge:", err);
          process.exit(1);
        });
    }
  }).run();
}

main();
