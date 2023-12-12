import { StarApiHandler } from '../../classes/StarApiHandler/StarApiHandler';
import { DataHandler } from '../../classes/DataHandler/DataHandler';
import { Film } from '../../Database/Film/Film.entity';
import { emptyRepositoryMock, filledRepositoryMock } from './mocks';
import { RepositoryType } from '../../constants/constants';

const spyOnGetFilms = jest
  .spyOn(StarApiHandler.prototype, 'getFilms')
  .mockImplementation(async function () {
    return [{ url: 'url' } as Film];
  });

describe('Test DataHandler class', () => {
  it('Should return data from repository if it exist', async () => {
    const dataHandler = new DataHandler(
      filledRepositoryMock,
      RepositoryType.FILM,
    );
    const films = await dataHandler.getDataFromCache();
    expect(films).toEqual([{}]);
  });

  it('Should call getFilms on StarApiHandler and return films when data in repository doesnt exist', async () => {
    const dataHandler = new DataHandler(
      emptyRepositoryMock,
      RepositoryType.FILM,
    );
    const films = await dataHandler.getDataFromCache();
    expect(spyOnGetFilms).toHaveBeenCalled();
    expect(films).toEqual([{ url: 'url' }]);
  });
});
