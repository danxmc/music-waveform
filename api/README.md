# README

This is the Node/express API for the audio-waveform app.

## Development

* After cloning the repo and installing the dependencies by running `yarn` from the project root

* Copy env files:
```
cp scripts/local.env .env
```

* Generate certificates
```sh
mkdir certs
openssl req -x509 -newkey rsa:2048 -keyout certs/client.key -out certs/client.crt -days 365 -nodes
```

## Intalling Couchbase

In order to run the API you need to install Couchbase server on your local machine. To do so
folloe the [official documentation](https://docs.couchbase.com/server/current/install/install-intro.html), or run a
local Docker container instead with the following command:

```bash
# Start Couchbase in the background, with ports 8091-8094 and 11210 exposed locally
docker-compose up -d
```

Then follow these steps:

0. Set COUCHBASE_USER and COUCHBASE_PASSWORD on your `.env` file.
1. Once you have everything installed got to `hhtp://127.0.0.1:8091/` and log in with the credentials you provided.
2. In the manu go to `Buckets` on the top-right corner hit `ADD_BUCKET`.
3. Add a bucket with the name of `audio-waveform-local`.
4. In the manu got to `Query` and execute the following command

```bash
CREATE PRIMARY INDEX `idx_primary` ON `audio-waveform-local`;
```

## Run

* API local devalopment
```bash
# API will be listening on `http://localhost:5055/
yarn dev
```

* For Production
```bash
yarn start
```

## Test

```bash
# Only unit tests
yarn test:unit
# Only integration tests
yarn test:integration
# All tests
yarn test
```

# API Documentation
If the `ENABLE_SWAGGER_DOCS` is set to `true`, the `/api-docs` endpoint will display the Swagger documentation
for the API (locally: http://localhost:5055/api-docs/). The JSON (OpenAPI v3)
documentation will also be mande available under `/api-docs.json`.
