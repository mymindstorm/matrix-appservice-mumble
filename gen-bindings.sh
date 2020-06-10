./node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./lib \
    --grpc_out=./lib \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./lib \
    ./lib/*.proto

protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=./lib \
    -I ./lib \
    ./lib/*.proto