import { Module } from '@nestjs/common';
import { CrudProductService } from './crud_product.service';
import { CrudProductController } from './crud_product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './crud_product.schema';
import mongoConfig from '@backend/utils/mongoConfig';
import { ApiProductService } from '@backend/crud_product/api_product.service';
import { ApiProductController } from '@backend/crud_product/api_product.controller';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig.uri),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [CrudProductController, ApiProductController],
  providers: [CrudProductService, ApiProductService],
  exports: [MongooseModule],
})
export class CrudProductModule {}
