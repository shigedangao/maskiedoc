---
sidebar_position: 2
---

# Configuration

Below is a small starting guide at setting up the project. A detailed explanation can be founded on [GitHub](https://github.com/shigedangao/mask)

## Configuration for Docker user

You'll only need to install [BloomRPC](https://github.com/bloomrpc/bloomrpc). A docker-compose.yaml is provided which you can use to run the project

## Configuration for non Docker user

If you decide to not use the provided docker-compose.yaml. You may need to install these components:

- [Rust](https://www.rust-lang.org/)
- [Postgres](https://www.postgresql.org/)
- [Python](https://www.python.org/downloads/)
- A database GUI tool

### Generate TLS keys

GRPC server are running in secure mode. As such it uses a pair of keys. To generate these keys. You can use the command below

```shell
chmod +x generator.sh

./generator.sh
```

### Environment variables

Copy the file `config.toml.dist` into the `config.toml` and fill the environment variable. (Mostly database related environment variable)

### Running the gRPC service

As describe earlier. There are 2 gRPC services:

#### Run the hospital service

```shell
cd hospital && cargo run
```

:::info

If the service is up. You may see a message showing that the server is running port 9000

:::

#### Run the pcr service

```shell
cd pcr && cargo run
```

:::info

If the service is up. You may see a message showing that the server is running port 9090

:::

### Running the gRPC server as insecure

If you don't want to generate TLS keys. You should edit the `main.rs` file on the **hospital/src** & **pcr/src folder**

```diff
Server::builder()
-   .tls_config(ServerTlsConfig::new().identity(identity))?
+   //.tls_config(ServerTlsConfig::new().identity(identity))?
```

## Tools

If you use vscode you may install

- [Rust analyzer](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer)
- [Protobuf intellisence](https://marketplace.visualstudio.com/items?itemName=zxh404.vscode-proto3)
