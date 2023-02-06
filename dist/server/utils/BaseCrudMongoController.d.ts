import { BaseApiMongoController } from '@backend/utils/BaseApiMongoController';
export declare class BaseCrudMongoController<T, E> extends BaseApiMongoController<T, E> {
    private readonly service;
    constructor(service: T);
    create(response: any, element: E): Promise<any>;
    update(response: any, id: any, element: E): Promise<any>;
    delete(response: any, id: any): Promise<any>;
}
