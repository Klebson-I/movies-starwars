import { Film } from 'src/Database/Film/film.entity';
import { Species } from 'src/Database/Species/Species.entity';

export interface GetFilmsDto {
  data: {
    results: Film[];
  };
}

export interface GetSpeciesDto {
  data: {
    results: Species[];
  };
}

export interface StarApiHandlerInterface {
  getFilms: () => Promise<Film[]>;
  getSpecies: () => Promise<Species[]>;
}
