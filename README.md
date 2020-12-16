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
    # Replace "http://localhost:port" with the address your homeserver will use to talk
    # with matrix-appservice-mumble. The port matrix-appservice-mumble uses can be set with -p.
    matrix-appservice-mumble -r -u "http://localhost:port"
    ```

    2. Copy `mumble-registration.yaml` to your homeserver install directory, e.g. `/etc/matrix-synapse/` 

    3. Edit `homeserver.yaml` and add the path to the just generated `mumble-registration.yaml`. 

    ```yaml
    # A list of application service config files to use
    #
    app_service_config_files:
     - /etc/matrix-synapse/mumble-registration.yaml
    ```

4. Create a new file named `mumble-config.yaml` on the server that `matrix-appservice-mumble` is installed on.

5. Copy the contents of [mumble-config.yaml.example](https://github.com/mymindstorm/matrix-appservice-mumble/blob/v0.2.0/mumble-config.yaml.example) into `mumble-config.yaml` and change the options as needed.

5. Start the bridge

```bash
$ matrix-appservice-mumble -c /path/to/mumble-config.yaml -f /path/to/mumble-registration.yaml`
```
### Troubleshooting

#### Matrix -> Murmr not working

- Can you curl `url` in `mumble-config.yaml` from the homeserver?
    - Check firewall configuration
    - Check if matrix-appservice-mumble is running
    - Check logs
    - Check `mumble-registration.yaml` on both sides (should be in working directory of matrix-appservice-mumble and on homeserver)
