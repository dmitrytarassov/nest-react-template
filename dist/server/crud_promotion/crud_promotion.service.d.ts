import { BaseCrudMongoModel } from '@backend/utils/BaseCrudMongoModel';
import { Model } from 'mongoose';
import { Promotion } from './crud_promotion.schema';
export declare class CrudPromotionService extends BaseCrudMongoModel<Promotion> {
    private readonly model;
    constructor(model: Model<Promotion>);
}
