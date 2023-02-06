import { ISeo } from '@lib/interfaces/ISeo';

export interface ICrudRentalProduct extends ISeo {
  id: string;

  weight: number;

  rentalId: string;

  productId: string;

  url: string;

  price?: number;

  discountPrice?: number;

  promotionType?: string;

  promotionText?: string;

  promotionDescription?: string;

  promotionShortDescription?: string;

  date: Date;

  externalUrl: string;

  showUniqueOnMainPage?: boolean;

  showOnMainPage?: boolean;
}
