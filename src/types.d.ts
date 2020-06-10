interface MurmurConfig {
    domain: string;
    matrixRoom: string;
    mumble_grpc_endpoint: string;
    homeserverURL: string;
    channels?: string[];
}

interface MessageEvent {
    age: number;
    content: MessageImageContent | MessageTextContent | MessageFileContent;
    event_id: string;
    origin_server_ts: number;
    room_id: string;
    sender: string;
    type: "m.room.message";
    unsigned: {
        age: number
    };
    user_id: string;
}

interface MessageImageContent {
    body: string;
    info: {
        h: number;
        mimetype: string;
        size: number;
        thumbnail_info: {
            h: number;
            mimetype: string;
            size: number;
            w: number;
        };
        thumbnail_url: string;
        w: number;
    };
    msgtype: "m.image";
    url: string;
}

interface MessageTextContent {
    body: string;
    msgtype: "m.text";
    format?: string;
    formatted_body?: string;
}

interface MessageFileContent {
    body: string;
    info: {
        mimetype: string;
        size: number;
    };
    msgtype: "m.file";
    url: string;
}
