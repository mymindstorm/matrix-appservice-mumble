interface MurmurConfig extends Record<string, string> {
    domain: string;
    matrixRoom: string;
    mumble_grpc_endpoint: string;
    homeserverURL: string;
}
