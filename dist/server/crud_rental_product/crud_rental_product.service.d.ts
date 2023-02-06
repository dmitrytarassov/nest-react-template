import { BaseCrudMongoModel } from '@backend/utils/BaseCrudMongoModel';
import { Model } from 'mongoose';
import { RentalProduct } from './crud_rental_product.schema';
export declare class CrudRentalProductService extends BaseCrudMongoModel<RentalProduct> {
    private readonly model;
    constructor(model: Model<RentalProduct>);
}
