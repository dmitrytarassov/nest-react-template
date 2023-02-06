import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Seo } from '@backend/utils/seo.schema';

@Schema()
export class RentalProduct extends Seo {
  @Prop()
  rentalId: string;

  @Prop()
  weight?: number;

  @Prop()
  productId: string;

  @Prop()
  url: string;

  @Prop()
  price?: number;

  @Prop()
  discountPrice?: number;

  @Prop()
  promotionType?: string;

  @Prop()
  promotionText?: string;

  @Prop()
  promotionDescription?: string;

  @Prop()
  promotionShortDescription?: string;

  @Prop()
  date: Date;

  @Prop()
  externalUrl: string;

  @Prop()
  showOnMainPage?: boolean;

  @Prop()
  showUniqueOnMainPage?: boolean;
}

export type RentalProductDocument = RentalProduct & Document;

export const RentalProductSchema = SchemaFactory.createForClass(RentalProduct);
