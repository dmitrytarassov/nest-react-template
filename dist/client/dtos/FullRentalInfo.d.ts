import { IRental } from '@lib/interfaces/IRental';
import { IProduct } from '@lib/interfaces/IProduct';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
export interface FullRentalInfo {
    rental: IRental;
    positions: (IProduct & IRentalProduct)[];
    news: (ICrudPromotion & {
        product?: IProduct;
    })[];
    promotions: (ICrudPromotion & {
        product?: IProduct;
    })[];
}
