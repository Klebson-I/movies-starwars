import { MongoRepository } from 'typeorm';
import { Vehicle } from './Vehicle.entity';

export class VehicleRepository extends MongoRepository<Vehicle> {}
