import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Planet {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  diameter: string;

  @Column()
  rotation_period: string;

  @Column()
  orbital_period: string;

  @Column()
  gravity: string;

  @Column()
  population: string;

  @Column()
  climate: string;

  @Column()
  terrain: string;

  @Column()
  surface_water: string;

  @Column('simple-array')
  residents: string[];

  @Column('simple-array')
  films: string[];

  @Column()
  url: string;

  @Column()
  created: string;

  @Column()
  edited: string;
}
