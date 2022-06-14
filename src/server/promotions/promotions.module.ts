import { Module } from '@nestjs/common';
import { PromotionsController } from './promotions.controller';
import { PromotionsService } from './promotions.service';
import { CityService } from '@backend/city/city.service';
import { RentalsService } from '@backend/rentals/rentals.service';
import { ProductsService } from '@backend/products/products.service';
import { CrudRentalService } from '@backend/crud_rental/crud_rental.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Rental, RentalSchema } from '@backend/crud_rental/crud_rental.schema';
import mongoConfig from '@backend/utils/mongoConfig';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig.uri),
    MongooseModule.forFeature([{ name: Rental.name, schema: RentalSchema }]),
  ],
  controllers: [PromotionsController],
  providers: [
    PromotionsService,
    CityService,
    RentalsService,
    ProductsService,
    CrudRentalService,
  ],
  exports: [MongooseModule],
})
export class PromotionsModule {}
