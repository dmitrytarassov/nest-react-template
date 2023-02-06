import { BaseCrudMongoModel } from '@backend/utils/BaseCrudMongoModel';
import { Model } from 'mongoose';
import { Auth } from './crud_auth.schema';
import { SessionType } from '@lib/types/SessionType';
export declare class CrudAuthService extends BaseCrudMongoModel<Auth> {
    private readonly model;
    constructor(model: Model<Auth>);
    login(login: string, password: string, session: SessionType): Promise<Auth>;
    checkAuth(hash: any, session: SessionType): boolean;
    logout(session: SessionType): boolean;
}
