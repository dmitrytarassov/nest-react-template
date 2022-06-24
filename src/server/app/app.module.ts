// blog-server/src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewModule } from '../view/view.module';
import { ConsoleModule } from 'nestjs-console';
import { CityModule } from '@backend/city/city.module';
import { CityController } from '@backend/city/city.controller';
import { CityService } from '@backend/city/city.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { CrudRentalModule } from '@backend/crud_rental/crud_rental.module';
import { CrudRentalController } from '@backend/crud_rental/crud_rental.controller';
import { CrudRentalService } from '@backend/crud_rental/crud_rental.service';
import { MongooseModule } from '@nestjs/mongoose';

import { CrudProductService } from '@backend/crud_product/crud_product.service';
import { CrudProductController } from '@backend/crud_product/crud_product.controller';
import { CrudProductModule } from '@backend/crud_product/crud_product.module';
import { CrudRentalProductModule } from '@backend/crud_rental_product/crud_rental_product.module';
import { CrudRentalProductController } from '@backend/crud_rental_product/crud_rental_product.controller';
import { CrudRentalProductService } from '@backend/crud_rental_product/crud_rental_product.service';
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
    CityModule,
    CrudAuthModule,
  ],
  controllers: [
    AppController,
    CrudRentalController,
    CrudProductController,
    CrudRentalProductController,
    CrudPromotionController,
    CityController,
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
    CrudRentalProductService,
    CrudPromotionService,
    CityService,
    CrudAuthService,
    ApiRentalProductService,
    ApiProductService,
    ApiPromotionService,
    ApiRentalService,
  ],
  exports: [MongooseModule],
})
export class AppModule {}
