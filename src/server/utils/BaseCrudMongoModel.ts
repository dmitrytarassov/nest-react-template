import { Model } from 'mongoose';

interface Query {
  limit: string;
  page: string;
  sort: string[];
  offset: string;
}

const sanitize = ({ $__, $isNew, _v, ...rest }) => ({
  ...rest,
  ...rest._doc,
  id: rest._doc._id,
});

export class BaseCrudMongoModel<T> {
  constructor(private readonly model: Model<T>) {}

  async create(book: T): Promise<T> {
    const newBook = new this.model(book);
    // @ts-ignore
    return newBook.save();
  }

  async readAll(query: Query): Promise<T[]> {
    const order: { [name: string]: string } = {};
    if (query?.sort?.length) {
      for (const el of query.sort) {
        const [name, value] = el.split(',');
        order[name] = value;
      }
    }

    const data = await this.model
      .find()
      .sort(order)
      .skip(+query.limit * (+query.page - 1))
      .limit(+query.limit)
      .exec();

    // @ts-ignore
    return data.map(sanitize);
  }

  async find(query): Promise<T[]> {
    return await this.model.find(query).exec();
  }

  async getUniqueIds(): Promise<string[]> {
    const data = await this.find({});
    // @ts-ignore
    return data.map(({ id }) => id);
  }

  async readById(id): Promise<T> {
    return await this.model.findById(id).exec();
  }

  async update(id, element: T): Promise<T> {
    return await this.model.findByIdAndUpdate(id, element, { new: true });
  }

  async delete(id): Promise<any> {
    return await this.model.findByIdAndRemove(id);
  }

  async getTotal(): Promise<number> {
    return await this.model.count();
  }
}
