import axios from 'axios';
import { GetFilmsDto, GetSpeciesDto, StarApiHandlerInterface } from './types';
import { Species } from 'src/Database/Species/Species.entity';

export class StarApiHandler implements StarApiHandlerInterface {
  private records: Species[] = [];
  async getFilms() {
    const { data } = (await axios({
      method: 'GET',
      url: 'https://swapi.dev/api/films',
    })) as GetFilmsDto;
    const { results: movies } = data;
    return movies;
  }

  async getSpecies(nextUrl?: string) {
    const { data } = (await axios({
      method: 'GET',
      url: nextUrl || 'https://swapi.dev/api/species',
    })) as GetSpeciesDto;
    const { results: species, next } = data;
    if (next) {
      this.records.push(...species);
      return this.getSpecies(next);
    }
    return this.records;
  }
}
