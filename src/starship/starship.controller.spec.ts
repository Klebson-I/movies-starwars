import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { StarshipController } from './starship.controller';
import { StarshipService } from './starship.service';
import { Starship } from '../Database/Starship/Starship.entity';

describe('StarshipController', () => {
  let controller: StarshipController;
  let service: StarshipService;
  let spyOnGetAllStarships;

  const starshipRepository = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StarshipController],
      providers: [
        StarshipService,
        { provide: getRepositoryToken(Starship), useValue: starshipRepository },
      ],
    }).compile();

    controller = module.get<StarshipController>(StarshipController);
    service = module.get<StarshipService>(StarshipService);
    spyOnGetAllStarships = jest
      .spyOn(service, 'getAllStarships')
      .mockImplementation(async () => [new Starship()]);
  });

  it('Should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should call getAllStarships on service when getAllStarships is called', async () => {
    await controller.getAllStarships();
    expect(spyOnGetAllStarships).toHaveBeenCalled();
  });
});
