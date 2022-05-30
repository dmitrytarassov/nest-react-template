import transliterate from '@sindresorhus/transliterate';

export const makeUrl = (str: string): string =>
  transliterate(str)
    .trim()
    .replace(/[^a-zA-Z\ ]/gm, '')
    .replace(/[\ ]+/gm, '_')
    .toLowerCase();
