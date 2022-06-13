import { Controller } from '@nestjs/common';
import { Promotion } from './crud_promotion.schema';
import { BaseApiMongoController } from '@backend/utils/BaseApiMongoController';
import { ApiPromotionService } from '@backend/crud_promotion/api_promotion.service';

@Controller('api/promotions')
// @ts-ignore
export class ApiPromotionController extends BaseApiMongoController<
  ApiPromotionService,
  Promotion
> {
  constructor(private readonly service: ApiPromotionService) {
    super(service);
  }
}
