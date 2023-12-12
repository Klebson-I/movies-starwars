import axios from 'axios';
import { GetAllDto, GetSingleDto, StarApiHandlerInterface } from './types';
import { Species } from '../../Database/Species/Species.entity';
import { Vehicle } from '../../Database/Vehicle/Vehicle.entity';
import { Starship } from '../../Database/Starship/Starship.entity';
import { Planet } from '../../Database/Planet/Planet.entity';
import { People } from 'src/Database/People/People.entity';
import { Film } from 'src/Database/Film/Film.entity';

export class StarApiHandler implements StarApiHandlerInterface {
  private records: (Species | Film | Vehicle | Starship | People | Planet)[] =
    [];

  async getAll(urlSpecified: string, nextUrl?: string) {
    const { data } = (await axios({
      method: 'GET',
      url: nextUrl || `https://swapi.dev/api/${urlSpecified}`,
    })) as GetAllDto;
    const { results: docs, next } = data;
    if (next) {
      this.records.push(...docs);
      return this.getAll(urlSpecified, next);
    }
    this.records.push(...docs);
    return this.records;
  }

  async getSingle(urlSpecified: string, id: string) {
    const { data } = (await axios({
      method: 'GET',
      url: `https://swapi.dev/api/${urlSpecified}/${id}/`,
    })) as GetSingleDto;
    return data;
  }
}
