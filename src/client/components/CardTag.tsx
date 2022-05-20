import React from 'react';
import styled from 'styled-components';
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';
import { WithTheme, WithThemeAndProps } from '@frontend/utils/theme';
import TagBase from '@frontend/components/TagBase';

const StyledCardTag = styled(TagBase)`
  position: absolute;
  top: -16px;
  left: -16px;
  transform: rotate(-15deg);
`;

interface CardTagProps {
  tag: IPromotionTag;
  text: string;
}

const CardTag = ({ tag, text }: CardTagProps) => {
  return <StyledCardTag type={tag.type}>{text}</StyledCardTag>;
};

export default CardTag;
