import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { get } from '@frontend/utils/fetcher';
import { ICrudRentalProduct } from '@lib/interfaces/ICrudRentalProduct';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { ICrudProduct } from '@lib/interfaces/ICrudProduct';

export const loadRentalProduct = async (url): Promise<ICrudRentalProduct> => {
  const _rentalProducts: IControllerResponse<ICrudRentalProduct[]> = await get(
    `${process.env.API_URL}/api/rental_products?filter[]=url,${url}`,
  );
  const [rentalProduct] = _rentalProducts.data || [];
  return rentalProduct;
};

export const loadRental = async (url): Promise<ICrudRental> => {
  const _rental: IControllerResponse<ICrudRental[]> = await get(
    `${process.env.API_URL}/api/rental?filter[]=url,${url}`,
  );
  const [rental] = _rental.data || [];
  return rental;
};

export const loadProductById = async (id): Promise<ICrudProduct> => {
  const _product: ICrudProduct = await get(
    `${process.env.API_URL}/api/product/${id}`,
  );
  return _product;
};
