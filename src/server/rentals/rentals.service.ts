import { Injectable } from '@nestjs/common';
import { rentals, rentalProducts, products } from '@lib/mocks/json';
import { IRental } from '@lib/interfaces/IRental';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import { City } from '@lib/types/City';
import { ProductsService } from '@backend/products/products.service';

@Injectable()
export class RentalsService {
  constructor(private readonly productsService: ProductsService) {}

  async getRentals(filters?: {
    city?: City;
    rentalId?: string;
  }): Promise<IRental[]> {
    if (filters) {
      if (filters.city) {
        return rentals.filter(({ city }) => city === filters.city);
      } else if (filters.rentalId) {
        return rentals.filter(({ id }) => id === filters.rentalId);
      }
    }
    return rentals;
  }

  async getRentalProducts({
    id,
    product,
  }: {
    id?: string;
    product?: string;
  }): Promise<IRentalProduct[]> {
    if (product) {
      return rentalProducts.filter(({ id }) => product === id);
    } else if (id) {
      const uniqueIds: string[] = await this.productsService.getUniqueIds();
      return rentalProducts.filter(
        ({ rentalId, productId }) =>
          rentalId === id && !uniqueIds.includes(productId),
      );
    }
    return [];
  }

  async getUniqueProducts(city: City, id?: string): Promise<IRentalProduct[]> {
    const uniqueIds: string[] = await this.productsService.getUniqueIds();

    if (id) {
      return rentalProducts
        .filter(({ productId }) => uniqueIds.includes(productId))
        .filter(({ rentalId }) => rentalId === id);
    }

    const filteredRentalIds = (await this.getRentals({ city })).map(
      ({ id }) => id,
    );

    return rentalProducts
      .filter(({ productId }) => uniqueIds.includes(productId))
      .filter(({ rentalId }) => filteredRentalIds.includes(rentalId));
  }
}
