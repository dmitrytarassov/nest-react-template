import { Test, TestingModule } from '@nestjs/testing';
import { RentalProductsService } from './rental-products.service';

describe('RentalProductsService', () => {
  let service: RentalProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentalProductsService],
    }).compile();

    service = module.get<RentalProductsService>(RentalProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
