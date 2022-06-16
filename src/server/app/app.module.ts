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

import { CrudProductService } from '@backend/crud_product/crud_product.service';
import { CrudProductController } from '@backend/crud_product/crud_product.controller';
import { CrudProductModule } from '@backend/crud_product/crud_product.module';
import { CrudRentalProductModule } from '@backend/crud_rental_product/crud_rental_product.module';
import { CrudRentalProcuctController } from '@backend/crud_rental_product/crud_rental_product.controller';
import { CrudRentalProcuctService } from '@backend/crud_rental_product/crud_rental_product.service';
import { CrudPromotionModule } from '@backend/crud_promotion/crud_product.module';
import { CrudPromotionController } from '@backend/crud_promotion/crud_promotion.controller';
import { CrudPromotionService } from '@backend/crud_promotion/crud_promotion.service';
import { CrudAuthService } from '@backend/crud_auth/crud_auth.service';
import { CrudAuthModule } from '@backend/crud_auth/crud_auth.module';
import { CrudAuthController } from '@backend/crud_auth/crud_auth.controller';
import { ApiRentalProductService } from '@backend/crud_rental_product/api_rental_product.service';
import { ApiRentalProductController } from '@backend/crud_rental_product/api_rental_product.controller';
import { ApiProductController } from '@backend/crud_product/api_product.controller';
import { ApiProductService } from '@backend/crud_product/api_product.service';
import { ApiPromotionService } from '@backend/crud_promotion/api_promotion.service';
import { ApiRentalController } from '@backend/crud_rental/api_rental.controller';
import { ApiPromotionController } from '@backend/crud_promotion/api_promotion.controller';
import { ApiRentalService } from '@backend/crud_rental/api_rental.service';
import mongoConfig from '@backend/utils/mongoConfig';

console.log(mongoConfig);

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig.uri),
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
    // PromotionsModule,
    CityModule,
    RentalProductsModule,
    CrudAuthModule,
  ],
  controllers: [
    AppController,
    CrudRentalController,
    CrudProductController,
    CrudRentalProcuctController,
    CrudPromotionController,
    RentalsController,
    ProductsController,
    // PromotionsController,
    CityController,
    RentalProductsController,
    CrudAuthController,
    ApiRentalProductController,
    ApiProductController,
    ApiPromotionController,
    ApiRentalController,
  ],
  providers: [
    AppService,
    CrudRentalService,
    CrudProductService,
    CrudRentalProcuctService,
    CrudPromotionService,
    RentalsService,
    ProductsService,
    // PromotionsService,
    CityService,
    RentalProductsService,
    CrudAuthService,
    ApiRentalProductService,
    ApiProductService,
    ApiPromotionService,
    ApiRentalService,
  ],
  exports: [MongooseModule],
})
export class AppModule {}
