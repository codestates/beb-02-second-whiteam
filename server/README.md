## Prerequisite

- MySQL server
- IPFS command line

## Documents

- [API Specification](./api_specification.md)

## Getting Started

To get started this project, please follow few steps below:

### 🚨CAUTION🚨

You have to get started blockchain before server.

Run IPFS daemon:

```
$ ipfs init
$ ipfs daemon
```

Install dependencies:

```
$ npm install
```

Create .env file:

```
$ touch .env
```

Set environment variables properly in .env file:

```
DATABASE_NAME=(db_name)
DATABASE_USERNAME=(db_user)
DATABASE_PASSWORD=(db_password)
DATABASE_HOST=('localhost' or db_host)
PROVIDER=('http://localhost:8545' or blockchain provider)
PRIVATE_KEY=(private_key)
IPFS=('localhost' or ipfs host address)
IPFS_PORT=('5001' or ipfs port number)
```

Start the server:

```
$ npm run start
```
