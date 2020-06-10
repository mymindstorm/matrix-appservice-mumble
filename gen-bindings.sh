#!/bin/sh

# Use to regenerate the files in ./lib after updating
# MurmurRPC.proto. Must have protoc installed

set -e

./node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./lib \
    --grpc_out=generate_package_definition:./lib \
    -I ./lib \
    ./lib/*.proto

protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=generate_package_definition:./lib \
    -I ./lib \
    ./lib/*.proto
