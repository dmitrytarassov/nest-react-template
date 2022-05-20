import React from 'react';
import Positions from '@frontend/components/pages/rental/Positions';

interface UniquesProps {
  id: string;
}

const Catalog = ({ id }: UniquesProps) => {
  return (
    <Positions
      loadPositionUrl={`/api/rentals/${id}/products`}
      linkToAll={`/rentals/${id}/catalog`}
      revertColors={false}
    />
  );
};

export default Catalog;
