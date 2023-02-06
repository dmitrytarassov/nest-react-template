import { ExecutionContext } from '@nestjs/common/interfaces/features/execution-context.interface';
export declare function Base64ToFileInspector(pathName: any): {
    new (): {
        intercept(context: ExecutionContext, next: any): Promise<any>;
    };
};
