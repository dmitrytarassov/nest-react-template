import React from 'react';
import styled from 'styled-components';
import { IPromotionTag } from '@lib/interfaces/IPromotionTag';
import TagBase from '@frontend/components/TagBase';

const StyledTag = styled(TagBase)``;

interface TagProps {
  tag: 'new' | 'sale' | 'date';
  text: string;
}

const Tag = ({ tag, text }: TagProps) => {
  return <StyledTag type={tag}>{text}</StyledTag>;
};

export default Tag;
