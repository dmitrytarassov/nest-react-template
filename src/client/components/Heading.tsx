import React from 'react';
import styled, { css, StyledComponent } from 'styled-components';
import linesSVG from '@frontend/assets/lines.svg';
import { WithThemeAndProps } from '@frontend/utils/theme';
import classNames from 'classnames';

type StyledHeadingProps = WithThemeAndProps<{
  useLines: boolean;
  className?: string;
}>;

const styledHeading = css`
  margin: 0;
  padding: 0;
  color: ${({ theme }: StyledHeadingProps) => theme.colors.text.primary};
  font-weight: 700;
  line-height: 100%;

  span {
    ${({ useLines }: StyledHeadingProps) =>
      useLines &&
      css`
        padding-right: 32px;
        background-size: contain;
        background-position: left center;
        background-repeat: no-repeat;
        background-image: url(${linesSVG.src});
      `}
  }
`;

const H1 = styled.h1`
  ${styledHeading};
  font-size: 72px;

  ${({ theme }: StyledHeadingProps) =>
    theme.mixins.tablet(css`
      font-size: 64px;
    `)}

  ${({ theme }: StyledHeadingProps) =>
    theme.mixins.mobile(css`
      font-size: 48px;
    `)}
`;

const H2 = styled.h2`
  ${styledHeading};
`;

const H3 = styled.h3`
  ${styledHeading};
  font-size: 40px;

  ${({ theme }: StyledHeadingProps) =>
    theme.mixins.tablet(css`
      font-size: 36px;
    `)}

  ${({ theme }: StyledHeadingProps) =>
    theme.mixins.mobile(css`
      font-size: 32px;
    `)}
`;

const H4 = styled.h4`
  ${styledHeading};
`;

type Levels = 'h1' | 'h2' | 'h3' | 'h4';

const componentsMap: {
  [key in Levels]: StyledComponent<any, any>;
} = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
};

interface HeadingProps {
  level: Levels;
  useLines?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ level, useLines, children, className }: HeadingProps) => {
  const Component = componentsMap[level];
  return (
    <Component useLines={useLines} className={classNames(className)}>
      <span>{children}</span>
    </Component>
  );
};

export default Heading;
