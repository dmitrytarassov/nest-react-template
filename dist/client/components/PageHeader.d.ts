import React from 'react';
interface PageHeaderProps {
    backLink: string;
    title: string;
    children?: React.ReactNode;
    image?: string;
    rating?: number;
    revertColors?: boolean;
}
declare const PageHeader: ({ backLink, title, children, image, rating, revertColors, }: PageHeaderProps) => JSX.Element;
export default PageHeader;
