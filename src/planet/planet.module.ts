import { Module } from '@nestjs/common';
import { PlanetController } from './planet.controller';
import { PlanetService } from './planet.service';
import { Planet } from '../Database/Planet/Planet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Planet])],
  controllers: [PlanetController],
  providers: [PlanetService],
  exports: [PlanetService],
})
export class PlanetModule {}
