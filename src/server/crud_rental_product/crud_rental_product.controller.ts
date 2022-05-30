import { Controller } from '@nestjs/common';
import { CrudRentalProcuctService } from './crud_rental_product.service';
import { BaseCrudMongoController } from '@backend/utils/BaseCrudMongoController';
import { RentalProcuct } from './crud_rental_product.schema';

@Controller('crud/rental_products')
// @ts-ignore
export class CrudRentalProcuctController extends BaseCrudMongoController<
  CrudRentalProcuctService,
  RentalProcuct
> {
  constructor(private readonly service: CrudRentalProcuctService) {
    super(service);
  }
}
