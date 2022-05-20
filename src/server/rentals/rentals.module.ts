import { Module } from '@nestjs/common';
import { RentalsController } from './rentals.controller';
import { RentalsService } from './rentals.service';
import { CityService } from '@backend/city/city.service';
import { ProductsService } from '@backend/products/products.service';

@Module({
  controllers: [RentalsController],
  providers: [ProductsService, RentalsService, CityService],
})
export class RentalsModule {}
