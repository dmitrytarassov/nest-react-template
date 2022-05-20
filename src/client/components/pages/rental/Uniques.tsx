import React, { useEffect, useState } from 'react';
import Positions from '@frontend/components/pages/rental/Positions';

interface UniquesProps {
  id: string;
}

const Uniques = ({ id }: UniquesProps) => {
  return (
    <Positions
      loadPositionUrl={`/api/rentals/unique_products?id=${id}`}
      linkToAll={`/rentals/${id}/uniques`}
      revertColors
    />
  );
};

export default Uniques;
