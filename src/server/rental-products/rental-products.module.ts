import {
  RentalProcuct,
  RentalProcuctSchema,
} from '@backend/crud_rental_product/crud_rental_product.schema';
import mongoConfig from '@backend/utils/mongoConfig';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RentalProductsController } from './rental-products.controller';
import { RentalProductsService } from './rental-products.service';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig),
    MongooseModule.forFeature([
      { name: RentalProcuct.name, schema: RentalProcuctSchema },
    ]),
  ],
  controllers: [RentalProductsController],
  providers: [RentalProductsService],
  exports: [MongooseModule],
})
export class RentalProductsModule {}
