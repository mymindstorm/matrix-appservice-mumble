import Murmur from'./Murmur';
import {Cli, Bridge, AppServiceRegistration, Request, BridgeContext, RoomBridgeStore} from 'matrix-appservice-bridge';
import nedb from 'nedb';

async function main() {
  // Persistent DB with Matrix room <-> Mumble channel links
  const roomLinkDb = new nedb({
    filename: "./room-links.db"
   });
  const roomLinks = new RoomBridgeStore(roomLinkDb);

  // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/45345
  // @ts-ignore
  new Cli({
    registrationPath: 'mumble-registration.yaml',
    generateRegistration(reg, callback: (reg: any) => void) {
      reg.setId(AppServiceRegistration.generateToken());
      reg.setHomeserverToken(AppServiceRegistration.generateToken());
      reg.setAppServiceToken(AppServiceRegistration.generateToken());
      reg.setSenderLocalpart('mumblebot');
      reg.addRegexPattern('users', '@mumble_.*', true);
      callback(reg);
    },
    bridgeConfig: {
      schema: __dirname + '/mumble-config-schema.yaml',
    },
    async run(port: number, config: MurmurConfig) {
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
        // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/45345
        // @ts-ignore
        registration: 'mumble-registration.yaml',
        controller: {
          onEvent: async function (request: Request, _context: BridgeContext) {
            const event = request.getData();
            if (event.type !== 'm.room.message' ||
                !event.content) {
              return;
            } else if (event.sender === `@mumblebot:${config.domain}`) {
              return;
            }

            const intent = bridge.getIntent();
            if (event.room_id === config.matrixRoom && event.content.msgtype === "m.text") {
              // Process admin room command
              const splitCommand = event.content.body?.split(' ') || ["invalid command"];
              switch (splitCommand[0]) {
                case "link":
                  const mtxRoomId = splitCommand[1];
                  const mumbleChanName = splitCommand.slice(2).join(' ');

                  if (!mtxRoomId && !mumbleChanName) {
                    intent.sendText(config.matrixRoom, "Invalid command. Type 'help' for valid commands.");
                    break;
                  }

                  const mumbleChanId = await murmur.getChannelId(mumbleChanName);
                  if (!mumbleChanId) {
                    intent.sendText(config.matrixRoom, "Could not find Mumble channel.");
                    break;
                  }

                  const mtxRoom = await intent.roomState(mtxRoomId);
                  console.log(mtxRoom);
                  if (!mtxRoom) {
                    intent.sendText(config.matrixRoom, "Could not find Matrix room.");
                    break;
                  }
                  break;
                case "unlink":
                  break;
                case "help":
                  intent.sendText(config.matrixRoom, "TODO");
                  break;
                default:
                  intent.sendText(config.matrixRoom, "Invalid command. Type 'help' for valid commands.");
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

            return;
          },
        },
      });
      console.log('Matrix-side listening on port %s', port);
      await murmur.setupCallbacks(bridge, roomLinks, config);
      bridge.run(port, config);
      murmur.setMatrixClient(bridge.getClientFactory().getClientAs());
      return;
    },
  }).run();
  return;
}

main();
