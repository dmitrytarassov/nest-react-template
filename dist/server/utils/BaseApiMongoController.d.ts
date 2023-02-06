export declare class BaseApiMongoController<T, E> {
    private readonly service;
    constructor(service: T);
    fetchAll(query: any, response: any): Promise<any>;
    findById(response: any, _id: any): Promise<any>;
}
