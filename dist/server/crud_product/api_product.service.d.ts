import { Model } from 'mongoose';
import { Product } from './crud_product.schema';
import { BaseApiMongoModel } from '@backend/utils/BaseApiMongoModel';
export declare class ApiProductService extends BaseApiMongoModel<Product> {
    private readonly model;
    constructor(model: Model<Product>);
}
