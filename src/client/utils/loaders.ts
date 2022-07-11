import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { get } from '@frontend/utils/fetcher';
import { ICrudRentalProduct } from '@lib/interfaces/ICrudRentalProduct';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { ICrudProduct } from '@lib/interfaces/ICrudProduct';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { City } from '@lib/types/City';
import { ICardProps } from '@frontend/components/Card';
import imageUrl from '@frontend/utils/imageUrl';
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';
import {
  combineProductsAndPromotions,
  productsToPromotionType,
} from '@frontend/utils/parsers';

const makeUrl = (part: string): string => {
  // console.log(`${process.env.API_URL || ''}${part}`);
  return `${process.env.API_URL || ''}${part}`;
};

export const loadRentalProduct = async (url): Promise<ICrudRentalProduct> => {
  const _rentalProducts: IControllerResponse<ICrudRentalProduct[]> = await get(
    makeUrl(`/api/rental_products?filter[]=url,${url}`),
  );
  const [rentalProduct] = _rentalProducts.data || [];
  return rentalProduct;
};

// export const loadRentalPromotions = async (rentalId): Promise<ICrudPromotion[]> => {
//   const _promotions: IControllerResponse<ICrudPromotion[]> = await get(
//     makeUrl(`/api/promotions?rentalId[]=url,${rentalId}`),
//   );
//   return _promotions.data;
// };

export const loadRental = async (url): Promise<ICrudRental> => {
  const _rental: IControllerResponse<ICrudRental[]> = await get(
    makeUrl(`/api/rental?filter[]=url,${url}`),
  );
  const [rental] = _rental.data || [];
  return rental;
};

export const loadRentalsByCity = async (
  city: string,
): Promise<ICrudRental[]> => {
  const _rentals: IControllerResponse<ICrudRental[]> = await get(
    makeUrl(`/api/rental?filter[]=city,${city}`),
  );
  console.log(makeUrl(`/api/rental?filter[]=city,${city}`));
  return _rentals.data || [];
};

export const loadPromotion = async (url): Promise<ICrudPromotion> => {
  const _promotion: IControllerResponse<ICrudPromotion[]> = await get(
    makeUrl(`/api/promotions?filter[]=url,${url}`),
  );
  const [promotion] = _promotion.data || [];
  return promotion;
};

export const loadPromotionsByRentalId = async (
  rentalId: string,
): Promise<ICrudPromotion[]> => {
  const rental = await loadRentalById(rentalId);
  const _promotions: IControllerResponse<ICrudPromotion[]> = await get(
    makeUrl(`/api/promotions?filter[]=rentalId,${rentalId}`),
  );

  const _rentalProducts: IControllerResponse<ICrudRentalProduct[]> = await get(
    makeUrl(
      `/api/rental_products?filter[]=rentalId,${rentalId}&filter[]=promotionType,in,new|sale`,
    ),
  );

  const productIds = _rentalProducts.data.map(({ productId }) => productId);

  const products: IControllerResponse<ICrudProduct[]> = await get(
    makeUrl(`/api/product?filter[]=_id,in,${productIds.join('|')}`),
  );

  const result: ICrudPromotion[] = productsToPromotionType(
    products?.data || [],
    _rentalProducts.data || [],
    [rental],
  );

  return combineProductsAndPromotions(result, _promotions.data, [rental]);
};

export const loadPromotionsByRentals = async (
  rentals: ICrudRental[],
): Promise<ICrudPromotion[]> => {
  const _promotions: IControllerResponse<ICrudPromotion[]> = await get(
    makeUrl(
      `/api/promotions?filter[]=rentalId,in,${rentals
        .map(({ id }) => id)
        .join('|')}`,
    ),
  );

  const _rentalProducts: IControllerResponse<ICrudRentalProduct[]> = await get(
    makeUrl(
      `/api/rental_products?filter[]=rentalId,in,${rentals
        .map(({ id }) => id)
        .join('|')}&filter[]=promotionType,in,new|sale`,
    ),
  );

  const productIds = _rentalProducts.data.map(({ productId }) => productId);

  const products: IControllerResponse<ICrudProduct[]> = await get(
    makeUrl(`/api/product?filter[]=_id,in,${productIds.join('|')}`),
  );

  const result: ICrudPromotion[] = productsToPromotionType(
    products?.data || [],
    _rentalProducts.data || [],
    rentals,
  );

  return combineProductsAndPromotions(result, _promotions.data, rentals);
};

export const loadProductById = async (id): Promise<ICrudProduct> => {
  const _product: ICrudProduct = await get(makeUrl(`/api/product/${id}`));
  return _product;
};

