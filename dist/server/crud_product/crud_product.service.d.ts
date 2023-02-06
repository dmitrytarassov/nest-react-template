import { BaseCrudMongoModel } from '@backend/utils/BaseCrudMongoModel';
import { Model } from 'mongoose';
import { Product } from './crud_product.schema';
export declare class CrudProductService extends BaseCrudMongoModel<Product> {
    private readonly model;
    constructor(model: Model<Product>);
}
