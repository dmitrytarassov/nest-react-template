// import { Promotion } from '@lib/types/Promotion';
// import { IPromotionTag } from '@lib/interfaces/IPromotionTag';

export interface IPromotion {
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
}
