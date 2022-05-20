import { get } from '@frontend/utils/fetcher';
import { IProduct } from '@lib/interfaces/IProduct';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';

export const getLoadProductUrl = (id: string): string =>
  `/api/products?ids=${id}`;

export async function loadProduct(id): Promise<IProduct | undefined> {
  const responsePromise: Promise<IControllerResponse<IProduct[]>> = await get(
    `${process.env.API_URL}${getLoadProductUrl(id)}`,
  );
  const response = await responsePromise;

  const [data]: IProduct[] = response?.data;

  return data;
}
