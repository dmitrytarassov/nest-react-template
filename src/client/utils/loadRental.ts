import { IRental } from '@lib/interfaces/IRental';
import { get } from '@frontend/utils/fetcher';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';

export const getLoadRentalUrl = (id: string): string => `/api/rentals/${id}`;

export async function loadRental(id: string): Promise<IRental | undefined> {
  const responsePromise: Promise<IControllerResponse<IRental>> = await get(
    `${process.env.API_URL}${getLoadRentalUrl(id)}`,
  );
  const response = await responsePromise;

  const data: IRental = response?.data;

  return data;
}
