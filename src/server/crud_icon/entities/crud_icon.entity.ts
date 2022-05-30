import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { City } from '@lib/types/City';
import { CrudIconImage } from '@backend/crud_icon/entities/crud_icon_image.entity';

@Entity()
export class CrudIcon {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => CrudIconImage, (image) => image.icon)
  images: CrudIconImage[];
}
