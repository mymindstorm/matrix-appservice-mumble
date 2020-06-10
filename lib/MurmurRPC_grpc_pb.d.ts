// package: MurmurRPC
// file: MurmurRPC.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as MurmurRPC_pb from "./MurmurRPC_pb";

interface IV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUptime: IV1Service_IGetUptime;
    getVersion: IV1Service_IGetVersion;
    events: IV1Service_IEvents;
    serverCreate: IV1Service_IServerCreate;
    serverQuery: IV1Service_IServerQuery;
    serverGet: IV1Service_IServerGet;
    serverStart: IV1Service_IServerStart;
    serverStop: IV1Service_IServerStop;
    serverRemove: IV1Service_IServerRemove;
    serverEvents: IV1Service_IServerEvents;
    contextActionAdd: IV1Service_IContextActionAdd;
    contextActionRemove: IV1Service_IContextActionRemove;
    contextActionEvents: IV1Service_IContextActionEvents;
    textMessageSend: IV1Service_ITextMessageSend;
    textMessageFilter: IV1Service_ITextMessageFilter;
    logQuery: IV1Service_ILogQuery;
    configGet: IV1Service_IConfigGet;
    configGetField: IV1Service_IConfigGetField;
    configSetField: IV1Service_IConfigSetField;
    configGetDefault: IV1Service_IConfigGetDefault;
    channelQuery: IV1Service_IChannelQuery;
    channelGet: IV1Service_IChannelGet;
    channelAdd: IV1Service_IChannelAdd;
    channelRemove: IV1Service_IChannelRemove;
    channelUpdate: IV1Service_IChannelUpdate;
    userQuery: IV1Service_IUserQuery;
    userGet: IV1Service_IUserGet;
    userUpdate: IV1Service_IUserUpdate;
    userKick: IV1Service_IUserKick;
    treeQuery: IV1Service_ITreeQuery;
    bansGet: IV1Service_IBansGet;
    bansSet: IV1Service_IBansSet;
    aCLGet: IV1Service_IACLGet;
    aCLSet: IV1Service_IACLSet;
    aCLGetEffectivePermissions: IV1Service_IACLGetEffectivePermissions;
    aCLAddTemporaryGroup: IV1Service_IACLAddTemporaryGroup;
    aCLRemoveTemporaryGroup: IV1Service_IACLRemoveTemporaryGroup;
    authenticatorStream: IV1Service_IAuthenticatorStream;
    databaseUserQuery: IV1Service_IDatabaseUserQuery;
    databaseUserGet: IV1Service_IDatabaseUserGet;
    databaseUserUpdate: IV1Service_IDatabaseUserUpdate;
    databaseUserRegister: IV1Service_IDatabaseUserRegister;
    databaseUserDeregister: IV1Service_IDatabaseUserDeregister;
    databaseUserVerify: IV1Service_IDatabaseUserVerify;
    redirectWhisperGroupAdd: IV1Service_IRedirectWhisperGroupAdd;
    redirectWhisperGroupRemove: IV1Service_IRedirectWhisperGroupRemove;
}

