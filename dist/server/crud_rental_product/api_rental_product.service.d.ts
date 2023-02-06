import { Model } from 'mongoose';
import { RentalProduct } from './crud_rental_product.schema';
import { BaseApiMongoModel } from '@backend/utils/BaseApiMongoModel';
export declare class ApiRentalProductService extends BaseApiMongoModel<RentalProduct> {
    private readonly model;
    constructor(model: Model<RentalProduct>);
}
