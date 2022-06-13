import { Injectable } from '@nestjs/common';
import { BaseCrudMongoModel } from '@backend/utils/BaseCrudMongoModel';
import { Model } from 'mongoose';
import { Auth } from './crud_auth.schema';
import { InjectModel } from '@nestjs/mongoose';
import { SessionType } from '@lib/types/SessionType';
import crypto from 'crypto';

@Injectable()
// @ts-ignore
export class CrudAuthService extends BaseCrudMongoModel<Auth> {
  constructor(@InjectModel(Auth.name) private readonly model: Model<Auth>) {
    super(model);
  }

  async login(login: string, password: string, session: SessionType) {
    const users: Auth[] = await this.readAll({
      filter: [`login,${login}`, `password,${password}`],
      limit: '1',
      page: '1',
      sort: [],
      offset: '0',
    });

    const [user] = users;

    if (user) {
      session.auth = crypto.createHash('sha1').digest('hex');
      return user;
    }

    return null;
  }

  checkAuth(hash, session: SessionType) {
    return hash === session.auth;
  }

  logout(session: SessionType) {
    session.auth = '';
    delete session.auth;
    return true;
  }
}
