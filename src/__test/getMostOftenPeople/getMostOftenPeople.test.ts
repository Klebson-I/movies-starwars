import { getMostOftenPeople } from '../../film/utils';
import {
  expectedMultiMostOftenResult,
  expectedSingleMostOftenResult,
  openingsMockMultiResult,
  openingsMockSingleResult,
  peopleNamesMock,
} from './mocks';

describe('Test getMostOftenPeople', () => {
  it('Should return single name string when there is single most often occurance of name', () => {
    const names = getMostOftenPeople(peopleNamesMock, openingsMockSingleResult);
    expect(names).toBe(expectedSingleMostOftenResult);
  });

  it('Should return names string array when there is more than one most often occurance of name', () => {
    const names = getMostOftenPeople(peopleNamesMock, openingsMockMultiResult);
    expect(names).toEqual(expectedMultiMostOftenResult);
  });
});
