import { rentals } from '@lib/mocks/rentals';
import { products } from '@lib/mocks/products';
import { rentalProducts } from '@lib/mocks/rentalProducts';
import * as fs from 'fs';
import path from 'path';
import { news } from '@lib/mocks/news';

async function generate() {
  console.log('generate');

  await fs.writeFileSync(
    path.join(__dirname, './json/rentals.json'),
    JSON.stringify(rentals, null, ' '),
    'utf8',
  );

  await fs.writeFileSync(
    path.join(__dirname, './json/products.json'),
    JSON.stringify(products, null, ' '),
    'utf8',
  );

  await fs.writeFileSync(
    path.join(__dirname, './json/rental_products.json'),
    JSON.stringify(rentalProducts, null, ' '),
    'utf8',
  );

  await fs.writeFileSync(
    path.join(__dirname, './json/news.json'),
    JSON.stringify(
      news.filter(({ type }) => type === 'news'),
      null,
      ' ',
    ),
    'utf8',
  );

  await fs.writeFileSync(
    path.join(__dirname, './json/promotions.json'),
    JSON.stringify(
      news.filter(({ type }) => type === 'promotion'),
      null,
      ' ',
    ),
    'utf8',
  );
}

generate();
