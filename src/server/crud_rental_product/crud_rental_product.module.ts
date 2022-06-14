import { Module } from '@nestjs/common';
import { CrudRentalProcuctService } from './crud_rental_product.service';
import { CrudRentalProcuctController } from './crud_rental_product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RentalProcuct,
  RentalProcuctSchema,
} from './crud_rental_product.schema';
import mongoConfig from '@backend/utils/mongoConfig';
import { ApiRentalProductController } from '@backend/crud_rental_product/api_rental_product.controller';
import { ApiRentalProductService } from '@backend/crud_rental_product/api_rental_product.service';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig.uri),
    MongooseModule.forFeature([
      { name: RentalProcuct.name, schema: RentalProcuctSchema },
    ]),
  ],
  controllers: [CrudRentalProcuctController, ApiRentalProductController],
  providers: [CrudRentalProcuctService, ApiRentalProductService],
  exports: [MongooseModule],
})
export class CrudRentalProductModule {}
