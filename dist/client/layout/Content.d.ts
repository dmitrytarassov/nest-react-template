import React from 'react';
interface IContentProps {
    children: React.ReactNode;
    className?: string;
}
declare const Content: ({ children, className }: IContentProps) => JSX.Element;
export default Content;
