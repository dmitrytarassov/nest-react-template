import React from 'react';
interface StyledContainerProps {
    alternateColors?: boolean;
}
interface ContainerWithRadius extends StyledContainerProps {
    children: React.ReactNode;
    className?: string;
}
declare const ContainerWithRadius: ({ children, alternateColors, className, }: ContainerWithRadius) => JSX.Element;
export default ContainerWithRadius;
