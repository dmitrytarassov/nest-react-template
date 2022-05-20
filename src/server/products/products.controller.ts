import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from '@backend/products/products.service';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { IProduct } from '@lib/interfaces/IProduct';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {
    console.log(1);
  }

  @Get('')
  async getProducts(
    @Query('ids') ids: string,
  ): Promise<IControllerResponse<IProduct[]>> {
    try {
      const data = await this.productsService.getProducts(ids.split(','));
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

  @Get('/unique')
  async getUnique(): Promise<IControllerResponse<IProduct[]>> {
    try {
      const data = await this.productsService.getUniqueProducts();
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
