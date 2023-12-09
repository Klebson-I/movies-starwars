import { FilmRepository } from '../..//Database/Film/Film.repository';

export const emptyRepositoryMock = {
  find: async () => [],
} as FilmRepository;

export const filledRepositoryMock = {
  find: async () => [{}],
} as FilmRepository;
