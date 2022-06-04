import { Injectable } from '@nestjs/common';
import { rentalProducts, products } from '@lib/mocks/json';
import { IRental } from '@lib/interfaces/IRental';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import { City } from '@lib/types/City';
import { Rental } from '@backend/crud_rental/crud_rental.schema';
import { CrudRentalService } from '@backend/crud_rental/crud_rental.service';

@Injectable()
export class RentalsService {
  constructor(private readonly crudService: CrudRentalService) {}

  async getRentals(filters?: {
    city?: City;
    rentalId?: string;
  }): Promise<IRental[]> {
    let data: Rental[] = [];
    // let ret = rentals;
    if (filters) {
      if (filters.city) {
        data = await this.crudService.find({
          where: {
            city: filters.city,
          },
        });
        // ret = rentals.filter(({ city }) => city === filters.city);
      } else if (filters.rentalId) {
        data = await this.crudService.find({
          where: {
            id: +filters.rentalId,
          },
        });
        // ret = rentals.filter(({ id }) => id === filters.rentalId);
      }
    }

    return data.map((rental) => ({
      // @ts-ignore
      ...rental._doc,
      icon: `/public/${rental.icon}`,
      address: {
        coordinates: rental.coordinates.split(',').map((s) => +s.trim()) as [
          number,
          number,
        ],
        name: rental.address,
      },
      socials: {
        vk: rental.vk,
        telegram: rental.telegram,
        web: rental.web,
      },
      // @ts-ignore
      id: rental.id.toString(),
      phone: +rental.phone,
      services: rental.services.split(','),
    }));
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
      const uniqueIds: string[] = await this.crudService.getUniqueIds();
      return rentalProducts.filter(
        ({ rentalId, productId }) =>
          rentalId === id && !uniqueIds.includes(productId),
      );
    }
    return [];
  }

  async getUniqueProducts(city: City, id?: string): Promise<IRentalProduct[]> {
    const uniqueIds: string[] = await this.crudService.getUniqueIds();

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
