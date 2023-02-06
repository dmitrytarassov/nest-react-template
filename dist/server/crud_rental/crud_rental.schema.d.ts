import { City } from '@lib/types/City';
import { Document } from 'mongoose';
import { Seo } from '@backend/utils/seo.schema';
export declare class Rental extends Seo {
    name: string;
    weight: number;
    email?: string;
    url: string;
    icon: string;
    address: string;
    coordinates: string;
    workingTime: string;
    vk?: string;
    telegram?: string;
    web?: string;
    rating: number;
    phone: string;
    services: string;
    city: City;
    delivery: string;
    selfService: string;
    repair: string;
    insurance: string;
}
export type RentalDocument = Rental & Document;
export declare const RentalSchema: import("mongoose").Schema<Document<Rental, any, any>, import("mongoose").Model<Document<Rental, any, any>, any, any>, undefined, {}>;
