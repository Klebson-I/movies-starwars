import { People } from 'src/Database/People/People.entity';
import { Film } from '../../Database/Film/Film.entity';
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

export interface GetAllDto {
  data: {
    results: People[] | Film[] | Planet[] | Starship[] | Vehicle[] | Species[];
    next?: string;
  };
}

export interface GetSingleDto {
  data: Planet | People | Starship | Species | Vehicle | Film;
}

export interface StarApiHandlerInterface {
  getAll: (
    urlSpecified: string,
    nextUrl?: string,
  ) => Promise<(Planet | People | Starship | Species | Vehicle | Film)[]>;
  getSingle: (
    urlSpecified: string,
    id?: string,
  ) => Promise<Planet | People | Starship | Species | Vehicle | Film>;
}
