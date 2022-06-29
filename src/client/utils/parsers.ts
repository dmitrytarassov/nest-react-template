import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { ICrudRentalProduct } from '@lib/interfaces/ICrudRentalProduct';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { ICrudProduct } from '@lib/interfaces/ICrudProduct';

export const productsToPromotionType = (
  products: ICrudProduct[],
  rentalProducts: ICrudRentalProduct[],
  rentals: ICrudRental[],
): ICrudPromotion[] => {
  const result: ICrudPromotion[] = products.length
    ? products
        .map((product) => {
          const rentalProduct: ICrudRentalProduct = rentalProducts.find(
            (p) => p.productId === product.id,
          );

          if (rentalProduct) {
            const rental: ICrudRental = rentals.find(
              (p) => p.id === rentalProduct.rentalId,
            );
            if (rental) {
              const data: ICrudPromotion = {
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
                  rentalProduct.promotionType as ICrudPromotion['promotionType'],
                promotionText: rentalProduct.promotionText,
                date: rentalProduct?.date?.toString(),
                price: rentalProduct.price,
                discountPrice: rentalProduct.discountPrice,
                rentalLogo: rental.icon,
              };
              return data;
            }
          }
        })
        .filter(Boolean)
    : [];

  return result;
};

export const combineProductsAndPromotions = (
  products: ICrudPromotion[],
  promotions: ICrudPromotion[],
  rentals: ICrudRental[],
) => [
  ...products,
  ...promotions.map((promotion) => {
    const rental = rentals.find(({ id }) => id === promotion.rentalId);
    return {
      ...promotion,
      url: `/promotion/${promotion.url}`,
      rentalLogo: rental ? rental.icon : undefined,
    };
  }),
];
