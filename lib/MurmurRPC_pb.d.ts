// package: MurmurRPC
// file: MurmurRPC.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Void extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Void.AsObject;
    static toObject(includeInstance: boolean, msg: Void): Void.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Void, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Void;
    static deserializeBinaryFromReader(message: Void, reader: jspb.BinaryReader): Void;
}

export namespace Void {
    export type AsObject = {
    }
}

export class Version extends jspb.Message { 

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): number | undefined;
    setVersion(value: number): Version;


    hasRelease(): boolean;
    clearRelease(): void;
    getRelease(): string | undefined;
    setRelease(value: string): Version;


    hasOs(): boolean;
    clearOs(): void;
    getOs(): string | undefined;
    setOs(value: string): Version;


    hasOsVersion(): boolean;
    clearOsVersion(): void;
    getOsVersion(): string | undefined;
    setOsVersion(value: string): Version;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Version.AsObject;
    static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Version;
    static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
}

export namespace Version {
    export type AsObject = {
        version?: number,
        release?: string,
        os?: string,
        osVersion?: string,
    }
}

export class Uptime extends jspb.Message { 

    hasSecs(): boolean;
    clearSecs(): void;
    getSecs(): number | undefined;
    setSecs(value: number): Uptime;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Uptime.AsObject;
    static toObject(includeInstance: boolean, msg: Uptime): Uptime.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Uptime, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Uptime;
    static deserializeBinaryFromReader(message: Uptime, reader: jspb.BinaryReader): Uptime;
}

export namespace Uptime {
    export type AsObject = {
        secs?: number,
    }
}

export class Server extends jspb.Message { 

    hasId(): boolean;
    clearId(): void;
    getId(): number | undefined;
    setId(value: number): Server;


    hasRunning(): boolean;
    clearRunning(): void;
    getRunning(): boolean | undefined;
    setRunning(value: boolean): Server;


    hasUptime(): boolean;
    clearUptime(): void;
    getUptime(): Uptime | undefined;
    setUptime(value?: Uptime): Server;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Server.AsObject;
    static toObject(includeInstance: boolean, msg: Server): Server.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Server, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Server;
    static deserializeBinaryFromReader(message: Server, reader: jspb.BinaryReader): Server;
}

export namespace Server {
    export type AsObject = {
        id?: number,
        running?: boolean,
        uptime?: Uptime.AsObject,
    }


    export class Event extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): Event;


        hasType(): boolean;
        clearType(): void;
        getType(): Server.Event.Type | undefined;
        setType(value: Server.Event.Type): Event;


        hasUser(): boolean;
        clearUser(): void;
        getUser(): User | undefined;
        setUser(value?: User): Event;


        hasMessage(): boolean;
        clearMessage(): void;
        getMessage(): TextMessage | undefined;
        setMessage(value?: TextMessage): Event;


        hasChannel(): boolean;
        clearChannel(): void;
        getChannel(): Channel | undefined;
        setChannel(value?: Channel): Event;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Event.AsObject;
        static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Event;
        static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
    }

    export namespace Event {
        export type AsObject = {
            server?: Server.AsObject,
            type?: Server.Event.Type,
            user?: User.AsObject,
            message?: TextMessage.AsObject,
            channel?: Channel.AsObject,
        }

        export enum Type {
    USERCONNECTED = 0,
    USERDISCONNECTED = 1,
    USERSTATECHANGED = 2,
    USERTEXTMESSAGE = 3,
    CHANNELCREATED = 4,
    CHANNELREMOVED = 5,
    CHANNELSTATECHANGED = 6,
        }

    }

    export class Query extends jspb.Message { 

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Query.AsObject;
        static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Query;
        static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
    }

    export namespace Query {
        export type AsObject = {
        }
    }

    export class List extends jspb.Message { 
        clearServersList(): void;
        getServersList(): Array<Server>;
        setServersList(value: Array<Server>): List;
        addServers(value?: Server, index?: number): Server;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): List.AsObject;
        static toObject(includeInstance: boolean, msg: List): List.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): List;
        static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
        export type AsObject = {
            serversList: Array<Server.AsObject>,
        }
    }

}

export class Event extends jspb.Message { 

    hasServer(): boolean;
    clearServer(): void;
    getServer(): Server | undefined;
    setServer(value?: Server): Event;


    hasType(): boolean;
    clearType(): void;
    getType(): Event.Type | undefined;
    setType(value: Event.Type): Event;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
    export type AsObject = {
        server?: Server.AsObject,
        type?: Event.Type,
    }

    export enum Type {
    SERVERSTOPPED = 0,
    SERVERSTARTED = 1,
    }

}

export class ContextAction extends jspb.Message { 

    hasServer(): boolean;
    clearServer(): void;
    getServer(): Server | undefined;
    setServer(value?: Server): ContextAction;


    hasContext(): boolean;
    clearContext(): void;
    getContext(): number | undefined;
    setContext(value: number): ContextAction;


    hasAction(): boolean;
    clearAction(): void;
    getAction(): string | undefined;
    setAction(value: string): ContextAction;


    hasText(): boolean;
    clearText(): void;
    getText(): string | undefined;
    setText(value: string): ContextAction;


    hasActor(): boolean;
    clearActor(): void;
    getActor(): User | undefined;
    setActor(value?: User): ContextAction;


    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): ContextAction;


    hasChannel(): boolean;
    clearChannel(): void;
    getChannel(): Channel | undefined;
    setChannel(value?: Channel): ContextAction;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContextAction.AsObject;
    static toObject(includeInstance: boolean, msg: ContextAction): ContextAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContextAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContextAction;
    static deserializeBinaryFromReader(message: ContextAction, reader: jspb.BinaryReader): ContextAction;
}

