import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Starship } from '../Database/Starship/Starship.entity';
import { StarshipRepository } from '../Database/Starship/StarshipEntity.repository';
import { DataHandler } from '../classes/DataHandler/DataHandler';
import { RepositoryType } from 'src/constants';

@Injectable()
export class StarshipService {
  constructor(
    @InjectRepository(Starship) private starshipRepository: StarshipRepository,
  ) {}

  async getAllStarships() {
    const dataHandler = new DataHandler(
      this.starshipRepository,
      RepositoryType.STARSHIP,
    );
    const vehicles = await dataHandler.getDataFromCache();
    return vehicles;
  }

  async getStarship(id: string) {
    const dataHandler = new DataHandler(
      this.starshipRepository,
      RepositoryType.STARSHIP,
    );
    const starship = await dataHandler.getSingleDataFromCache(
      `https://swapi.dev/api/starships/${id}/`,
      id,
    );
    return starship;
  }
}
