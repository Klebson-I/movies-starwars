import { VehicleRepository } from '../../Database/Vehicle/Vehicle.repository';
import { FilmRepository } from '../../Database/Film/Film.repository';
import { SpeciesRepository } from '../../Database/Species/Species.repository';
import { StarshipRepository } from '../../Database/Starship/StarshipEntity.repository';
import { PlanetRepository } from '../../Database/Planet/Planet.repository';

export type InputRepository =
  | FilmRepository
  | SpeciesRepository
  | VehicleRepository
  | StarshipRepository
  | PlanetRepository;