export namespace ContextAction {
    export type AsObject = {
        server?: Server.AsObject,
        context?: number,
        action?: string,
        text?: string,
        actor?: User.AsObject,
        user?: User.AsObject,
        channel?: Channel.AsObject,
    }

    export enum Context {
    SERVER = 1,
    CHANNEL = 2,
    USER = 4,
    }

}

export class TextMessage extends jspb.Message { 

    hasServer(): boolean;
    clearServer(): void;
    getServer(): Server | undefined;
    setServer(value?: Server): TextMessage;


    hasActor(): boolean;
    clearActor(): void;
    getActor(): User | undefined;
    setActor(value?: User): TextMessage;

    clearUsersList(): void;
    getUsersList(): Array<User>;
    setUsersList(value: Array<User>): TextMessage;
    addUsers(value?: User, index?: number): User;

    clearChannelsList(): void;
    getChannelsList(): Array<Channel>;
    setChannelsList(value: Array<Channel>): TextMessage;
    addChannels(value?: Channel, index?: number): Channel;

    clearTreesList(): void;
    getTreesList(): Array<Channel>;
    setTreesList(value: Array<Channel>): TextMessage;
    addTrees(value?: Channel, index?: number): Channel;


    hasText(): boolean;
    clearText(): void;
    getText(): string | undefined;
    setText(value: string): TextMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextMessage.AsObject;
    static toObject(includeInstance: boolean, msg: TextMessage): TextMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextMessage;
    static deserializeBinaryFromReader(message: TextMessage, reader: jspb.BinaryReader): TextMessage;
}

export namespace TextMessage {
    export type AsObject = {
        server?: Server.AsObject,
        actor?: User.AsObject,
        usersList: Array<User.AsObject>,
        channelsList: Array<Channel.AsObject>,
        treesList: Array<Channel.AsObject>,
        text?: string,
    }


    export class Filter extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): Filter;


        hasAction(): boolean;
        clearAction(): void;
        getAction(): TextMessage.Filter.Action | undefined;
        setAction(value: TextMessage.Filter.Action): Filter;


        hasMessage(): boolean;
        clearMessage(): void;
        getMessage(): TextMessage | undefined;
        setMessage(value?: TextMessage): Filter;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Filter.AsObject;
        static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Filter;
        static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
    }

    export namespace Filter {
        export type AsObject = {
            server?: Server.AsObject,
            action?: TextMessage.Filter.Action,
            message?: TextMessage.AsObject,
        }

        export enum Action {
    ACCEPT = 0,
    REJECT = 1,
    DROP = 2,
        }

    }

}

export class Log extends jspb.Message { 

    hasServer(): boolean;
    clearServer(): void;
    getServer(): Server | undefined;
    setServer(value?: Server): Log;


    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): number | undefined;
    setTimestamp(value: number): Log;


    hasText(): boolean;
    clearText(): void;
    getText(): string | undefined;
    setText(value: string): Log;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Log.AsObject;
    static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Log;
    static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
}

export namespace Log {
    export type AsObject = {
        server?: Server.AsObject,
        timestamp?: number,
        text?: string,
    }


    export class Query extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): Query;


        hasMin(): boolean;
        clearMin(): void;
        getMin(): number | undefined;
        setMin(value: number): Query;


        hasMax(): boolean;
        clearMax(): void;
        getMax(): number | undefined;
        setMax(value: number): Query;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Query.AsObject;
        static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Query;
        static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
    }

    export namespace Query {
        export type AsObject = {
            server?: Server.AsObject,
            min?: number,
            max?: number,
        }
    }

    export class List extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): List;


        hasTotal(): boolean;
        clearTotal(): void;
        getTotal(): number | undefined;
        setTotal(value: number): List;


        hasMin(): boolean;
        clearMin(): void;
        getMin(): number | undefined;
        setMin(value: number): List;


        hasMax(): boolean;
        clearMax(): void;
        getMax(): number | undefined;
        setMax(value: number): List;

        clearEntriesList(): void;
        getEntriesList(): Array<Log>;
        setEntriesList(value: Array<Log>): List;
        addEntries(value?: Log, index?: number): Log;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): List.AsObject;
        static toObject(includeInstance: boolean, msg: List): List.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): List;
        static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
        export type AsObject = {
            server?: Server.AsObject,
            total?: number,
            min?: number,
            max?: number,
            entriesList: Array<Log.AsObject>,
        }
    }

}

export class Config extends jspb.Message { 

    hasServer(): boolean;
    clearServer(): void;
    getServer(): Server | undefined;
    setServer(value?: Server): Config;


    getFieldsMap(): jspb.Map<string, string>;
    clearFieldsMap(): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
}

export namespace Config {
    export type AsObject = {
        server?: Server.AsObject,

        fieldsMap: Array<[string, string]>,
    }


    export class Field extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): Field;


        hasKey(): boolean;
        clearKey(): void;
        getKey(): string | undefined;
        setKey(value: string): Field;


        hasValue(): boolean;
        clearValue(): void;
        getValue(): string | undefined;
        setValue(value: string): Field;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Field.AsObject;
        static toObject(includeInstance: boolean, msg: Field): Field.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Field, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Field;
        static deserializeBinaryFromReader(message: Field, reader: jspb.BinaryReader): Field;
    }

    export namespace Field {
        export type AsObject = {
            server?: Server.AsObject,
            key?: string,
            value?: string,
        }
    }

}

export class Channel extends jspb.Message { 

    hasServer(): boolean;
    clearServer(): void;
    getServer(): Server | undefined;
    setServer(value?: Server): Channel;


