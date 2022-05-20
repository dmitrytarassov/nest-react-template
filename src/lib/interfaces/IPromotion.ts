import { Promotion } from '@lib/types/Promotion';
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';

export interface IPromotion {
  id: string;
  type: Promotion;
  title: string;
  rentalId: string;
  images: string[];
  productId?: string;
  rentalProductId?: string;
  text?: string;
  shortText?: string;
  price?: number;
  discountPrice?: number;
  tag?: IPromotionTag;
  expirationDate?: string;
}
