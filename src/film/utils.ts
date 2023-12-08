import { FilmRepository } from 'src/Database/Film/Film.repository';
import { People } from '../Database/People/People.entity';
import { PeopleRepository } from '../Database/People/People.repository';
import { DataHandler } from '../classes/DataHandler/DataHandler';
import { Film } from '../Database/Film/film.entity';

export const getAllPeopleNames = async (
  repository: PeopleRepository,
): Promise<string[]> => {
  const dataHandler = new DataHandler(repository, 'PEOPLE');
  const people: People[] = await dataHandler.getDataFromCache();
  const names = people.map(({ name }) => name);
  return names;
};

export const getFilmsOpenings = async (
  repository: FilmRepository,
): Promise<string[]> => {
  const dataHandler = new DataHandler(repository, 'FILM');
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

  const maxCount = Math.max(...Object.values(countedPeople));

  const personsWithMaxCount = Object.entries(countedPeople).filter(
    ([, value]) => value === maxCount,
  );

  const namesOfMaxCountPersons = personsWithMaxCount.map(
    ([key]) => key.split(' ')[0],
  );

  const mostOftenNames =
    namesOfMaxCountPersons.length > 1
      ? namesOfMaxCountPersons
      : namesOfMaxCountPersons[0];

  return mostOftenNames;
};
