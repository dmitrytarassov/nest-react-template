import { IRental } from '@lib/interfaces/IRental';
import { IProduct } from '@lib/interfaces/IProduct';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import { IPromotion } from '@lib/interfaces/IPromotion';

export interface FullRentalInfo {
  rental: IRental;
  positions: (IProduct & IRentalProduct)[];
  news: (IPromotion & {
    product?: IProduct;
  })[];
  promotions: (IPromotion & {
    product?: IProduct;
  })[];
}
