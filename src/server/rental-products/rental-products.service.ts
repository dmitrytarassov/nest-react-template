import { Injectable } from '@nestjs/common';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import { rentalProducts } from '@lib/mocks/json';

@Injectable()
export class RentalProductsService {
  async getRentalProduct(_id: string): Promise<IRentalProduct> {
    return rentalProducts.find(({ id }) => id === _id);
  }
}
