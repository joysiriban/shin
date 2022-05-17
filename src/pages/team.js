import React from 'react';
import PageLayout from '../layouts/page';
import SEO from '../components/SEO';

import specProImg from '../../static/images/team_specpro.webp';
import dabiImg from '../../static/images/team_dabi.webp';
import yanzImg from '../../static/images/team_yanz.webp';
import stormImg from '../../static/images/team_stormspirit.webp';
import godImg from '../../static/images/team_77god.webp';
import fijiImg from '../../static/images/team_fiji.webp';

const Team = () => (
  <PageLayout
    seo={<SEO
      title="Team"
      keywords={['shinigami', 'team', 'sins']} />
    }
  >
    <section>
    <div
      className="container mx-auto px-4"
    >
      <h1 className="text-shinred-600 font-bold text-5xl text-center mb-6">
        Our Team
      </h1>
      <p>
      We built this community with members as our priority. Our vision in this project is to always bring back to the community the solid support and loyalty they give us. Thus, we treat them as the commanders of Shinigami Satsujin’s Army.
      </p>
    </div>

    <div className="flex flex-wrap pt-8">
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
      <div className="px-6">
        <img
          alt="..."
          src={specProImg}
          className="shadow-lg rounded-full max-w-full mx-auto"
          style={{ maxWidth: "120px" }}
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            SpecPro
          </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            Founder & CEO
          </p>
        </div>
      </div>
    </div>


    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
      <div className="px-6">
        <img
          alt="..."
          src={godImg}
          className="shadow-lg rounded-full max-w-full mx-auto"
          style={{ maxWidth: "120px" }}
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            77God
          </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            Web3
          </p>
        </div>
      </div>
    </div>


    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
      <div className="px-6">
        <img
          alt="..."
          src={fijiImg}
          className="shadow-lg rounded-full max-w-full mx-auto"
          style={{ maxWidth: "120px" }}
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            Fiji
          </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            Web3
          </p>
        </div>
      </div>
    </div>


    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
      <div className="px-6">
        <img
          alt="..."
          src={stormImg}
          className="shadow-lg rounded-full max-w-full mx-auto"
          style={{ maxWidth: "120px" }}
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            StormSpirit
          </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            Color
          </p>
        </div>
      </div>
    </div>




    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
      <div className="px-6">
        <img
          alt="..."
          src={dabiImg}
          className="shadow-lg rounded-full max-w-full mx-auto"
          style={{ maxWidth: "120px" }}
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            Dabi
          </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            MOD
          </p>
        </div>
      </div>
    </div>




    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4">
      <div className="px-6">
        <img
          alt="..."
          src={yanzImg}
          className="shadow-lg rounded-full max-w-full mx-auto"
          style={{ maxWidth: "120px" }}
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            Yanz
          </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            MOD
          </p>
        </div>
      </div>
    </div>

    </div>
    </section>
  </PageLayout>
);

export default Team;
