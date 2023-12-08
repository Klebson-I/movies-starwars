import { Controller, Inject, Get, Param } from '@nestjs/common';
import { FilmService } from './film.service';

@Controller('film')
export class FilmController {
  constructor(@Inject(FilmService) private filmService: FilmService) {}

  @Get('/')
  async getAllFilms() {
    return this.filmService.getAllFilms();
  }

  @Get('/:id')
  async getFilm(@Param('id') id: string) {
    return this.filmService.getFilm(id);
  }
}
