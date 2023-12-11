import { MongoRepository } from 'typeorm';
import { Film } from './Film.entity';

export class FilmRepository extends MongoRepository<Film> {}
