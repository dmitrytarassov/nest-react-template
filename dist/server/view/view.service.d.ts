import { OnModuleInit } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class ViewService implements OnModuleInit {
    private server;
    onModuleInit(): Promise<void>;
    handler(req: Request, res: Response): Promise<void>;
}
