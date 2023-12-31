import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Starship {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  model: string;

  @Column()
  starship_class: string;

  @Column()
  manufacturer: string;

  @Column()
  cost_in_credits: string;

  @Column()
  length: string;

  @Column()
  crew: string;

  @Column()
  passengers: string;

  @Column()
  max_atmosphering_speed: string;

  @Column()
  hyperdrive_rating: string;

  @Column()
  MGLT: string;

  @Column()
  cargo_capacity: string;

  @Column()
  consumables: string;

  @Column('simple-array')
  films: string[];

  @Column('simple-array')
  pilots: string[];

  @Column()
  url: string;

  @Column()
  created: string;

  @Column()
  edited: string;
}
