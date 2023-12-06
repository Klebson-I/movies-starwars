import { MongoRepository } from 'typeorm';
import { Film } from './film.entity';

export class FilmRepository extends MongoRepository<Film> {}
