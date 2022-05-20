import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { products } from '../../lib/mocks/json';

const random = require('lodash/random');

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('check products filter', function () {
    it('should return empty array if there are no ids', async function () {
      expect(await service.getProducts([])).toEqual([]);
    });

    it('should find one element', async function () {
      const id = random(0, products.length - 1);
      expect(await service.getProducts([products[id].id])).toEqual([
        products[id],
      ]);
    });

    it('should find one element', async function () {
      const id = random(0, products.length - 1);
      expect(await service.getProducts([products[id].id])).toEqual([
        products[id],
      ]);
    });

    it('should find many elements', async function () {
      const allIds = products.map(({ id }) => id);
      const ids = allIds.splice(0, random(3, 6));
      expect(await service.getProducts(ids)).toEqual(
        products.filter(({ id }) => ids.includes(id)),
      );
    });
  });
});
