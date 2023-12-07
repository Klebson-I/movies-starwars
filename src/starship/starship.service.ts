import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Starship } from 'src/Database/Starship/Starship.entity';
import { StarshipRepository } from 'src/Database/Starship/StarshipEntity.repository';

@Injectable()
export class StarshipService {
  constructor(
    @InjectRepository(Starship) private starshipRepository: StarshipRepository,
  ) {}

  async getAllStarships() {}

  async getStarship(id: string) {}
}
