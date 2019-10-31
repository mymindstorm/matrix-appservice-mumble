import { Client, ClientDuplexStream } from "grpc";

declare class MurmurServer {
    running: boolean;
}

declare class MurmurConfig {
    domain: string;
    matrixRoom: string;
    mumble_grpc_endpoint: string;
    homeserverURL: string;
}

declare class MurmurClient extends Client {
    serverQuery({ }, callback: (err: Error | undefined, res: { servers: MurmurServer[] } | undefined) => void): void;
    textMessageSend(args: { server: MurmurServer, text: string }, callback: () => void): void;
    serverEvents(server: MurmurServer): NodeJS.ReadableStream;
}
