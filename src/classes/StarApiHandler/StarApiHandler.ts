import axios from 'axios';
import { GetFilmsDto, StarApiHandlerInterface } from './types';

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
}
