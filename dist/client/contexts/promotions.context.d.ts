/// <reference types="react" />
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
export interface IPromotionsContext {
    promotions: ICrudPromotion[];
}
export declare const PromotionsContext: import("react").Context<IPromotionsContext>;
