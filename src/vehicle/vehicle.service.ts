import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from 'src/Database/Vehicle/Vehicle.entity';
import { VehicleRepository } from 'src/Database/Vehicle/Vehicle.repository';
import { DataHandler } from 'src/classes/DataHandler/DataHandler';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle) private vehicleRepository: VehicleRepository,
  ) {}

  async getAllVehicles() {
    const dataHandler = new DataHandler(this.vehicleRepository, 'VEHICLE');
    const vehicles = await dataHandler.getDataFromCache();
    return vehicles;
  }

  async getVehicle(id: string) {}
}
