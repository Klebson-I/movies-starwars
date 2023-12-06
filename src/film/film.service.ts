import { Injectable } from '@nestjs/common';
import { FilmRepository } from 'src/Database/Film/Film.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from 'src/Database/Film/Film.entity';

@Injectable()
export class FilmService {
  constructor(@InjectRepository(Film) private filmRepository: FilmRepository) {}

  async getAllFilms() {
    const films = await this.filmRepository.find();
    console.log(films); 
  }

  async getFilm(id: string) {}
}
