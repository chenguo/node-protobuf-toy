import { Account } from './app.gen.js';

function fooFn(getRequest: Account.IGetAccountRequest)
: Account.IAccountResponse {
  console.log(getRequest.id);
  return {
    id: "foo",
    balance: 100.0
  }
}


function barFn(getRequest: Account.IGetAccountRequest)
: Account.IGetAccountRequest {
  console.log("bar", getRequest.id);
  return {
    id: "foo" + "_resp"
  }
}

export default {

  fooFn: (call, callback) => {
    callback(null, fooFn(call.request));
  },

  barFn: (call, callback) => {
    callback(null, barFn(call.request));
  }

}
