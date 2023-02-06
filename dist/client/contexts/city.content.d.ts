/// <reference types="react" />
import { City } from '@lib/types/City';
export interface ICityContext {
    city: City;
    setCity: (city: City) => void;
}
export declare const CityContext: import("react").Context<ICityContext>;
