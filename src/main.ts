import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dataSource = new DataSource({
    type: 'mongodb',
    url: 'mongodb+srv://lukaszkleba:devil1234@cluster0.xerdy.mongodb.net/?retryWrites=true&w=majority',
    useNewUrlParser: true,
    synchronize: true,
    entities: ['src/**/*.entity.ts'],
  });
  await dataSource.initialize();
  await app.listen(3000);
}
bootstrap();
