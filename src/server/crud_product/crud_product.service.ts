import { Injectable } from '@nestjs/common';
import { BaseCrudMongoModel } from '@backend/utils/BaseCrudMongoModel';
import { Model } from 'mongoose';
import { Product } from './crud_product.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
// @ts-ignore
export class CrudProductService extends BaseCrudMongoModel<Product> {
  constructor(
    @InjectModel(Product.name) private readonly model: Model<Product>,
  ) {
    super(model);
  }
}
