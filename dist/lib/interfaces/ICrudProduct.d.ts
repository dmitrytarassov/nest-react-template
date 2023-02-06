export interface ICrudProduct {
    id: string;
    photos: string[];
    name: string;
    properties?: string;
    propertiesText?: string;
    description?: string;
    shortDescription?: string;
    unique: boolean;
}
