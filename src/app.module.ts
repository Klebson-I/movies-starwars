import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmModule } from './film/film.module';
import { SpeciesModule } from './species/species.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { StarshipModule } from './starship/starship.module';
import { PlanetModule } from './planet/planet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './Database/Film/film.entity';
import { FilmRepository } from './Database/Film/Film.repository';
import { Species } from './Database/Species/Species.entity';
import { SpeciesRepository } from './Database/Species/Species.repository';
import { VehicleRepository } from './Database/Vehicle/Vehicle.repository';
import { Vehicle } from './Database/Vehicle/Vehicle.entity';

@Module({
  imports: [
    FilmModule,
    SpeciesModule,
    VehicleModule,
    StarshipModule,
    PlanetModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://lukaszkleba:devil1234@cluster0.xerdy.mongodb.net/?retryWrites=true&w=majority',
      useNewUrlParser: true,
      synchronize: true,
      database: 'movies',
      entities: [Film, Species, Vehicle],
    }),
    TypeOrmModule.forFeature([
      FilmRepository,
      SpeciesRepository,
      VehicleRepository,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
