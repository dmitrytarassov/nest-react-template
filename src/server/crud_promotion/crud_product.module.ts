import { Module } from '@nestjs/common';
import { CrudPromotionService } from './crud_promotion.service';
import { CrudPromotionController } from './crud_promotion.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Promotion, PromotionSchema } from './crud_promotion.schema';
import mongoConfig from '@backend/utils/mongoConfig';
import { ApiPromotionService } from '@backend/crud_promotion/api_promotion.service';
import { ApiPromotionController } from '@backend/crud_promotion/api_promotion.controller';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig.uri),
    MongooseModule.forFeature([
      { name: Promotion.name, schema: PromotionSchema },
    ]),
  ],
  controllers: [CrudPromotionController, ApiPromotionController],
  providers: [CrudPromotionService, ApiPromotionService],
  exports: [MongooseModule],
})
export class CrudPromotionModule {}
