import { RentalProduct } from './crud_rental_product.schema';
import { BaseApiMongoController } from '@backend/utils/BaseApiMongoController';
import { ApiRentalProductService } from '@backend/crud_rental_product/api_rental_product.service';
export declare class ApiRentalProductController extends BaseApiMongoController<ApiRentalProductService, RentalProduct> {
    private readonly service;
    constructor(service: ApiRentalProductService);
}
