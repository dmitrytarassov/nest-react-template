/// <reference types="react" />
import { IProduct } from '@lib/interfaces/IProduct';
export interface IProductsContext {
    products: IProduct[];
    addIds: (ids: string[]) => void;
}
export declare const ProductsContext: import("react").Context<IProductsContext>;
