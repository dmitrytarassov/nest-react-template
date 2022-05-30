import { Controller } from '@nestjs/common';
import { CrudProductService } from './crud_product.service';
import { BaseCrudMongoController } from '@backend/utils/BaseCrudMongoController';
import { Product } from './crud_product.schema';

@Controller('crud/product')
// @ts-ignore
export class CrudProductController extends BaseCrudMongoController<
  CrudProductService,
  Product
> {
  constructor(private readonly service: CrudProductService) {
    super(service);
  }
}
