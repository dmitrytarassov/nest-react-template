import React from 'react';
interface BlockProps {
    children: React.ReactNode;
    title?: string;
    blockName: string;
}
declare const Block: ({ children, title, blockName }: BlockProps) => JSX.Element;
export default Block;
