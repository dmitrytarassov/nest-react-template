import { Controller, Get, Param } from '@nestjs/common';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import { RentalProductsService } from '@backend/rental-products/rental-products.service';

@Controller('api/rental-products')
export class RentalProductsController {
  constructor(private readonly rentalProductsService: RentalProductsService) {}

  @Get(':product')
  async getProduct(
    @Param('product') product: string,
  ): Promise<IControllerResponse<IRentalProduct>> {
    try {
      const data = await this.rentalProductsService.getRentalProduct(product);
      return {
        data,
      };
    } catch (e) {
      console.log(e);
      return {
        message: 'server error',
        statusCode: 503,
      };
    }
  }
}
