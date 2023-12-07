import { Controller, Get, Inject, Param } from '@nestjs/common';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(@Inject(VehicleService) private vehicleService: VehicleService) {}

  @Get('/')
  async getAllVehicles() {
    return this.vehicleService.getAllVehicles();
  }

  @Get('/:id')
  async getVehicle(@Param('id') id: string) {
    return this.vehicleService.getVehicle(id);
  }
}
