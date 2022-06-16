import React from 'react';
import styled from 'styled-components';

interface ServiceProps {
  children: React.ReactNode;
}

const StyledService = styled.div`
  display: flex;
  align-items: center;
  float: left;
  min-width: 50%;
  margin-top: 12px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0.02em;

  svg {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
`;

const Service = ({ children }: ServiceProps) => {
  return (
    <StyledService>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8.5" r="8" fill="#22C56D" />
      </svg>
      {children}
    </StyledService>
  );
};

export default Service;
