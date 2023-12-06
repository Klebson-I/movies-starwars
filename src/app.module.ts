import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmModule } from './film/film.module';
import { SpeciesModule } from './species/species.module';
import { VehicleService } from './vehicle/vehicle.service';
import { VehicleController } from './vehicle/vehicle.controller';
import { VehicleModule } from './vehicle/vehicle.module';
import { StarshipModule } from './starship/starship.module';
import { PlanetService } from './planet/planet.service';
import { PlanetController } from './planet/planet.controller';
import { PlanetModule } from './planet/planet.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './Database/Film/film.entity';
import { FilmRepository } from './Database/Film/Film.repository';

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
      entities: [Film],
    }),
    TypeOrmModule.forFeature([FilmRepository]),
  ],
  controllers: [AppController, VehicleController, PlanetController],
  providers: [AppService, VehicleService, PlanetService],
})
export class AppModule {}
