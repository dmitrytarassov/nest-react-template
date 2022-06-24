import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { IProduct } from '@lib/interfaces/IProduct';
import { IRental } from '@lib/interfaces/IRental';

export interface FullPromotionInfo extends ICrudPromotion {
  product?: IProduct;
  rental?: IRental;
}
