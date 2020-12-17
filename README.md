# matrix-appservice-mumble

A Matrix to Mumble bridge. It sends messages between bridged rooms and tells you when people join / leave Murmur.

## Installation

### Compiling Murmur with gRPC support

Murmur is not compiled with gRPC support by default (as of 1.3.0). If you are using Fedora or CentOS, I have a [COPR](https://copr.fedorainfracloud.org/coprs/mymindstorm/mumble-grpc/) that you can use. Otherwise, you will need to compile Murmur yourself. I have some basic notes and directions on compiling Murmur [here](COMPILING_MURMUR.md).

### Setup bridge

1. Install

    Using npm:
    ```bash
    npm install --global matrix-appservice-mumble
    ```

    Manually:

    [Download the latest release](https://github.com/mymindstorm/matrix-appservice-mumble/releases) and build

    ```bash
    npm i
    ./build.sh
    ```
2. Configure your homeserver
    1. Use `matrix-appservice-mumble` to generate `mumble-registration.yaml`  
    Replace "http://localhost:port" with the address your homeserver will use to talk with matrix-appservice-mumble.  
    The port matrix-appservice-mumble uses can be set with -p. (Default is 8090)

    ```bash
    matrix-appservice-mumble -r -u "http://localhost:port"
    ```

    2. Copy `mumble-registration.yaml` to your homeserver install directory, e.g. `/etc/matrix-synapse/`

    3. Edit `homeserver.yaml` and add the path to the just generated `mumble-registration.yaml`.

    ```yaml
    # A list of application service config files to use
    app_service_config_files:
    - /etc/matrix-synapse/mumble-registration.yaml
    ```

4. Create a file `mumble-config.yaml`

    - Copy the contents of [mumble-config.yaml.example](https://github.com/mymindstorm/matrix-appservice-mumble/blob/master/mumble-config.yaml.example) into `mumble-config.yaml` and change the options as needed.

    - `matrixRoom` should be a private room
        
        1. Create a new room (should be invite-only, which is the default)

        2. Invite `@mumblebot:<your homeserver domain>` to the room. Riot will warn you that the user does not exist, click "Invite anyway"

        3. Copy the internal room id of the newly created room to `mumble-config.yaml`

5. `matrix-appservice-mumble -c /path/to/mumble-config.yaml -f /path/to/mumble-registration.yaml`

6. Link a room to a channel

    1. You should see a message from the bot in `matrixRoom` after it has successfully started up

    2. Send a link command to the admin room (`matrixRoom`). Type `help` to get a list of all commands.

    ```yaml
    # To link the topmost (root) Mumble channel
    link <internal Matrix room id> root_channel
    # To link a subchannel
    link <internal Matrix room id> <name of Mumble channel>
    # To link the root channel and send join/leave messages
    link <internal Matrix room id> root_channel true
    # To link a subchannel and send join/leave messages
    link <internal Matrix room id> <name of Mumble channel> true
    ```        
### Troubleshooting

#### Bridge Startup

- `Unhandled rejection Error: Failed to join room` on bridge startup
    - This means that the bot cannot join `matrixRoom`. Make sure that the bot has access (I.e. has the bot been invited) to the room. 
    - Check the homeserver logs (e.g. `/var/log/matrix-synapse/homeserver.log`) for more information

#### Matrix -> Murmr not working

- Can you curl `url` in `mumble-config.yaml` from the homeserver?
    - Check firewall configuration
    - Check if matrix-appservice-mumble is running
- Check logs
- Check `mumble-registration.yaml` on both sides (should be in working directory of matrix-appservice-mumble and on homeserver)
