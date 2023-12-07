import { Controller, Get, Param, Inject } from '@nestjs/common';
import { StarshipService } from './starship.service';

@Controller('starship')
export class StarshipController {
  constructor(
    @Inject(StarshipService) private starshipService: StarshipService,
  ) {}

  @Get('/')
  async getAllStarships() {
    return this.starshipService.getAllStarships();
  }

  @Get('/:id')
  async getStarship(@Param('id') id: string) {
    return this.starshipService.getStarship(id);
  }
}
