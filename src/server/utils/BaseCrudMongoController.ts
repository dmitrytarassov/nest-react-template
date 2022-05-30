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

export class BaseCrudMongoController<T, E> {
  constructor(private readonly service: T) {}

  @Post()
  @UseInterceptors(
    Base64ToFileInspector(path.join(__dirname, '../../../public/')),
  )
  async createBook(@Res() response, @Body() element: E) {
    // @ts-ignore
    const newElement = await this.service.create(element);

    return response.status(HttpStatus.CREATED).json({
      // @ts-ignore
      ...newElement._doc,
      // @ts-ignore
      id: newElement.id,
    });
  }

  @Get()
  async fetchAll(@Query() query: number, @Res() response) {
    // @ts-ignore
    const data = await this.service.readAll(query);
    // @ts-ignore
    const total = await this.service.getTotal();

    return response.status(HttpStatus.OK).json({
      data,
      total,
    });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') _id) {
    // @ts-ignore
    const element = await this.service.readById(_id);

    return response.status(HttpStatus.OK).json({
      // @ts-ignore
      ...element._doc,
      // @ts-ignore
      id: element.id,
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
