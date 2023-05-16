let messages = require("../proto/stream_pb");
let services = require("../proto/stream_grpc_pb.js");

let grpc = require("@grpc/grpc-js");

function getStream(call) {
  let index = call.request.getStreamnum();
  let gap = 100;
  let start = 1000;
  let count = 0;
  if (index != 0) {
    for (let i = 0; i < 100; i++) {
      let response = new messages.number();
      response.setNum(i);
      setTimeout(() => {
        call.write(response);
        count++;
      }, start + gap);
      start += gap;
    }
  }
  setTimeout(() => call.end(), start + gap);
}

function main() {
  let server = new grpc.Server();
  server.addService(services.magicNumberService, {
    getStream: getStream
  });
  server.bindAsync("localhost:4001", grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log("server started at 4000");
  })
}

main();
