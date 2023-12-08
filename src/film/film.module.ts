import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';
import { Film } from '../Database/Film/film.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Film])],
  providers: [FilmService],
  controllers: [FilmController],
  exports: [FilmService],
})
export class FilmModule {}
