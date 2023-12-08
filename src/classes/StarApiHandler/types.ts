import { Film } from 'src/Database/Film/film.entity';
import { Planet } from 'src/Database/Planet/Planet.entity';
import { Species } from 'src/Database/Species/Species.entity';
import { Starship } from 'src/Database/Starship/Starship.entity';
import { Vehicle } from 'src/Database/Vehicle/Vehicle.entity';

export interface GetFilmsDto {
  data: {
    results: Film[];
  };
}

export interface GetFilmDto {
  data: Film;
}

export interface GetSpeciesDto {
  data: {
    results: Species[];
    next: string;
  };
}

export interface GetSingleSpeciesDto {
  data: Species;
}

export interface GetVehiclesDto {
  data: {
    results: Vehicle[];
    next: string;
  };
}

export interface GetVehicleDto {
  data: Vehicle;
}

export interface GetStarshipsDto {
  data: {
    results: Starship[];
    next: string;
  };
}

export interface GetStarshipDto {
  data: Starship;
}

export interface GetPlanetsDto {
  data: {
    results: Planet[];
    next: string;
  };
}

export interface StarApiHandlerInterface {
  getFilms: () => Promise<Film[]>;
  getSpecies: () => Promise<Species[]>;
  getVehicles: () => Promise<Vehicle[]>;
  getStarships: () => Promise<Starship[]>;
  getPlanets: () => Promise<Planet[]>;
  getSingleFilm: (id: string) => Promise<Film>;
  getSingleSpecies: (id: string) => Promise<Species>;
  getSingleVehicle: (id: string) => Promise<Vehicle>;
  getSingleStarship: (id: string) => Promise<Starship>;
}
