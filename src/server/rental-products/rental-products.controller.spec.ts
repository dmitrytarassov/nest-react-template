import { Test, TestingModule } from '@nestjs/testing';
import { RentalProductsController } from './rental-products.controller';

describe('RentalProductsController', () => {
  let controller: RentalProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentalProductsController],
    }).compile();

    controller = module.get<RentalProductsController>(RentalProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
