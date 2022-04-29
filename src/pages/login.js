import React from 'react';
import DefaultLayout from '../layouts/default';
import SEO from '../components/SEO';

import UnderConstructionHero from '../../static/images/under_construction.svg';

const Login = () => (
  <DefaultLayout
    seo={<SEO
      title="test"
      keywords={["iban", "home", "test", "test", "login"]} />
    }
  >
    <div className="container h-full mx-auto px-4 text-center w-full flex flex-wrap justify-center">
      <div className="w-full lg:w-6/12">
        <div className="w-full">
          <img src={UnderConstructionHero} alt="TEST Logo" />
        </div>
        <h1 className="text-4xl font-bold text-center text-pink-600">
          Upgrade in progress.
        </h1>
        <h5 className="text-2xl font-bold text-center text-blue-900">
          Please call back October 5th, 2020 @ 14:00CET
        </h5>
      </div>
    </div>

  </DefaultLayout>
);

export default Login;
