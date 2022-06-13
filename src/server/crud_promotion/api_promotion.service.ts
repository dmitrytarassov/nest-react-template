import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Promotion } from './crud_promotion.schema';
import { InjectModel } from '@nestjs/mongoose';
import { BaseApiMongoModel } from '@backend/utils/BaseApiMongoModel';

@Injectable()
// @ts-ignore
export class ApiPromotionService extends BaseApiMongoModel<Promotion> {
  constructor(
    @InjectModel(Promotion.name) private readonly model: Model<Promotion>,
  ) {
    super(model);
  }
}
