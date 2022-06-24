import { Module } from '@nestjs/common';
import { CrudRentalProductService } from './crud_rental_product.service';
import { CrudRentalProductController } from './crud_rental_product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RentalProduct,
  RentalProductSchema,
} from './crud_rental_product.schema';
import mongoConfig from '@backend/utils/mongoConfig';
import { ApiRentalProductController } from '@backend/crud_rental_product/api_rental_product.controller';
import { ApiRentalProductService } from '@backend/crud_rental_product/api_rental_product.service';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig.uri),
    MongooseModule.forFeature([
      { name: RentalProduct.name, schema: RentalProductSchema },
    ]),
  ],
  controllers: [CrudRentalProductController, ApiRentalProductController],
  providers: [CrudRentalProductService, ApiRentalProductService],
  exports: [MongooseModule],
})
export class CrudRentalProductModule {}
