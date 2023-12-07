import { Injectable } from '@nestjs/common';
import { FilmRepository } from 'src/Database/Film/Film.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from 'src/Database/Film/Film.entity';
import {} from 'typeorm';
import { DataHandler } from 'src/classes/DataHandler/DataHandler';

@Injectable()
export class FilmService {
  constructor(@InjectRepository(Film) private filmRepository: FilmRepository) {}

  async getAllFilms() {
    const dataHandler = new DataHandler(this.filmRepository, 'FILM');
    const films = await dataHandler.getDataFromCache();
    return films;
  }

  async getFilm(id: string) {}
}
