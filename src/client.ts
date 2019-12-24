import grpcClient from './client-grpc';
import { Account } from './app.gen';


async function fooFn(request) {
  const r = new Account.GetAccountRequest(request)
  const resp = await grpcClient.fooFn(r);
  console.log(resp);
  return resp;
}

async function barFn(request) {
  const r = Account.GetAccountRequest.create(request);
  grpcClient.barFn(r, (err, resp) => {
    console.log('resp', resp);
  });
}


barFn({id: 'some-id'});
