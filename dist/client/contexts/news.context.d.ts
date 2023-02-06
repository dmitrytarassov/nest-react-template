/// <reference types="react" />
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
export interface INewsContext {
    news: ICrudPromotion[];
}
export declare const NewsContext: import("react").Context<INewsContext>;
