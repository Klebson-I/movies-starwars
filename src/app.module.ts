import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmModule } from './film/film.module';
import { SpeciesModule } from './species/species.module';

@Module({
  imports: [FilmModule, SpeciesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