interface IV1Service_IGetUptime extends grpc.MethodDefinition<MurmurRPC_pb.Void, MurmurRPC_pb.Uptime> {
    path: string; // "/MurmurRPC.V1/GetUptime"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Uptime>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Uptime>;
}
interface IV1Service_IGetVersion extends grpc.MethodDefinition<MurmurRPC_pb.Void, MurmurRPC_pb.Version> {
    path: string; // "/MurmurRPC.V1/GetVersion"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Version>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Version>;
}
interface IV1Service_IEvents extends grpc.MethodDefinition<MurmurRPC_pb.Void, MurmurRPC_pb.Event> {
    path: string; // "/MurmurRPC.V1/Events"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Event>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Event>;
}
interface IV1Service_IServerCreate extends grpc.MethodDefinition<MurmurRPC_pb.Void, MurmurRPC_pb.Server> {
    path: string; // "/MurmurRPC.V1/ServerCreate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Server>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Server>;
}
interface IV1Service_IServerQuery extends grpc.MethodDefinition<MurmurRPC_pb.Server.Query, MurmurRPC_pb.Server.List> {
    path: string; // "/MurmurRPC.V1/ServerQuery"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Server.Query>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Server.Query>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Server.List>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Server.List>;
}
interface IV1Service_IServerGet extends grpc.MethodDefinition<MurmurRPC_pb.Server, MurmurRPC_pb.Server> {
    path: string; // "/MurmurRPC.V1/ServerGet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Server>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Server>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Server>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Server>;
}
interface IV1Service_IServerStart extends grpc.MethodDefinition<MurmurRPC_pb.Server, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/ServerStart"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Server>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Server>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_IServerStop extends grpc.MethodDefinition<MurmurRPC_pb.Server, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/ServerStop"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Server>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Server>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_IServerRemove extends grpc.MethodDefinition<MurmurRPC_pb.Server, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/ServerRemove"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Server>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Server>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_IServerEvents extends grpc.MethodDefinition<MurmurRPC_pb.Server, MurmurRPC_pb.Server.Event> {
    path: string; // "/MurmurRPC.V1/ServerEvents"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<MurmurRPC_pb.Server>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Server>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Server.Event>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Server.Event>;
}
interface IV1Service_IContextActionAdd extends grpc.MethodDefinition<MurmurRPC_pb.ContextAction, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/ContextActionAdd"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.ContextAction>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.ContextAction>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_IContextActionRemove extends grpc.MethodDefinition<MurmurRPC_pb.ContextAction, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/ContextActionRemove"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.ContextAction>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.ContextAction>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_IContextActionEvents extends grpc.MethodDefinition<MurmurRPC_pb.ContextAction, MurmurRPC_pb.ContextAction> {
    path: string; // "/MurmurRPC.V1/ContextActionEvents"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<MurmurRPC_pb.ContextAction>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.ContextAction>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.ContextAction>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.ContextAction>;
}
interface IV1Service_ITextMessageSend extends grpc.MethodDefinition<MurmurRPC_pb.TextMessage, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/TextMessageSend"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.TextMessage>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.TextMessage>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_ITextMessageFilter extends grpc.MethodDefinition<MurmurRPC_pb.TextMessage.Filter, MurmurRPC_pb.TextMessage.Filter> {
    path: string; // "/MurmurRPC.V1/TextMessageFilter"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<MurmurRPC_pb.TextMessage.Filter>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.TextMessage.Filter>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.TextMessage.Filter>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.TextMessage.Filter>;
}
interface IV1Service_ILogQuery extends grpc.MethodDefinition<MurmurRPC_pb.Log.Query, MurmurRPC_pb.Log.List> {
    path: string; // "/MurmurRPC.V1/LogQuery"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Log.Query>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Log.Query>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Log.List>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Log.List>;
}
interface IV1Service_IConfigGet extends grpc.MethodDefinition<MurmurRPC_pb.Server, MurmurRPC_pb.Config> {
    path: string; // "/MurmurRPC.V1/ConfigGet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Server>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Server>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Config>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Config>;
}
interface IV1Service_IConfigGetField extends grpc.MethodDefinition<MurmurRPC_pb.Config.Field, MurmurRPC_pb.Config.Field> {
    path: string; // "/MurmurRPC.V1/ConfigGetField"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Config.Field>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Config.Field>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Config.Field>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Config.Field>;
}
interface IV1Service_IConfigSetField extends grpc.MethodDefinition<MurmurRPC_pb.Config.Field, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/ConfigSetField"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Config.Field>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Config.Field>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_IConfigGetDefault extends grpc.MethodDefinition<MurmurRPC_pb.Void, MurmurRPC_pb.Config> {
    path: string; // "/MurmurRPC.V1/ConfigGetDefault"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Config>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Config>;
}
interface IV1Service_IChannelQuery extends grpc.MethodDefinition<MurmurRPC_pb.Channel.Query, MurmurRPC_pb.Channel.List> {
    path: string; // "/MurmurRPC.V1/ChannelQuery"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Channel.Query>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Channel.Query>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Channel.List>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Channel.List>;
}
interface IV1Service_IChannelGet extends grpc.MethodDefinition<MurmurRPC_pb.Channel, MurmurRPC_pb.Channel> {
    path: string; // "/MurmurRPC.V1/ChannelGet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Channel>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Channel>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Channel>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Channel>;
}
interface IV1Service_IChannelAdd extends grpc.MethodDefinition<MurmurRPC_pb.Channel, MurmurRPC_pb.Channel> {
    path: string; // "/MurmurRPC.V1/ChannelAdd"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Channel>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Channel>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Channel>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Channel>;
}
interface IV1Service_IChannelRemove extends grpc.MethodDefinition<MurmurRPC_pb.Channel, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/ChannelRemove"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Channel>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Channel>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_IChannelUpdate extends grpc.MethodDefinition<MurmurRPC_pb.Channel, MurmurRPC_pb.Channel> {
    path: string; // "/MurmurRPC.V1/ChannelUpdate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Channel>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Channel>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Channel>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Channel>;
}
interface IV1Service_IUserQuery extends grpc.MethodDefinition<MurmurRPC_pb.User.Query, MurmurRPC_pb.User.List> {
    path: string; // "/MurmurRPC.V1/UserQuery"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.User.Query>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.User.Query>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.User.List>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.User.List>;
}
interface IV1Service_IUserGet extends grpc.MethodDefinition<MurmurRPC_pb.User, MurmurRPC_pb.User> {
    path: string; // "/MurmurRPC.V1/UserGet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.User>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.User>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.User>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.User>;
}
interface IV1Service_IUserUpdate extends grpc.MethodDefinition<MurmurRPC_pb.User, MurmurRPC_pb.User> {
    path: string; // "/MurmurRPC.V1/UserUpdate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.User>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.User>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.User>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.User>;
}
interface IV1Service_IUserKick extends grpc.MethodDefinition<MurmurRPC_pb.User.Kick, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/UserKick"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.User.Kick>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.User.Kick>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_ITreeQuery extends grpc.MethodDefinition<MurmurRPC_pb.Tree.Query, MurmurRPC_pb.Tree> {
    path: string; // "/MurmurRPC.V1/TreeQuery"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Tree.Query>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Tree.Query>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Tree>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Tree>;
}
interface IV1Service_IBansGet extends grpc.MethodDefinition<MurmurRPC_pb.Ban.Query, MurmurRPC_pb.Ban.List> {
    path: string; // "/MurmurRPC.V1/BansGet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Ban.Query>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Ban.Query>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Ban.List>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Ban.List>;
}
interface IV1Service_IBansSet extends grpc.MethodDefinition<MurmurRPC_pb.Ban.List, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/BansSet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Ban.List>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Ban.List>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_IACLGet extends grpc.MethodDefinition<MurmurRPC_pb.Channel, MurmurRPC_pb.ACL.List> {
    path: string; // "/MurmurRPC.V1/ACLGet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.Channel>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Channel>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.ACL.List>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.ACL.List>;
}
interface IV1Service_IACLSet extends grpc.MethodDefinition<MurmurRPC_pb.ACL.List, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/ACLSet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.ACL.List>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.ACL.List>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_IACLGetEffectivePermissions extends grpc.MethodDefinition<MurmurRPC_pb.ACL.Query, MurmurRPC_pb.ACL> {
    path: string; // "/MurmurRPC.V1/ACLGetEffectivePermissions"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.ACL.Query>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.ACL.Query>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.ACL>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.ACL>;
}
interface IV1Service_IACLAddTemporaryGroup extends grpc.MethodDefinition<MurmurRPC_pb.ACL.TemporaryGroup, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/ACLAddTemporaryGroup"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.ACL.TemporaryGroup>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.ACL.TemporaryGroup>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_IACLRemoveTemporaryGroup extends grpc.MethodDefinition<MurmurRPC_pb.ACL.TemporaryGroup, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/ACLRemoveTemporaryGroup"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.ACL.TemporaryGroup>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.ACL.TemporaryGroup>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_IAuthenticatorStream extends grpc.MethodDefinition<MurmurRPC_pb.Authenticator.Response, MurmurRPC_pb.Authenticator.Request> {
    path: string; // "/MurmurRPC.V1/AuthenticatorStream"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<MurmurRPC_pb.Authenticator.Response>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.Authenticator.Response>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Authenticator.Request>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Authenticator.Request>;
}
interface IV1Service_IDatabaseUserQuery extends grpc.MethodDefinition<MurmurRPC_pb.DatabaseUser.Query, MurmurRPC_pb.DatabaseUser.List> {
    path: string; // "/MurmurRPC.V1/DatabaseUserQuery"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.DatabaseUser.Query>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.DatabaseUser.Query>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.DatabaseUser.List>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.DatabaseUser.List>;
}
interface IV1Service_IDatabaseUserGet extends grpc.MethodDefinition<MurmurRPC_pb.DatabaseUser, MurmurRPC_pb.DatabaseUser> {
    path: string; // "/MurmurRPC.V1/DatabaseUserGet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.DatabaseUser>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.DatabaseUser>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.DatabaseUser>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.DatabaseUser>;
}
interface IV1Service_IDatabaseUserUpdate extends grpc.MethodDefinition<MurmurRPC_pb.DatabaseUser, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/DatabaseUserUpdate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.DatabaseUser>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.DatabaseUser>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_IDatabaseUserRegister extends grpc.MethodDefinition<MurmurRPC_pb.DatabaseUser, MurmurRPC_pb.DatabaseUser> {
    path: string; // "/MurmurRPC.V1/DatabaseUserRegister"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.DatabaseUser>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.DatabaseUser>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.DatabaseUser>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.DatabaseUser>;
}
interface IV1Service_IDatabaseUserDeregister extends grpc.MethodDefinition<MurmurRPC_pb.DatabaseUser, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/DatabaseUserDeregister"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.DatabaseUser>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.DatabaseUser>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_IDatabaseUserVerify extends grpc.MethodDefinition<MurmurRPC_pb.DatabaseUser.Verify, MurmurRPC_pb.DatabaseUser> {
    path: string; // "/MurmurRPC.V1/DatabaseUserVerify"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.DatabaseUser.Verify>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.DatabaseUser.Verify>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.DatabaseUser>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.DatabaseUser>;
}
interface IV1Service_IRedirectWhisperGroupAdd extends grpc.MethodDefinition<MurmurRPC_pb.RedirectWhisperGroup, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/RedirectWhisperGroupAdd"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.RedirectWhisperGroup>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.RedirectWhisperGroup>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}
interface IV1Service_IRedirectWhisperGroupRemove extends grpc.MethodDefinition<MurmurRPC_pb.RedirectWhisperGroup, MurmurRPC_pb.Void> {
    path: string; // "/MurmurRPC.V1/RedirectWhisperGroupRemove"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<MurmurRPC_pb.RedirectWhisperGroup>;
    requestDeserialize: grpc.deserialize<MurmurRPC_pb.RedirectWhisperGroup>;
    responseSerialize: grpc.serialize<MurmurRPC_pb.Void>;
    responseDeserialize: grpc.deserialize<MurmurRPC_pb.Void>;
}

