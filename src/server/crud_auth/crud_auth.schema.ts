import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Auth {
  @Prop()
  login: string;

  @Prop()
  password: string;
}

export type AuthDocument = Auth & Document;

export const AuthSchema = SchemaFactory.createForClass(Auth);
