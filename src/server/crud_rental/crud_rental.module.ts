import { Module } from '@nestjs/common';
import { CrudRentalService } from './crud_rental.service';
import { CrudRentalController } from './crud_rental.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rental, RentalSchema } from './crud_rental.schema';
import mongoConfig from '@backend/utils/mongoConfig';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig),
    MongooseModule.forFeature([{ name: Rental.name, schema: RentalSchema }]),
  ],
  controllers: [CrudRentalController],
  providers: [CrudRentalService],
  exports: [MongooseModule],
})
export class CrudRentalModule {}
