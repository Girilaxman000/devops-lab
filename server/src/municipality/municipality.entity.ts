import { BaseEntity, Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm'

@Entity()
export class Municipality extends BaseEntity {

  @ObjectIdColumn()
  _id: string;

  @PrimaryColumn()
  mun_id: number;

  @Column()
  mun_name: string;

}



