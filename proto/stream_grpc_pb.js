// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var stream_pb = require('./stream_pb.js');

function serialize_mystreamer_number(arg) {
  if (!(arg instanceof stream_pb.number)) {
    throw new Error('Expected argument of type mystreamer.number');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mystreamer_number(buffer_arg) {
  return stream_pb.number.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mystreamer_req(arg) {
  if (!(arg instanceof stream_pb.req)) {
    throw new Error('Expected argument of type mystreamer.req');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mystreamer_req(buffer_arg) {
  return stream_pb.req.deserializeBinary(new Uint8Array(buffer_arg));
}


var magicNumberService = exports.magicNumberService = {
  getStream: {
    path: '/mystreamer.magicNumber/getStream',
    requestStream: false,
    responseStream: true,
    requestType: stream_pb.req,
    responseType: stream_pb.number,
    requestSerialize: serialize_mystreamer_req,
    requestDeserialize: deserialize_mystreamer_req,
    responseSerialize: serialize_mystreamer_number,
    responseDeserialize: deserialize_mystreamer_number,
  },
};

exports.magicNumberClient = grpc.makeGenericClientConstructor(magicNumberService);
