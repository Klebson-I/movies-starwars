import { Injectable } from '@nestjs/common';
import { FilmRepository } from '../Database/Film/Film.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from '../Database/Film/Film.entity';
import {} from 'typeorm';
import { DataHandler } from '../classes/DataHandler/DataHandler';
import { People } from 'src/Database/People/People.entity';
import { PeopleRepository } from 'src/Database/People/People.repository';
import {
  getAllPeopleNames,
  getFilmsOpenings,
  getMostOftenPeople,
} from './utils';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film) private filmRepository: FilmRepository,
    @InjectRepository(People) private peopleRepository: PeopleRepository,
  ) {}

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

  async getMostOftenPerson() {
    const peopleNames = await getAllPeopleNames(this.peopleRepository);
    const filmsOpenings = await getFilmsOpenings(this.filmRepository);
    const mostOftenPersons = getMostOftenPeople(peopleNames, filmsOpenings);
    return mostOftenPersons;
  }
}
