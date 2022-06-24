import { Injectable } from '@nestjs/common';
import { BaseCrudMongoModel } from '@backend/utils/BaseCrudMongoModel';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RentalProduct } from './crud_rental_product.schema';

@Injectable()
// @ts-ignore
export class CrudRentalProductService extends BaseCrudMongoModel<RentalProduct> {
  constructor(
    @InjectModel(RentalProduct.name)
    private readonly model: Model<RentalProduct>,
  ) {
    super(model);
  }
}
