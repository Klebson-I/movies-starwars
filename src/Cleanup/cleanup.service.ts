import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Planet } from '../Database/Planet/Planet.entity';
import { PlanetRepository } from '../Database/Planet/Planet.repository';
import { FilmRepository } from '../Database/Film/Film.repository';
import { Film } from '../Database/Film/Film.entity';
import { Species } from '../Database/Species/Species.entity';
import { SpeciesRepository } from '../Database/Species/Species.repository';
import { Starship } from '../Database/Starship/Starship.entity';
import { StarshipRepository } from '../Database/Starship/StarshipEntity.repository';
import { Vehicle } from '../Database/Vehicle/Vehicle.entity';
import { VehicleRepository } from '../Database/Vehicle/Vehicle.repository';
import { People } from 'src/Database/People/People.entity';
import { PeopleRepository } from 'src/Database/People/People.repository';

@Injectable()
export class CleanupService {
  constructor(
    @InjectRepository(Planet)
    private readonly planetRepository: PlanetRepository,
    @InjectRepository(Film) private readonly filmRepository: FilmRepository,
    @InjectRepository(Starship)
    private readonly starshipRepository: StarshipRepository,
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: VehicleRepository,
    @InjectRepository(Species)
    private readonly speciesRepository: SpeciesRepository,
    @InjectRepository(People)
    private readonly peopleRepository: PeopleRepository,
  ) {}

  async cleanupCollections() {
    await this.filmRepository.deleteMany({});
    await this.planetRepository.deleteMany({});
    await this.starshipRepository.deleteMany({});
    await this.vehicleRepository.deleteMany({});
    await this.speciesRepository.deleteMany({});
    await this.peopleRepository.deleteMany({});
  }
}
