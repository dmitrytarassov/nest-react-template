import { Injectable } from '@nestjs/common';
import { BaseCrudMongoModel } from '@backend/utils/BaseCrudMongoModel';
import { Model } from 'mongoose';
import { Promotion } from './crud_promotion.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
// @ts-ignore
export class CrudPromotionService extends BaseCrudMongoModel<Promotion> {
  constructor(
    @InjectModel(Promotion.name) private readonly model: Model<Promotion>,
  ) {
    super(model);
  }
}
