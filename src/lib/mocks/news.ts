import { IPromotion } from '@lib/interfaces/IPromotion';
import { rentals } from '@lib/mocks/rentals';
import random from 'lodash/random';
import { LoremIpsum } from 'lorem-ipsum';
import { rentalProducts } from '@lib/mocks/rentalProducts';
import { products } from '@lib/mocks/products';
import add from 'date-fns/add';
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 1,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const loremName = new LoremIpsum({
  wordsPerSentence: {
    max: 7,
    min: 1,
  },
});

const loremShortText = new LoremIpsum({
  wordsPerSentence: {
    max: 10,
    min: 4,
  },
});

const loremImage = new LoremIpsum({
  wordsPerSentence: {
    max: 2,
    min: 0,
  },
  words: [
    'https://img.freepik.com/free-vector/breaking-news-title-template_97886-3228.jpg',
    'https://static.toiimg.com/thumb/msid-91329336,width-1200,height-900,resizemode-4,imgsize-14746/91329336.jpg',
  ],
});

// @ts-ignore
export const news: IPromotion[] = rentals
  .map((rental, i) => {
    if (i !== 2) {
      return [...Array(random(1, 15))].map((): IPromotion => {
        const text =
          random(0, 1) === 1
            ? lorem.generateParagraphs(random(1, 3))
            : undefined;

        const rentalProduct =
          random(0, 1) === 1
            ? rentalProducts[random(0, rentalProducts.length - 1)]
            : undefined;

        const price = rentalProduct
          ? random(0, 1) === 1
            ? rentalProduct.price
            : random(1000, 10000)
          : undefined;

        const product =
          rentalProduct &&
          products.find(({ id }) => id === rentalProduct.productId);

        const discountPrice = price
          ? random(0, 1) === 1
            ? +(price * 0.75).toFixed(0)
            : undefined
          : undefined;

        // @ts-ignore
        const tagType: IPromotionTag['type'] = {
          0: 'new',
          1: 'sale',
        }[random(0, 3)];

        const tag: IPromotionTag = tagType
          ? {
              type: tagType,
              text: tagType === 'new' ? 'Новинка' : 'Скидка',
            }
          : undefined;

        const expirationDate =
          random(0, 3) > 1
            ? add(new Date(), {
                days: random(5, 30),
              }).toString()
            : undefined;

        const type = random(0, 1) === 0 ? 'news' : 'promotion';

        return {
          id: random(100, 999999).toString(),
          type,
          rentalId: rental.id,
          images:
            random(0, 1) === 1 || !product
              ? loremImage
                  .generateSentences(1)
                  .split(' ')
                  .map((s) => s.replace(/\.$/, ''))
              : [],
          title: loremName.generateSentences(1),
          text,
          ...(text ? { shortText: loremShortText.generateSentences(1) } : {}),
          ...(product
            ? { productId: product.id, rentalProductId: rentalProduct.id }
            : {}),
          price,
          discountPrice,
          tag,
          expirationDate,
        };
      });
    }
  })
  .filter(Boolean)
  .flat();
