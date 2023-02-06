import { IProduct } from '@lib/interfaces/IProduct';
export declare const getLoadProductUrl: (id: string) => string;
export declare function loadProduct(id: any): Promise<IProduct | undefined>;
