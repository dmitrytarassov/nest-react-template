import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Rental } from './crud_rental.schema';
import { BaseApiMongoModel } from '@backend/utils/BaseApiMongoModel';

@Injectable()
// @ts-ignore
export class ApiRentalService extends BaseApiMongoModel<Rental> {
  constructor(@InjectModel(Rental.name) private readonly model: Model<Rental>) {
    super(model);
  }
}
