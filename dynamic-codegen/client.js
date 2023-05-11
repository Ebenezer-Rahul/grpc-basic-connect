let PROTO_PATH = './../proto/communicate.proto';

const grpc = require("@grpc/grpc-js");

let protoLoader = require("@grpc/proto-loader")

let packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
     keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
  }
);

let protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
let ClientService = protoDescriptor.my_package.serverService

let client = new ClientService("localhost:5001", grpc.credentials.createInsecure());


let index = {
  index : 1
}


let i = 0;
while (i < 1) {
  let message = client.getResponse(index, (err, message) => {
      if(err == null)
      {
        console.log(err, message);
      }
  });
  i++;
}