export const loadRentalById = async (id): Promise<ICrudRental> => {
  const _rental: ICrudRental = await get(makeUrl(`/api/rental/${id}`));
  return _rental;
};

const rentalsStack: {
  [key: string]: ICrudRental[];
} = {};
export const getAllRentalsForCity = async (
  city: City,
): Promise<ICrudRental[]> => {
  if (!rentalsStack[city]) {
    const _rentals: IControllerResponse<ICrudRental[]> = await get(
      makeUrl(`/api/rental?filter[]=city,${city}`),
    );
    rentalsStack[city] = _rentals.data;
  }
  return rentalsStack[city];
};

export const loadUniques = async (
  city: City,
  onlyMainPage?: boolean,
  rentalId?: string,
): Promise<(ICardProps & { id: string })[]> => {
  const _rentals: ICrudRental[] = await getAllRentalsForCity(city);
  const rentalIds = _rentals.map(({ id }) => id);
  console.log(city);

  const _rentalProducts: IControllerResponse<ICrudRentalProduct[]> = await get(
    makeUrl(
      `/api/rental_products?filter[]=rentalId,in,${rentalIds.join('|')}${
        onlyMainPage ? '&filter[]=showUniqueOnMainPage,true' : ''
      }${rentalId ? `rentalId=${rentalId}` : ''}`,
    ),
  );

  if (_rentalProducts.data.length) {
    const productIds = _rentalProducts.data.map(({ productId }) => productId);
    const products: IControllerResponse<ICrudProduct[]> = await get(
      makeUrl(
        `/api/product?filter[]=_id,in,${productIds.join(
          '|',
        )}&filter[]=unique,true`,
      ),
    );

    const __rentalProducts = _rentalProducts.data
      .map((rentalProduct) => {
        const product = products.data.find(
          ({ id }) => id === rentalProduct.productId,
        );
        const rental = _rentals.find(({ id }) => id === rentalProduct.rentalId);

        if (!rental) {
          console.log(
            'can not find rental with id ',
            rentalProduct.rentalId,
            _rentals,
          );
        }
        if (!product) {
          console.log(
            'can not find product with id ',
            rentalProduct.productId,
            products,
          );
        }
        if (product && rental) {
          return {
            product,
            rentalProduct,
            rental,
          };
        }
      })
      .filter(Boolean);

    const cards: (ICardProps & { id: string })[] = __rentalProducts.map(
      (el) => {
        return {
          id: el.rentalProduct.id,
          title: el.product.name,
          description: el.product.shortDescription,
          image: imageUrl(el.product.photos[0]),
          link: `/rentals/${el.rental.url}/${el.rentalProduct.url}`,
          price: el.rentalProduct.price,
          discountPrice: el.rentalProduct.discountPrice,
          date: el.rentalProduct.date?.toString(),
          promotionText: el.rentalProduct.promotionShortDescription,
          rentalLogo: imageUrl(el.rental.icon),
          ...(el.rentalProduct.promotionType && el.rentalProduct.promotionText
            ? {
                tag: {
                  type: el.rentalProduct.promotionType,
                  text: el.rentalProduct.promotionText,
                } as IPromotionTag,
              }
            : {}),
        };
      },
    );
    return cards;
  }

  return [];
};

export const loadAllPromotions = async (
  city: City,
  onlyMainPage?: boolean,
): Promise<ICrudPromotion[]> => {
  const _rentals: ICrudRental[] = await getAllRentalsForCity(city);
  const rentalIds = _rentals.map(({ id }) => id);

  const promotions: IControllerResponse<ICrudPromotion[]> = await get(
    makeUrl(
      `/api/promotions?filter[]=rentalId,in,${rentalIds.join('|')}${
        onlyMainPage && '&filter[]=showOnMainPage,true'
      }`,
    ),
  );

  const _rentalProducts: IControllerResponse<ICrudRentalProduct[]> = await get(
    makeUrl(
      `/api/rental_products?filter[]=rentalId,in,${rentalIds.join(
        '|',
      )}&filter[]=promotionType,in,new|sale${
        onlyMainPage && '&filter[]=showOnMainPage,true'
      }`,
    ),
  );

  const productIds = _rentalProducts.data.map(({ productId }) => productId);

  const products: IControllerResponse<ICrudProduct[]> = await get(
    makeUrl(`/api/product?filter[]=_id,in,${productIds.join('|')}`),
  );

  const result: ICrudPromotion[] = productsToPromotionType(
    products?.data || [],
    _rentalProducts.data || [],
    _rentals || [],
  );

  return combineProductsAndPromotions(result, promotions.data, _rentals);
};
