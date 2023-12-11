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
- npm run start:dev

### Run prod version:
- npm i
- npm run build
- npm run start:prod

### Run tests:
- npm run test

## Run by Docker:
In project exist Dockerfile and docker-compose.yaml,
however i cause some bug, and run by docker stop working (I would appreciate a help with that).

1. Navigate in wsl2 or another place where docker is installed to project directory.
2. docker-compose up


