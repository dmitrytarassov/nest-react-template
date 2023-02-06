import { FilterQuery, Model } from 'mongoose';
interface Query {
    limit: string;
    page: string;
    sort: string[];
    offset: string;
    filter?: string[];
}
export declare class BaseApiMongoModel<T> {
    private readonly model;
    constructor(model: Model<T>);
    createFilter(query: Query): FilterQuery<T>;
    readAll(query: Query): Promise<T[]>;
    find(query: any): Promise<T[]>;
    getUniqueIds(): Promise<string[]>;
    readById(id: any): Promise<T>;
    getTotal(query: Query): Promise<number>;
}
export {};
