import { FilmRepository } from '../..//Database/Film/Film.repository';

export const emptyRepositoryMock = {
  find: async () => [],
  insertMany: () => {},
} as unknown as FilmRepository;

export const filledRepositoryMock = {
  find: async () => [{}],
  insertMany: () => {},
} as unknown as FilmRepository;
