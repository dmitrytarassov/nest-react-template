import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class RentalProcuct {
  @Prop()
  rentalId: string;

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
}

export type RentalProcuctDocument = RentalProcuct & Document;

export const RentalProcuctSchema = SchemaFactory.createForClass(RentalProcuct);
