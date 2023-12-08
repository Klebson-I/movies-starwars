import { Module } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from '../Database/Vehicle/Vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle])],
  providers: [VehicleService],
  controllers: [VehicleController],
  exports: [VehicleService],
})
export class VehicleModule {}
