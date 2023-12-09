import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PlanetController } from './planet.controller';
import { PlanetService } from './planet.service';
import { Planet } from '../Database/Planet/Planet.entity';

describe('PlanetController', () => {
  let controller: PlanetController;
  let service: PlanetService;
  let spyOnGetAllPlanets;
  let spyOnGetPlanet;

  const planetRepository = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanetController],
      providers: [
        PlanetService,
        { provide: getRepositoryToken(Planet), useValue: planetRepository },
      ],
    }).compile();

    controller = module.get<PlanetController>(PlanetController);
    service = module.get<PlanetService>(PlanetService);
    spyOnGetAllPlanets = jest
      .spyOn(service, 'getAllPlanets')
      .mockImplementation(async () => [new Planet()]);
    spyOnGetPlanet = jest
      .spyOn(service, 'getPlanet')
      .mockImplementation(async () => new Planet());
  });

  it('Should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should call getAllPlanets on service when getAllPlanets is called', async () => {
    await controller.getAllPlanets();
    expect(spyOnGetAllPlanets).toHaveBeenCalled();
  });

  it('Should call getPlanet on service when getPlanet is called', async () => {
    await controller.getPlanet('1');
    expect(spyOnGetPlanet).toHaveBeenCalled();
  });
});
