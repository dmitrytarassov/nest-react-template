import { Module } from '@nestjs/common';
import { CrudProductService } from './crud_product.service';
import { CrudProductController } from './crud_product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './crud_product.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
    ),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [CrudProductController],
  providers: [CrudProductService],
  exports: [MongooseModule],
})
export class CrudProductModule {}