    hasId(): boolean;
    clearId(): void;
    getId(): number | undefined;
    setId(value: number): Channel;


    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): Channel;


    hasParent(): boolean;
    clearParent(): void;
    getParent(): Channel | undefined;
    setParent(value?: Channel): Channel;

    clearLinksList(): void;
    getLinksList(): Array<Channel>;
    setLinksList(value: Array<Channel>): Channel;
    addLinks(value?: Channel, index?: number): Channel;


    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): string | undefined;
    setDescription(value: string): Channel;


    hasTemporary(): boolean;
    clearTemporary(): void;
    getTemporary(): boolean | undefined;
    setTemporary(value: boolean): Channel;


    hasPosition(): boolean;
    clearPosition(): void;
    getPosition(): number | undefined;
    setPosition(value: number): Channel;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Channel.AsObject;
    static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Channel;
    static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
}

export namespace Channel {
    export type AsObject = {
        server?: Server.AsObject,
        id?: number,
        name?: string,
        parent?: Channel.AsObject,
        linksList: Array<Channel.AsObject>,
        description?: string,
        temporary?: boolean,
        position?: number,
    }


    export class Query extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): Query;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Query.AsObject;
        static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Query;
        static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
    }

    export namespace Query {
        export type AsObject = {
            server?: Server.AsObject,
        }
    }

    export class List extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): List;

        clearChannelsList(): void;
        getChannelsList(): Array<Channel>;
        setChannelsList(value: Array<Channel>): List;
        addChannels(value?: Channel, index?: number): Channel;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): List.AsObject;
        static toObject(includeInstance: boolean, msg: List): List.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): List;
        static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
        export type AsObject = {
            server?: Server.AsObject,
            channelsList: Array<Channel.AsObject>,
        }
    }

}

export class User extends jspb.Message { 

    hasServer(): boolean;
    clearServer(): void;
    getServer(): Server | undefined;
    setServer(value?: Server): User;


    hasSession(): boolean;
    clearSession(): void;
    getSession(): number | undefined;
    setSession(value: number): User;


    hasId(): boolean;
    clearId(): void;
    getId(): number | undefined;
    setId(value: number): User;


    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): User;


    hasMute(): boolean;
    clearMute(): void;
    getMute(): boolean | undefined;
    setMute(value: boolean): User;


    hasDeaf(): boolean;
    clearDeaf(): void;
    getDeaf(): boolean | undefined;
    setDeaf(value: boolean): User;


    hasSuppress(): boolean;
    clearSuppress(): void;
    getSuppress(): boolean | undefined;
    setSuppress(value: boolean): User;


    hasPrioritySpeaker(): boolean;
    clearPrioritySpeaker(): void;
    getPrioritySpeaker(): boolean | undefined;
    setPrioritySpeaker(value: boolean): User;


    hasSelfMute(): boolean;
    clearSelfMute(): void;
    getSelfMute(): boolean | undefined;
    setSelfMute(value: boolean): User;


    hasSelfDeaf(): boolean;
    clearSelfDeaf(): void;
    getSelfDeaf(): boolean | undefined;
    setSelfDeaf(value: boolean): User;


    hasRecording(): boolean;
    clearRecording(): void;
    getRecording(): boolean | undefined;
    setRecording(value: boolean): User;


    hasChannel(): boolean;
    clearChannel(): void;
    getChannel(): Channel | undefined;
    setChannel(value?: Channel): User;


    hasOnlineSecs(): boolean;
    clearOnlineSecs(): void;
    getOnlineSecs(): number | undefined;
    setOnlineSecs(value: number): User;


    hasIdleSecs(): boolean;
    clearIdleSecs(): void;
    getIdleSecs(): number | undefined;
    setIdleSecs(value: number): User;


    hasBytesPerSec(): boolean;
    clearBytesPerSec(): void;
    getBytesPerSec(): number | undefined;
    setBytesPerSec(value: number): User;


    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): Version | undefined;
    setVersion(value?: Version): User;


    hasPluginContext(): boolean;
    clearPluginContext(): void;
    getPluginContext(): Uint8Array | string;
    getPluginContext_asU8(): Uint8Array;
    getPluginContext_asB64(): string;
    setPluginContext(value: Uint8Array | string): User;


    hasPluginIdentity(): boolean;
    clearPluginIdentity(): void;
    getPluginIdentity(): string | undefined;
    setPluginIdentity(value: string): User;


    hasComment(): boolean;
    clearComment(): void;
    getComment(): string | undefined;
    setComment(value: string): User;


    hasTexture(): boolean;
    clearTexture(): void;
    getTexture(): Uint8Array | string;
    getTexture_asU8(): Uint8Array;
    getTexture_asB64(): string;
    setTexture(value: Uint8Array | string): User;


    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): Uint8Array | string;
    getAddress_asU8(): Uint8Array;
    getAddress_asB64(): string;
    setAddress(value: Uint8Array | string): User;


    hasTcpOnly(): boolean;
    clearTcpOnly(): void;
    getTcpOnly(): boolean | undefined;
    setTcpOnly(value: boolean): User;


    hasUdpPingMsecs(): boolean;
    clearUdpPingMsecs(): void;
    getUdpPingMsecs(): number | undefined;
    setUdpPingMsecs(value: number): User;


    hasTcpPingMsecs(): boolean;
    clearTcpPingMsecs(): void;
    getTcpPingMsecs(): number | undefined;
    setTcpPingMsecs(value: number): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        server?: Server.AsObject,
        session?: number,
        id?: number,
        name?: string,
        mute?: boolean,
        deaf?: boolean,
        suppress?: boolean,
        prioritySpeaker?: boolean,
        selfMute?: boolean,
        selfDeaf?: boolean,
        recording?: boolean,
        channel?: Channel.AsObject,
        onlineSecs?: number,
        idleSecs?: number,
        bytesPerSec?: number,
        version?: Version.AsObject,
        pluginContext: Uint8Array | string,
        pluginIdentity?: string,
        comment?: string,
        texture: Uint8Array | string,
        address: Uint8Array | string,
        tcpOnly?: boolean,
        udpPingMsecs?: number,
        tcpPingMsecs?: number,
    }


    export class Query extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): Query;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Query.AsObject;
        static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Query;
        static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
    }

    export namespace Query {
        export type AsObject = {
            server?: Server.AsObject,
        }
    }

    export class List extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): List;

        clearUsersList(): void;
        getUsersList(): Array<User>;
        setUsersList(value: Array<User>): List;
        addUsers(value?: User, index?: number): User;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): List.AsObject;
        static toObject(includeInstance: boolean, msg: List): List.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): List;
        static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
        export type AsObject = {
            server?: Server.AsObject,
            usersList: Array<User.AsObject>,
        }
    }

    export class Kick extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): Kick;


        hasUser(): boolean;
        clearUser(): void;
        getUser(): User | undefined;
        setUser(value?: User): Kick;


        hasActor(): boolean;
        clearActor(): void;
        getActor(): User | undefined;
        setActor(value?: User): Kick;


        hasReason(): boolean;
        clearReason(): void;
        getReason(): string | undefined;
        setReason(value: string): Kick;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Kick.AsObject;
        static toObject(includeInstance: boolean, msg: Kick): Kick.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Kick, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Kick;
        static deserializeBinaryFromReader(message: Kick, reader: jspb.BinaryReader): Kick;
    }

    export namespace Kick {
        export type AsObject = {
            server?: Server.AsObject,
            user?: User.AsObject,
            actor?: User.AsObject,
            reason?: string,
        }
    }

}

