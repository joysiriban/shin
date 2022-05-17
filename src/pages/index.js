import React from 'react'
import FullLayout from '../layouts/full';
import SEO from '../components/SEO';
import AboutUs from '../components/sections/AboutUs';
import Rarity from '../components/sections/Rarity';
import Roadmap from '../components/sections/Roadmap';
import FAQ from '../components/sections/FAQ';
import Team from '../components/sections/Team';

const Home = () => {

  return (
    <FullLayout
      seo={<SEO
        title="Shinigami Sins"
        keywords={["nft", "shinigami", "sins"]} />
      }
    >

      <AboutUs />

      <Rarity />

      <Roadmap />

      <FAQ />

      <Team />

    </FullLayout>
  )
};

export default Home;
