import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from '../Database/Vehicle/Vehicle.entity';
import { VehicleRepository } from '../Database/Vehicle/Vehicle.repository';
import { DataHandler } from '../classes/DataHandler/DataHandler';
import { RepositoryType } from 'src/constants/constants';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle) private vehicleRepository: VehicleRepository,
  ) {}

  async getAllVehicles() {
    const dataHandler = new DataHandler(
      this.vehicleRepository,
      RepositoryType.VEHICLE,
    );
    const vehicles = await dataHandler.getDataFromCache();
    return vehicles;
  }

  async getVehicle(id: string) {
    const dataHandler = new DataHandler(
      this.vehicleRepository,
      RepositoryType.VEHICLE,
    );
    const vehicle = await dataHandler.getSingleDataFromCache(
      `https://swapi.dev/api/vehicles/${id}/`,
      id,
    );
    return vehicle;
  }
}
