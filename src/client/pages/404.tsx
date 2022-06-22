import ErrorPage from '@frontend/components/pages/errors/ErrorPage';
import React from 'react';
import { RentalsProvider } from '@frontend/providers/rentals.provider';

export default function Page404() {
  return (
    <>
      <ErrorPage statusCode={404} />
    </>
  );
}
