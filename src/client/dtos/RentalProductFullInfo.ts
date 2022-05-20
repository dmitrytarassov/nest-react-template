import { IRental } from '@lib/interfaces/IRental';
import { IProduct } from '@lib/interfaces/IProduct';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import { IPromotion } from '@lib/interfaces/IPromotion';

export interface RentalProductFullInfo {
  rental: IRental;
  product: IProduct;
  rentalProduct: IRentalProduct;
  promotions: IPromotion[];
}
