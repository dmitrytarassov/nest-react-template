import { Model } from 'mongoose';
import { Rental } from './crud_rental.schema';
import { BaseApiMongoModel } from '@backend/utils/BaseApiMongoModel';
export declare class ApiRentalService extends BaseApiMongoModel<Rental> {
    private readonly model;
    constructor(model: Model<Rental>);
}
