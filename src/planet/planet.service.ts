import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Planet } from '../Database/Planet/Planet.entity';
import { PlanetRepository } from '../Database/Planet/Planet.repository';
import { DataHandler } from '../classes/DataHandler/DataHandler';
import { RepositoryType } from '../constants/constants';

@Injectable()
export class PlanetService {
  constructor(
    @InjectRepository(Planet) private planetRepository: PlanetRepository,
  ) {}

  async getAllPlanets() {
    const dataHandler = new DataHandler(
      this.planetRepository,
      RepositoryType.PLANET,
    );
    const vehicles = await dataHandler.getDataFromCache();
    return vehicles;
  }

  async getPlanet(id: string) {
    const dataHandler = new DataHandler(
      this.planetRepository,
      RepositoryType.PLANET,
    );
    const planet = await dataHandler.getSingleDataFromCache(
      `https://swapi.dev/api/planets/${id}/`,
      id,
    );
    return planet;
  }
}
