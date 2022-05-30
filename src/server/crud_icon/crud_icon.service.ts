import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Icon } from './crud_icon.schema';
import { Model } from 'mongoose';
import { BaseCrudMongoModel } from '@backend/utils/BaseCrudMongoModel';

@Injectable()
// @ts-ignore
export class CrudIconService extends BaseCrudMongoModel<Icon> {
  constructor(@InjectModel(Icon.name) private readonly model: Model<Icon>) {
    super(model);
  }
}