export const V1Service: IV1Service;

export interface IV1Server {
    getUptime: grpc.handleUnaryCall<MurmurRPC_pb.Void, MurmurRPC_pb.Uptime>;
    getVersion: grpc.handleUnaryCall<MurmurRPC_pb.Void, MurmurRPC_pb.Version>;
    events: grpc.handleServerStreamingCall<MurmurRPC_pb.Void, MurmurRPC_pb.Event>;
    serverCreate: grpc.handleUnaryCall<MurmurRPC_pb.Void, MurmurRPC_pb.Server>;
    serverQuery: grpc.handleUnaryCall<MurmurRPC_pb.Server.Query, MurmurRPC_pb.Server.List>;
    serverGet: grpc.handleUnaryCall<MurmurRPC_pb.Server, MurmurRPC_pb.Server>;
    serverStart: grpc.handleUnaryCall<MurmurRPC_pb.Server, MurmurRPC_pb.Void>;
    serverStop: grpc.handleUnaryCall<MurmurRPC_pb.Server, MurmurRPC_pb.Void>;
    serverRemove: grpc.handleUnaryCall<MurmurRPC_pb.Server, MurmurRPC_pb.Void>;
    serverEvents: grpc.handleServerStreamingCall<MurmurRPC_pb.Server, MurmurRPC_pb.Server.Event>;
    contextActionAdd: grpc.handleUnaryCall<MurmurRPC_pb.ContextAction, MurmurRPC_pb.Void>;
    contextActionRemove: grpc.handleUnaryCall<MurmurRPC_pb.ContextAction, MurmurRPC_pb.Void>;
    contextActionEvents: grpc.handleServerStreamingCall<MurmurRPC_pb.ContextAction, MurmurRPC_pb.ContextAction>;
    textMessageSend: grpc.handleUnaryCall<MurmurRPC_pb.TextMessage, MurmurRPC_pb.Void>;
    textMessageFilter: grpc.handleBidiStreamingCall<MurmurRPC_pb.TextMessage.Filter, MurmurRPC_pb.TextMessage.Filter>;
    logQuery: grpc.handleUnaryCall<MurmurRPC_pb.Log.Query, MurmurRPC_pb.Log.List>;
    configGet: grpc.handleUnaryCall<MurmurRPC_pb.Server, MurmurRPC_pb.Config>;
    configGetField: grpc.handleUnaryCall<MurmurRPC_pb.Config.Field, MurmurRPC_pb.Config.Field>;
    configSetField: grpc.handleUnaryCall<MurmurRPC_pb.Config.Field, MurmurRPC_pb.Void>;
    configGetDefault: grpc.handleUnaryCall<MurmurRPC_pb.Void, MurmurRPC_pb.Config>;
    channelQuery: grpc.handleUnaryCall<MurmurRPC_pb.Channel.Query, MurmurRPC_pb.Channel.List>;
    channelGet: grpc.handleUnaryCall<MurmurRPC_pb.Channel, MurmurRPC_pb.Channel>;
    channelAdd: grpc.handleUnaryCall<MurmurRPC_pb.Channel, MurmurRPC_pb.Channel>;
    channelRemove: grpc.handleUnaryCall<MurmurRPC_pb.Channel, MurmurRPC_pb.Void>;
    channelUpdate: grpc.handleUnaryCall<MurmurRPC_pb.Channel, MurmurRPC_pb.Channel>;
    userQuery: grpc.handleUnaryCall<MurmurRPC_pb.User.Query, MurmurRPC_pb.User.List>;
    userGet: grpc.handleUnaryCall<MurmurRPC_pb.User, MurmurRPC_pb.User>;
    userUpdate: grpc.handleUnaryCall<MurmurRPC_pb.User, MurmurRPC_pb.User>;
    userKick: grpc.handleUnaryCall<MurmurRPC_pb.User.Kick, MurmurRPC_pb.Void>;
    treeQuery: grpc.handleUnaryCall<MurmurRPC_pb.Tree.Query, MurmurRPC_pb.Tree>;
    bansGet: grpc.handleUnaryCall<MurmurRPC_pb.Ban.Query, MurmurRPC_pb.Ban.List>;
    bansSet: grpc.handleUnaryCall<MurmurRPC_pb.Ban.List, MurmurRPC_pb.Void>;
    aCLGet: grpc.handleUnaryCall<MurmurRPC_pb.Channel, MurmurRPC_pb.ACL.List>;
    aCLSet: grpc.handleUnaryCall<MurmurRPC_pb.ACL.List, MurmurRPC_pb.Void>;
    aCLGetEffectivePermissions: grpc.handleUnaryCall<MurmurRPC_pb.ACL.Query, MurmurRPC_pb.ACL>;
    aCLAddTemporaryGroup: grpc.handleUnaryCall<MurmurRPC_pb.ACL.TemporaryGroup, MurmurRPC_pb.Void>;
    aCLRemoveTemporaryGroup: grpc.handleUnaryCall<MurmurRPC_pb.ACL.TemporaryGroup, MurmurRPC_pb.Void>;
    authenticatorStream: grpc.handleBidiStreamingCall<MurmurRPC_pb.Authenticator.Response, MurmurRPC_pb.Authenticator.Request>;
    databaseUserQuery: grpc.handleUnaryCall<MurmurRPC_pb.DatabaseUser.Query, MurmurRPC_pb.DatabaseUser.List>;
    databaseUserGet: grpc.handleUnaryCall<MurmurRPC_pb.DatabaseUser, MurmurRPC_pb.DatabaseUser>;
    databaseUserUpdate: grpc.handleUnaryCall<MurmurRPC_pb.DatabaseUser, MurmurRPC_pb.Void>;
    databaseUserRegister: grpc.handleUnaryCall<MurmurRPC_pb.DatabaseUser, MurmurRPC_pb.DatabaseUser>;
    databaseUserDeregister: grpc.handleUnaryCall<MurmurRPC_pb.DatabaseUser, MurmurRPC_pb.Void>;
    databaseUserVerify: grpc.handleUnaryCall<MurmurRPC_pb.DatabaseUser.Verify, MurmurRPC_pb.DatabaseUser>;
    redirectWhisperGroupAdd: grpc.handleUnaryCall<MurmurRPC_pb.RedirectWhisperGroup, MurmurRPC_pb.Void>;
    redirectWhisperGroupRemove: grpc.handleUnaryCall<MurmurRPC_pb.RedirectWhisperGroup, MurmurRPC_pb.Void>;
}

