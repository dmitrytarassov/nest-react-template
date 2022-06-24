import { Controller } from '@nestjs/common';
import { CrudRentalProductService } from './crud_rental_product.service';
import { BaseCrudMongoController } from '@backend/utils/BaseCrudMongoController';
import { RentalProduct } from './crud_rental_product.schema';

@Controller('crud/rental_products')
// @ts-ignore
export class CrudRentalProductController extends BaseCrudMongoController<
  CrudRentalProductService,
  RentalProduct
> {
  constructor(private readonly service: CrudRentalProductService) {
    super(service);
  }
}
