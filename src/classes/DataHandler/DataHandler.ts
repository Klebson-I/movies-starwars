import { FilmRepository } from 'src/Database/Film/Film.repository';
import { StarApiHandler } from '../StarApiHandler/StarApiHandler';
import { Film } from 'src/Database/Film/film.entity';

export class DataHandler {
  constructor(private repository: FilmRepository) {}

  async getDataFromCache() {
    try {
      const entities = await this.repository.find();
      if (!entities.length) {
        const apiData = await this.getFromApi();
        await this.saveToCache(apiData);
        return apiData;
      }
      return entities;
    } catch (e) {}
  }

  async getFromApi() {
    const starApiHandler = new StarApiHandler();
    const records = await starApiHandler.getFilms();
    return records;
  }

  async saveToCache(records: Film[]) {
    await this.repository.insertMany(records);
  }
}
