import { Product } from './crud_product.schema';
import { BaseApiMongoController } from '@backend/utils/BaseApiMongoController';
import { ApiProductService } from '@backend/crud_product/api_product.service';
export declare class ApiProductController extends BaseApiMongoController<ApiProductService, Product> {
    private readonly service;
    constructor(service: ApiProductService);
}
