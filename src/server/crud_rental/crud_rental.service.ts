import { Injectable } from '@nestjs/common';
import { BaseCrudMongoModel } from '@backend/utils/BaseCrudMongoModel';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Rental } from './crud_rental.schema';

@Injectable()
// @ts-ignore
export class CrudRentalService extends BaseCrudMongoModel<Rental> {
  constructor(@InjectModel(Rental.name) private readonly model: Model<Rental>) {
    super(model);
  }
}
