import { CrudRentalProductService } from './crud_rental_product.service';
import { BaseCrudMongoController } from '@backend/utils/BaseCrudMongoController';
import { RentalProduct } from './crud_rental_product.schema';
export declare class CrudRentalProductController extends BaseCrudMongoController<CrudRentalProductService, RentalProduct> {
    private readonly service;
    constructor(service: CrudRentalProductService);
}
