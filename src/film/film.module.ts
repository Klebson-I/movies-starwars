import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';
import { Film } from '../Database/Film/Film.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from 'src/Database/People/People.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Film, People])],
  providers: [FilmService],
  controllers: [FilmController],
  exports: [FilmService],
})
export class FilmModule {}
