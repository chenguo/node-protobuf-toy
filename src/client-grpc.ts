import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import { Account } from './app.gen';

const packageDef = protoLoader.loadSync(
  __dirname + '/app.proto',
  {keepCase: true,
   longs: String,
   enums: String,
   defaults: true,
   oneofs: true
  }
);

const protoDescriptor = grpc.loadPackageDefinition(packageDef).Account;
const AccountService = (protoDescriptor as any).AccountService;
const client: Account.AccountService = new AccountService('0.0.0.0:8080', grpc.credentials.createInsecure());

export default client;
