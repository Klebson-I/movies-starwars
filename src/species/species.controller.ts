import { Controller, Get, Inject, Param } from '@nestjs/common';
import { SpeciesService } from './species.service';

@Controller('species')
export class SpeciesController {
  constructor(@Inject(SpeciesService) private speciesService: SpeciesService) {}

  @Get('/')
  getAllSpecies() {
    return this.speciesService.getAllSpecies();
  }

  @Get('/:id')
  getSpecies(@Param('id') id: string) {
    return this.speciesService.getSpecies(id);
  }
}
