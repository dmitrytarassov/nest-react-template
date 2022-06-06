import React from 'react';
import styled from 'styled-components';
import clocks from '@frontend/assets/clocks.svg';
import TagBase from '@frontend/components/TagBase';

const StyledCardDate = styled(TagBase)`
  position: absolute;
  height: 32px;
  top: 24px;
  right: 24px;
  display: flex;
  align-items: center;
  font-size: 10px;
  font-family: 'Neue Machina';

  img {
    margin-right: 4px;
    width: 14px;
  }
`;

interface CardDateProps {
  children: React.ReactNode;
}

const CardDate = ({ children }: CardDateProps) => {
  return (
    <StyledCardDate type="date">
      <img src={clocks.src} />
      {children}
    </StyledCardDate>
  );
};

export default CardDate;
