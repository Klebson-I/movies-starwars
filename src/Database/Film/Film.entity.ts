import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Film {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  title: string;

  @Column()
  episode_id: number;

  @Column()
  opening_crawl: string;

  @Column()
  director: string;

  @Column()
  producer: string;

  @Column()
  release_date: Date;

  @Column()
  species: string[];

  @Column()
  starships: string[];

  @Column()
  vehicles: string[];

  @Column()
  characters: string[];

  @Column()
  planets: string[];

  @Column()
  url: string;

  @Column()
  created: string;

  @Column()
  edited: string;
}
