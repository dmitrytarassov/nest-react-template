import { Document } from 'mongoose';
import { Seo } from '@backend/utils/seo.schema';
export declare class Promotion extends Seo {
    photos: string[];
    weight: number;
    name: string;
    externalUrl: string;
    url: string;
    text?: string;
    shortText?: string;
    rentalId?: string;
    promotionType?: string;
    promotionText?: string;
    date?: Date;
    showOnMainPage?: boolean;
}
export type PromotionDocument = Promotion & Document;
export declare const PromotionSchema: import("mongoose").Schema<Document<Promotion, any, any>, import("mongoose").Model<Document<Promotion, any, any>, any, any>, undefined, {}>;
