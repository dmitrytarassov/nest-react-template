import { Injectable, OnModuleInit } from '@nestjs/common';
import { products } from '@lib/mocks/json';
import { IProduct } from '@lib/interfaces/IProduct';

@Injectable()
export class ProductsService implements OnModuleInit {
  async getProducts(ids: string[]): Promise<IProduct[]> {
    return products.filter(({ id }) => ids.includes(id));
  }

  async getUniqueProducts(): Promise<IProduct[]> {
    return products.filter(({ unique }) => unique);
  }

  async getUniqueIds(): Promise<string[]> {
    const uniqueIds: string[] = products
      .filter(({ unique }) => unique)
      .map(({ id }) => id);
    return uniqueIds;
  }

  onModuleInit() {
    console.log('onModuleInit');
  }
}
