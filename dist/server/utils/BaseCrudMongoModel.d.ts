import { Model } from 'mongoose';
import { BaseApiMongoModel } from '@backend/utils/BaseApiMongoModel';
export declare class BaseCrudMongoModel<T> extends BaseApiMongoModel<T> {
    private readonly model;
    constructor(model: Model<T>);
    create(book: T): Promise<T>;
    update(id: any, element: T): Promise<T>;
    delete(id: any): Promise<any>;
}
