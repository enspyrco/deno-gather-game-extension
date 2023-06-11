# gather-game-extension

[Project Notes](https://www.notion.so/enspyrco/gather-game-extension-27f96173619e4c119a340ace281fee53)

## gather-game-client code

The [gather-game-client-code](https://github.com/enspyrco/gather-game-client-code) repo has the contents of the `gather-game-client` npm package and instructions on how to:

- check the latest version
- pull down and save the code of a new version

## Run locally

You can either add env vars to the environment manually:

```sh
export SPACE_ID="..." && export API_KEY="..."
deno run --allow-net --allow-env server.ts
```

or put add a `.env` file with:

```.env
SPACE_ID="..."
API_KEY="..."
```

and use the "Debug" launch config, which adds the env vars from the `.env` file to the environment as it runs.

### Hitting the local server during prototyping

Use curl:

`curl http://localhost:8080`

Or, if you are using VS Code, and the "REST Client" extension
you can open `test/test.http` and click "Send Request".

## Build and deploy container

Assuming Google Artifect Registry:

```bash
docker build -t us-central1-docker.pkg.dev/PROJECT/REPO/IMAGE:TAG --platform=linux/amd64 .
docker push us-central1-docker.pkg.dev/PROJECT/REPO/IMAGE:TAG
```
