export interface MurmurConfig {
  domain: string;
  matrixRoom: string;
  mumble_grpc_endpoint: string;
  homeserverURL: string;
}

export enum JoinPartType {
  none = 0,
  message,
}
