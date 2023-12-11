import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Species } from '../Database/Species/Species.entity';
import { SpeciesRepository } from '../Database/Species/Species.repository';
import { DataHandler } from '../classes/DataHandler/DataHandler';
import { RepositoryType } from 'src/constants/constants';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species) private speciesRepository: SpeciesRepository,
  ) {}

  async getAllSpecies() {
    const dataHandler = new DataHandler(
      this.speciesRepository,
      RepositoryType.SPECIES,
    );
    const species = await dataHandler.getDataFromCache();
    return species;
  }

  async getSpecies(id: string) {
    const dataHandler = new DataHandler(
      this.speciesRepository,
      RepositoryType.SPECIES,
    );
    const species = await dataHandler.getSingleDataFromCache(
      `https://swapi.dev/api/species/${id}/`,
      id,
    );
    return species;
  }
}
