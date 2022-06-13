import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  Session,
  UseInterceptors,
} from '@nestjs/common';
import { CrudAuthService } from './crud_auth.service';
import { BaseCrudMongoController } from '@backend/utils/BaseCrudMongoController';
import { Auth } from './crud_auth.schema';
import { Base64ToFileInspector } from '@backend/utils/Base64ToFileInspector';
import path from 'path';
import { SessionType } from '@lib/types/SessionType';

@Controller('crud/auth')
// @ts-ignore
export class CrudAuthController extends BaseCrudMongoController<
  CrudAuthService,
  Auth
> {
  constructor(private readonly service: CrudAuthService) {
    super(service);
  }

  @Get('/checkAuth')
  async checkAuth(
    @Res() response,
    @Req() request,
    @Session() session: SessionType,
  ) {
    const auth = this.service.checkAuth(request.headers.Authorization, session);
    if (auth) {
      return response.status(HttpStatus.OK);
    }
    return response.status(HttpStatus.UNAUTHORIZED);
  }

  @Post('/login')
  async login(
    @Res() response,
    @Body()
    element: {
      login: string;
      password: string;
    },
    @Session() session: SessionType,
  ) {
    const user = await this.service.login(
      element.login,
      element.password,
      session,
    );
    if (user) {
      return response.status(HttpStatus.OK).json(user);
    }
    return response.status(HttpStatus.UNAUTHORIZED);
  }
}
