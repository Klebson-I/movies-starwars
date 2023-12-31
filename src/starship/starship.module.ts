import { Module } from '@nestjs/common';
import { StarshipController } from './starship.controller';
import { StarshipService } from './starship.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Starship } from '../Database/Starship/Starship.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Starship])],
  controllers: [StarshipController],
  providers: [StarshipService],
  exports: [StarshipService],
})
export class StarshipModule {}
