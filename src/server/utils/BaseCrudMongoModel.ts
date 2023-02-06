import { FilterQuery, Model } from 'mongoose';
import { BaseApiMongoModel } from '@backend/utils/BaseApiMongoModel';

// @ts-ignore
export class BaseCrudMongoModel<T> extends BaseApiMongoModel<T> {
  constructor(private readonly model: Model<T>) {
    super(model);
  }

  async create(book: T): Promise<T> {
    const newBook = new this.model(book);
    // @ts-ignore
    return newBook.save();
  }

  async update(id, element: T): Promise<T> {
    // @ts-ignore
    return await this.model.findByIdAndUpdate(id, element, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.model.findByIdAndRemove(id);
  }
}
