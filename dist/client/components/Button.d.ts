import React from 'react';
interface ButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    disabled?: boolean;
    type?: 'link' | 'button';
    href?: string;
    blank?: boolean;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'whiteOrange' | 'grayViolet';
}
declare const Button: ({ onClick, children, disabled, type, href, blank, className, variant, size, }: ButtonProps) => JSX.Element;
export default Button;
