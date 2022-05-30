import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CrudIcon } from './crud_icon.entity';

@Entity()
export class CrudIconImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  src: string;

  @Column()
  icon: number;

  // @ManyToOne(type => CrudIcon, icon => icon.images)
  // icon: CrudIcon;
}
