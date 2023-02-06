import React from 'react';
interface CardDateProps {
    children: React.ReactNode;
    size: 'small' | 'large';
}
declare const CardDate: ({ children, size }: CardDateProps) => JSX.Element;
export default CardDate;