export interface IV1Client {
    getUptime(request: MurmurRPC_pb.Void, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Uptime) => void): grpc.ClientUnaryCall;
    getUptime(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Uptime) => void): grpc.ClientUnaryCall;
    getUptime(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Uptime) => void): grpc.ClientUnaryCall;
    getVersion(request: MurmurRPC_pb.Void, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Version) => void): grpc.ClientUnaryCall;
    getVersion(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Version) => void): grpc.ClientUnaryCall;
    getVersion(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Version) => void): grpc.ClientUnaryCall;
    events(request: MurmurRPC_pb.Void, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MurmurRPC_pb.Event>;
    events(request: MurmurRPC_pb.Void, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MurmurRPC_pb.Event>;
    serverCreate(request: MurmurRPC_pb.Void, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server) => void): grpc.ClientUnaryCall;
    serverCreate(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server) => void): grpc.ClientUnaryCall;
    serverCreate(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server) => void): grpc.ClientUnaryCall;
    serverQuery(request: MurmurRPC_pb.Server.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server.List) => void): grpc.ClientUnaryCall;
    serverQuery(request: MurmurRPC_pb.Server.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server.List) => void): grpc.ClientUnaryCall;
    serverQuery(request: MurmurRPC_pb.Server.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server.List) => void): grpc.ClientUnaryCall;
    serverGet(request: MurmurRPC_pb.Server, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server) => void): grpc.ClientUnaryCall;
    serverGet(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server) => void): grpc.ClientUnaryCall;
    serverGet(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server) => void): grpc.ClientUnaryCall;
    serverStart(request: MurmurRPC_pb.Server, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    serverStart(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    serverStart(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    serverStop(request: MurmurRPC_pb.Server, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    serverStop(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    serverStop(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    serverRemove(request: MurmurRPC_pb.Server, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    serverRemove(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    serverRemove(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    serverEvents(request: MurmurRPC_pb.Server, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MurmurRPC_pb.Server.Event>;
    serverEvents(request: MurmurRPC_pb.Server, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MurmurRPC_pb.Server.Event>;
    contextActionAdd(request: MurmurRPC_pb.ContextAction, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    contextActionAdd(request: MurmurRPC_pb.ContextAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    contextActionAdd(request: MurmurRPC_pb.ContextAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    contextActionRemove(request: MurmurRPC_pb.ContextAction, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    contextActionRemove(request: MurmurRPC_pb.ContextAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    contextActionRemove(request: MurmurRPC_pb.ContextAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    contextActionEvents(request: MurmurRPC_pb.ContextAction, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MurmurRPC_pb.ContextAction>;
    contextActionEvents(request: MurmurRPC_pb.ContextAction, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MurmurRPC_pb.ContextAction>;
    textMessageSend(request: MurmurRPC_pb.TextMessage, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    textMessageSend(request: MurmurRPC_pb.TextMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    textMessageSend(request: MurmurRPC_pb.TextMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    textMessageFilter(): grpc.ClientDuplexStream<MurmurRPC_pb.TextMessage.Filter, MurmurRPC_pb.TextMessage.Filter>;
    textMessageFilter(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<MurmurRPC_pb.TextMessage.Filter, MurmurRPC_pb.TextMessage.Filter>;
    textMessageFilter(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<MurmurRPC_pb.TextMessage.Filter, MurmurRPC_pb.TextMessage.Filter>;
    logQuery(request: MurmurRPC_pb.Log.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Log.List) => void): grpc.ClientUnaryCall;
    logQuery(request: MurmurRPC_pb.Log.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Log.List) => void): grpc.ClientUnaryCall;
    logQuery(request: MurmurRPC_pb.Log.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Log.List) => void): grpc.ClientUnaryCall;
    configGet(request: MurmurRPC_pb.Server, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config) => void): grpc.ClientUnaryCall;
    configGet(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config) => void): grpc.ClientUnaryCall;
    configGet(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config) => void): grpc.ClientUnaryCall;
    configGetField(request: MurmurRPC_pb.Config.Field, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config.Field) => void): grpc.ClientUnaryCall;
    configGetField(request: MurmurRPC_pb.Config.Field, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config.Field) => void): grpc.ClientUnaryCall;
    configGetField(request: MurmurRPC_pb.Config.Field, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config.Field) => void): grpc.ClientUnaryCall;
    configSetField(request: MurmurRPC_pb.Config.Field, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    configSetField(request: MurmurRPC_pb.Config.Field, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    configSetField(request: MurmurRPC_pb.Config.Field, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    configGetDefault(request: MurmurRPC_pb.Void, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config) => void): grpc.ClientUnaryCall;
    configGetDefault(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config) => void): grpc.ClientUnaryCall;
    configGetDefault(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config) => void): grpc.ClientUnaryCall;
    channelQuery(request: MurmurRPC_pb.Channel.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel.List) => void): grpc.ClientUnaryCall;
    channelQuery(request: MurmurRPC_pb.Channel.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel.List) => void): grpc.ClientUnaryCall;
    channelQuery(request: MurmurRPC_pb.Channel.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel.List) => void): grpc.ClientUnaryCall;
    channelGet(request: MurmurRPC_pb.Channel, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    channelGet(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    channelGet(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    channelAdd(request: MurmurRPC_pb.Channel, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    channelAdd(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    channelAdd(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    channelRemove(request: MurmurRPC_pb.Channel, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    channelRemove(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    channelRemove(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    channelUpdate(request: MurmurRPC_pb.Channel, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    channelUpdate(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    channelUpdate(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    userQuery(request: MurmurRPC_pb.User.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User.List) => void): grpc.ClientUnaryCall;
    userQuery(request: MurmurRPC_pb.User.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User.List) => void): grpc.ClientUnaryCall;
    userQuery(request: MurmurRPC_pb.User.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User.List) => void): grpc.ClientUnaryCall;
    userGet(request: MurmurRPC_pb.User, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User) => void): grpc.ClientUnaryCall;
    userGet(request: MurmurRPC_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User) => void): grpc.ClientUnaryCall;
    userGet(request: MurmurRPC_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User) => void): grpc.ClientUnaryCall;
    userUpdate(request: MurmurRPC_pb.User, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User) => void): grpc.ClientUnaryCall;
    userUpdate(request: MurmurRPC_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User) => void): grpc.ClientUnaryCall;
    userUpdate(request: MurmurRPC_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User) => void): grpc.ClientUnaryCall;
    userKick(request: MurmurRPC_pb.User.Kick, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    userKick(request: MurmurRPC_pb.User.Kick, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    userKick(request: MurmurRPC_pb.User.Kick, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    treeQuery(request: MurmurRPC_pb.Tree.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Tree) => void): grpc.ClientUnaryCall;
    treeQuery(request: MurmurRPC_pb.Tree.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Tree) => void): grpc.ClientUnaryCall;
    treeQuery(request: MurmurRPC_pb.Tree.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Tree) => void): grpc.ClientUnaryCall;
    bansGet(request: MurmurRPC_pb.Ban.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Ban.List) => void): grpc.ClientUnaryCall;
    bansGet(request: MurmurRPC_pb.Ban.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Ban.List) => void): grpc.ClientUnaryCall;
    bansGet(request: MurmurRPC_pb.Ban.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Ban.List) => void): grpc.ClientUnaryCall;
    bansSet(request: MurmurRPC_pb.Ban.List, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    bansSet(request: MurmurRPC_pb.Ban.List, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    bansSet(request: MurmurRPC_pb.Ban.List, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    aCLGet(request: MurmurRPC_pb.Channel, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.ACL.List) => void): grpc.ClientUnaryCall;
    aCLGet(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.ACL.List) => void): grpc.ClientUnaryCall;
    aCLGet(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.ACL.List) => void): grpc.ClientUnaryCall;
    aCLSet(request: MurmurRPC_pb.ACL.List, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    aCLSet(request: MurmurRPC_pb.ACL.List, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    aCLSet(request: MurmurRPC_pb.ACL.List, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    aCLGetEffectivePermissions(request: MurmurRPC_pb.ACL.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.ACL) => void): grpc.ClientUnaryCall;
    aCLGetEffectivePermissions(request: MurmurRPC_pb.ACL.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.ACL) => void): grpc.ClientUnaryCall;
    aCLGetEffectivePermissions(request: MurmurRPC_pb.ACL.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.ACL) => void): grpc.ClientUnaryCall;
    aCLAddTemporaryGroup(request: MurmurRPC_pb.ACL.TemporaryGroup, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    aCLAddTemporaryGroup(request: MurmurRPC_pb.ACL.TemporaryGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    aCLAddTemporaryGroup(request: MurmurRPC_pb.ACL.TemporaryGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    aCLRemoveTemporaryGroup(request: MurmurRPC_pb.ACL.TemporaryGroup, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    aCLRemoveTemporaryGroup(request: MurmurRPC_pb.ACL.TemporaryGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    aCLRemoveTemporaryGroup(request: MurmurRPC_pb.ACL.TemporaryGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    authenticatorStream(): grpc.ClientDuplexStream<MurmurRPC_pb.Authenticator.Response, MurmurRPC_pb.Authenticator.Request>;
    authenticatorStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<MurmurRPC_pb.Authenticator.Response, MurmurRPC_pb.Authenticator.Request>;
    authenticatorStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<MurmurRPC_pb.Authenticator.Response, MurmurRPC_pb.Authenticator.Request>;
    databaseUserQuery(request: MurmurRPC_pb.DatabaseUser.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser.List) => void): grpc.ClientUnaryCall;
    databaseUserQuery(request: MurmurRPC_pb.DatabaseUser.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser.List) => void): grpc.ClientUnaryCall;
    databaseUserQuery(request: MurmurRPC_pb.DatabaseUser.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser.List) => void): grpc.ClientUnaryCall;
    databaseUserGet(request: MurmurRPC_pb.DatabaseUser, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    databaseUserGet(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    databaseUserGet(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    databaseUserUpdate(request: MurmurRPC_pb.DatabaseUser, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    databaseUserUpdate(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    databaseUserUpdate(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    databaseUserRegister(request: MurmurRPC_pb.DatabaseUser, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    databaseUserRegister(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    databaseUserRegister(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    databaseUserDeregister(request: MurmurRPC_pb.DatabaseUser, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    databaseUserDeregister(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    databaseUserDeregister(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    databaseUserVerify(request: MurmurRPC_pb.DatabaseUser.Verify, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    databaseUserVerify(request: MurmurRPC_pb.DatabaseUser.Verify, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    databaseUserVerify(request: MurmurRPC_pb.DatabaseUser.Verify, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    redirectWhisperGroupAdd(request: MurmurRPC_pb.RedirectWhisperGroup, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    redirectWhisperGroupAdd(request: MurmurRPC_pb.RedirectWhisperGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    redirectWhisperGroupAdd(request: MurmurRPC_pb.RedirectWhisperGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    redirectWhisperGroupRemove(request: MurmurRPC_pb.RedirectWhisperGroup, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    redirectWhisperGroupRemove(request: MurmurRPC_pb.RedirectWhisperGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    redirectWhisperGroupRemove(request: MurmurRPC_pb.RedirectWhisperGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
}

export class V1Client extends grpc.Client implements IV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getUptime(request: MurmurRPC_pb.Void, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Uptime) => void): grpc.ClientUnaryCall;
    public getUptime(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Uptime) => void): grpc.ClientUnaryCall;
    public getUptime(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Uptime) => void): grpc.ClientUnaryCall;
    public getVersion(request: MurmurRPC_pb.Void, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Version) => void): grpc.ClientUnaryCall;
    public getVersion(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Version) => void): grpc.ClientUnaryCall;
    public getVersion(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Version) => void): grpc.ClientUnaryCall;
    public events(request: MurmurRPC_pb.Void, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MurmurRPC_pb.Event>;
    public events(request: MurmurRPC_pb.Void, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MurmurRPC_pb.Event>;
    public serverCreate(request: MurmurRPC_pb.Void, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server) => void): grpc.ClientUnaryCall;
    public serverCreate(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server) => void): grpc.ClientUnaryCall;
    public serverCreate(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server) => void): grpc.ClientUnaryCall;
    public serverQuery(request: MurmurRPC_pb.Server.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server.List) => void): grpc.ClientUnaryCall;
    public serverQuery(request: MurmurRPC_pb.Server.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server.List) => void): grpc.ClientUnaryCall;
    public serverQuery(request: MurmurRPC_pb.Server.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server.List) => void): grpc.ClientUnaryCall;
    public serverGet(request: MurmurRPC_pb.Server, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server) => void): grpc.ClientUnaryCall;
    public serverGet(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server) => void): grpc.ClientUnaryCall;
    public serverGet(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Server) => void): grpc.ClientUnaryCall;
    public serverStart(request: MurmurRPC_pb.Server, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public serverStart(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public serverStart(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public serverStop(request: MurmurRPC_pb.Server, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public serverStop(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public serverStop(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public serverRemove(request: MurmurRPC_pb.Server, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public serverRemove(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public serverRemove(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public serverEvents(request: MurmurRPC_pb.Server, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MurmurRPC_pb.Server.Event>;
    public serverEvents(request: MurmurRPC_pb.Server, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MurmurRPC_pb.Server.Event>;
    public contextActionAdd(request: MurmurRPC_pb.ContextAction, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public contextActionAdd(request: MurmurRPC_pb.ContextAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public contextActionAdd(request: MurmurRPC_pb.ContextAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public contextActionRemove(request: MurmurRPC_pb.ContextAction, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public contextActionRemove(request: MurmurRPC_pb.ContextAction, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public contextActionRemove(request: MurmurRPC_pb.ContextAction, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public contextActionEvents(request: MurmurRPC_pb.ContextAction, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MurmurRPC_pb.ContextAction>;
    public contextActionEvents(request: MurmurRPC_pb.ContextAction, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<MurmurRPC_pb.ContextAction>;
    public textMessageSend(request: MurmurRPC_pb.TextMessage, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public textMessageSend(request: MurmurRPC_pb.TextMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public textMessageSend(request: MurmurRPC_pb.TextMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public textMessageFilter(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<MurmurRPC_pb.TextMessage.Filter, MurmurRPC_pb.TextMessage.Filter>;
    public textMessageFilter(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<MurmurRPC_pb.TextMessage.Filter, MurmurRPC_pb.TextMessage.Filter>;
    public logQuery(request: MurmurRPC_pb.Log.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Log.List) => void): grpc.ClientUnaryCall;
    public logQuery(request: MurmurRPC_pb.Log.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Log.List) => void): grpc.ClientUnaryCall;
    public logQuery(request: MurmurRPC_pb.Log.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Log.List) => void): grpc.ClientUnaryCall;
    public configGet(request: MurmurRPC_pb.Server, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config) => void): grpc.ClientUnaryCall;
    public configGet(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config) => void): grpc.ClientUnaryCall;
    public configGet(request: MurmurRPC_pb.Server, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config) => void): grpc.ClientUnaryCall;
    public configGetField(request: MurmurRPC_pb.Config.Field, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config.Field) => void): grpc.ClientUnaryCall;
    public configGetField(request: MurmurRPC_pb.Config.Field, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config.Field) => void): grpc.ClientUnaryCall;
    public configGetField(request: MurmurRPC_pb.Config.Field, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config.Field) => void): grpc.ClientUnaryCall;
    public configSetField(request: MurmurRPC_pb.Config.Field, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public configSetField(request: MurmurRPC_pb.Config.Field, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public configSetField(request: MurmurRPC_pb.Config.Field, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public configGetDefault(request: MurmurRPC_pb.Void, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config) => void): grpc.ClientUnaryCall;
    public configGetDefault(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config) => void): grpc.ClientUnaryCall;
    public configGetDefault(request: MurmurRPC_pb.Void, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Config) => void): grpc.ClientUnaryCall;
    public channelQuery(request: MurmurRPC_pb.Channel.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel.List) => void): grpc.ClientUnaryCall;
    public channelQuery(request: MurmurRPC_pb.Channel.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel.List) => void): grpc.ClientUnaryCall;
    public channelQuery(request: MurmurRPC_pb.Channel.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel.List) => void): grpc.ClientUnaryCall;
    public channelGet(request: MurmurRPC_pb.Channel, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    public channelGet(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    public channelGet(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    public channelAdd(request: MurmurRPC_pb.Channel, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    public channelAdd(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    public channelAdd(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    public channelRemove(request: MurmurRPC_pb.Channel, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public channelRemove(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public channelRemove(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public channelUpdate(request: MurmurRPC_pb.Channel, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    public channelUpdate(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    public channelUpdate(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Channel) => void): grpc.ClientUnaryCall;
    public userQuery(request: MurmurRPC_pb.User.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User.List) => void): grpc.ClientUnaryCall;
    public userQuery(request: MurmurRPC_pb.User.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User.List) => void): grpc.ClientUnaryCall;
    public userQuery(request: MurmurRPC_pb.User.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User.List) => void): grpc.ClientUnaryCall;
    public userGet(request: MurmurRPC_pb.User, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User) => void): grpc.ClientUnaryCall;
    public userGet(request: MurmurRPC_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User) => void): grpc.ClientUnaryCall;
    public userGet(request: MurmurRPC_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User) => void): grpc.ClientUnaryCall;
    public userUpdate(request: MurmurRPC_pb.User, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User) => void): grpc.ClientUnaryCall;
    public userUpdate(request: MurmurRPC_pb.User, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User) => void): grpc.ClientUnaryCall;
    public userUpdate(request: MurmurRPC_pb.User, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.User) => void): grpc.ClientUnaryCall;
    public userKick(request: MurmurRPC_pb.User.Kick, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public userKick(request: MurmurRPC_pb.User.Kick, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public userKick(request: MurmurRPC_pb.User.Kick, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public treeQuery(request: MurmurRPC_pb.Tree.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Tree) => void): grpc.ClientUnaryCall;
    public treeQuery(request: MurmurRPC_pb.Tree.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Tree) => void): grpc.ClientUnaryCall;
    public treeQuery(request: MurmurRPC_pb.Tree.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Tree) => void): grpc.ClientUnaryCall;
    public bansGet(request: MurmurRPC_pb.Ban.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Ban.List) => void): grpc.ClientUnaryCall;
    public bansGet(request: MurmurRPC_pb.Ban.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Ban.List) => void): grpc.ClientUnaryCall;
    public bansGet(request: MurmurRPC_pb.Ban.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Ban.List) => void): grpc.ClientUnaryCall;
    public bansSet(request: MurmurRPC_pb.Ban.List, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public bansSet(request: MurmurRPC_pb.Ban.List, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public bansSet(request: MurmurRPC_pb.Ban.List, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public aCLGet(request: MurmurRPC_pb.Channel, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.ACL.List) => void): grpc.ClientUnaryCall;
    public aCLGet(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.ACL.List) => void): grpc.ClientUnaryCall;
    public aCLGet(request: MurmurRPC_pb.Channel, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.ACL.List) => void): grpc.ClientUnaryCall;
    public aCLSet(request: MurmurRPC_pb.ACL.List, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public aCLSet(request: MurmurRPC_pb.ACL.List, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public aCLSet(request: MurmurRPC_pb.ACL.List, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public aCLGetEffectivePermissions(request: MurmurRPC_pb.ACL.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.ACL) => void): grpc.ClientUnaryCall;
    public aCLGetEffectivePermissions(request: MurmurRPC_pb.ACL.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.ACL) => void): grpc.ClientUnaryCall;
    public aCLGetEffectivePermissions(request: MurmurRPC_pb.ACL.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.ACL) => void): grpc.ClientUnaryCall;
    public aCLAddTemporaryGroup(request: MurmurRPC_pb.ACL.TemporaryGroup, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public aCLAddTemporaryGroup(request: MurmurRPC_pb.ACL.TemporaryGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public aCLAddTemporaryGroup(request: MurmurRPC_pb.ACL.TemporaryGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public aCLRemoveTemporaryGroup(request: MurmurRPC_pb.ACL.TemporaryGroup, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public aCLRemoveTemporaryGroup(request: MurmurRPC_pb.ACL.TemporaryGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public aCLRemoveTemporaryGroup(request: MurmurRPC_pb.ACL.TemporaryGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public authenticatorStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<MurmurRPC_pb.Authenticator.Response, MurmurRPC_pb.Authenticator.Request>;
    public authenticatorStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<MurmurRPC_pb.Authenticator.Response, MurmurRPC_pb.Authenticator.Request>;
    public databaseUserQuery(request: MurmurRPC_pb.DatabaseUser.Query, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser.List) => void): grpc.ClientUnaryCall;
    public databaseUserQuery(request: MurmurRPC_pb.DatabaseUser.Query, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser.List) => void): grpc.ClientUnaryCall;
    public databaseUserQuery(request: MurmurRPC_pb.DatabaseUser.Query, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser.List) => void): grpc.ClientUnaryCall;
    public databaseUserGet(request: MurmurRPC_pb.DatabaseUser, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    public databaseUserGet(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    public databaseUserGet(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    public databaseUserUpdate(request: MurmurRPC_pb.DatabaseUser, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public databaseUserUpdate(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public databaseUserUpdate(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public databaseUserRegister(request: MurmurRPC_pb.DatabaseUser, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    public databaseUserRegister(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    public databaseUserRegister(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    public databaseUserDeregister(request: MurmurRPC_pb.DatabaseUser, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public databaseUserDeregister(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public databaseUserDeregister(request: MurmurRPC_pb.DatabaseUser, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public databaseUserVerify(request: MurmurRPC_pb.DatabaseUser.Verify, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    public databaseUserVerify(request: MurmurRPC_pb.DatabaseUser.Verify, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    public databaseUserVerify(request: MurmurRPC_pb.DatabaseUser.Verify, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.DatabaseUser) => void): grpc.ClientUnaryCall;
    public redirectWhisperGroupAdd(request: MurmurRPC_pb.RedirectWhisperGroup, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public redirectWhisperGroupAdd(request: MurmurRPC_pb.RedirectWhisperGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public redirectWhisperGroupAdd(request: MurmurRPC_pb.RedirectWhisperGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public redirectWhisperGroupRemove(request: MurmurRPC_pb.RedirectWhisperGroup, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public redirectWhisperGroupRemove(request: MurmurRPC_pb.RedirectWhisperGroup, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
    public redirectWhisperGroupRemove(request: MurmurRPC_pb.RedirectWhisperGroup, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: MurmurRPC_pb.Void) => void): grpc.ClientUnaryCall;
}
