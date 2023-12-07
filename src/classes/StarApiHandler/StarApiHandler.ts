import axios from 'axios';
import { GetFilmsDto, GetSpeciesDto, StarApiHandlerInterface } from './types';

export class StarApiHandler implements StarApiHandlerInterface {
  private records: [] = [];
  async getFilms() {
    const { data } = (await axios({
      method: 'GET',
      url: 'https://swapi.dev/api/films',
    })) as GetFilmsDto;
    const { results: movies } = data;
    return movies;
  }

  async getSpecies() {
    const { data } = (await axios({
      method: 'GET',
      url: 'https://swapi.dev/api/species',
    })) as GetSpeciesDto;
    const { results: species } = data;
    console.log(species);
    return species;
  }
}
