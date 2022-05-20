import React from 'react';
import styled from 'styled-components';
import Service from '@frontend/components/pages/rental/Service';

interface ServicesProps {
  services: string[];
}

const StyledServices = styled.div`
  display: block;
  margin-top: -12px;
`;

const Services = ({ services }: ServicesProps) => {
  return (
    <StyledServices>
      {services.map((service) => (
        <Service key={service}>{service}</Service>
      ))}
    </StyledServices>
  );
};

export default Services;
