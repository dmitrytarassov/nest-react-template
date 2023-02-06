import { CrudRentalService } from './crud_rental.service';
import { BaseCrudMongoController } from '@backend/utils/BaseCrudMongoController';
import { Rental } from './crud_rental.schema';
export declare class CrudRentalController extends BaseCrudMongoController<CrudRentalService, Rental> {
    private readonly service;
    constructor(service: CrudRentalService);
}
