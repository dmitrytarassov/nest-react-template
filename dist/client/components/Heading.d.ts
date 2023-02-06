import React from 'react';
type Levels = 'h1' | 'h2' | 'h3' | 'h4';
interface HeadingProps {
    level: Levels;
    useLines?: boolean;
    children: React.ReactNode;
    className?: string;
}
declare const Heading: ({ level, useLines, children, className }: HeadingProps) => JSX.Element;
export default Heading;
