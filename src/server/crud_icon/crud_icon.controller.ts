import { Controller } from '@nestjs/common';
import { CrudIconService } from '@backend/crud_icon/crud_icon.service';
import { Icon } from './crud_icon.schema';
import { BaseCrudMongoController } from '@backend/utils/BaseCrudMongoController';

@Controller('crud/icon')
// @ts-ignore
export class CrudIconController extends BaseCrudMongoController<
  CrudIconService,
  Icon
> {
  constructor(private readonly service: CrudIconService) {
    super(service);
  }
}
