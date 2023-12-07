import { FilmRepository } from '../../Database/Film/Film.repository';
import { SpeciesRepository } from '../../Database/Species/Species.repository';

export type InputRepository = FilmRepository | SpeciesRepository;
