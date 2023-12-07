import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Vehicle {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  model: string;

  @Column()
  vehicle_class: string;

  @Column()
  manufacturer: string;

  @Column()
  length: string;

  @Column()
  cost_in_credits: string;

  @Column()
  crew: string;

  @Column()
  passengers: string;

  @Column()
  max_atmosphering_speed: string;

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
