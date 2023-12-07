import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Species } from 'src/Database/Species/Species.entity';
import { SpeciesRepository } from 'src/Database/Species/Species.repository';

@Injectable()
export class SpeciesService {
  constructor(
    @InjectRepository(Species) private speciesRepository: SpeciesRepository,
  ) {}

  async getAllSpecies() {}

  async getSpecies(id: string) {}
}
