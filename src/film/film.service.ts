import { Injectable } from '@nestjs/common';
import { FilmRepository } from '../Database/Film/Film.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from '../Database/Film/Film.entity';
import {} from 'typeorm';
import { DataHandler } from '../classes/DataHandler/DataHandler';

@Injectable()
export class FilmService {
  constructor(@InjectRepository(Film) private filmRepository: FilmRepository) {}

  async getAllFilms() {
    const dataHandler = new DataHandler(this.filmRepository, 'FILM');
    const films = await dataHandler.getDataFromCache();
    return films;
  }

  async getFilm(id: string) {
    const dataHandler = new DataHandler(this.filmRepository, 'FILM');
    const film = await dataHandler.getSingleDataFromCache(
      `https://swapi.dev/api/films/${id}/`,
      id,
    );
    return film;
  }
}
