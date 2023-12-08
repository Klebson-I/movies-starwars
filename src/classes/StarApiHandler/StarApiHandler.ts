import axios from 'axios';
import {
  GetFilmDto,
  GetFilmsDto,
  GetPeopleDto,
  GetPlanetDto,
  GetPlanetsDto,
  GetSingleSpeciesDto,
  GetSpeciesDto,
  GetStarshipDto,
  GetStarshipsDto,
  GetVehicleDto,
  StarApiHandlerInterface,
} from './types';
import { Species } from '../../Database/Species/Species.entity';
import { Vehicle } from '../../Database/Vehicle/Vehicle.entity';
import { Starship } from '../../Database/Starship/Starship.entity';
import { Planet } from '../../Database/Planet/Planet.entity';
import { People } from 'src/Database/People/People.entity';

export class StarApiHandler implements StarApiHandlerInterface {
  private records: Species[] & Vehicle[] & Starship[] & Planet[] & People[] =
    [];
  async getFilms() {
    const { data } = (await axios({
      method: 'GET',
      url: 'https://swapi.dev/api/films',
    })) as GetFilmsDto;
    const { results: movies } = data;
    return movies;
  }

  async getSpecies(nextUrl?: string) {
    const { data } = (await axios({
      method: 'GET',
      url: nextUrl || 'https://swapi.dev/api/species',
    })) as GetSpeciesDto;
    const { results: species, next } = data;
    if (next) {
      this.records.push(...species);
      return this.getSpecies(next);
    }
    this.records.push(...species);
    return this.records;
  }

  async getVehicles(nextUrl?: string) {
    const { data } = (await axios({
      method: 'GET',
      url: nextUrl || 'https://swapi.dev/api/vehicles',
    })) as GetSpeciesDto;
    const { results: vehicles, next } = data;
    if (next) {
      this.records.push(...vehicles);
      return this.getVehicles(next);
    }
    this.records.push(...vehicles);
    return this.records;
  }

  async getStarships(nextUrl?: string) {
    const { data } = (await axios({
      method: 'GET',
      url: nextUrl || 'https://swapi.dev/api/starships',
    })) as GetStarshipsDto;
    const { results: starships, next } = data;
    if (next) {
      this.records.push(...starships);
      return this.getStarships(next);
    }
    this.records.push(...starships);
    return this.records;
  }

  async getPlanets(nextUrl?: string) {
    const { data } = (await axios({
      method: 'GET',
      url: nextUrl || 'https://swapi.dev/api/planets',
    })) as GetPlanetsDto;
    const { results: planets, next } = data;
    if (next) {
      this.records.push(...planets);
      return this.getPlanets(next);
    }
    this.records.push(...planets);
    return this.records;
  }

  async getPeople(nextUrl?: string) {
    const { data } = (await axios({
      method: 'GET',
      url: nextUrl || 'https://swapi.dev/api/people',
    })) as GetPeopleDto;
    const { results: people, next } = data;
    if (next) {
      this.records.push(...people);
      return this.getPeople(next);
    }
    this.records.push(...people);
    return this.records;
  }

  async getSingleFilm(id: string) {
    const { data } = (await axios({
      method: 'GET',
      url: `https://swapi.dev/api/films/${id}/`,
    })) as GetFilmDto;
    return data;
  }

  async getSingleSpecies(id: string) {
    const { data } = (await axios({
      method: 'GET',
      url: `https://swapi.dev/api/species/${id}/`,
    })) as GetSingleSpeciesDto;
    return data;
  }

  async getSingleVehicle(id: string) {
    const { data } = (await axios({
      method: 'GET',
      url: `https://swapi.dev/api/vehicles/${id}/`,
    })) as GetVehicleDto;
    return data;
  }

  async getSingleStarship(id: string) {
    const { data } = (await axios({
      method: 'GET',
      url: `https://swapi.dev/api/starships/${id}/`,
    })) as GetStarshipDto;
    return data;
  }

  async getSinglePlanet(id: string) {
    const { data } = (await axios({
      method: 'GET',
      url: `https://swapi.dev/api/planets/${id}/`,
    })) as GetPlanetDto;
    return data;
  }
}
