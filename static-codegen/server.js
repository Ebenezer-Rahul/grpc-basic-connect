const services = require("./../proto/communicate_grpc_pb");
const message = require("./../proto/communicate_pb.js");
let grpc = require('@grpc/grpc-js');
let serverService = services.serverServiceService;

let createResponse = function (myNum) {

    let mymessage = new message.request_str();

    if(myNum.getIndex() % 2 == 0) {
        mymessage.setMystr("Hello, World!");
    } else {
        mymessage.setMystr("Bye, World!");
    }

    return mymessage;
}

let getResponse = function (call , callback) {
    let err = null;
    callback(err , createResponse(call.request));
    console.log("sent message!"); 
}


let server = new grpc.Server();
  server.addService(
      serverService , {
        getResponse : getResponse  
      } 
  );

server.bindAsync('localhost:5001', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log("server started");
});
