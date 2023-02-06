import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
export declare const getLoadProductPromotionsUrl: (id: string) => string;
export declare function loadProductPromotions(id: string): Promise<ICrudPromotion[]>;
