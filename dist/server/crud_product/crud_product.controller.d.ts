import { CrudProductService } from './crud_product.service';
import { BaseCrudMongoController } from '@backend/utils/BaseCrudMongoController';
import { Product } from './crud_product.schema';
export declare class CrudProductController extends BaseCrudMongoController<CrudProductService, Product> {
    private readonly service;
    constructor(service: CrudProductService);
}
