// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_communicate_pb = require('../proto/communicate_pb.js');

function serialize_my_package_Index(arg) {
  if (!(arg instanceof proto_communicate_pb.Index)) {
    throw new Error('Expected argument of type my_package.Index');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_my_package_Index(buffer_arg) {
  return proto_communicate_pb.Index.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_my_package_request_str(arg) {
  if (!(arg instanceof proto_communicate_pb.request_str)) {
    throw new Error('Expected argument of type my_package.request_str');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_my_package_request_str(buffer_arg) {
  return proto_communicate_pb.request_str.deserializeBinary(new Uint8Array(buffer_arg));
}


var clientServiceService = exports.clientServiceService = {
  whichIndex: {
    path: '/my_package.clientService/whichIndex',
    requestStream: false,
    responseStream: false,
    requestType: proto_communicate_pb.request_str,
    responseType: proto_communicate_pb.Index,
    requestSerialize: serialize_my_package_request_str,
    requestDeserialize: deserialize_my_package_request_str,
    responseSerialize: serialize_my_package_Index,
    responseDeserialize: deserialize_my_package_Index,
  },
};

exports.clientServiceClient = grpc.makeGenericClientConstructor(clientServiceService);
var serverServiceService = exports.serverServiceService = {
  getResponse: {
    path: '/my_package.serverService/getResponse',
    requestStream: false,
    responseStream: false,
    requestType: proto_communicate_pb.Index,
    responseType: proto_communicate_pb.request_str,
    requestSerialize: serialize_my_package_Index,
    requestDeserialize: deserialize_my_package_Index,
    responseSerialize: serialize_my_package_request_str,
    responseDeserialize: deserialize_my_package_request_str,
  },
};

exports.serverServiceClient = grpc.makeGenericClientConstructor(serverServiceService);
