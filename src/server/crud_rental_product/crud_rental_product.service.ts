import { Injectable } from '@nestjs/common';
import { BaseCrudMongoModel } from '@backend/utils/BaseCrudMongoModel';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RentalProcuct } from './crud_rental_product.schema';

@Injectable()
// @ts-ignore
export class CrudRentalProcuctService extends BaseCrudMongoModel<RentalProcuct> {
  constructor(
    @InjectModel(RentalProcuct.name)
    private readonly model: Model<RentalProcuct>,
  ) {
    super(model);
  }
}
