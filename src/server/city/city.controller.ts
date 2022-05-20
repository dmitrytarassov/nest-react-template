import { Controller, Get, Param, Req, Session } from '@nestjs/common';
import { City } from '@lib/types/City';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { getCity } from '@lib/utils/getCity';
import { CityService } from '@backend/city/city.service';
import { SessionType } from '@lib/types/SessionType';

@Controller('api/city')
export class CityController {
  constructor(private readonly cityService: CityService) {}
  @Get()
  getCurrentCity(@Session() session: SessionType): IControllerResponse<City> {
    return {
      data: this.cityService.getCity(session),
    };
  }

  @Get('set/:city')
  setCurrentCity(
    @Session() session: SessionType,
    @Param('city') city: City,
  ): IControllerResponse<City> {
    session.city = getCity(city);

    return {
      data: session.city,
    };
  }
}
