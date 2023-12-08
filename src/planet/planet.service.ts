import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Planet } from 'src/Database/Planet/Planet.entity';
import { PlanetRepository } from 'src/Database/Planet/Planet.repository';
import { DataHandler } from 'src/classes/DataHandler/DataHandler';

@Injectable()
export class PlanetService {
  constructor(
    @InjectRepository(Planet) private planetRepository: PlanetRepository,
  ) {}

  async getAllPlanets() {
    const dataHandler = new DataHandler(this.planetRepository, 'PLANET');
    const vehicles = await dataHandler.getDataFromCache();
    return vehicles;
  }

  async getPlanet(id: string) {
    const dataHandler = new DataHandler(this.planetRepository, 'PLANET');
    const planet = await dataHandler.getSingleDataFromCache(
      `https://swapi.dev/api/planets/${id}/`,
      id,
    );
    return planet;
  }
}
