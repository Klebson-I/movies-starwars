import { FilmRepository } from 'src/Database/Film/Film.repository';
import { People } from '../Database/People/People.entity';
import { PeopleRepository } from '../Database/People/People.repository';
import { DataHandler } from '../classes/DataHandler/DataHandler';
import { Film } from '../Database/Film/film.entity';
import { RepositoryType } from 'src/constants/constants';

export const getAllPeopleNames = async (
  repository: PeopleRepository,
): Promise<string[]> => {
  const dataHandler = new DataHandler(repository, RepositoryType.PEOPLE);
  const people: People[] = await dataHandler.getDataFromCache();
  const names = people.map(({ name }) => name);
  return names;
};

export const getFilmsOpenings = async (
  repository: FilmRepository,
): Promise<string[]> => {
  const dataHandler = new DataHandler(repository, RepositoryType.FILM);
  const films: Film[] = await dataHandler.getDataFromCache();
  const openings = films.map(({ opening_crawl }) => opening_crawl);
  return openings;
};

const getCountedPerson = (openings: string[], person: string): number => {
  const regex = new RegExp(person, 'i');
  const globalRegex = new RegExp(person, 'gi');
  const filmsWithPerson = openings.filter((opening) => regex.test(opening));
  const countOfPerson = filmsWithPerson.reduce((acc, curr) => {
    const matches = curr.match(globalRegex);
    const occurrences = matches ? matches.length : 0;
    acc += occurrences;
    return acc;
  }, 0);
  return countOfPerson;
};

const getFirstPartsOfNames = (names: [string, number][]) => {
  const namesOfMaxCountPersons = names.map(([key]) => key.split(' ')[0]);
  return namesOfMaxCountPersons;
};

const getPeopleWithMaxCount = (countedPeople: Record<string, number>) => {
  const maxCount = Math.max(...Object.values(countedPeople));
  const personsWithMaxCount = Object.entries(countedPeople).filter(
    ([, value]) => value === maxCount,
  );
  return personsWithMaxCount;
};

export const getMostOftenPeople = (
  peopleNames: string[],
  openings: string[],
) => {
  const countedPeople: Record<string, number> = peopleNames.reduce(
    (acc, curr) => {
      const countOfPerson = getCountedPerson(openings, curr);
      acc[curr] = countOfPerson;
      return acc;
    },
    {},
  );

  const personsWithMaxCount = getPeopleWithMaxCount(countedPeople);

  const namesOfMaxCountPersons = getFirstPartsOfNames(personsWithMaxCount);

  const mostOftenNames =
    namesOfMaxCountPersons.length > 1
      ? namesOfMaxCountPersons
      : namesOfMaxCountPersons[0];

  return mostOftenNames;
};

const getSeparatedWords = (openings: string[]) => {
  const SPLIT_WORD_REGEX = /[\s\n\r]+/;
  const REPLACE_MARKS_REGEX = /[.?]+/;
  const allWords = openings
    .flatMap((opening) => opening.split(SPLIT_WORD_REGEX))
    .map((word) => word.replace(REPLACE_MARKS_REGEX, ''))
    .map((word) => word.toLowerCase());
  return allWords;
};

const isWordAlreadyCounted = (word: string, countArray: [string, number][]) => {
  const isCounted = countArray.some(([arrWord]) => word === arrWord);
  return isCounted;
};

const getCountedWords = (allWords: string[]) => {
  const countedWords = allWords.reduce((acc, curr, _, arr) => {
    const isWordCounted = isWordAlreadyCounted(curr, acc);
    if (isWordCounted) {
      return acc;
    }
    const foundWordsLength = arr.filter((arrWord) => arrWord === curr).length;
    acc.push([curr, foundWordsLength]);
    return acc;
  }, []);
  return countedWords;
};

export const getCountedUniqueWords = (openings: string[]) => {
  const allWords = getSeparatedWords(openings);
  const countedWords = getCountedWords(allWords);
  return countedWords;
};
