import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product {
  @Prop()
  photos: string[];

  @Prop()
  name: string;

  @Prop()
  properties?: string;

  @Prop()
  propertiesText?: string;

  @Prop()
  description?: string;

  @Prop()
  shortDescription?: string;

  @Prop()
  unique: boolean;
}

export type ProductDocument = Product & Document;

export const ProductSchema = SchemaFactory.createForClass(Product);