export class Tree extends jspb.Message { 

    hasServer(): boolean;
    clearServer(): void;
    getServer(): Server | undefined;
    setServer(value?: Server): Tree;


    hasChannel(): boolean;
    clearChannel(): void;
    getChannel(): Channel | undefined;
    setChannel(value?: Channel): Tree;

    clearChildrenList(): void;
    getChildrenList(): Array<Tree>;
    setChildrenList(value: Array<Tree>): Tree;
    addChildren(value?: Tree, index?: number): Tree;

    clearUsersList(): void;
    getUsersList(): Array<User>;
    setUsersList(value: Array<User>): Tree;
    addUsers(value?: User, index?: number): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Tree.AsObject;
    static toObject(includeInstance: boolean, msg: Tree): Tree.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Tree, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Tree;
    static deserializeBinaryFromReader(message: Tree, reader: jspb.BinaryReader): Tree;
}

export namespace Tree {
    export type AsObject = {
        server?: Server.AsObject,
        channel?: Channel.AsObject,
        childrenList: Array<Tree.AsObject>,
        usersList: Array<User.AsObject>,
    }


    export class Query extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): Query;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Query.AsObject;
        static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Query;
        static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
    }

    export namespace Query {
        export type AsObject = {
            server?: Server.AsObject,
        }
    }

}

export class Ban extends jspb.Message { 

    hasServer(): boolean;
    clearServer(): void;
    getServer(): Server | undefined;
    setServer(value?: Server): Ban;


    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): Uint8Array | string;
    getAddress_asU8(): Uint8Array;
    getAddress_asB64(): string;
    setAddress(value: Uint8Array | string): Ban;


    hasBits(): boolean;
    clearBits(): void;
    getBits(): number | undefined;
    setBits(value: number): Ban;


    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): Ban;


    hasHash(): boolean;
    clearHash(): void;
    getHash(): string | undefined;
    setHash(value: string): Ban;


    hasReason(): boolean;
    clearReason(): void;
    getReason(): string | undefined;
    setReason(value: string): Ban;


    hasStart(): boolean;
    clearStart(): void;
    getStart(): number | undefined;
    setStart(value: number): Ban;


    hasDurationSecs(): boolean;
    clearDurationSecs(): void;
    getDurationSecs(): number | undefined;
    setDurationSecs(value: number): Ban;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ban.AsObject;
    static toObject(includeInstance: boolean, msg: Ban): Ban.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ban, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ban;
    static deserializeBinaryFromReader(message: Ban, reader: jspb.BinaryReader): Ban;
}

export namespace Ban {
    export type AsObject = {
        server?: Server.AsObject,
        address: Uint8Array | string,
        bits?: number,
        name?: string,
        hash?: string,
        reason?: string,
        start?: number,
        durationSecs?: number,
    }


    export class Query extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): Query;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Query.AsObject;
        static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Query;
        static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
    }

    export namespace Query {
        export type AsObject = {
            server?: Server.AsObject,
        }
    }

    export class List extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): List;

        clearBansList(): void;
        getBansList(): Array<Ban>;
        setBansList(value: Array<Ban>): List;
        addBans(value?: Ban, index?: number): Ban;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): List.AsObject;
        static toObject(includeInstance: boolean, msg: List): List.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): List;
        static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
        export type AsObject = {
            server?: Server.AsObject,
            bansList: Array<Ban.AsObject>,
        }
    }

}

export class ACL extends jspb.Message { 

    hasApplyHere(): boolean;
    clearApplyHere(): void;
    getApplyHere(): boolean | undefined;
    setApplyHere(value: boolean): ACL;


    hasApplySubs(): boolean;
    clearApplySubs(): void;
    getApplySubs(): boolean | undefined;
    setApplySubs(value: boolean): ACL;


    hasInherited(): boolean;
    clearInherited(): void;
    getInherited(): boolean | undefined;
    setInherited(value: boolean): ACL;


    hasUser(): boolean;
    clearUser(): void;
    getUser(): DatabaseUser | undefined;
    setUser(value?: DatabaseUser): ACL;


    hasGroup(): boolean;
    clearGroup(): void;
    getGroup(): ACL.Group | undefined;
    setGroup(value?: ACL.Group): ACL;


