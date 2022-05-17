import React from 'react';
import PageLayout from '../layouts/page';
import SEO from '../components/SEO';

import UnderConstructionHero from '../../static/images/under_construction.svg';

const Play = () => (
  <PageLayout
    seo={<SEO
      title="Play To Earn"
      keywords={['shinigami', 'test', 'about us', 'test']} />
    }
  >

  <div className="container py-10 h-full mx-auto px-4 text-center w-full flex flex-wrap justify-center">
      <div className="w-full lg:w-6/12">
        <div className="w-full">
          <img src={UnderConstructionHero} alt="TEST Logo" />
        </div>
        <h1 className="text-4xl font-bold text-center text-shinred-600">
          Play to Earn
        </h1>
        <h5 className="text-2xl font-bold text-center text-blue-900">
          Coming Soon
        </h5>
      </div>
    </div>
  </PageLayout>
);

export default Play;
