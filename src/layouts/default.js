import React from 'react';

const DefaultLayout = ({ children, seo }) => (
  <>
    {seo}
    <main className="h-screen py-10">
      {children}
    </main>
  </>
);

export default DefaultLayout;