    hasAllow(): boolean;
    clearAllow(): void;
    getAllow(): number | undefined;
    setAllow(value: number): ACL;


    hasDeny(): boolean;
    clearDeny(): void;
    getDeny(): number | undefined;
    setDeny(value: number): ACL;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ACL.AsObject;
    static toObject(includeInstance: boolean, msg: ACL): ACL.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ACL, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ACL;
    static deserializeBinaryFromReader(message: ACL, reader: jspb.BinaryReader): ACL;
}

export namespace ACL {
    export type AsObject = {
        applyHere?: boolean,
        applySubs?: boolean,
        inherited?: boolean,
        user?: DatabaseUser.AsObject,
        group?: ACL.Group.AsObject,
        allow?: number,
        deny?: number,
    }


    export class Group extends jspb.Message { 

        hasName(): boolean;
        clearName(): void;
        getName(): string | undefined;
        setName(value: string): Group;


        hasInherited(): boolean;
        clearInherited(): void;
        getInherited(): boolean | undefined;
        setInherited(value: boolean): Group;


        hasInherit(): boolean;
        clearInherit(): void;
        getInherit(): boolean | undefined;
        setInherit(value: boolean): Group;


        hasInheritable(): boolean;
        clearInheritable(): void;
        getInheritable(): boolean | undefined;
        setInheritable(value: boolean): Group;

        clearUsersAddList(): void;
        getUsersAddList(): Array<DatabaseUser>;
        setUsersAddList(value: Array<DatabaseUser>): Group;
        addUsersAdd(value?: DatabaseUser, index?: number): DatabaseUser;

        clearUsersRemoveList(): void;
        getUsersRemoveList(): Array<DatabaseUser>;
        setUsersRemoveList(value: Array<DatabaseUser>): Group;
        addUsersRemove(value?: DatabaseUser, index?: number): DatabaseUser;

        clearUsersList(): void;
        getUsersList(): Array<DatabaseUser>;
        setUsersList(value: Array<DatabaseUser>): Group;
        addUsers(value?: DatabaseUser, index?: number): DatabaseUser;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Group.AsObject;
        static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Group;
        static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
    }

    export namespace Group {
        export type AsObject = {
            name?: string,
            inherited?: boolean,
            inherit?: boolean,
            inheritable?: boolean,
            usersAddList: Array<DatabaseUser.AsObject>,
            usersRemoveList: Array<DatabaseUser.AsObject>,
            usersList: Array<DatabaseUser.AsObject>,
        }
    }

    export class Query extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): Query;


        hasUser(): boolean;
        clearUser(): void;
        getUser(): User | undefined;
        setUser(value?: User): Query;


        hasChannel(): boolean;
        clearChannel(): void;
        getChannel(): Channel | undefined;
        setChannel(value?: Channel): Query;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Query.AsObject;
        static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Query;
        static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
    }

    export namespace Query {
        export type AsObject = {
            server?: Server.AsObject,
            user?: User.AsObject,
            channel?: Channel.AsObject,
        }
    }

    export class List extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): List;


        hasChannel(): boolean;
        clearChannel(): void;
        getChannel(): Channel | undefined;
        setChannel(value?: Channel): List;

        clearAclsList(): void;
        getAclsList(): Array<ACL>;
        setAclsList(value: Array<ACL>): List;
        addAcls(value?: ACL, index?: number): ACL;

        clearGroupsList(): void;
        getGroupsList(): Array<ACL.Group>;
        setGroupsList(value: Array<ACL.Group>): List;
        addGroups(value?: ACL.Group, index?: number): ACL.Group;


        hasInherit(): boolean;
        clearInherit(): void;
        getInherit(): boolean | undefined;
        setInherit(value: boolean): List;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): List.AsObject;
        static toObject(includeInstance: boolean, msg: List): List.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): List;
        static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
        export type AsObject = {
            server?: Server.AsObject,
            channel?: Channel.AsObject,
            aclsList: Array<ACL.AsObject>,
            groupsList: Array<ACL.Group.AsObject>,
            inherit?: boolean,
        }
    }

    export class TemporaryGroup extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): TemporaryGroup;


        hasChannel(): boolean;
        clearChannel(): void;
        getChannel(): Channel | undefined;
        setChannel(value?: Channel): TemporaryGroup;


        hasUser(): boolean;
        clearUser(): void;
        getUser(): User | undefined;
        setUser(value?: User): TemporaryGroup;


        hasName(): boolean;
        clearName(): void;
        getName(): string | undefined;
        setName(value: string): TemporaryGroup;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TemporaryGroup.AsObject;
        static toObject(includeInstance: boolean, msg: TemporaryGroup): TemporaryGroup.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TemporaryGroup, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TemporaryGroup;
        static deserializeBinaryFromReader(message: TemporaryGroup, reader: jspb.BinaryReader): TemporaryGroup;
    }

    export namespace TemporaryGroup {
        export type AsObject = {
            server?: Server.AsObject,
            channel?: Channel.AsObject,
            user?: User.AsObject,
            name?: string,
        }
    }


    export enum Permission {
    NONE = 0,
    WRITE = 1,
    TRAVERSE = 2,
    ENTER = 4,
    SPEAK = 8,
    WHISPER = 256,
    MUTEDEAFEN = 16,
    MOVE = 32,
    MAKECHANNEL = 64,
    MAKETEMPORARYCHANNEL = 1024,
    LINKCHANNEL = 128,
    TEXTMESSAGE = 512,
    KICK = 65536,
    BAN = 131072,
    REGISTER = 262144,
    REGISTERSELF = 524288,
    }

}

export class Authenticator extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Authenticator.AsObject;
    static toObject(includeInstance: boolean, msg: Authenticator): Authenticator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Authenticator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Authenticator;
    static deserializeBinaryFromReader(message: Authenticator, reader: jspb.BinaryReader): Authenticator;
}

