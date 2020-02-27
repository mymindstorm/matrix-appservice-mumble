import Murmur from'./Murmur';
// @ts-ignore
import {Cli, Bridge, AppServiceRegistration} from 'matrix-appservice-bridge';
import { MurmurConfig } from './types';

async function main() {
  new Cli({
    registrationPath: 'mumble-registration.yaml',
    generateRegistration(reg: any, callback: (reg: any) => void) {
      reg.setId(AppServiceRegistration.generateToken());
      reg.setHomeserverToken(AppServiceRegistration.generateToken());
      reg.setAppServiceToken(AppServiceRegistration.generateToken());
      reg.setSenderLocalpart('mumblebot');
      reg.addRegexPattern('users', '@mumble_.*', true);
      callback(reg);
    },
    bridgeConfig: {
      schema: __dirname + '/../lib/mumble-config-schema.yaml',
    },
    async run(port: number, config: MurmurConfig) {
      console.log('Connecting to Murmur...');
      const murmur = new Murmur(config.mumble_grpc_endpoint);
      await murmur.connectClient();
      if (!murmur.client) {
        console.log('Connection error.');
        process.exit(1);
        return;
      }
      console.log('Connetion to Murmur established!');

      const bridge = new Bridge({
        homeserverUrl: config.homeserverURL,
        domain: config.domain,
        registration: __dirname + '/../mumble-registration.yaml',
        controller: {
          onEvent: function(request: any, context: any) {
            const event = request.getData();
            if (event.type !== 'm.room.message' ||
                !event.content || event.room_id !== config.matrixRoom) {
              return;
            } else if (event.sender === `@mumblebot:${config.domain}`) {
              return;
            }

            murmur.sendMessage(event, config);
            return;
          },
        },
      });
      console.log('Matrix-side listening on port %s', port);
      await murmur.setupCallbacks(bridge, config);
      bridge.run(port, config);
      murmur.setMatrixClient(bridge.getClientFactory().getClientAs(null));
      return;
    },
  }).run();
  return;
}

main();
