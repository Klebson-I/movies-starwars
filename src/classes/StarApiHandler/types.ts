import { Film } from 'src/Database/Film/film.entity';

export interface GetFilmsDto {
  data: {
    results: Film[];
  };
}

export interface StarApiHandlerInterface {
  getFilms: () => Promise<Film[]>;
}
