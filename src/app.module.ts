import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpeciesModule } from './species/species.module';
import { Species } from './Database/Species/Species.entity';
import { FilmModule } from './film/film.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { StarshipModule } from './starship/starship.module';
import { PlanetModule } from './planet/planet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './Database/Film/Film.entity';
import { FilmRepository } from './Database/Film/Film.repository';
import { SpeciesRepository } from './Database/Species/Species.repository';
import { VehicleRepository } from './Database/Vehicle/Vehicle.repository';
import { Vehicle } from './Database/Vehicle/Vehicle.entity';
import { Starship } from './Database/Starship/Starship.entity';
import { StarshipRepository } from './Database/Starship/StarshipEntity.repository';
import { Planet } from './Database/Planet/Planet.entity';
import { PlanetRepository } from './Database/Planet/Planet.repository';
import { CleanupModule } from './Cleanup/cleanup.module';
import { People } from './Database/People/People.entity';
import { PeopleRepository } from './Database/People/People.repository';

@Module({
  imports: [
    SpeciesModule,
    FilmModule,
    VehicleModule,
    StarshipModule,
    PlanetModule,
    CleanupModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://lukaszkleba:devil1234@cluster0.xerdy.mongodb.net/?retryWrites=true&w=majority',
      useNewUrlParser: true,
      synchronize: true,
      database: 'movies',
      entities: [Species, Film, Vehicle, Starship, Planet, People],
    }),
    TypeOrmModule.forFeature([
      SpeciesRepository,
      FilmRepository,
      VehicleRepository,
      StarshipRepository,
      PlanetRepository,
      PeopleRepository,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
