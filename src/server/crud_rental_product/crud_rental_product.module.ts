import { Module } from '@nestjs/common';
import { CrudRentalProcuctService } from './crud_rental_product.service';
import { CrudRentalProcuctController } from './crud_rental_product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RentalProcuct,
  RentalProcuctSchema,
} from './crud_rental_product.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
    ),
    MongooseModule.forFeature([
      { name: RentalProcuct.name, schema: RentalProcuctSchema },
    ]),
  ],
  controllers: [CrudRentalProcuctController],
  providers: [CrudRentalProcuctService],
  exports: [MongooseModule],
})
export class CrudRentalProductModule {}
