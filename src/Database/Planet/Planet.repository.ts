import { MongoRepository } from 'typeorm';
import { Planet } from './Planet.entity';

export class PlanetRepository extends MongoRepository<Planet> {}
