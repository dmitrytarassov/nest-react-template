import { Injectable } from '@nestjs/common';
import { BaseCrudMongoModel } from '@backend/utils/BaseCrudMongoModel';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RentalProcuct } from './crud_rental_product.schema';
import { BaseApiMongoModel } from '@backend/utils/BaseApiMongoModel';

@Injectable()
// @ts-ignore
export class ApiRentalProductService extends BaseApiMongoModel<RentalProcuct> {
  constructor(
    @InjectModel(RentalProcuct.name)
    private readonly model: Model<RentalProcuct>,
  ) {
    super(model);
  }
}
