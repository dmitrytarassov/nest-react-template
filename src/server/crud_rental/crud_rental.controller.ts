import { Controller } from '@nestjs/common';
import { CrudRentalService } from './crud_rental.service';
import { BaseCrudMongoController } from '@backend/utils/BaseCrudMongoController';
import { Rental } from './crud_rental.schema';

@Controller('crud/rental')
// @ts-ignore
export class CrudRentalController extends BaseCrudMongoController<
  CrudRentalService,
  Rental
> {
  constructor(private readonly service: CrudRentalService) {
    super(service);
  }
}
