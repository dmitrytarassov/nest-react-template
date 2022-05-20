import React from 'react';
import styled from 'styled-components';
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';
import TagBase from '@frontend/components/TagBase';

const StyledTag = styled(TagBase)``;

interface TagProps {
  tag: IPromotionTag;
  text: string;
}

const CardTag = ({ tag, text }: TagProps) => {
  return <StyledTag type={tag.type}>{text}</StyledTag>;
};

export default CardTag;
