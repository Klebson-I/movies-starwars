// cleanup.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CleanupService } from './cleanup.service';
import { SchedulerService } from './scheduler.service';
import { Film } from 'src/Database/Film/film.entity';
import { Planet } from 'src/Database/Planet/Planet.entity';
import { Starship } from 'src/Database/Starship/Starship.entity';
import { Vehicle } from 'src/Database/Vehicle/Vehicle.entity';
import { Species } from 'src/Database/Species/Species.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Film, Planet, Starship, Vehicle, Species]),
  ],
  providers: [CleanupService, SchedulerService],
})
export class CleanupModule {}
