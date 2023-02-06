import React from 'react';
interface IInfoTextProps {
    children: React.ReactNode;
    className?: string;
    onlyMobile?: boolean;
    onlyDesktop?: boolean;
}
declare const InfoText: ({ children, className, onlyMobile, onlyDesktop, }: IInfoTextProps) => JSX.Element;
export default InfoText;
