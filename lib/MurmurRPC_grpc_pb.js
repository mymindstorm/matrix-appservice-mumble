// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2005-2019 The Mumble Developers. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file at the root of the
// Mumble source tree or at <https://www.mumble.info/LICENSE>.
//
'use strict';
var MurmurRPC_pb = require('./MurmurRPC_pb.js');

function serialize_MurmurRPC_ACL(arg) {
  if (!(arg instanceof MurmurRPC_pb.ACL)) {
    throw new Error('Expected argument of type MurmurRPC.ACL');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_ACL(buffer_arg) {
  return MurmurRPC_pb.ACL.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_ACL_List(arg) {
  if (!(arg instanceof MurmurRPC_pb.ACL.List)) {
    throw new Error('Expected argument of type MurmurRPC.ACL.List');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_ACL_List(buffer_arg) {
  return MurmurRPC_pb.ACL.List.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_ACL_Query(arg) {
  if (!(arg instanceof MurmurRPC_pb.ACL.Query)) {
    throw new Error('Expected argument of type MurmurRPC.ACL.Query');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_ACL_Query(buffer_arg) {
  return MurmurRPC_pb.ACL.Query.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_ACL_TemporaryGroup(arg) {
  if (!(arg instanceof MurmurRPC_pb.ACL.TemporaryGroup)) {
    throw new Error('Expected argument of type MurmurRPC.ACL.TemporaryGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_ACL_TemporaryGroup(buffer_arg) {
  return MurmurRPC_pb.ACL.TemporaryGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Authenticator_Request(arg) {
  if (!(arg instanceof MurmurRPC_pb.Authenticator.Request)) {
    throw new Error('Expected argument of type MurmurRPC.Authenticator.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Authenticator_Request(buffer_arg) {
  return MurmurRPC_pb.Authenticator.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Authenticator_Response(arg) {
  if (!(arg instanceof MurmurRPC_pb.Authenticator.Response)) {
    throw new Error('Expected argument of type MurmurRPC.Authenticator.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Authenticator_Response(buffer_arg) {
  return MurmurRPC_pb.Authenticator.Response.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Ban_List(arg) {
  if (!(arg instanceof MurmurRPC_pb.Ban.List)) {
    throw new Error('Expected argument of type MurmurRPC.Ban.List');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Ban_List(buffer_arg) {
  return MurmurRPC_pb.Ban.List.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Ban_Query(arg) {
  if (!(arg instanceof MurmurRPC_pb.Ban.Query)) {
    throw new Error('Expected argument of type MurmurRPC.Ban.Query');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Ban_Query(buffer_arg) {
  return MurmurRPC_pb.Ban.Query.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Channel(arg) {
  if (!(arg instanceof MurmurRPC_pb.Channel)) {
    throw new Error('Expected argument of type MurmurRPC.Channel');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Channel(buffer_arg) {
  return MurmurRPC_pb.Channel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Channel_List(arg) {
  if (!(arg instanceof MurmurRPC_pb.Channel.List)) {
    throw new Error('Expected argument of type MurmurRPC.Channel.List');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Channel_List(buffer_arg) {
  return MurmurRPC_pb.Channel.List.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Channel_Query(arg) {
  if (!(arg instanceof MurmurRPC_pb.Channel.Query)) {
    throw new Error('Expected argument of type MurmurRPC.Channel.Query');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Channel_Query(buffer_arg) {
  return MurmurRPC_pb.Channel.Query.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Config(arg) {
  if (!(arg instanceof MurmurRPC_pb.Config)) {
    throw new Error('Expected argument of type MurmurRPC.Config');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Config(buffer_arg) {
  return MurmurRPC_pb.Config.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Config_Field(arg) {
  if (!(arg instanceof MurmurRPC_pb.Config.Field)) {
    throw new Error('Expected argument of type MurmurRPC.Config.Field');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Config_Field(buffer_arg) {
  return MurmurRPC_pb.Config.Field.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_ContextAction(arg) {
  if (!(arg instanceof MurmurRPC_pb.ContextAction)) {
    throw new Error('Expected argument of type MurmurRPC.ContextAction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_ContextAction(buffer_arg) {
  return MurmurRPC_pb.ContextAction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_DatabaseUser(arg) {
  if (!(arg instanceof MurmurRPC_pb.DatabaseUser)) {
    throw new Error('Expected argument of type MurmurRPC.DatabaseUser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_DatabaseUser(buffer_arg) {
  return MurmurRPC_pb.DatabaseUser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_DatabaseUser_List(arg) {
  if (!(arg instanceof MurmurRPC_pb.DatabaseUser.List)) {
    throw new Error('Expected argument of type MurmurRPC.DatabaseUser.List');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_DatabaseUser_List(buffer_arg) {
  return MurmurRPC_pb.DatabaseUser.List.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_DatabaseUser_Query(arg) {
  if (!(arg instanceof MurmurRPC_pb.DatabaseUser.Query)) {
    throw new Error('Expected argument of type MurmurRPC.DatabaseUser.Query');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_DatabaseUser_Query(buffer_arg) {
  return MurmurRPC_pb.DatabaseUser.Query.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_DatabaseUser_Verify(arg) {
  if (!(arg instanceof MurmurRPC_pb.DatabaseUser.Verify)) {
    throw new Error('Expected argument of type MurmurRPC.DatabaseUser.Verify');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_DatabaseUser_Verify(buffer_arg) {
  return MurmurRPC_pb.DatabaseUser.Verify.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Event(arg) {
  if (!(arg instanceof MurmurRPC_pb.Event)) {
    throw new Error('Expected argument of type MurmurRPC.Event');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Event(buffer_arg) {
  return MurmurRPC_pb.Event.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Log_List(arg) {
  if (!(arg instanceof MurmurRPC_pb.Log.List)) {
    throw new Error('Expected argument of type MurmurRPC.Log.List');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Log_List(buffer_arg) {
  return MurmurRPC_pb.Log.List.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Log_Query(arg) {
  if (!(arg instanceof MurmurRPC_pb.Log.Query)) {
    throw new Error('Expected argument of type MurmurRPC.Log.Query');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Log_Query(buffer_arg) {
  return MurmurRPC_pb.Log.Query.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_RedirectWhisperGroup(arg) {
  if (!(arg instanceof MurmurRPC_pb.RedirectWhisperGroup)) {
    throw new Error('Expected argument of type MurmurRPC.RedirectWhisperGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_RedirectWhisperGroup(buffer_arg) {
  return MurmurRPC_pb.RedirectWhisperGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Server(arg) {
  if (!(arg instanceof MurmurRPC_pb.Server)) {
    throw new Error('Expected argument of type MurmurRPC.Server');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Server(buffer_arg) {
  return MurmurRPC_pb.Server.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Server_Event(arg) {
  if (!(arg instanceof MurmurRPC_pb.Server.Event)) {
    throw new Error('Expected argument of type MurmurRPC.Server.Event');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Server_Event(buffer_arg) {
  return MurmurRPC_pb.Server.Event.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Server_List(arg) {
  if (!(arg instanceof MurmurRPC_pb.Server.List)) {
    throw new Error('Expected argument of type MurmurRPC.Server.List');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Server_List(buffer_arg) {
  return MurmurRPC_pb.Server.List.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Server_Query(arg) {
  if (!(arg instanceof MurmurRPC_pb.Server.Query)) {
    throw new Error('Expected argument of type MurmurRPC.Server.Query');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Server_Query(buffer_arg) {
  return MurmurRPC_pb.Server.Query.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_TextMessage(arg) {
  if (!(arg instanceof MurmurRPC_pb.TextMessage)) {
    throw new Error('Expected argument of type MurmurRPC.TextMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_TextMessage(buffer_arg) {
  return MurmurRPC_pb.TextMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_TextMessage_Filter(arg) {
  if (!(arg instanceof MurmurRPC_pb.TextMessage.Filter)) {
    throw new Error('Expected argument of type MurmurRPC.TextMessage.Filter');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_TextMessage_Filter(buffer_arg) {
  return MurmurRPC_pb.TextMessage.Filter.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Tree(arg) {
  if (!(arg instanceof MurmurRPC_pb.Tree)) {
    throw new Error('Expected argument of type MurmurRPC.Tree');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Tree(buffer_arg) {
  return MurmurRPC_pb.Tree.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Tree_Query(arg) {
  if (!(arg instanceof MurmurRPC_pb.Tree.Query)) {
    throw new Error('Expected argument of type MurmurRPC.Tree.Query');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Tree_Query(buffer_arg) {
  return MurmurRPC_pb.Tree.Query.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Uptime(arg) {
  if (!(arg instanceof MurmurRPC_pb.Uptime)) {
    throw new Error('Expected argument of type MurmurRPC.Uptime');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Uptime(buffer_arg) {
  return MurmurRPC_pb.Uptime.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_User(arg) {
  if (!(arg instanceof MurmurRPC_pb.User)) {
    throw new Error('Expected argument of type MurmurRPC.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_User(buffer_arg) {
  return MurmurRPC_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_User_Kick(arg) {
  if (!(arg instanceof MurmurRPC_pb.User.Kick)) {
    throw new Error('Expected argument of type MurmurRPC.User.Kick');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_User_Kick(buffer_arg) {
  return MurmurRPC_pb.User.Kick.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_User_List(arg) {
  if (!(arg instanceof MurmurRPC_pb.User.List)) {
    throw new Error('Expected argument of type MurmurRPC.User.List');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_User_List(buffer_arg) {
  return MurmurRPC_pb.User.List.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_User_Query(arg) {
  if (!(arg instanceof MurmurRPC_pb.User.Query)) {
    throw new Error('Expected argument of type MurmurRPC.User.Query');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_User_Query(buffer_arg) {
  return MurmurRPC_pb.User.Query.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Version(arg) {
  if (!(arg instanceof MurmurRPC_pb.Version)) {
    throw new Error('Expected argument of type MurmurRPC.Version');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Version(buffer_arg) {
  return MurmurRPC_pb.Version.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MurmurRPC_Void(arg) {
  if (!(arg instanceof MurmurRPC_pb.Void)) {
    throw new Error('Expected argument of type MurmurRPC.Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MurmurRPC_Void(buffer_arg) {
  return MurmurRPC_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var V1Service = exports['MurmurRPC.V1'] = {
  // GetUptime returns murmur's uptime.
getUptime: {
    path: '/MurmurRPC.V1/GetUptime',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Void,
    responseType: MurmurRPC_pb.Uptime,
    requestSerialize: serialize_MurmurRPC_Void,
    requestDeserialize: deserialize_MurmurRPC_Void,
    responseSerialize: serialize_MurmurRPC_Uptime,
    responseDeserialize: deserialize_MurmurRPC_Uptime,
  },
  // GetVersion returns murmur's version.
getVersion: {
    path: '/MurmurRPC.V1/GetVersion',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Void,
    responseType: MurmurRPC_pb.Version,
    requestSerialize: serialize_MurmurRPC_Void,
    requestDeserialize: deserialize_MurmurRPC_Void,
    responseSerialize: serialize_MurmurRPC_Version,
    responseDeserialize: deserialize_MurmurRPC_Version,
  },
  // Events returns a stream of murmur events.
events: {
    path: '/MurmurRPC.V1/Events',
    requestStream: false,
    responseStream: true,
    requestType: MurmurRPC_pb.Void,
    responseType: MurmurRPC_pb.Event,
    requestSerialize: serialize_MurmurRPC_Void,
    requestDeserialize: deserialize_MurmurRPC_Void,
    responseSerialize: serialize_MurmurRPC_Event,
    responseDeserialize: deserialize_MurmurRPC_Event,
  },
  //
// Servers
//
//
// ServerCreate creates a new virtual server. The returned server object
// contains the newly created server's ID.
serverCreate: {
    path: '/MurmurRPC.V1/ServerCreate',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Void,
    responseType: MurmurRPC_pb.Server,
    requestSerialize: serialize_MurmurRPC_Void,
    requestDeserialize: deserialize_MurmurRPC_Void,
    responseSerialize: serialize_MurmurRPC_Server,
    responseDeserialize: deserialize_MurmurRPC_Server,
  },
  // ServerQuery returns a list of servers that match the given query.
serverQuery: {
    path: '/MurmurRPC.V1/ServerQuery',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Server.Query,
    responseType: MurmurRPC_pb.Server.List,
    requestSerialize: serialize_MurmurRPC_Server_Query,
    requestDeserialize: deserialize_MurmurRPC_Server_Query,
    responseSerialize: serialize_MurmurRPC_Server_List,
    responseDeserialize: deserialize_MurmurRPC_Server_List,
  },
  // ServerGet returns information about the given server.
serverGet: {
    path: '/MurmurRPC.V1/ServerGet',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Server,
    responseType: MurmurRPC_pb.Server,
    requestSerialize: serialize_MurmurRPC_Server,
    requestDeserialize: deserialize_MurmurRPC_Server,
    responseSerialize: serialize_MurmurRPC_Server,
    responseDeserialize: deserialize_MurmurRPC_Server,
  },
  // ServerStart starts the given stopped server.
serverStart: {
    path: '/MurmurRPC.V1/ServerStart',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Server,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_Server,
    requestDeserialize: deserialize_MurmurRPC_Server,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  // ServerStop stops the given virtual server.
serverStop: {
    path: '/MurmurRPC.V1/ServerStop',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Server,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_Server,
    requestDeserialize: deserialize_MurmurRPC_Server,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  // ServerRemove removes the given virtual server and its configuration.
serverRemove: {
    path: '/MurmurRPC.V1/ServerRemove',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Server,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_Server,
    requestDeserialize: deserialize_MurmurRPC_Server,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  // ServerEvents returns a stream of events that happen on the given server.
serverEvents: {
    path: '/MurmurRPC.V1/ServerEvents',
    requestStream: false,
    responseStream: true,
    requestType: MurmurRPC_pb.Server,
    responseType: MurmurRPC_pb.Server.Event,
    requestSerialize: serialize_MurmurRPC_Server,
    requestDeserialize: deserialize_MurmurRPC_Server,
    responseSerialize: serialize_MurmurRPC_Server_Event,
    responseDeserialize: deserialize_MurmurRPC_Server_Event,
  },
  //
// ContextActions
//
//
// ContextActionAdd adds a context action to the given user's client. The
// following ContextAction fields must be set:
//   context, action, text, and user.
//
// Added context actions are valid until:
//  - The context action is removed with ContextActionRemove, or
//  - The user disconnects from the server, or
//  - The server stops.
contextActionAdd: {
    path: '/MurmurRPC.V1/ContextActionAdd',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.ContextAction,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_ContextAction,
    requestDeserialize: deserialize_MurmurRPC_ContextAction,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  // ContextActionRemove removes a context action from the given user's client.
// The following ContextAction must be set:
//   action
// If no user is given, the context action is removed from all users.
contextActionRemove: {
    path: '/MurmurRPC.V1/ContextActionRemove',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.ContextAction,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_ContextAction,
    requestDeserialize: deserialize_MurmurRPC_ContextAction,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  // ContextActionEvents returns a stream of context action events that are
// triggered by users.
contextActionEvents: {
    path: '/MurmurRPC.V1/ContextActionEvents',
    requestStream: false,
    responseStream: true,
    requestType: MurmurRPC_pb.ContextAction,
    responseType: MurmurRPC_pb.ContextAction,
    requestSerialize: serialize_MurmurRPC_ContextAction,
    requestDeserialize: deserialize_MurmurRPC_ContextAction,
    responseSerialize: serialize_MurmurRPC_ContextAction,
    responseDeserialize: deserialize_MurmurRPC_ContextAction,
  },
  //
// TextMessage
//
//
// TextMessageSend sends the given TextMessage to the server.
//
// If no users, channels, or trees are added to the TextMessage, the message
// will be broadcast the entire server. Otherwise, the message will be
// targeted to the specified users, channels, and trees.
textMessageSend: {
    path: '/MurmurRPC.V1/TextMessageSend',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.TextMessage,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_TextMessage,
    requestDeserialize: deserialize_MurmurRPC_TextMessage,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  // TextMessageFilter filters text messages on a given server.
// TextMessageFilter filters text messages for a given server.
//
// When a filter stream is active, text messages sent from users to the
// server are sent over the stream. The RPC client then sends a message back
// on the same stream, containing an action: whether the message should be
// accepted, rejected, or dropped.
//
// To activate the filter stream, an initial TextMessage.Filter message must
// be sent that contains the server on which the filter will be active.
textMessageFilter: {
    path: '/MurmurRPC.V1/TextMessageFilter',
    requestStream: true,
    responseStream: true,
    requestType: MurmurRPC_pb.TextMessage.Filter,
    responseType: MurmurRPC_pb.TextMessage.Filter,
    requestSerialize: serialize_MurmurRPC_TextMessage_Filter,
    requestDeserialize: deserialize_MurmurRPC_TextMessage_Filter,
    responseSerialize: serialize_MurmurRPC_TextMessage_Filter,
    responseDeserialize: deserialize_MurmurRPC_TextMessage_Filter,
  },
  //
// Logs
//
//
// LogQuery returns a list of log entries from the given server.
//
// To get the total number of log entries, omit min and/or max from the
// query.
logQuery: {
    path: '/MurmurRPC.V1/LogQuery',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Log.Query,
    responseType: MurmurRPC_pb.Log.List,
    requestSerialize: serialize_MurmurRPC_Log_Query,
    requestDeserialize: deserialize_MurmurRPC_Log_Query,
    responseSerialize: serialize_MurmurRPC_Log_List,
    responseDeserialize: deserialize_MurmurRPC_Log_List,
  },
  //
// Config
//
//
// ConfigGet returns the explicitly set configuration for the given server.
configGet: {
    path: '/MurmurRPC.V1/ConfigGet',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Server,
    responseType: MurmurRPC_pb.Config,
    requestSerialize: serialize_MurmurRPC_Server,
    requestDeserialize: deserialize_MurmurRPC_Server,
    responseSerialize: serialize_MurmurRPC_Config,
    responseDeserialize: deserialize_MurmurRPC_Config,
  },
  // ConfigGetField returns the configuration value for the given key.
configGetField: {
    path: '/MurmurRPC.V1/ConfigGetField',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Config.Field,
    responseType: MurmurRPC_pb.Config.Field,
    requestSerialize: serialize_MurmurRPC_Config_Field,
    requestDeserialize: deserialize_MurmurRPC_Config_Field,
    responseSerialize: serialize_MurmurRPC_Config_Field,
    responseDeserialize: deserialize_MurmurRPC_Config_Field,
  },
  // ConfigSetField sets the configuration value to the given value.
configSetField: {
    path: '/MurmurRPC.V1/ConfigSetField',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Config.Field,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_Config_Field,
    requestDeserialize: deserialize_MurmurRPC_Config_Field,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  // ConfigGetDefault returns the default server configuration.
configGetDefault: {
    path: '/MurmurRPC.V1/ConfigGetDefault',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Void,
    responseType: MurmurRPC_pb.Config,
    requestSerialize: serialize_MurmurRPC_Void,
    requestDeserialize: deserialize_MurmurRPC_Void,
    responseSerialize: serialize_MurmurRPC_Config,
    responseDeserialize: deserialize_MurmurRPC_Config,
  },
  //
// Channels
//
//
// ChannelQuery returns a list of channels that match the given query.
channelQuery: {
    path: '/MurmurRPC.V1/ChannelQuery',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Channel.Query,
    responseType: MurmurRPC_pb.Channel.List,
    requestSerialize: serialize_MurmurRPC_Channel_Query,
    requestDeserialize: deserialize_MurmurRPC_Channel_Query,
    responseSerialize: serialize_MurmurRPC_Channel_List,
    responseDeserialize: deserialize_MurmurRPC_Channel_List,
  },
  // ChannelGet returns the channel with the given ID.
channelGet: {
    path: '/MurmurRPC.V1/ChannelGet',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Channel,
    responseType: MurmurRPC_pb.Channel,
    requestSerialize: serialize_MurmurRPC_Channel,
    requestDeserialize: deserialize_MurmurRPC_Channel,
    responseSerialize: serialize_MurmurRPC_Channel,
    responseDeserialize: deserialize_MurmurRPC_Channel,
  },
  // ChannelAdd adds the channel to the given server. The parent and name of
// the channel must be set.
channelAdd: {
    path: '/MurmurRPC.V1/ChannelAdd',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Channel,
    responseType: MurmurRPC_pb.Channel,
    requestSerialize: serialize_MurmurRPC_Channel,
    requestDeserialize: deserialize_MurmurRPC_Channel,
    responseSerialize: serialize_MurmurRPC_Channel,
    responseDeserialize: deserialize_MurmurRPC_Channel,
  },
  // ChannelRemove removes the given channel from the server.
channelRemove: {
    path: '/MurmurRPC.V1/ChannelRemove',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Channel,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_Channel,
    requestDeserialize: deserialize_MurmurRPC_Channel,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  // ChannelUpdate updates the given channel's attributes. Only the fields that
// are set will be updated.
channelUpdate: {
    path: '/MurmurRPC.V1/ChannelUpdate',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Channel,
    responseType: MurmurRPC_pb.Channel,
    requestSerialize: serialize_MurmurRPC_Channel,
    requestDeserialize: deserialize_MurmurRPC_Channel,
    responseSerialize: serialize_MurmurRPC_Channel,
    responseDeserialize: deserialize_MurmurRPC_Channel,
  },
  //
// Users
//
//
// UserQuery returns a list of connected users who match the given query.
userQuery: {
    path: '/MurmurRPC.V1/UserQuery',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.User.Query,
    responseType: MurmurRPC_pb.User.List,
    requestSerialize: serialize_MurmurRPC_User_Query,
    requestDeserialize: deserialize_MurmurRPC_User_Query,
    responseSerialize: serialize_MurmurRPC_User_List,
    responseDeserialize: deserialize_MurmurRPC_User_List,
  },
  // UserGet returns information on the connected user, given by the user's
// session or name.
userGet: {
    path: '/MurmurRPC.V1/UserGet',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.User,
    responseType: MurmurRPC_pb.User,
    requestSerialize: serialize_MurmurRPC_User,
    requestDeserialize: deserialize_MurmurRPC_User,
    responseSerialize: serialize_MurmurRPC_User,
    responseDeserialize: deserialize_MurmurRPC_User,
  },
  // UserUpdate changes the given user's state. Only the following fields can
// be changed:
//   name, mute, deaf, suppress, priority_speaker, channel, comment.
userUpdate: {
    path: '/MurmurRPC.V1/UserUpdate',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.User,
    responseType: MurmurRPC_pb.User,
    requestSerialize: serialize_MurmurRPC_User,
    requestDeserialize: deserialize_MurmurRPC_User,
    responseSerialize: serialize_MurmurRPC_User,
    responseDeserialize: deserialize_MurmurRPC_User,
  },
  // UserKick kicks the user from the server.
userKick: {
    path: '/MurmurRPC.V1/UserKick',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.User.Kick,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_User_Kick,
    requestDeserialize: deserialize_MurmurRPC_User_Kick,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  //
// Tree
//
//
// TreeQuery returns a representation of the given server's channel/user
// tree.
treeQuery: {
    path: '/MurmurRPC.V1/TreeQuery',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Tree.Query,
    responseType: MurmurRPC_pb.Tree,
    requestSerialize: serialize_MurmurRPC_Tree_Query,
    requestDeserialize: deserialize_MurmurRPC_Tree_Query,
    responseSerialize: serialize_MurmurRPC_Tree,
    responseDeserialize: deserialize_MurmurRPC_Tree,
  },
  //
// Bans
//
//
// BansGet returns a list of bans for the given server.
bansGet: {
    path: '/MurmurRPC.V1/BansGet',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Ban.Query,
    responseType: MurmurRPC_pb.Ban.List,
    requestSerialize: serialize_MurmurRPC_Ban_Query,
    requestDeserialize: deserialize_MurmurRPC_Ban_Query,
    responseSerialize: serialize_MurmurRPC_Ban_List,
    responseDeserialize: deserialize_MurmurRPC_Ban_List,
  },
  // BansSet replaces the server's ban list with the given list.
bansSet: {
    path: '/MurmurRPC.V1/BansSet',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Ban.List,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_Ban_List,
    requestDeserialize: deserialize_MurmurRPC_Ban_List,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  //
// ACL
//
//
// ACLGet returns the ACL for the given channel.
aCLGet: {
    path: '/MurmurRPC.V1/ACLGet',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.Channel,
    responseType: MurmurRPC_pb.ACL.List,
    requestSerialize: serialize_MurmurRPC_Channel,
    requestDeserialize: deserialize_MurmurRPC_Channel,
    responseSerialize: serialize_MurmurRPC_ACL_List,
    responseDeserialize: deserialize_MurmurRPC_ACL_List,
  },
  // ACLSet overrides the ACL of the given channel to what is provided.
aCLSet: {
    path: '/MurmurRPC.V1/ACLSet',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.ACL.List,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_ACL_List,
    requestDeserialize: deserialize_MurmurRPC_ACL_List,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  // ACLGetEffectivePermissions returns the effective permissions for the given
// user in the given channel.
aCLGetEffectivePermissions: {
    path: '/MurmurRPC.V1/ACLGetEffectivePermissions',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.ACL.Query,
    responseType: MurmurRPC_pb.ACL,
    requestSerialize: serialize_MurmurRPC_ACL_Query,
    requestDeserialize: deserialize_MurmurRPC_ACL_Query,
    responseSerialize: serialize_MurmurRPC_ACL,
    responseDeserialize: deserialize_MurmurRPC_ACL,
  },
  // ACLAddTemporaryGroup adds a user to a temporary group.
aCLAddTemporaryGroup: {
    path: '/MurmurRPC.V1/ACLAddTemporaryGroup',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.ACL.TemporaryGroup,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_ACL_TemporaryGroup,
    requestDeserialize: deserialize_MurmurRPC_ACL_TemporaryGroup,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  // ACLRemoveTemporaryGroup removes a user from a temporary group.
aCLRemoveTemporaryGroup: {
    path: '/MurmurRPC.V1/ACLRemoveTemporaryGroup',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.ACL.TemporaryGroup,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_ACL_TemporaryGroup,
    requestDeserialize: deserialize_MurmurRPC_ACL_TemporaryGroup,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  //
// Authenticator
//
//
// AuthenticatorStream opens an authentication stream to the server.
//
// There can only be one RPC client with an open Stream. If a new
// authenticator connects, the open connected will be closed.
authenticatorStream: {
    path: '/MurmurRPC.V1/AuthenticatorStream',
    requestStream: true,
    responseStream: true,
    requestType: MurmurRPC_pb.Authenticator.Response,
    responseType: MurmurRPC_pb.Authenticator.Request,
    requestSerialize: serialize_MurmurRPC_Authenticator_Response,
    requestDeserialize: deserialize_MurmurRPC_Authenticator_Response,
    responseSerialize: serialize_MurmurRPC_Authenticator_Request,
    responseDeserialize: deserialize_MurmurRPC_Authenticator_Request,
  },
  //
// Database
//
//
// DatabaseUserQuery returns a list of registered users who match given
// query.
databaseUserQuery: {
    path: '/MurmurRPC.V1/DatabaseUserQuery',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.DatabaseUser.Query,
    responseType: MurmurRPC_pb.DatabaseUser.List,
    requestSerialize: serialize_MurmurRPC_DatabaseUser_Query,
    requestDeserialize: deserialize_MurmurRPC_DatabaseUser_Query,
    responseSerialize: serialize_MurmurRPC_DatabaseUser_List,
    responseDeserialize: deserialize_MurmurRPC_DatabaseUser_List,
  },
  // DatabaseUserGet returns the database user with the given ID.
databaseUserGet: {
    path: '/MurmurRPC.V1/DatabaseUserGet',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.DatabaseUser,
    responseType: MurmurRPC_pb.DatabaseUser,
    requestSerialize: serialize_MurmurRPC_DatabaseUser,
    requestDeserialize: deserialize_MurmurRPC_DatabaseUser,
    responseSerialize: serialize_MurmurRPC_DatabaseUser,
    responseDeserialize: deserialize_MurmurRPC_DatabaseUser,
  },
  // DatabaseUserUpdate updates the given database user.
databaseUserUpdate: {
    path: '/MurmurRPC.V1/DatabaseUserUpdate',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.DatabaseUser,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_DatabaseUser,
    requestDeserialize: deserialize_MurmurRPC_DatabaseUser,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  // DatabaseUserRegister registers a user with the given information on the
// server. The returned DatabaseUser will contain the newly registered user's
// ID.
databaseUserRegister: {
    path: '/MurmurRPC.V1/DatabaseUserRegister',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.DatabaseUser,
    responseType: MurmurRPC_pb.DatabaseUser,
    requestSerialize: serialize_MurmurRPC_DatabaseUser,
    requestDeserialize: deserialize_MurmurRPC_DatabaseUser,
    responseSerialize: serialize_MurmurRPC_DatabaseUser,
    responseDeserialize: deserialize_MurmurRPC_DatabaseUser,
  },
  // DatabaseUserDeregister deregisters the given user.
databaseUserDeregister: {
    path: '/MurmurRPC.V1/DatabaseUserDeregister',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.DatabaseUser,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_DatabaseUser,
    requestDeserialize: deserialize_MurmurRPC_DatabaseUser,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  // DatabaseUserVerify verifies the that the given user-password pair is
// correct.
databaseUserVerify: {
    path: '/MurmurRPC.V1/DatabaseUserVerify',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.DatabaseUser.Verify,
    responseType: MurmurRPC_pb.DatabaseUser,
    requestSerialize: serialize_MurmurRPC_DatabaseUser_Verify,
    requestDeserialize: deserialize_MurmurRPC_DatabaseUser_Verify,
    responseSerialize: serialize_MurmurRPC_DatabaseUser,
    responseDeserialize: deserialize_MurmurRPC_DatabaseUser,
  },
  //
// Audio
//
//
// AddRedirectWhisperGroup add a whisper targets redirection for the given
// user. Whenever a user whispers to group "source", the whisper will be
// redirected to group "target".
redirectWhisperGroupAdd: {
    path: '/MurmurRPC.V1/RedirectWhisperGroupAdd',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.RedirectWhisperGroup,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_RedirectWhisperGroup,
    requestDeserialize: deserialize_MurmurRPC_RedirectWhisperGroup,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
  // RemoveRedirectWhisperGroup removes a whisper target redirection for
// the the given user.
redirectWhisperGroupRemove: {
    path: '/MurmurRPC.V1/RedirectWhisperGroupRemove',
    requestStream: false,
    responseStream: false,
    requestType: MurmurRPC_pb.RedirectWhisperGroup,
    responseType: MurmurRPC_pb.Void,
    requestSerialize: serialize_MurmurRPC_RedirectWhisperGroup,
    requestDeserialize: deserialize_MurmurRPC_RedirectWhisperGroup,
    responseSerialize: serialize_MurmurRPC_Void,
    responseDeserialize: deserialize_MurmurRPC_Void,
  },
};

//
// Meta
//
