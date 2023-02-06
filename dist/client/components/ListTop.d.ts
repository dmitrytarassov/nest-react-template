/// <reference types="react" />
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
interface ListTopProps {
    breadcrumbs: IBreadCrumb[];
    backLink: string;
    title: string;
    image?: string;
    search?: {
        value: string;
        onChange: (value: string) => void;
        placeholder?: string;
    };
    rating?: number;
    revertColors?: boolean;
}
declare const ListTop: ({ breadcrumbs, backLink, title, search, image, rating, revertColors, }: ListTopProps) => JSX.Element;
export default ListTop;
