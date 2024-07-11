# Description
Cache application for https://swapi.dev/ API.
Cache is set up to autoclean on given time. To set this time go to:
\src\Cleanup\scheduler.service.ts

You will find following code:

onModuleInit() {
  cron.schedule('minute hour * * *', async () => {
    await this.cleanupService.cleanupCollections();
  });
}

replace 'minute' and 'hour' with real values to set time

## Run project
You should have NestJS installed globally.

### Run dev version:
- npm i
- npm run start:dev ( you need to have mongodb running locally)

### Run prod version:
- npm i
- npm run build
- npm run start:prod

### Run tests:
- npm run test

## Run by Docker (with mongodb automatically set):
In project exist Dockerfile and docker-compose.yaml.

1. Navigate in wsl2 or another place where docker is installed to project directory.
2. docker compose build
3. docker compose up -d

App should be running on port 3001 of your localhost.
If some error occurs, create docker network manually with:
- docker network create app_net

# Api docs:
### There is container in project that sets swagger on localhost:8081.
### After docker compose up should be available.
### Swagger is not set to work with live requests, its used just to make visualization of examples.


