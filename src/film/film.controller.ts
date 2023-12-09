import { Controller, Inject, Get, Param } from '@nestjs/common';
import { FilmService } from './film.service';

@Controller('film')
export class FilmController {
  constructor(@Inject(FilmService) private filmService: FilmService) {}

  @Get('/')
  async getAllFilms() {
    return this.filmService.getAllFilms();
  }

  @Get('/people')
  async getMostOftenPerson() {
    return this.filmService.getMostOftenPerson();
  }

  @Get('/word')
  async getCountedOpeningsWords() {
    return this.filmService.getCountedOpeningsWords();
  }

  @Get('/:id')
  async getFilm(@Param('id') id: string) {
    return this.filmService.getFilm(id);
  }
}
