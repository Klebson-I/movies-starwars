import { MongoRepository } from 'typeorm';
import { Starship } from './Starship.entity';

export class StarshipRepository extends MongoRepository<Starship> {}
