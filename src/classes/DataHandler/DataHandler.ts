import { StarApiHandler } from '../StarApiHandler/StarApiHandler';
import { Film } from 'src/Database/Film/film.entity';
import { InputRepository } from './types';
import { Species } from 'src/Database/Species/Species.entity';
import { Vehicle } from 'src/Database/Vehicle/Vehicle.entity';

export class DataHandler {
  constructor(
    private repository: InputRepository,
    private repositoryType: string,
  ) {}

  async getDataFromCache() {
    try {
      const entities = await this.repository.find();
      if (!entities.length) {
        const apiData = await this.getFromApi();
        console.log(apiData.length);
        await this.saveToCache(apiData);
        return apiData;
      }
      return entities;
    } catch (e) {}
  }

  async getFromApi() {
    const starApiHandler = new StarApiHandler();
    if (this.repositoryType === 'FILM') {
      const records = await starApiHandler.getFilms();
      return records;
    }
    if (this.repositoryType === 'SPECIES') {
      const records = await starApiHandler.getSpecies();
      return records;
    }
    if (this.repositoryType === 'VEHICLE') {
      const records = await starApiHandler.getSpecies();
      return records;
    }
  }

  async saveToCache(records: Film[] | Species[] | Vehicle[]) {
    await this.repository.insertMany(records);
  }
}
