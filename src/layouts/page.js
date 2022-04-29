import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PageLayout = ({ children, seo }) => (
  <>
    {seo}
    <Navbar white />

    <main>
      {children}
    </main>

    <Footer />
  </>
);

export default PageLayout;
