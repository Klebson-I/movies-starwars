import { MongoRepository } from 'typeorm';
import { Species } from './Species.entity';

export class SpeciesRepository extends MongoRepository<Species> {}
