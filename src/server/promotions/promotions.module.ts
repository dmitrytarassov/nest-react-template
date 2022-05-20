import { Module } from '@nestjs/common';
import { PromotionsController } from './promotions.controller';
import { PromotionsService } from './promotions.service';
import { CityService } from '@backend/city/city.service';
import { RentalsService } from '@backend/rentals/rentals.service';
import { ProductsService } from '@backend/products/products.service';

@Module({
  controllers: [PromotionsController],
  providers: [PromotionsService, CityService, RentalsService, ProductsService],
})
export class PromotionsModule {}
