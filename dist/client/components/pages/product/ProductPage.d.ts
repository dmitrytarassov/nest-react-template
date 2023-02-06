/// <reference types="react" />
import { IProduct } from '@lib/interfaces/IProduct';
import { IRental } from '@lib/interfaces/IRental';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
interface ProductPageProps {
    product: IProduct;
    rental: IRental;
    rentalProduct: IRentalProduct;
    promotions: ICrudPromotion[];
}
declare const ProductPage: ({ product, rental, rentalProduct, promotions, }: ProductPageProps) => JSX.Element;
export default ProductPage;
