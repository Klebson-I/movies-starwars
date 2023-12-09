import { MongoRepository } from 'typeorm';
import { People } from './People.entity';

export class PeopleRepository extends MongoRepository<People> {}
