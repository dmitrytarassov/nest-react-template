// blog-server/src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewModule } from '../view/view.module';
import { ConsoleModule } from 'nestjs-console';
import { RentalsModule } from '@backend/rentals/rentals.module';
import { RentalsController } from '@backend/rentals/rentals.controller';
import { RentalsService } from '@backend/rentals/rentals.service';
import { ProductsController } from '@backend/products/products.controller';
import { ProductsModule } from '@backend/products/products.module';
import { ProductsService } from '@backend/products/products.service';
import { PromotionsModule } from '@backend/promotions/promotions.module';
import { PromotionsController } from '@backend/promotions/promotions.controller';
import { PromotionsService } from '@backend/promotions/promotions.service';
import { CityModule } from '@backend/city/city.module';
import { CityController } from '@backend/city/city.controller';
import { CityService } from '@backend/city/city.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { RentalProductsModule } from '@backend/rental-products/rental-products.module';
import { RentalProductsController } from '@backend/rental-products/rental-products.controller';
import { RentalProductsService } from '@backend/rental-products/rental-products.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'public'),
      // renderPath: 'uploads',
    }),
    ViewModule,
    ConsoleModule,
    ProductsModule,
    RentalsModule,
    PromotionsModule,
    CityModule,
    RentalProductsModule,
  ],
  controllers: [
    AppController,
    RentalsController,
    ProductsController,
    PromotionsController,
    CityController,
    RentalProductsController,
  ],
  providers: [
    AppService,
    RentalsService,
    ProductsService,
    PromotionsService,
    CityService,
    RentalProductsService,
  ],
})
export class AppModule {}
