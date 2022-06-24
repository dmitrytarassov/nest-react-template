import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RentalProduct } from './crud_rental_product.schema';
import { BaseApiMongoModel } from '@backend/utils/BaseApiMongoModel';

@Injectable()
// @ts-ignore
export class ApiRentalProductService extends BaseApiMongoModel<RentalProduct> {
  constructor(
    @InjectModel(RentalProduct.name)
    private readonly model: Model<RentalProduct>,
  ) {
    super(model);
  }
}
