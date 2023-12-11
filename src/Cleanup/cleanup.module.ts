import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CleanupService } from './cleanup.service';
import { SchedulerService } from './scheduler.service';
import { Planet } from '../Database/Planet/Planet.entity';
import { Starship } from '../Database/Starship/Starship.entity';
import { Vehicle } from '../Database/Vehicle/Vehicle.entity';
import { Species } from '../Database/Species/Species.entity';
import { Film } from '../Database/Film/Film.entity';
import { People } from 'src/Database/People/People.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Planet,
      Starship,
      Vehicle,
      Species,
      Film,
      People,
    ]),
  ],
  providers: [CleanupService, SchedulerService],
})
export class CleanupModule {}