export namespace Authenticator {
    export type AsObject = {
    }


    export class Request extends jspb.Message { 

        hasAuthenticate(): boolean;
        clearAuthenticate(): void;
        getAuthenticate(): Authenticator.Request.Authenticate | undefined;
        setAuthenticate(value?: Authenticator.Request.Authenticate): Request;


        hasFind(): boolean;
        clearFind(): void;
        getFind(): Authenticator.Request.Find | undefined;
        setFind(value?: Authenticator.Request.Find): Request;


        hasQuery(): boolean;
        clearQuery(): void;
        getQuery(): Authenticator.Request.Query | undefined;
        setQuery(value?: Authenticator.Request.Query): Request;


        hasRegister(): boolean;
        clearRegister(): void;
        getRegister(): Authenticator.Request.Register | undefined;
        setRegister(value?: Authenticator.Request.Register): Request;


        hasDeregister(): boolean;
        clearDeregister(): void;
        getDeregister(): Authenticator.Request.Deregister | undefined;
        setDeregister(value?: Authenticator.Request.Deregister): Request;


        hasUpdate(): boolean;
        clearUpdate(): void;
        getUpdate(): Authenticator.Request.Update | undefined;
        setUpdate(value?: Authenticator.Request.Update): Request;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Request.AsObject;
        static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Request;
        static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
        export type AsObject = {
            authenticate?: Authenticator.Request.Authenticate.AsObject,
            find?: Authenticator.Request.Find.AsObject,
            query?: Authenticator.Request.Query.AsObject,
            register?: Authenticator.Request.Register.AsObject,
            deregister?: Authenticator.Request.Deregister.AsObject,
            update?: Authenticator.Request.Update.AsObject,
        }


        export class Authenticate extends jspb.Message { 

            hasName(): boolean;
            clearName(): void;
            getName(): string | undefined;
            setName(value: string): Authenticate;


            hasPassword(): boolean;
            clearPassword(): void;
            getPassword(): string | undefined;
            setPassword(value: string): Authenticate;

            clearCertificatesList(): void;
            getCertificatesList(): Array<Uint8Array | string>;
            getCertificatesList_asU8(): Array<Uint8Array>;
            getCertificatesList_asB64(): Array<string>;
            setCertificatesList(value: Array<Uint8Array | string>): Authenticate;
            addCertificates(value: Uint8Array | string, index?: number): Uint8Array | string;


            hasCertificateHash(): boolean;
            clearCertificateHash(): void;
            getCertificateHash(): string | undefined;
            setCertificateHash(value: string): Authenticate;


            hasStrongCertificate(): boolean;
            clearStrongCertificate(): void;
            getStrongCertificate(): boolean | undefined;
            setStrongCertificate(value: boolean): Authenticate;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Authenticate.AsObject;
            static toObject(includeInstance: boolean, msg: Authenticate): Authenticate.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Authenticate, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Authenticate;
            static deserializeBinaryFromReader(message: Authenticate, reader: jspb.BinaryReader): Authenticate;
        }

        export namespace Authenticate {
            export type AsObject = {
                name?: string,
                password?: string,
                certificatesList: Array<Uint8Array | string>,
                certificateHash?: string,
                strongCertificate?: boolean,
            }
        }

        export class Find extends jspb.Message { 

            hasId(): boolean;
            clearId(): void;
            getId(): number | undefined;
            setId(value: number): Find;


            hasName(): boolean;
            clearName(): void;
            getName(): string | undefined;
            setName(value: string): Find;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Find.AsObject;
            static toObject(includeInstance: boolean, msg: Find): Find.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Find, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Find;
            static deserializeBinaryFromReader(message: Find, reader: jspb.BinaryReader): Find;
        }

        export namespace Find {
            export type AsObject = {
                id?: number,
                name?: string,
            }
        }

        export class Query extends jspb.Message { 

            hasFilter(): boolean;
            clearFilter(): void;
            getFilter(): string | undefined;
            setFilter(value: string): Query;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Query.AsObject;
            static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Query;
            static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
        }

        export namespace Query {
            export type AsObject = {
                filter?: string,
            }
        }

        export class Register extends jspb.Message { 

            hasUser(): boolean;
            clearUser(): void;
            getUser(): DatabaseUser | undefined;
            setUser(value?: DatabaseUser): Register;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Register.AsObject;
            static toObject(includeInstance: boolean, msg: Register): Register.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Register, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Register;
            static deserializeBinaryFromReader(message: Register, reader: jspb.BinaryReader): Register;
        }

        export namespace Register {
            export type AsObject = {
                user?: DatabaseUser.AsObject,
            }
        }

        export class Deregister extends jspb.Message { 

            hasUser(): boolean;
            clearUser(): void;
            getUser(): DatabaseUser | undefined;
            setUser(value?: DatabaseUser): Deregister;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Deregister.AsObject;
            static toObject(includeInstance: boolean, msg: Deregister): Deregister.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Deregister, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Deregister;
            static deserializeBinaryFromReader(message: Deregister, reader: jspb.BinaryReader): Deregister;
        }

        export namespace Deregister {
            export type AsObject = {
                user?: DatabaseUser.AsObject,
            }
        }

        export class Update extends jspb.Message { 

            hasUser(): boolean;
            clearUser(): void;
            getUser(): DatabaseUser | undefined;
            setUser(value?: DatabaseUser): Update;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Update.AsObject;
            static toObject(includeInstance: boolean, msg: Update): Update.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Update, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Update;
            static deserializeBinaryFromReader(message: Update, reader: jspb.BinaryReader): Update;
        }

        export namespace Update {
            export type AsObject = {
                user?: DatabaseUser.AsObject,
            }
        }

    }

