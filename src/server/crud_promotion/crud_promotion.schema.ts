import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Promotion {
  @Prop()
  photos: string[];

  @Prop()
  name: string;

  @Prop()
  url: string;

  @Prop()
  text?: string;

  @Prop()
  shortText?: string;

  @Prop()
  rentalId?: string;

  @Prop()
  promotionType?: string;

  @Prop()
  promotionText?: string;

  @Prop()
  date?: Date;
}

export type PromotionDocument = Promotion & Document;

export const PromotionSchema = SchemaFactory.createForClass(Promotion);
