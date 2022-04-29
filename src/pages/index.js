import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import FullLayout from '../layouts/full';
import SEO from '../components/SEO';
import AdvantageSection from '../components/sections/AdvantageSection';
import AboutUs from '../components/sections/AboutUs';
import PeaceMindSection from '../components/sections/PeaceMindSection';
import SignUpSection from '../components/sections/SignUpSection';
import Modal from '../components/Modal';

const Home = () => {

  return (
    <FullLayout
      seo={<SEO
        title="shinigamisins"
        keywords={["nft", "shinigami", "sins"]} />
      }
    >
      {/* <section className="pb-20 pt-10">
        <div className="container mx-auto px-4 text-center mb-10 bg-gray-300">
          <h1 className="text-pink-600 font-bold text-5xl">
            About Us
          </h1>
          
          <p className="mt-4 mb-4 text-lg text-gray-300">
            Shinigami Sins is more than your typical NFT collection. By owning an NFT in the Shinigami Sins Collection, you become part of Shingami Satsujin’s Army. You will be a priority in future projects. You will be with us for many years to come.
          </p>
          
          <p className="mt-4 mb-4 text-lg text-gray-300">
            We are a team of NFT lovers. Thus, we dedicate ourselves in creative amazing NFTs with actual case use and utility for all.
          </p>
        </div>

        <AdvantageSection />

      </section> */}

      <AboutUs />

      {/* <PeaceMindSection />

      <SignUpSection />

      <Modal
        isOpen={isModalOpen}
        closeModal={() => closeModal()}
        notice={notice}
      /> */}
    </FullLayout>
  )
};

export default Home;
