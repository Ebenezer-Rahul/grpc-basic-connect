const services = require("./../proto/communicate_grpc_pb");
const message = require("./../proto/communicate_pb.js");

let grpc = require('@grpc/grpc-js');

let client = new services.serverServiceClient("localhost:5001", grpc.credentials.createInsecure());
console.log("connected to client");


let i = 0;
while (i < 5) {
    let index = new message.Index(); 
    index.setIndex(i);

    client.getResponse(index, (err, message) => {
        if(!err) {
            console.log(err, message.getMystr());
            return ;
        }
        console.log(err);
    });

    i++;
}
