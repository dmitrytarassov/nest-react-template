export interface IProduct {
    id: string;
    name: string;
    properties: string;
    propertiesText?: string;
    description: string;
    shortDescription?: string;
    photos: string[];
    unique: boolean;
}