    export class Response extends jspb.Message { 

        hasInitialize(): boolean;
        clearInitialize(): void;
        getInitialize(): Authenticator.Response.Initialize | undefined;
        setInitialize(value?: Authenticator.Response.Initialize): Response;


        hasAuthenticate(): boolean;
        clearAuthenticate(): void;
        getAuthenticate(): Authenticator.Response.Authenticate | undefined;
        setAuthenticate(value?: Authenticator.Response.Authenticate): Response;


        hasFind(): boolean;
        clearFind(): void;
        getFind(): Authenticator.Response.Find | undefined;
        setFind(value?: Authenticator.Response.Find): Response;


        hasQuery(): boolean;
        clearQuery(): void;
        getQuery(): Authenticator.Response.Query | undefined;
        setQuery(value?: Authenticator.Response.Query): Response;


        hasRegister(): boolean;
        clearRegister(): void;
        getRegister(): Authenticator.Response.Register | undefined;
        setRegister(value?: Authenticator.Response.Register): Response;


        hasDeregister(): boolean;
        clearDeregister(): void;
        getDeregister(): Authenticator.Response.Deregister | undefined;
        setDeregister(value?: Authenticator.Response.Deregister): Response;


        hasUpdate(): boolean;
        clearUpdate(): void;
        getUpdate(): Authenticator.Response.Update | undefined;
        setUpdate(value?: Authenticator.Response.Update): Response;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Response.AsObject;
        static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Response;
        static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
        export type AsObject = {
            initialize?: Authenticator.Response.Initialize.AsObject,
            authenticate?: Authenticator.Response.Authenticate.AsObject,
            find?: Authenticator.Response.Find.AsObject,
            query?: Authenticator.Response.Query.AsObject,
            register?: Authenticator.Response.Register.AsObject,
            deregister?: Authenticator.Response.Deregister.AsObject,
            update?: Authenticator.Response.Update.AsObject,
        }


        export class Initialize extends jspb.Message { 

            hasServer(): boolean;
            clearServer(): void;
            getServer(): Server | undefined;
            setServer(value?: Server): Initialize;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Initialize.AsObject;
            static toObject(includeInstance: boolean, msg: Initialize): Initialize.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Initialize, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Initialize;
            static deserializeBinaryFromReader(message: Initialize, reader: jspb.BinaryReader): Initialize;
        }

        export namespace Initialize {
            export type AsObject = {
                server?: Server.AsObject,
            }
        }

        export class Authenticate extends jspb.Message { 

            hasStatus(): boolean;
            clearStatus(): void;
            getStatus(): Authenticator.Response.Status | undefined;
            setStatus(value: Authenticator.Response.Status): Authenticate;


            hasId(): boolean;
            clearId(): void;
            getId(): number | undefined;
            setId(value: number): Authenticate;


            hasName(): boolean;
            clearName(): void;
            getName(): string | undefined;
            setName(value: string): Authenticate;

            clearGroupsList(): void;
            getGroupsList(): Array<ACL.Group>;
            setGroupsList(value: Array<ACL.Group>): Authenticate;
            addGroups(value?: ACL.Group, index?: number): ACL.Group;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Authenticate.AsObject;
            static toObject(includeInstance: boolean, msg: Authenticate): Authenticate.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Authenticate, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Authenticate;
            static deserializeBinaryFromReader(message: Authenticate, reader: jspb.BinaryReader): Authenticate;
        }

        export namespace Authenticate {
            export type AsObject = {
                status?: Authenticator.Response.Status,
                id?: number,
                name?: string,
                groupsList: Array<ACL.Group.AsObject>,
            }
        }

        export class Find extends jspb.Message { 

            hasUser(): boolean;
            clearUser(): void;
            getUser(): DatabaseUser | undefined;
            setUser(value?: DatabaseUser): Find;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Find.AsObject;
            static toObject(includeInstance: boolean, msg: Find): Find.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Find, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Find;
            static deserializeBinaryFromReader(message: Find, reader: jspb.BinaryReader): Find;
        }

        export namespace Find {
            export type AsObject = {
                user?: DatabaseUser.AsObject,
            }
        }

        export class Query extends jspb.Message { 
            clearUsersList(): void;
            getUsersList(): Array<DatabaseUser>;
            setUsersList(value: Array<DatabaseUser>): Query;
            addUsers(value?: DatabaseUser, index?: number): DatabaseUser;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Query.AsObject;
            static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Query;
            static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
        }

        export namespace Query {
            export type AsObject = {
                usersList: Array<DatabaseUser.AsObject>,
            }
        }

        export class Register extends jspb.Message { 

            hasStatus(): boolean;
            clearStatus(): void;
            getStatus(): Authenticator.Response.Status | undefined;
            setStatus(value: Authenticator.Response.Status): Register;


            hasUser(): boolean;
            clearUser(): void;
            getUser(): DatabaseUser | undefined;
            setUser(value?: DatabaseUser): Register;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Register.AsObject;
            static toObject(includeInstance: boolean, msg: Register): Register.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Register, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Register;
            static deserializeBinaryFromReader(message: Register, reader: jspb.BinaryReader): Register;
        }

        export namespace Register {
            export type AsObject = {
                status?: Authenticator.Response.Status,
                user?: DatabaseUser.AsObject,
            }
        }

        export class Deregister extends jspb.Message { 

            hasStatus(): boolean;
            clearStatus(): void;
            getStatus(): Authenticator.Response.Status | undefined;
            setStatus(value: Authenticator.Response.Status): Deregister;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Deregister.AsObject;
            static toObject(includeInstance: boolean, msg: Deregister): Deregister.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Deregister, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Deregister;
            static deserializeBinaryFromReader(message: Deregister, reader: jspb.BinaryReader): Deregister;
        }

