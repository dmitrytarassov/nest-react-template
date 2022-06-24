import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Seo {
  @Prop()
  seo_title?: string;

  @Prop()
  seo_description?: string;

  @Prop()
  seo_keywords?: string;
}
