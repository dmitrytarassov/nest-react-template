import { Module } from '@nestjs/common';
import { CrudPromotionService } from './crud_promotion.service';
import { CrudPromotionController } from './crud_promotion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Promotion, PromotionSchema } from './crud_promotion.schema';
import mongoConfig from '@backend/utils/mongoConfig';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig),
    MongooseModule.forFeature([
      { name: Promotion.name, schema: PromotionSchema },
    ]),
  ],
  controllers: [CrudPromotionController],
  providers: [CrudPromotionService],
  exports: [MongooseModule],
})
export class CrudPromotionModule {}
