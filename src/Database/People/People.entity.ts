import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class People {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  birth_year: string;

  @Column()
  eye_color: string;

  @Column()
  gender: string;

  @Column()
  hair_color: string;

  @Column()
  height: string;

  @Column()
  mass: string;

  @Column()
  skin_color: string;

  @Column()
  homeworld: string;

  @Column('simple-array')
  films: string[];

  @Column('simple-array')
  species: string[];

  @Column('simple-array')
  starships: string[];

  @Column('simple-array')
  vehicles: string[];

  @Column()
  url: string;

  @Column()
  created: string;

  @Column()
  edited: string;
}
