import { Document } from 'mongoose';
export declare class Auth {
    login: string;
    password: string;
}
export type AuthDocument = Auth & Document;
export declare const AuthSchema: import("mongoose").Schema<Document<Auth, any, any>, import("mongoose").Model<Document<Auth, any, any>, any, any>, undefined, {}>;
