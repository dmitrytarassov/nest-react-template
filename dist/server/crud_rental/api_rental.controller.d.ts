import { Rental } from './crud_rental.schema';
import { BaseApiMongoController } from '@backend/utils/BaseApiMongoController';
import { ApiRentalService } from '@backend/crud_rental/api_rental.service';
export declare class ApiRentalController extends BaseApiMongoController<ApiRentalService, Rental> {
    private readonly service;
    constructor(service: ApiRentalService);
}
