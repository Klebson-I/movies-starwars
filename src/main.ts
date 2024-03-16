import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorFilter } from './filter/Error.filter';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ErrorFilter());
  await app.listen(process.env.APP_PORT);
}
bootstrap();
