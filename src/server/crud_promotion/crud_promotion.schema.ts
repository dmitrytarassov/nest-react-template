import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Seo } from '@backend/utils/seo.schema';

@Schema()
export class Promotion extends Seo {
  @Prop()
  photos: string[];

  @Prop()
  weight: number;

  @Prop()
  name: string;

  @Prop()
  externalUrl: string;

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

  @Prop()
  showOnMainPage?: boolean;
}

export type PromotionDocument = Promotion & Document;

export const PromotionSchema = SchemaFactory.createForClass(Promotion);
