import { Module } from '@nestjs/common';
import { CrudProductService } from './crud_product.service';
import { CrudProductController } from './crud_product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './crud_product.schema';
import mongoConfig from '@backend/utils/mongoConfig';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [CrudProductController],
  providers: [CrudProductService],
  exports: [MongooseModule],
})
export class CrudProductModule {}
