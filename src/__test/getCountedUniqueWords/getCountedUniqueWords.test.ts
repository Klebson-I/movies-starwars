import { getCountedUniqueWords } from '../../film/utils';
import { expectedCountArray, mockOpenings } from './mocks';

describe('Test getCountedUniqueWords', () => {
  it('Should return array of arrays with words and its count number', () => {
    const wordsArray = getCountedUniqueWords(mockOpenings);
    expect(wordsArray).toEqual(expectedCountArray);
  });
});
