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

### Environment variables

Copy the file `config.toml.dist` into the `config.toml` and fill the environment variable. (mostly database related environment variables)

### Running the gRPC service

#### Run the hospital service

```shell
cd hospital && cargo run
```

:::info

If the service is up. You may see a similar message than the one below

```bash
[2022-01-14T14:23:13Z INFO  mask] Connecting to the database
[2022-01-14T14:23:13Z INFO  mask] Server is running on port 9000 & Healthcheck server port 5601
```


:::

#### Run the pcr service

```shell
cd pcr && cargo run
```

:::info

If the service is up. You may see a similar message than the one below

```shell
[2022-01-14T14:23:39Z INFO  pcr] Connecting to the database
[2022-01-14T14:23:39Z INFO  pcr] Starting the server port 9090 & Healthcheck server port 5601
```

:::

## Tools

If you use vscode you may install

- [Rust analyzer](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer)
- [Protobuf intellisence](https://marketplace.visualstudio.com/items?itemName=zxh404.vscode-proto3)
