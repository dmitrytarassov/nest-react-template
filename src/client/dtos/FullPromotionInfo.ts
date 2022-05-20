import { IPromotion } from '@lib/interfaces/IPromotion';
import { IProduct } from '@lib/interfaces/IProduct';
import { IRental } from '@lib/interfaces/IRental';

export interface FullPromotionInfo extends IPromotion {
  product?: IProduct;
  rental?: IRental;
}
