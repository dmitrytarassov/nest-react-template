import { Injectable } from '@nestjs/common';
import { Promotion } from '@lib/types/Promotion';
import { IPromotion } from '@lib/interfaces/IPromotion';
import { news, promotions } from '@lib/mocks/json';
import { RentalsService } from '@backend/rentals/rentals.service';
import { City } from '@lib/types/City';

export type PromotionFilter = {
  type?: Promotion;
  rentalId?: string;
  city?: City;
  promotionId?: string;
  rentalProduct?: string;
};

@Injectable()
export class PromotionsService {
  constructor(private readonly rentalsService: RentalsService) {}
  async getPromotions(filter: PromotionFilter): Promise<IPromotion[]> {
    if (filter.promotionId) {
      return [...promotions, ...news].filter(
        ({ id }) => filter.rentalId === id,
      );
    }

    // if (filter.rentalProduct) {
    //   return [...promotions, ...news].filter(
    //     ({ productId }) => filter.rentalProduct === productId,
    //   );
    // }

    const data = filter.type
      ? filter.type === 'promotion'
        ? promotions
        : news
      : [...promotions, ...news];

    if (filter.city) {
      const rentalIds: string[] = (
        await this.rentalsService.getRentals({ city: filter.city })
      ).map(({ id }) => id);

      return data.filter(({ rentalId }) => rentalIds.includes(rentalId));
    }

    if (filter.rentalId) {
      return data.filter(({ rentalId }) => filter.rentalId === rentalId);
    }

    return data;
  }
}
