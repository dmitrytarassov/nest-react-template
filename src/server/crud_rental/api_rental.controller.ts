import { Controller } from '@nestjs/common';
import { Rental } from './crud_rental.schema';
import { BaseApiMongoController } from '@backend/utils/BaseApiMongoController';
import { ApiRentalService } from '@backend/crud_rental/api_rental.service';

@Controller('api/rental')
// @ts-ignore
export class ApiRentalController extends BaseApiMongoController<
  ApiRentalService,
  Rental
> {
  constructor(private readonly service: ApiRentalService) {
    super(service);
  }
}
