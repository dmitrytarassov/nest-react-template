import { City } from '@lib/types/City';
import { IControllerResponse } from '@lib/interfaces/IControllerResponse';
import { CityService } from '@backend/city/city.service';
import { SessionType } from '@lib/types/SessionType';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    getCurrentCity(session: SessionType): IControllerResponse<City>;
    setCurrentCity(session: SessionType, city: City): IControllerResponse<City>;
}
