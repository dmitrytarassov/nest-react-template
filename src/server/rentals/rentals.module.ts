import { Module } from '@nestjs/common';
import { RentalsController } from './rentals.controller';
import { RentalsService } from './rentals.service';
import { CityService } from '@backend/city/city.service';
import { ProductsService } from '@backend/products/products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Rental, RentalSchema } from '@backend/crud_rental/crud_rental.schema';
import { CrudRentalService } from '@backend/crud_rental/crud_rental.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
    ),
    MongooseModule.forFeature([{ name: Rental.name, schema: RentalSchema }]),
  ],
  controllers: [RentalsController],
  providers: [ProductsService, RentalsService, CityService, CrudRentalService],
  exports: [MongooseModule],
})
export class RentalsModule {}