        export namespace Deregister {
            export type AsObject = {
                status?: Authenticator.Response.Status,
            }
        }

        export class Update extends jspb.Message { 

            hasStatus(): boolean;
            clearStatus(): void;
            getStatus(): Authenticator.Response.Status | undefined;
            setStatus(value: Authenticator.Response.Status): Update;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Update.AsObject;
            static toObject(includeInstance: boolean, msg: Update): Update.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Update, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Update;
            static deserializeBinaryFromReader(message: Update, reader: jspb.BinaryReader): Update;
        }

        export namespace Update {
            export type AsObject = {
                status?: Authenticator.Response.Status,
            }
        }


        export enum Status {
    FALLTHROUGH = 0,
    SUCCESS = 1,
    FAILURE = 2,
    TEMPORARYFAILURE = 3,
        }

    }

}

export class DatabaseUser extends jspb.Message { 

    hasServer(): boolean;
    clearServer(): void;
    getServer(): Server | undefined;
    setServer(value?: Server): DatabaseUser;


    hasId(): boolean;
    clearId(): void;
    getId(): number | undefined;
    setId(value: number): DatabaseUser;


    hasName(): boolean;
    clearName(): void;
    getName(): string | undefined;
    setName(value: string): DatabaseUser;


    hasEmail(): boolean;
    clearEmail(): void;
    getEmail(): string | undefined;
    setEmail(value: string): DatabaseUser;


    hasComment(): boolean;
    clearComment(): void;
    getComment(): string | undefined;
    setComment(value: string): DatabaseUser;


    hasHash(): boolean;
    clearHash(): void;
    getHash(): string | undefined;
    setHash(value: string): DatabaseUser;


    hasPassword(): boolean;
    clearPassword(): void;
    getPassword(): string | undefined;
    setPassword(value: string): DatabaseUser;


    hasLastActive(): boolean;
    clearLastActive(): void;
    getLastActive(): string | undefined;
    setLastActive(value: string): DatabaseUser;


    hasTexture(): boolean;
    clearTexture(): void;
    getTexture(): Uint8Array | string;
    getTexture_asU8(): Uint8Array;
    getTexture_asB64(): string;
    setTexture(value: Uint8Array | string): DatabaseUser;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DatabaseUser.AsObject;
    static toObject(includeInstance: boolean, msg: DatabaseUser): DatabaseUser.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DatabaseUser, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DatabaseUser;
    static deserializeBinaryFromReader(message: DatabaseUser, reader: jspb.BinaryReader): DatabaseUser;
}

export namespace DatabaseUser {
    export type AsObject = {
        server?: Server.AsObject,
        id?: number,
        name?: string,
        email?: string,
        comment?: string,
        hash?: string,
        password?: string,
        lastActive?: string,
        texture: Uint8Array | string,
    }


    export class Query extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): Query;


        hasFilter(): boolean;
        clearFilter(): void;
        getFilter(): string | undefined;
        setFilter(value: string): Query;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Query.AsObject;
        static toObject(includeInstance: boolean, msg: Query): Query.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Query, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Query;
        static deserializeBinaryFromReader(message: Query, reader: jspb.BinaryReader): Query;
    }

    export namespace Query {
        export type AsObject = {
            server?: Server.AsObject,
            filter?: string,
        }
    }

    export class List extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): List;

        clearUsersList(): void;
        getUsersList(): Array<DatabaseUser>;
        setUsersList(value: Array<DatabaseUser>): List;
        addUsers(value?: DatabaseUser, index?: number): DatabaseUser;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): List.AsObject;
        static toObject(includeInstance: boolean, msg: List): List.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): List;
        static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
        export type AsObject = {
            server?: Server.AsObject,
            usersList: Array<DatabaseUser.AsObject>,
        }
    }

    export class Verify extends jspb.Message { 

        hasServer(): boolean;
        clearServer(): void;
        getServer(): Server | undefined;
        setServer(value?: Server): Verify;


        hasName(): boolean;
        clearName(): void;
        getName(): string | undefined;
        setName(value: string): Verify;


        hasPassword(): boolean;
        clearPassword(): void;
        getPassword(): string | undefined;
        setPassword(value: string): Verify;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Verify.AsObject;
        static toObject(includeInstance: boolean, msg: Verify): Verify.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Verify, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Verify;
        static deserializeBinaryFromReader(message: Verify, reader: jspb.BinaryReader): Verify;
    }

    export namespace Verify {
        export type AsObject = {
            server?: Server.AsObject,
            name?: string,
            password?: string,
        }
    }

}

export class RedirectWhisperGroup extends jspb.Message { 

    hasServer(): boolean;
    clearServer(): void;
    getServer(): Server | undefined;
    setServer(value?: Server): RedirectWhisperGroup;


    hasUser(): boolean;
    clearUser(): void;
    getUser(): User | undefined;
    setUser(value?: User): RedirectWhisperGroup;


    hasSource(): boolean;
    clearSource(): void;
    getSource(): ACL.Group | undefined;
    setSource(value?: ACL.Group): RedirectWhisperGroup;


    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): ACL.Group | undefined;
    setTarget(value?: ACL.Group): RedirectWhisperGroup;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedirectWhisperGroup.AsObject;
    static toObject(includeInstance: boolean, msg: RedirectWhisperGroup): RedirectWhisperGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedirectWhisperGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedirectWhisperGroup;
    static deserializeBinaryFromReader(message: RedirectWhisperGroup, reader: jspb.BinaryReader): RedirectWhisperGroup;
}

export namespace RedirectWhisperGroup {
    export type AsObject = {
        server?: Server.AsObject,
        user?: User.AsObject,
        source?: ACL.Group.AsObject,
        target?: ACL.Group.AsObject,
    }
}
