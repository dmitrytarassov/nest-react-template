import { Module } from '@nestjs/common';
import { RentalProductsController } from './rental-products.controller';
import { RentalProductsService } from './rental-products.service';

@Module({
  controllers: [RentalProductsController],
  providers: [RentalProductsService],
})
export class RentalProductsModule {}
