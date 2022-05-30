import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
`;

interface BoxProps {
  children: React.ReactNode;
}

const Box = ({ children }: BoxProps) => {
  return <StyledBox>{children}</StyledBox>;
};

export default Box;
