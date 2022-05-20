import { IPromotionTag } from '@lib/interfaces/IPromotionTag';

export interface IRentalProduct {
  id: string;
  rentalId: string;
  productId: string;
  url: string;

  price?: number;
  discountPrice?: number;
  tag?: IPromotionTag;
}
