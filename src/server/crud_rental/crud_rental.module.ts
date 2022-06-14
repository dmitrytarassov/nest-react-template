import { Module } from '@nestjs/common';
import { CrudRentalService } from './crud_rental.service';
import { CrudRentalController } from './crud_rental.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rental, RentalSchema } from './crud_rental.schema';
import mongoConfig from '@backend/utils/mongoConfig';
import { ApiRentalController } from '@backend/crud_rental/api_rental.controller';
import { ApiRentalService } from '@backend/crud_rental/api_rental.service';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig.uri),
    MongooseModule.forFeature([{ name: Rental.name, schema: RentalSchema }]),
  ],
  controllers: [CrudRentalController, ApiRentalController],
  providers: [CrudRentalService, ApiRentalService],
  exports: [MongooseModule],
})
export class CrudRentalModule {}
