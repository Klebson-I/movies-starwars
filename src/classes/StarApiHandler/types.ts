import { People } from 'src/Database/People/People.entity';
import { Film } from '../../Database/Film/film.entity';
import { Planet } from '../../Database/Planet/Planet.entity';
import { Species } from '../../Database/Species/Species.entity';
import { Starship } from '../../Database/Starship/Starship.entity';
import { Vehicle } from '../../Database/Vehicle/Vehicle.entity';

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

export interface GetPeopleDto {
  data: {
    results: People[];
    next: string;
  };
}

export interface GetPlanetDto {
  data: Planet;
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
  getSinglePlanet: (id: string) => Promise<Planet>;
  getPeople: (id: string) => Promise<People[]>;
}
