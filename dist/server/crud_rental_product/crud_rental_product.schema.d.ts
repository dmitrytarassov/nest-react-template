import { Document } from 'mongoose';
import { Seo } from '@backend/utils/seo.schema';
export declare class RentalProduct extends Seo {
    rentalId: string;
    weight?: number;
    productId: string;
    url: string;
    price?: number;
    discountPrice?: number;
    promotionType?: string;
    promotionText?: string;
    promotionDescription?: string;
    promotionShortDescription?: string;
    date: Date;
    externalUrl: string;
    showOnMainPage?: boolean;
    showUniqueOnMainPage?: boolean;
}
export type RentalProductDocument = RentalProduct & Document;
export declare const RentalProductSchema: import("mongoose").Schema<Document<RentalProduct, any, any>, import("mongoose").Model<Document<RentalProduct, any, any>, any, any>, undefined, {}>;
