import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './crud_product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { BaseApiMongoModel } from '@backend/utils/BaseApiMongoModel';

@Injectable()
// @ts-ignore
export class ApiProductService extends BaseApiMongoModel<Product> {
  constructor(
    @InjectModel(Product.name) private readonly model: Model<Product>,
  ) {
    super(model);
  }
}
