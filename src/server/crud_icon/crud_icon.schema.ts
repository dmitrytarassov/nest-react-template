import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Icon {
  @Prop()
  images: string[];
}

export type IconDocument = Icon & Document;

export const IconSchema = SchemaFactory.createForClass(Icon);
