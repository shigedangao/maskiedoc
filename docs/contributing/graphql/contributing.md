---
sidebar_position: 2
---

# Contributing

The repository can be founded [here](https://github.com/shigedangao/graphie). Feel free to fork and add new GraphQL queries.

## Requirements for Docker user

If you use **Docker** / **Podman** or similar tool. A `docker-compose.yaml` is available which can be uses to easily setup everything.

## Requirements for Non docker user

If you don't use Docker. Then make sure that you have already set up the gRPC services. The guide can be found [here](../gRPC/configuration.md). Once done, you need to install the following tools:

- [NodeJS + NPM](https://nodejs.org/en/)

### Run the project

Before running the project. You'll need to clone the submodules. Submodules are used to retrieve the list of protos which are located on the [mask](https://github.com/shigedangao/mask) repository.

This can be done with the command

```shell
git clone --recurse-submodules --remote-submodules
```

Thereafter, we need to generate TS code from the protobuf file. This can be done with the command

```shell
npm run gen-proto
```

Once done, you can run the server with the command

```shell
npm run watch
```
