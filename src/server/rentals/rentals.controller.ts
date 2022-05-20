import { Controller, Get, Param, Query, Session } from '@nestjs/common';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { IRental } from '@lib/interfaces/IRental';
import { RentalsService } from '@backend/rentals/rentals.service';
import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
import { SessionType } from '@lib/types/SessionType';
import { CityService } from '@backend/city/city.service';
import { ProductsService } from '@backend/products/products.service';

@Controller('api/rentals')
export class RentalsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly rentalsService: RentalsService,
    private readonly cityService: CityService,
  ) {}

  @Get('')
  async getRentals(
    @Session() session: SessionType,
  ): Promise<IControllerResponse<IRental[]>> {
    const city = this.cityService.getCity(session);

    try {
      const data = await this.rentalsService.getRentals({ city });
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

  @Get('unique_products')
  async getUniqueProducts(
    @Session() session: SessionType,
    @Query('id') id?: string,
  ): Promise<IControllerResponse<IRentalProduct[]>> {
    const city = this.cityService.getCity(session);

    try {
      const data = await this.rentalsService.getUniqueProducts(city, id);
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

  @Get('product/:product')
  async getProduct(
    @Param('product') product: string,
  ): Promise<IControllerResponse<IRentalProduct[]>> {
    try {
      const data = await this.rentalsService.getRentalProducts({ product });
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

  @Get(':id')
  async getRental(
    @Param('id') id: string,
  ): Promise<IControllerResponse<IRental | null>> {
    try {
      const [rental] = await this.rentalsService.getRentals({ rentalId: id });
      return {
        data: rental || null,
      };
    } catch (e) {
      console.log(e);
      return {
        message: 'server error',
        statusCode: 503,
      };
    }
  }

  @Get(':id/products')
  async getRentalProducts(
    @Param('id') id: string,
  ): Promise<IControllerResponse<IRentalProduct[]>> {
    try {
      const data = await this.rentalsService.getRentalProducts({ id });
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
