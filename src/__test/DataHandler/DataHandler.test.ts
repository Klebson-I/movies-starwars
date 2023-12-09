import { StarApiHandler } from '../../classes/StarApiHandler/StarApiHandler';
import { DataHandler } from '../../classes/DataHandler/DataHandler';
import { Film } from '../../Database/Film/film.entity';
import { emptyRepositoryMock, filledRepositoryMock } from './mocks';

const spyOnGetFilms = jest
  .spyOn(StarApiHandler.prototype, 'getFilms')
  .mockImplementation(async function () {
    return [{} as Film];
  });

describe('Test DataHandler class', () => {
  it('Should return data from repository if it exist', async () => {
    const dataHandler = new DataHandler(filledRepositoryMock, 'FILM');
    const films = await dataHandler.getDataFromCache();
    expect(films).toEqual([{}]);
  });

  it('Should call getFilms on StarApiHandler when data in repository doesnt exist', async () => {
    const dataHandler = new DataHandler(emptyRepositoryMock, 'FILM');
    await dataHandler.getDataFromCache();
    expect(spyOnGetFilms).toHaveBeenCalled();
  });
});
