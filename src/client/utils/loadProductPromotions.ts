import { get } from '@frontend/utils/fetcher';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';

export const getLoadProductPromotionsUrl = (id: string): string =>
  `/api/promotions?rental_product=${id}`;

export async function loadProductPromotions(
  id: string,
): Promise<ICrudPromotion[]> {
  const responsePromise: Promise<IControllerResponse<ICrudPromotion[]>> =
    await get(`${process.env.API_URL}${getLoadProductPromotionsUrl(id)}`);
  const response = await responsePromise;

  return response?.data || [];
}
