import { StarApiHandler } from '../StarApiHandler/StarApiHandler';
import { Film } from 'src/Database/Film/film.entity';
import { InputRepository } from './types';
import { Species } from 'src/Database/Species/Species.entity';
import { Vehicle } from 'src/Database/Vehicle/Vehicle.entity';
import { Starship } from 'src/Database/Starship/Starship.entity';

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
        await this.saveToCache(apiData);
        return apiData;
      }
      return entities;
    } catch (e) {}
  }

  async getSingleDataFromCache(searchUrl: string, id: string) {
    try {
      const entities = await this.repository.find({
        url: searchUrl,
      });
      if (!entities.length) {
        const apiData = await this.getSingleFromApi(id);
        await this.saveSingleCache(apiData);
        return apiData;
      }
      return entities[0];
    } catch (e) {}
  }

  async getSingleFromApi(id: string) {
    const starApiHandler = new StarApiHandler();
    if (this.repositoryType === 'FILM') {
      const records = await starApiHandler.getSingleFilm(id);
      return records;
    }
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
      const records = await starApiHandler.getVehicles();
      return records;
    }
    if (this.repositoryType === 'STARSHIP') {
      const records = await starApiHandler.getStarships();
      return records;
    }
    if (this.repositoryType === 'PLANET') {
      const records = await starApiHandler.getPlanets();
      return records;
    }
  }

  async saveToCache(records: Film[] | Species[] | Vehicle[] | Starship[]) {
    await this.repository.insertMany(records);
  }

  async saveSingleCache(records: Film) {
    await this.repository.insert(records);
  }
}
