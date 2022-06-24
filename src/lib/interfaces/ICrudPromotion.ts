import { ISeo } from '@lib/interfaces/ISeo';

export interface ICrudPromotion extends ISeo {
  id: string;
  photos: string[];
  name: string;
  url: string;
  text: string;
  shortText: string;
  rentalId: string;
  promotionType: 'new' | 'sale';
  promotionText?: string;
  date?: string;
  price?: number;
  discountPrice?: number;
  rentalLogo?: string;
}
