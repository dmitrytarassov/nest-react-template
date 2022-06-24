import { IRental } from '@lib/interfaces/IRental';
import { IProduct } from '@lib/interfaces/IProduct';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';

export interface RentalProductFullInfo {
  rental: IRental;
  product: IProduct;
  rentalProduct: IRentalProduct;
  promotions: ICrudPromotion[];
}
