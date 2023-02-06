import { CrudPromotionService } from './crud_promotion.service';
import { BaseCrudMongoController } from '@backend/utils/BaseCrudMongoController';
import { Promotion } from './crud_promotion.schema';
export declare class CrudPromotionController extends BaseCrudMongoController<CrudPromotionService, Promotion> {
    private readonly service;
    constructor(service: CrudPromotionService);
}
