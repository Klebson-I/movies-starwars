import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { SpeciesController } from './species.controller';
import { SpeciesService } from './species.service';
import { Species } from '../Database/Species/Species.entity';

describe('SpeciesController', () => {
  let controller: SpeciesController;
  let service: SpeciesService;
  let spyOnGetAllSpecies;

  const speciesRepository = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpeciesController],
      providers: [
        SpeciesService,
        { provide: getRepositoryToken(Species), useValue: speciesRepository },
      ],
    }).compile();

    controller = module.get<SpeciesController>(SpeciesController);
    service = module.get<SpeciesService>(SpeciesService);
    spyOnGetAllSpecies = jest
      .spyOn(service, 'getAllSpecies')
      .mockImplementation(async () => [new Species()]);
  });

  it('Should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should call getAllSpecies on service when getAllSpecies is called', async () => {
    await controller.getAllSpecies();
    expect(spyOnGetAllSpecies).toHaveBeenCalled();
  });
});
