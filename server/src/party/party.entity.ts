import {
  BaseEntity,
  Column,
  Entity,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Party extends BaseEntity {
  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  party_id: number;

  @Column()
  party_name: string;

  @Column()
  logo: string;
}
