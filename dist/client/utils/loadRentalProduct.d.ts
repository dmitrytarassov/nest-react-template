import { IRentalProduct } from '@lib/interfaces/IRentalProduct';
export declare const getLoadRentalProductUrl: (id: string) => string;
export declare function loadRentalProduct(id: string): Promise<IRentalProduct | undefined>;
