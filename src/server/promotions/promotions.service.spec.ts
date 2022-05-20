import { Test, TestingModule } from '@nestjs/testing';
import { PromotionsService } from './promotions.service';
import { news, promotions } from '@lib/mocks/json';

describe('PromotionsService', () => {
  let service: PromotionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromotionsService],
    }).compile();

    service = module.get<PromotionsService>(PromotionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('check promotions filter', () => {
    it('get all news', async () => {
      expect(
        await service.getPromotions({
          type: 'news',
        }),
      ).toEqual(news);
    });

    it('get all promotions', async () => {
      expect(
        await service.getPromotions({
          type: 'promotion',
        }),
      ).toEqual(promotions);
    });

    it('get all news with specific rental id', async () => {
      expect(
        await service.getPromotions({
          type: 'news',
          rentalId: '1',
        }),
      ).toEqual(news.filter(({ rentalId }) => rentalId === '1'));
    });

    it('get all promotions with specific rental id', async () => {
      expect(
        await service.getPromotions({
          type: 'promotion',
          rentalId: '2',
        }),
      ).toEqual(promotions.filter(({ rentalId }) => rentalId === '2'));
    });
  });
});
