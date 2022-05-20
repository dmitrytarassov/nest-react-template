import { get } from '@frontend/utils/fetcher';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { IPromotion } from '@lib/interfaces/IPromotion';

export const getLoadProductPromotionsUrl = (id: string): string =>
  `/api/promotions?rental_product=${id}`;

export async function loadProductPromotions(id: string): Promise<IPromotion[]> {
  const responsePromise: Promise<IControllerResponse<IPromotion[]>> = await get(
    `${process.env.API_URL}${getLoadProductPromotionsUrl(id)}`,
  );
  const response = await responsePromise;

  return response?.data || [];
}
