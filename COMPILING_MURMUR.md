# Compiling Murmur With gRPC Support

## Compile gRPC and protoc

Murmur would always segfualt if I used the packaged versions of the gRPC libraries. Make sure you uninstall any packaged versions of gRPC and protobuf before starting.

1. [Compile gRPC](https://github.com/grpc/grpc/blob/master/BUILDING.md). 

Make sure to `git checkout` to a relase tag before building.

2. After running `make` and `sudo make install` on the main directory, `cd third_party/protobuf` and do another `sudo make install`.

You might need to add a refrence to the compiled libs in `/etc/ld.so.conf.d` if you didn't set your prefix. Check the output of `make install` for more info. 

pkg-config might not find the grpc `*.pc` files it needs when you compile. You may need to find these files yourself and then run `export PKG_CONFIG_PATH=[dir]`. For me this directory was `/usr/local/lib/pkgconfig`.

3. [Compile and install protobuf-c](https://github.com/protobuf-c/protobuf-c#building) to get the `protoc` command.

Make sure to `git checkout` to a relase tag before building.

## Compile Murmur

1. Follow the directions [here](https://github.com/mumble-voip/mumble/blob/master/INSTALL).

2. Add the flags `grpc` and `no-client`.

3. Wait for `make` to finish.

4. If successful, Murmur will be in a folder called `release`.
