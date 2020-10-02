import Murmur from'./Murmur';
import {Cli, Bridge, AppServiceRegistration, Request, BridgeContext, RoomBridgeStore, MatrixRoom, RemoteRoom} from 'matrix-appservice-bridge';
import nedb from 'nedb';
import yargs from 'yargs';
import { MurmurConfig, JoinPartType } from './types';

async function main() {
  // Persistent DB with Matrix room <-> Mumble channel links
  const roomLinkDb = new nedb({
    filename: "./room-links.db",
    autoload: true
   });
  const roomLinks = new RoomBridgeStore(roomLinkDb);
  
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
              // Process admin room commands
              if (!event.content.body) {
                return;
              }
              yargs.command('link', 'Link a room to a channel', (yargs) => {
                  yargs.option('matrix-room', {
                    description: "Matrix room ID",
                    type: "string",
                    group: "Matrix",
                    required: true
                  }).option('joinpart-type', {
                    description: "Configre Matrix user join / leave notifications.",
                    group: "Matrix",
                    choices: ["message"]
                  }).option('mumble-channel', {
                    description: "Link a Mumble channel by ID",
                    type: "string",
                    conflicts: ["root-channel", "all-channels"],
                    group: "Mumble"
                  }).option("root-channel", {
                    description: "Link root Mumble channel",
                    type: "boolean",
                    conflicts: ["mumble-channel", "all-channels"],
                    group: "Mumble"
                  }).options("all-channels", {
                    description: "Link all Mumble channels",
                    type: "boolean",
                    conflicts: ["mumble-channel", "root-channel"],
                    group: "Mumble"
                  })
                }, async (args) => {
                  // Parse arguments
                  let joinpartType: JoinPartType = JoinPartType.none;
                  if (typeof args["joinpart-type"] === "string") {
                    switch (args["joinpart-type"]) {
                      case "message":
                        joinpartType = JoinPartType.message;
                        break;
                    
                      default:
                        break;
                    }
                  }

                  let mtxRoomId: string;
                  if (typeof args['matrix-room'] === "string") {
                    mtxRoomId = args['matrix-room'];
                  } else {
                    intent.sendText(config.matrixRoom, "Invalid command. Type 'help' for valid options.");
                    return;
                  }

                  let mumbleChanId: number;
                  if (typeof args["mumble-channel"] === "string") {
                    // Try to get mumble channel ID
                    const mumbleChanIdResult = await murmur.getChannelId(args["mumble-channel"].trim());
                    if (!mumbleChanIdResult) {
                      intent.sendText(config.matrixRoom, "Could not find Mumble channel.");
                      return;
                    }
                    mumbleChanId = mumbleChanIdResult;
                  } else if (args["root-channel"]) {
                    mumbleChanId = 0;
                  } else if (args["all-channels"]) {
                    mumbleChanId = -1;
                  } else {
                    intent.sendText(config.matrixRoom, "Please specify a Mumble channel. Type 'help' for valid options.");
                    return;
                  }

                  // Try to join the Matrix room
                  try {
                    await intent.join(mtxRoomId);
                  } catch (err) {
                    intent.sendText(config.matrixRoom, "Could not join Matrix room.");
                    return;
                  }                  
                  
                  await roomLinks.linkRooms(new MatrixRoom(mtxRoomId), new RemoteRoom(String(mumbleChanId)), { send_join_part: joinpartType });
                  intent.sendText(config.matrixRoom, "Link successful!");
                }).command('unlink <type> [id]', 'Unlink a channel or room. Only one option will be accepted.', (yargs) => {
                  yargs.choices("type", ["matrix", "mumble", "mumble-root", "mumble-all-chans"]
                    ).positional("id", {
                      type: "string" 
                    });
                }, async (args) => {
                  switch (args.type) {
                    case "matrix":
                      if (typeof args.id !== "string") {
                        intent.sendText(config.matrixRoom, "Could not unlink: no room ID provided.");
                        return;
                      }
                      await roomLinks.removeEntriesByMatrixRoomId(args.id);
                      intent.sendText(config.matrixRoom, "Unlink successful!");
                      break;
                      
                    case "mumble":
                      if (typeof args.id !== "string") {
                        intent.sendText(config.matrixRoom, "Could not unlink: no channel ID provided.");
                        return;
                      }
                      await roomLinks.removeEntriesByRemoteRoomId(String(args.id));
                      intent.sendText(config.matrixRoom, "Unlink successful!");
                      break;

                    case "mumble-root":
                      await roomLinks.removeEntriesByRemoteRoomId(String(0));
                      intent.sendText(config.matrixRoom, "Unlink successful!");
                      break;

                    case "mumble-all-chans":
                      await roomLinks.removeEntriesByRemoteRoomId(String(-1));
                      intent.sendText(config.matrixRoom, "Unlink successful!");
                      break;

                    default:
                      break;
                  }
                }
              ).scriptName("")
              .wrap(null)
              .parse(event.content.body, {}, (err, argv, output) => {
                if (err) console.error(err);
                if (output) intent.sendText(config.matrixRoom, output);
              });
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
      bridge.getIntent().sendText(config.matrixRoom, "Bridge running. It may take a few minutes before commands are processed.");
      return;
    },
  }).run();
  return;
}

main();
