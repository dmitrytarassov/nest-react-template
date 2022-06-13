import { Get, HttpStatus, Param, Query, Res } from '@nestjs/common';

export class BaseApiMongoController<T, E> {
  constructor(private readonly service: T) {}

  @Get()
  async fetchAll(@Query() query: any, @Res() response) {
    // @ts-ignore
    const data = await this.service.readAll(query);
    // @ts-ignore
    const total = await this.service.getTotal(query);

    return response.status(HttpStatus.OK).json({
      data,
      total,
    });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') _id) {
    // @ts-ignore
    const element = await this.service.readById(_id);

    if (element) {
      return response.status(HttpStatus.OK).json({
        // @ts-ignore
        ...element._doc,
        // @ts-ignore
        id: element.id,
      });
    } else {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: 404,
      });
    }
  }
}
