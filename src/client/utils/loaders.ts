import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { get } from '@frontend/utils/fetcher';
import { ICrudRentalProduct } from '@lib/interfaces/ICrudRentalProduct';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { ICrudProduct } from '@lib/interfaces/ICrudProduct';
import { IPromotion } from '@lib/interfaces/IPromotion';

const makeUrl = (part: string): string => `${process.env.API_URL || ''}${part}`;

export const loadRentalProduct = async (url): Promise<ICrudRentalProduct> => {
  const _rentalProducts: IControllerResponse<ICrudRentalProduct[]> = await get(
    makeUrl(`/api/rental_products?filter[]=url,${url}`),
  );
  const [rentalProduct] = _rentalProducts.data || [];
  return rentalProduct;
};

export const loadRentalPromotions = async (rentalId): Promise<IPromotion[]> => {
  const _promotions: IControllerResponse<IPromotion[]> = await get(
    makeUrl(`/api/promotions?rentalId[]=url,${rentalId}`),
  );
  return _promotions.data;
};

export const loadRental = async (url): Promise<ICrudRental> => {
  const _rental: IControllerResponse<ICrudRental[]> = await get(
    makeUrl(`/api/rental?filter[]=url,${url}`),
  );
  const [rental] = _rental.data || [];
  return rental;
};

export const loadPromotion = async (url): Promise<IPromotion> => {
  const _promotion: IControllerResponse<IPromotion[]> = await get(
    makeUrl(`/api/promotions?filter[]=url,${url}`),
  );
  const [promotion] = _promotion.data || [];
  return promotion;
};

export const loadProductById = async (id): Promise<ICrudProduct> => {
  const _product: ICrudProduct = await get(makeUrl(`/api/product/${id}`));
  return _product;
};

export const loadRentalById = async (id): Promise<ICrudRental> => {
  const _rental: ICrudRental = await get(makeUrl(`/api/rental/${id}`));
  return _rental;
};
