import { Model } from 'mongoose';
import { Promotion } from './crud_promotion.schema';
import { BaseApiMongoModel } from '@backend/utils/BaseApiMongoModel';
export declare class ApiPromotionService extends BaseApiMongoModel<Promotion> {
    private readonly model;
    constructor(model: Model<Promotion>);
}
