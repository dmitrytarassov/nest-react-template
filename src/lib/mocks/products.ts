// import { IProduct } from '@lib/interfaces/IProduct';
// import { LoremIpsum } from 'lorem-ipsum';
// import random from 'lodash/random';
//
// const lorem = new LoremIpsum({
//   sentencesPerParagraph: {
//     max: 8,
//     min: 4,
//   },
//   wordsPerSentence: {
//     max: 16,
//     min: 4,
//   },
// });
//
// const loremName = new LoremIpsum({
//   wordsPerSentence: {
//     max: 4,
//     min: 1,
//   },
// });
//
// const loremProp = new LoremIpsum({
//   wordsPerSentence: {
//     max: 2,
//     min: 1,
//   },
// });
//
// const loremImage = new LoremIpsum({
//   wordsPerSentence: {
//     max: 4,
//     min: 1,
//   },
//   words: [
//     'https://sc04.alicdn.com/kf/H1f0fd9f03f7c4e9dae612f4ac00caaf50.jpg',
//     'https://sc04.alicdn.com/kf/H7917e1f9204141a5a4321f8c841e388bE.jpg',
//     'https://sc04.alicdn.com/kf/Hdf691402b048459cb36281a06c5082f0P.jpg',
//     'https://sc04.alicdn.com/kf/Hb95a724bb8144d06874d88f34c97414a5.jpg',
//     'https://sc04.alicdn.com/kf/H884ca434d9b74c65a2b84ead5acd4620O.jpg',
//     'https://sc04.alicdn.com/kf/Hf04aed1b456c49108d8e276d572d55d5A.jpg',
//     'https://sc04.alicdn.com/kf/H64a3daa54a6a4262a5d5a85c1f22de46V.jpg',
//     'https://sc04.alicdn.com/kf/H6562690fbe96495d9d47df99a539c02dg.jpg',
//   ],
// });
//
// export const products: IProduct[] = [...Array(20)].map(() => ({
//   id: random(100, 9000).toString(),
//   name: loremName.generateSentences(1).replace('.', ''),
//   properties: [...Array(random(0, 10))].map(() => [
//     loremProp.generateSentences(1),
//     loremProp.generateSentences(1),
//   ]),
//   propertiesText:
//     random(0, 1) === 0 ? lorem.generateParagraphs(random(1, 2)) : undefined,
//   description: lorem.generateParagraphs(6),
//   shortDescription: lorem.generateSentences(1),
//   photos: loremImage
//     .generateSentences(1)
//     .split(' ')
//     .map((s) => s.replace(/\.$/, '')),
//   tag: {
//     0: 'new',
//     1: 'sale',
//     3: 'date',
//   }[random(0, 1)],
//   unique: random(0, 1) > 0,
// }));
