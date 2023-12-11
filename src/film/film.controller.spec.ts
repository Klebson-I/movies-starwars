import { Test, TestingModule } from '@nestjs/testing';
import { FilmController } from './film.controller';
import { FilmService } from './film.service';
import { Film } from '../Database/Film/Film.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { People } from '../Database/People/People.entity';

describe('FilmController', () => {
  let controller: FilmController;
  let service: FilmService;
  let spyOnGetAllFilms;
  let spyOnGetFilm;
  let spyOnGetMostOftenPerson;
  let spyOnGetCountedOpeningsWords;

  const filmRepository = {
    find: jest.fn(),
  };

  const peopleRepository = {
    find: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmController],
      providers: [
        FilmService,
        { provide: getRepositoryToken(Film), useValue: filmRepository },
        { provide: getRepositoryToken(People), useValue: peopleRepository },
      ],
    }).compile();

    controller = module.get<FilmController>(FilmController);
    service = module.get<FilmService>(FilmService);
    spyOnGetAllFilms = jest
      .spyOn(service, 'getAllFilms')
      .mockImplementation(async () => [new Film()]);
    spyOnGetFilm = jest
      .spyOn(service, 'getFilm')
      .mockImplementation(async () => new Film());
    spyOnGetMostOftenPerson = jest
      .spyOn(service, 'getMostOftenPerson')
      .mockImplementation(async () => '');
    spyOnGetCountedOpeningsWords = jest
      .spyOn(service, 'getCountedOpeningsWords')
      .mockImplementation(async () => []);
  });

  it('Should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should call getAllFilms on service when getAllFilms is called', async () => {
    await controller.getAllFilms();
    expect(spyOnGetAllFilms).toHaveBeenCalled();
  });

  it('Should call getFilm on service when getFilm is called', async () => {
    await controller.getFilm('1');
    expect(spyOnGetFilm).toHaveBeenCalled();
  });

  it('Should call getMostOftenPerson on service when getMostOftenPerson is called', async () => {
    await controller.getMostOftenPerson();
    expect(spyOnGetMostOftenPerson).toHaveBeenCalled();
  });

  it('Should call getCountedOpeningsWords on service when getCountedOpeningsWords is called', async () => {
    await controller.getCountedOpeningsWords();
    expect(spyOnGetCountedOpeningsWords).toHaveBeenCalled();
  });
});
