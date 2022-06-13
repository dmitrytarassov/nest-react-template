import {
  Body,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import * as path from 'path';
import { Base64ToFileInspector } from './Base64ToFileInspector';
import { BaseApiMongoController } from '@backend/utils/BaseApiMongoController';

// @ts-ignore
export class BaseCrudMongoController<T, E> extends BaseApiMongoController<
  T,
  E
> {
  constructor(private readonly service: T) {
    super(service);
  }

  @Post()
  @UseInterceptors(
    Base64ToFileInspector(path.join(__dirname, '../../../public/')),
  )
  async create(@Res() response, @Body() element: E) {
    // @ts-ignore
    const newElement = await this.service.create(element);

    return response.status(HttpStatus.CREATED).json({
      // @ts-ignore
      ...newElement._doc,
      // @ts-ignore
      id: newElement.id,
    });
  }

  @Patch('/:id')
  @UseInterceptors(
    Base64ToFileInspector(path.join(__dirname, '../../../public/')),
  )
  async update(@Res() response, @Param('id') id, @Body() element: E) {
    // @ts-ignore
    const updatedElement = await this.service.update(id, element);
    return response.status(HttpStatus.OK).json({
      // @ts-ignore
      ...updatedElement._doc,
      // @ts-ignore
      id: updatedElement.id,
    });
  }

  @Delete('/:id')
  async delete(@Res() response, @Param('id') id) {
    // @ts-ignore
    const deletedElement = await this.service.delete(id);
    return response.status(HttpStatus.OK).json({
      data: deletedElement,
    });
  }
}
