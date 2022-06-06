import Header from '@frontend/components/Header';
import ErrorPage from '@frontend/components/pages/errors/ErrorPage';
import React from 'react';

export default function Page404() {
  return (
    <>
      <Header />
      <ErrorPage statusCode={404} />
    </>
  );
}
