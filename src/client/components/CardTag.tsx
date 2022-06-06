import React from 'react';
import styled, { css } from 'styled-components';
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';
import { WithTheme, WithThemeAndProps } from '@frontend/utils/theme';
import TagBase from '@frontend/components/TagBase';

const StyledCardTag = styled(TagBase)`
  position: absolute;
  top: -16px;
  transform: matrix(0.98, -0.17, 0.17, 0.98, 0, 0);
  height: 40px;
  line-height: 40;
  font-size: 20px;

  ${({ theme }: WithTheme) =>
    theme.mixins.mobile(css`
      font-size: 16px;
    `)}

  ${({ theme }: WithTheme) =>
    theme.mixins.tablet(css`
      font-size: 18px;
    `)}
`;

interface CardTagProps {
  tag: IPromotionTag;
  text: string;
}

const CardTag = ({ tag, text }: CardTagProps) => {
  return <StyledCardTag type={tag.type}>{text}</StyledCardTag>;
};

export default CardTag;
