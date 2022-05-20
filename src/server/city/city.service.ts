import { Injectable, Session } from '@nestjs/common';
import { City } from '@lib/types/City';
import { SessionType } from '@lib/types/SessionType';
import { getCity } from '@lib/utils/getCity';

@Injectable()
export class CityService {
  getCity(session: SessionType): City {
    return getCity(session.city);
  }
}
