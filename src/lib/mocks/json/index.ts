import * as _rentals from './rentals.json';
import * as _products from './products.json';
import * as _rentalProducts from './rental_products.json';
import * as _news from './news.json';
import * as _promotions from './promotions.json';
import { IRental } from '@lib/interfaces/IRental';
import { IProduct } from '@lib/interfaces/IProduct';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import { IPromotion } from '@lib/interfaces/IPromotion';

// @ts-ignore
export const rentals: IRental[] = _rentals;
// @ts-ignore
export const products: IProduct[] = _products;
// @ts-ignore
export const rentalProducts: IRentalProduct[] = _rentalProducts;

// @ts-ignore
export const news: IPromotion[] = _news;
// @ts-ignore
export const promotions: IPromotion[] = _promotions;
