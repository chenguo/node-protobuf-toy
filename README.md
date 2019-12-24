# Toy Protobuf Node Server / Client

We have a toy service defined in `src/app.proto`. From here we can generate the interface:

```bash
$ yarn pbjs -t static-module -w commonjs -o src/app.gen.js src/app.proto
$ yarn pbts -o src/app.gen.d.ts src/app.gen.js
```

This generates a `src/app.gen.js` with the implementations of Protobuf messages and client calls, and a `src/app.gen.d.ts` with the corresponding typings.

# Server

We define a handler map in `src/api.ts`, which is used in `src/server.ts`. The latter contains GRPC boilerplate that should not need be touched.

# Client

`src/client-grpc.ts` has GRPC boilerplate set up code, and is used in `src/client.ts` where client method implementations wrap the underlying GRPC calls.
