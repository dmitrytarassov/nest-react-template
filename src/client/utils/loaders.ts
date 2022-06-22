import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { get } from '@frontend/utils/fetcher';
import { ICrudRentalProduct } from '@lib/interfaces/ICrudRentalProduct';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { ICrudProduct } from '@lib/interfaces/ICrudProduct';
import { IPromotion } from '@lib/interfaces/IPromotion';
import { City } from '@lib/types/City';
import { ICardProps } from '@frontend/components/Card';
import imageUrl from '@frontend/utils/imageUrl';
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';

const makeUrl = (part: string): string => `${process.env.API_URL || ''}${part}`;

export const loadRentalProduct = async (url): Promise<ICrudRentalProduct> => {
  const _rentalProducts: IControllerResponse<ICrudRentalProduct[]> = await get(
    makeUrl(`/api/rental_products?filter[]=url,${url}`),
  );
  const [rentalProduct] = _rentalProducts.data || [];
  return rentalProduct;
};

// export const loadRentalPromotions = async (rentalId): Promise<IPromotion[]> => {
//   const _promotions: IControllerResponse<IPromotion[]> = await get(
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
): Promise<(ICardProps & { id: string })[]> => {
  const _rentals: ICrudRental[] = await getAllRentalsForCity(city);
  const rentalIds = _rentals.map(({ id }) => id);
  console.log(rentalIds);

  const _rentalProducts: IControllerResponse<ICrudRentalProduct[]> = await get(
    makeUrl(`/api/rental_products?filter[]=rentalId,in,${rentalIds.join('|')}`),
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

export const loadAllPromotions = async (city: City): Promise<IPromotion[]> => {
  const _rentals: ICrudRental[] = await getAllRentalsForCity(city);
  const rentalIds = _rentals.map(({ id }) => id);

  const promotions: IControllerResponse<IPromotion[]> = await get(
    makeUrl(`/api/promotions?filter[]=rentalId,in,${rentalIds.join(',')}`),
  );

  const _rentalProducts: IControllerResponse<ICrudRentalProduct[]> = await get(
    makeUrl(
      `/api/rental_products?filter[]=rentalId,in,${rentalIds.join(
        '|',
      )}&filter[]=promotionType,in,new|sale`,
    ),
  );

  const productIds = _rentalProducts.data.map(({ productId }) => productId);

  const products: IControllerResponse<ICrudProduct[]> = await get(
    makeUrl(`/api/product?filter[]=_id,in,${productIds.join('|')}`),
  );

  const productPromotions: IPromotion[] = products?.data?.length
    ? products?.data
        .map((product) => {
          const rentalProduct: ICrudRentalProduct = _rentalProducts.data.find(
            (p) => p.productId === product.id,
          );

          if (rentalProduct) {
            const rental: ICrudRental = _rentals.find(
              (p) => p.id === rentalProduct.rentalId,
            );
            if (rental) {
              const data: IPromotion = {
                id: product.id,
                photos: product.photos,
                name: product.name,
                url: `/rentals/${rental.url}/${rentalProduct.url}`,
                text: '',
                shortText:
                  rentalProduct.promotionShortDescription ||
                  product.shortDescription,
                rentalId: rentalProduct.rentalId,
                promotionType:
                  rentalProduct.promotionType as IPromotion['promotionType'],
                promotionText: rentalProduct.promotionText,
                date: '',
              };
              return data;
            }
          }
        })
        .filter(Boolean)
    : [];

  return [
    ...productPromotions,
    ...promotions.data.map((e) => ({
      ...e,
      url: `/promotion/${e.url}`,
    })),
  ];
};
