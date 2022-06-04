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
import { CrudRentalModule } from '@backend/crud_rental/crud_rental.module';
import { CrudRentalController } from '@backend/crud_rental/crud_rental.controller';
import { CrudRentalService } from '@backend/crud_rental/crud_rental.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudIconModule } from '@backend/crud_icon/crud_icon.module';
import { CrudIconController } from '@backend/crud_icon/crud_icon.controller';
import { CrudIconService } from '@backend/crud_icon/crud_icon.service';
import { CrudProductService } from '@backend/crud_product/crud_product.service';
import { CrudProductController } from '@backend/crud_product/crud_product.controller';
import { CrudProductModule } from '@backend/crud_product/crud_product.module';
import { CrudRentalProductModule } from '@backend/crud_rental_product/crud_rental_product.module';
import { CrudRentalProcuctController } from '@backend/crud_rental_product/crud_rental_product.controller';
import { CrudRentalProcuctService } from '@backend/crud_rental_product/crud_rental_product.service';
import { CrudPromotionModule } from '@backend/crud_promotion/crud_product.module';
import { CrudPromotionController } from '@backend/crud_promotion/crud_promotion.controller';
import { CrudPromotionService } from '@backend/crud_promotion/crud_promotion.service';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

console.log(
  `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
);

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
    ),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'public'),
      // renderPath: 'uploads',
    }),
    ViewModule,
    ConsoleModule,
    CrudRentalModule,
    CrudProductModule,
    CrudRentalProductModule,
    CrudPromotionModule,
    ProductsModule,
    RentalsModule,
    PromotionsModule,
    CityModule,
    RentalProductsModule,
    CrudIconModule,
  ],
  controllers: [
    AppController,
    CrudRentalController,
    CrudProductController,
    CrudRentalProcuctController,
    CrudPromotionController,
    RentalsController,
    ProductsController,
    PromotionsController,
    CityController,
    RentalProductsController,
    CrudIconController,
  ],
  providers: [
    AppService,
    CrudRentalService,
    CrudProductService,
    CrudRentalProcuctService,
    CrudPromotionService,
    RentalsService,
    ProductsService,
    PromotionsService,
    CityService,
    RentalProductsService,
    CrudIconService,
  ],
  exports: [MongooseModule],
})
export class AppModule {}
