import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import handlers from './api';

const packageDef = protoLoader.loadSync(
  __dirname + '/app.proto',
  {keepCase: true,
   longs: String,
   enums: String,
   defaults: true,
   oneofs: true
  }
);

var protoDescriptor = grpc.loadPackageDefinition(packageDef);
var myservice = protoDescriptor.Account;

function getServer() {
  const server = new grpc.Server();
  server.addService(
    (myservice as any).AccountService.service,
    handlers
  );
  return server;
}

const server = getServer();
server.bind('0.0.0.0:8080', grpc.ServerCredentials.createInsecure());
server.start();
