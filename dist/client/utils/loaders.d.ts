import { ICrudRentalProduct } from '@lib/interfaces/ICrudRentalProduct';
import { ICrudRental } from '@lib/interfaces/ICrudRental';
import { ICrudProduct } from '@lib/interfaces/ICrudProduct';
import { ICrudPromotion } from '@lib/interfaces/ICrudPromotion';
import { City } from '@lib/types/City';
import { ICardProps } from '@frontend/components/Card';
export declare const loadRentalProduct: (url: any) => Promise<ICrudRentalProduct>;
export declare const loadRental: (url: any) => Promise<ICrudRental>;
export declare const loadRentalsByCity: (city: string) => Promise<ICrudRental[]>;
export declare const loadPromotion: (url: any) => Promise<ICrudPromotion>;
export declare const loadPromotionsByRentalId: (rentalId: string) => Promise<ICrudPromotion[]>;
export declare const loadPromotionsByRentals: (rentals: ICrudRental[]) => Promise<ICrudPromotion[]>;
export declare const loadProductById: (id: any) => Promise<ICrudProduct>;
export declare const loadRentalById: (id: any) => Promise<ICrudRental>;
export declare const getAllRentalsForCity: (city: City) => Promise<ICrudRental[]>;
export declare const loadUniques: (city: City, onlyMainPage?: boolean, rentalId?: string) => Promise<(ICardProps & {
    id: string;
})[]>;
export declare const loadAllPromotions: (city: City, onlyMainPage?: boolean) => Promise<ICrudPromotion[]>;
