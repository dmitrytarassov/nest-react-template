/// <reference types="react" />
import { IMarker } from '@frontend/dtos/IMarker';
export interface IMapContext {
    markers: IMarker[];
    selectRental: (id: string) => void;
    center?: [number, number];
    zoom: 12 | 14;
    activeRental: string;
}
export declare const MapContext: import("react").Context<IMapContext>;
