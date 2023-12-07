import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Species } from 'src/Database/Species/Species.entity';
import { SpeciesRepository } from 'src/Database/Species/Species.repository';
import { DataHandler } from 'src/classes/DataHandler/DataHandler';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species) private speciesRepository: SpeciesRepository,
  ) {}

  async getAllSpecies() {
    const dataHandler = new DataHandler(this.speciesRepository, 'SPECIES');
    const species = await dataHandler.getDataFromCache();
    return species;
  }

  async getSpecies(id: string) {}
}
