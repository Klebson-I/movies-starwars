import { Module } from '@nestjs/common';
import { StarshipController } from './starship.controller';
import { StarshipService } from './starship.service';

@Module({
  controllers: [StarshipController],
  providers: [StarshipService],
})
export class StarshipModule {}
