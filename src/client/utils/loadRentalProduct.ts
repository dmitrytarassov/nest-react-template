import { get } from '@frontend/utils/fetcher';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';

export const getLoadRentalProductUrl = (id: string): string =>
  `/api/rental-products/${id}`;

export async function loadRentalProduct(
  id: string,
): Promise<IRentalProduct | undefined> {
  const responsePromise: Promise<IControllerResponse<IRentalProduct>> =
    await get(`${process.env.API_URL}${getLoadRentalProductUrl(id)}`);
  const response = await responsePromise;
  console.log(response);
  const data: IRentalProduct = response?.data;

  return data;
}
