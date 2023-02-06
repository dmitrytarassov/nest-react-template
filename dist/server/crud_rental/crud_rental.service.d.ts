import { BaseCrudMongoModel } from '@backend/utils/BaseCrudMongoModel';
import { Model } from 'mongoose';
import { Rental } from './crud_rental.schema';
export declare class CrudRentalService extends BaseCrudMongoModel<Rental> {
    private readonly model;
    constructor(model: Model<Rental>);
}
