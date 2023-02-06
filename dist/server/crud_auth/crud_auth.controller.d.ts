import { CrudAuthService } from './crud_auth.service';
import { BaseCrudMongoController } from '@backend/utils/BaseCrudMongoController';
import { Auth } from './crud_auth.schema';
import { SessionType } from '@lib/types/SessionType';
export declare class CrudAuthController extends BaseCrudMongoController<CrudAuthService, Auth> {
    private readonly service;
    constructor(service: CrudAuthService);
    checkAuth(response: any, request: any, session: SessionType): Promise<any>;
    login(response: any, element: {
        login: string;
        password: string;
    }, session: SessionType): Promise<any>;
}
