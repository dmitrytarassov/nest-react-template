import { Controller } from '@nestjs/common';

import { RentalProduct } from './crud_rental_product.schema';
import { BaseApiMongoController } from '@backend/utils/BaseApiMongoController';
import { ApiRentalProductService } from '@backend/crud_rental_product/api_rental_product.service';

@Controller('api/rental_products')
// @ts-ignore
export class ApiRentalProductController extends BaseApiMongoController<
  ApiRentalProductService,
  RentalProduct
> {
  constructor(private readonly service: ApiRentalProductService) {
    super(service);
  }
}
