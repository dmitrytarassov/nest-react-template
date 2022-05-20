import { Controller, Get, Param, Query, Session } from '@nestjs/common';
import { PromotionsService } from '@backend/promotions/promotions.service';
import { Promotion } from '@lib/types/Promotion';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { IPromotion } from '@lib/interfaces/IPromotion';
import { CityService } from '@backend/city/city.service';
import { SessionType } from '@lib/types/SessionType';

@Controller('api/promotions')
export class PromotionsController {
  constructor(
    private readonly service: PromotionsService,
    private readonly cityService: CityService,
  ) {}

  @Get()
  async getPromotions(
    @Session() session: SessionType,
    @Query('id') id?: string,
    @Query('rental_product') rentalProduct?: string,
  ): Promise<IControllerResponse<IPromotion[]>> {
    const city = this.cityService.getCity(session);
    return {
      data: await this.service.getPromotions({
        city,
        promotionId: id,
        rentalProduct,
      }),
    };
  }

  @Get('/:rental_id')
  async getRentalPromotions(
    // @Param('type') type: Promotion,
    @Param('rental_id') rentalId: string,
  ): Promise<IControllerResponse<IPromotion[]>> {
    return {
      data: await this.service.getPromotions({ rentalId }),
    };
  }
}
