import { Controller } from '@nestjs/common';
import { CrudPromotionService } from './crud_promotion.service';
import { BaseCrudMongoController } from '@backend/utils/BaseCrudMongoController';
import { Promotion } from './crud_promotion.schema';

@Controller('crud/promotions')
// @ts-ignore
export class CrudPromotionController extends BaseCrudMongoController<
  CrudPromotionService,
  Promotion
> {
  constructor(private readonly service: CrudPromotionService) {
    super(service);
  }
}
