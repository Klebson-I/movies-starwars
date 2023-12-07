import { Controller, Get, Inject, Param } from '@nestjs/common';
import { PlanetService } from './planet.service';

@Controller('planet')
export class PlanetController {
  constructor(@Inject(PlanetService) private planetService: PlanetService) {}

  @Get('/')
  async getAllPlanets() {
    return this.planetService.getAllPlanets();
  }

  @Get(':id')
  async getPlanet(@Param('id') id: string) {
    return this.planetService.getPlanet(id);
  }
}
