/// <reference types="react" />
import { ICrudRental } from '@lib/interfaces/ICrudRental';
export interface IRentalsContext {
    rentals: ICrudRental[];
}
export declare const RentalsContext: import("react").Context<IRentalsContext>;
