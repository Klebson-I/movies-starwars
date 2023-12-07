import { Film } from 'src/Database/Film/film.entity';
import { Species } from 'src/Database/Species/Species.entity';
import { Vehicle } from 'src/Database/Vehicle/Vehicle.entity';

export interface GetFilmsDto {
  data: {
    results: Film[];
  };
}

export interface GetSpeciesDto {
  data: {
    results: Species[];
    next: string;
  };
}

export interface GetVehiclesDto {
  data: {
    results: Vehicle[];
    next: string;
  };
}

export interface StarApiHandlerInterface {
  getFilms: () => Promise<Film[]>;
  getSpecies: () => Promise<Species[]>;
  getVehicles: () => Promise<Vehicle[]>;
}
