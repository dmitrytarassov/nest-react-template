/// <reference types="react" />
import { IBreadCrumb } from '@frontend/dtos/IBreadCrumb';
interface BreadCrumbsProps {
    breadcrumbs: IBreadCrumb[];
    revertColors?: boolean;
}
declare const BreadCrumbs: ({ breadcrumbs, revertColors }: BreadCrumbsProps) => JSX.Element;
export default BreadCrumbs;
