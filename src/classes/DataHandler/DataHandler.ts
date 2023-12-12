import { StarApiHandler } from '../StarApiHandler/StarApiHandler';
import { Film } from '../../Database/Film/Film.entity';
import { InputRepository } from './types';
import { Species } from '../../Database/Species/Species.entity';
import { Vehicle } from '../../Database/Vehicle/Vehicle.entity';
import { Starship } from '../../Database/Starship/Starship.entity';
import { Planet } from '../../Database/Planet/Planet.entity';
import { People } from '../../Database/People/People.entity';
import { HandleDataError } from '../../classes/Error';
import { RepositoryType } from '../../constants/constants';

export class DataHandler {
  constructor(
    private repository: InputRepository,
    private repositoryType: RepositoryType,
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
    } catch (e) {
      throw new HandleDataError('Error when get data');
    }
  }

  async getSingleDataFromCache(searchUrl: string, id: string) {
    try {
      const entities = await this.repository.find({
        url: searchUrl,
      });
      if (!entities.length) {
        const apiData = await this.getSingleFromApi(id);
        const allApiData = await this.getFromApi();
        await this.saveToCache(allApiData);
        return apiData;
      }
      return entities[0];
    } catch (e) {
      throw new HandleDataError('Error when get data, searched id not exist');
    }
  }

  async getSingleFromApi(id: string) {
    const starApiHandler = new StarApiHandler();
    const records = await starApiHandler.getSingle(this.repositoryType, id);
    return records;
  }

  async getFromApi() {
    const starApiHandler = new StarApiHandler();
    const records = await starApiHandler.getAll(this.repositoryType);
    return records;
  }

  async saveToCache(
    records: Film[] | Species[] | Vehicle[] | Starship[] | People[] | Planet[],
  ) {
    await this.repository.insertMany(records);
  }
}
