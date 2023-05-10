let PROTO_PATH ='./proto/communicate.proto';

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

let serverService = protoDescriptor.my_package.serverService;

let server = new grpc.Server();
server.addService(
  serverService.service , {
    getResponse : (req, callback) => {
      console.log(req);
      callback(null, 
        {
          mystr : "Hello World"
        }
      )
      console.log("sent");
    }
  } 
);

server.bindAsync('localhost:5001', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log("server started");
});
