import { Test, TestingModule } from '@nestjs/testing';
import { FilmController } from './film.controller';
import { FilmService } from './film.service';
import { Film } from '../Database/Film/film.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('FilmController', () => {
  let controller: FilmController;
  let service: FilmService;
  let spyOnGetAllFilms;

  const filmRepository = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmController],
      providers: [
        FilmService,
        { provide: getRepositoryToken(Film), useValue: filmRepository },
      ],
    }).compile();

    controller = module.get<FilmController>(FilmController);
    service = module.get<FilmService>(FilmService);
    spyOnGetAllFilms = jest
      .spyOn(service, 'getAllFilms')
      .mockImplementation(async () => [new Film()]);
  });

  it('Should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should call getAllFilms on service when getAllFilms is called', async () => {
    await controller.getAllFilms();
    expect(spyOnGetAllFilms).toHaveBeenCalled();
  });
});
