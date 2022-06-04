import { City } from '@lib/types/City';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Rental {
  @Prop()
  name: string;

  @Prop()
  email?: string;

  @Prop()
  url: string;

  @Prop()
  icon: string;

  @Prop()
  address: string;

  @Prop()
  coordinates: string;

  @Prop()
  workingTime: string;

  @Prop()
  vk?: string;

  @Prop()
  telegram?: string;

  @Prop()
  web?: string;

  @Prop()
  rating: number;

  @Prop()
  phone: string;

  @Prop()
  services: string;

  @Prop()
  city: City;

  @Prop()
  delivery: string;

  @Prop()
  selfService: string;

  @Prop()
  repair: string;

  @Prop()
  insurance: string;
}

export type RentalDocument = Rental & Document;

export const RentalSchema = SchemaFactory.createForClass(Rental);
