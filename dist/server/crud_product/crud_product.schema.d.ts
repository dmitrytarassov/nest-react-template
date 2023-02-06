import { Document } from 'mongoose';
import { Seo } from '@backend/utils/seo.schema';
export declare class Product extends Seo {
    photos: string[];
    name: string;
    properties?: string;
    propertiesText?: string;
    description?: string;
    shortDescription?: string;
    unique: boolean;
}
export type ProductDocument = Product & Document;
export declare const ProductSchema: import("mongoose").Schema<Document<Product, any, any>, import("mongoose").Model<Document<Product, any, any>, any, any>, undefined, {}>;
