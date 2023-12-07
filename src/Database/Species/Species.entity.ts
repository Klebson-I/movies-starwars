import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Species {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  classification: string;

  @Column()
  designation: string;

  @Column()
  average_height: string;

  @Column()
  average_lifespan: string;

  @Column()
  eye_colors: string;

  @Column()
  hair_colors: string;

  @Column()
  skin_colors: string;

  @Column()
  language: string;

  @Column()
  homeworld: string;

  @Column('simple-array')
  people: string[];

  @Column('simple-array')
  films: string[];

  @Column()
  url: string;

  @Column()
  created: string;

  @Column()
  edited: string;
}
