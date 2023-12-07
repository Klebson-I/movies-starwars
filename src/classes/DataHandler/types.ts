import { VehicleRepository } from 'src/Database/Vehicle/Vehicle.repository';
import { FilmRepository } from '../../Database/Film/Film.repository';
import { SpeciesRepository } from '../../Database/Species/Species.repository';
import { StarshipRepository } from 'src/Database/Starship/StarshipEntity.repository';
import { PlanetRepository } from 'src/Database/Planet/Planet.repository';

export type InputRepository =
  | FilmRepository
  | SpeciesRepository
  | VehicleRepository
  | StarshipRepository
  | PlanetRepository;
