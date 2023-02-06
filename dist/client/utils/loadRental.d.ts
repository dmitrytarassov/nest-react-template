import { IRental } from '@lib/interfaces/IRental';
export declare const getLoadRentalUrl: (id: string) => string;
export declare function loadRental(id: string): Promise<IRental | undefined>;
