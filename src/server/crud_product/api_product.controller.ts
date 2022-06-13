import { Controller } from '@nestjs/common';
import { Product } from './crud_product.schema';
import { BaseApiMongoController } from '@backend/utils/BaseApiMongoController';
import { ApiProductService } from '@backend/crud_product/api_product.service';

@Controller('api/product')
// @ts-ignore
export class ApiProductController extends BaseApiMongoController<
  ApiProductService,
  Product
> {
  constructor(private readonly service: ApiProductService) {
    super(service);
  }
}
