import React from 'react';
import styled from 'styled-components';
import clocks from '@frontend/assets/clocks.svg';
import TagBase from '@frontend/components/TagBase';

const StyledTag = styled(TagBase)`
  font-size: 14px;

  img {
    margin-right: 8px;
    width: 14px;
  }
`;

interface TagProps {
  children: React.ReactNode;
}

const DateTag = ({ children }: TagProps) => {
  return (
    <StyledTag type="date">
      <img src={clocks.src} /> {children}
    </StyledTag>
  );
};

export default DateTag;
