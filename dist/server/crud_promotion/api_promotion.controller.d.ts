import { Promotion } from './crud_promotion.schema';
import { BaseApiMongoController } from '@backend/utils/BaseApiMongoController';
import { ApiPromotionService } from '@backend/crud_promotion/api_promotion.service';
export declare class ApiPromotionController extends BaseApiMongoController<ApiPromotionService, Promotion> {
    private readonly service;
    constructor(service: ApiPromotionService);
}
