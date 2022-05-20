import { rentals } from '@lib/mocks/rentals';
import { products } from '@lib/mocks/products';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import random from 'lodash/random';

const tags = {
  1: 'new',
  2: 'sale',
  3: 'date',
};

export const rentalProducts: IRentalProduct[] = rentals
  .map((rental) => {
    const productsCount: number = random(1, products.length - 1);
    const usedIds: number[] = [];

    const concreteRentalProducts: IRentalProduct[] = [];

    for (let i = 0; i < productsCount; i++) {
      let productId;

      while (!productId) {
        const _productId = random(1, products.length) - 1;
        if (!usedIds.includes(_productId)) {
          productId = _productId;
          usedIds.push(_productId);
        }
      }
      const product = products[productId];

      const price = random(1000, 20000);

      const rentalProduct: IRentalProduct = {
        id: random(0, 9999).toString(),
        rentalId: rental.id,
        productId: product.id,
        url: random(0, 9999).toString(),
        tag: tags[random(1, 3)],
        price: price,
        discountPrice: random(0, 1) === 0 ? price * 0.75 : undefined,
      };

      concreteRentalProducts.push(rentalProduct);
    }

    return concreteRentalProducts;
  })
  .flat();
