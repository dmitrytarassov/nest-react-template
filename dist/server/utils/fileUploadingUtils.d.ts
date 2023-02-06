export declare class FileUploadingUtils {
    static singleFileUploader(name: string, dest?: string): import("@nestjs/common").Type<import("@nestjs/common").NestInterceptor<any, any>>;
    static multipleFileUploader(name: string, dest?: string, maxFileNumber?: number): import("@nestjs/common").Type<import("@nestjs/common").NestInterceptor<any, any>>;
}
