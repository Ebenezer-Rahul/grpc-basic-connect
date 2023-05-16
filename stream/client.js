let messages = require("../proto/stream_pb");
let services = require("../proto/stream_grpc_pb.js");

let grpc = require("@grpc/grpc-js");

let client = new services.magicNumberClient("localhost:4001", grpc.credentials.createInsecure());


function requestStream() {

  let index = new messages.req();

  index.setStreamnum(1);
  let call = client.getStream(index);
  call.on('error', (err) => {
    console.log("error: ", err)
  })
  call.on('status', (status) => {
    console.log(status);
  })
  call.on('data', (number) => {
    console.log(number.getNum())
  });
  call.on('end', () => {
    console.log("stream completed")
  });
  console.log("setup completed");
}

function main() {
  console.log("connected to server");
  requestStream();
}

main();
