/// <reference types="react" />
export interface ICurrentLocationContext {
    coordinates: [number, number] | undefined;
    setCoordinates: (coords: [number, number]) => void;
}
export declare const CurrentLocationContext: import("react").Context<ICurrentLocationContext>;
