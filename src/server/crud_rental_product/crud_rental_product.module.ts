import { Module } from '@nestjs/common';
import { CrudRentalProcuctService } from './crud_rental_product.service';
import { CrudRentalProcuctController } from './crud_rental_product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RentalProcuct,
  RentalProcuctSchema,
} from './crud_rental_product.schema';
import mongoConfig from '@backend/utils/mongoConfig';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig),
    MongooseModule.forFeature([
      { name: RentalProcuct.name, schema: RentalProcuctSchema },
    ]),
  ],
  controllers: [CrudRentalProcuctController],
  providers: [CrudRentalProcuctService],
  exports: [MongooseModule],
})
export class CrudRentalProductModule {}
