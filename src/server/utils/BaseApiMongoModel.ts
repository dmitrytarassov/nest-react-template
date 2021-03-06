import { FilterQuery, Model } from 'mongoose';

interface Query {
  limit: string;
  page: string;
  sort: string[];
  offset: string;
  filter?: string[];
}

const sanitize = ({ $__, $isNew, __v, _doc, ...rest }) => ({
  ...rest,
  ..._doc,
  id: _doc._id,
});

export class BaseApiMongoModel<T> {
  constructor(private readonly model: Model<T>) {}

  createFilter(query: Query): FilterQuery<T> {
    const filter: FilterQuery<T> = {};

    if (query?.filter?.length) {
      for (const el of query.filter) {
        if (el.includes('||')) {
          // eslint-disable-next-line prefer-const
          let [_name, type, _value] = el.split('||');
          if (_name === 'q' && type === 'cont') {
            _name = 'name';
            type = '$regex';
            // @ts-ignore
            filter[_name] = new RegExp(_value, 'i');
          } else {
            const value = _value.includes(',') ? _value.split(',') : _value;
            const name = _name === 'id' ? '_id' : _name;
            // @ts-ignore
            filter[name] = {};
            filter[name][type] = value;
          }
        } else {
          const [name, typeOrValue, value] = el.split(',');
          // @ts-ignore
          filter[name] = {};
          let _type;
          let _value;

          if (!value) {
            _type = '$eq';
            if (typeOrValue === 'in') {
              _value = null;
            } else {
              _value = typeOrValue;
            }
          } else {
            _type = `$${typeOrValue}`;
            _value = typeOrValue === 'in' ? value.split('|') : value;
          }
          if (_value === 'now') {
            _value = new Date().toString();
          }
          if (_value === 'true') {
            _value = true;
          }
          filter[name][_type] = _value;
        }
      }
    }

    return filter;
  }

  async readAll(query: Query): Promise<T[]> {
    const order: { [name: string]: string } = {};
    if (query?.sort?.length) {
      for (const el of query.sort) {
        const [name, value] = el.split(',');
        order[name] = value;
      }
    }

    const skip = +query.limit * (+query.page - 1) || undefined;
    const limit = +query.limit || undefined;

    const filter: FilterQuery<T> = this.createFilter(query);

    const data = await this.model
      .find(filter)
      // @ts-ignore
      .sort(order)
      .skip(skip)
      .limit(limit)
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

  async getTotal(query: Query): Promise<number> {
    const filter: FilterQuery<T> = this.createFilter(query);
    return this.model.count(filter);
  }
}
