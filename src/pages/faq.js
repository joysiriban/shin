import React from 'react';
import PageLayout from '../layouts/page';
import SEO from '../components/SEO';

const FAQ = () => (
  <PageLayout
    seo={<SEO
      title="FAQ"
      keywords={['shinigami', 'test', 'about us', 'test']} />
    }
  >
    
  <section className="relative py-10 px-10">
        <div className="container mx-auto px-4">
          <h1 className="text-shinred-600 font-bold text-5xl text-center mb-6">
            FAQ
          </h1>
          <div className="mt-3">
            <p className="text-2xl font-bold text-blue-900">
            What is the utility of owning a Shinigami Sins NFT?
            </p>
            <p  className="text-blue-900">
            Owning a Shinigami Sins NFT gives you exclusive access to the greatest benefits developed for its members. Exclusive access to Play to Earn (P2E) game Shinigami Sins: Revenge of Satsujin, and free airdrop of $SINS token to be used in the game. Owners are likewise automatically whitelisted in the Development Team’s upcoming project.
            </p>
          </div>
  
  
          <div className="mt-3">
            <p className="text-2xl font-bold text-blue-900">
            When are Shinigami Sins NFTs minted?
            </p>
            <p  className="text-blue-900">
              Presale: 11 June 2022 FREE MINT
              Public Sale: 13 June 2022
            </p>
          </div>
  
  
          <div className="mt-3">
            <p className="text-2xl font-bold text-blue-900">
            What’s the total size of Shinigami Sins?
            </p>
            <p  className="text-blue-900">
            5,555 NFTs
            </p>
          </div>
  
  
          <div className="mt-3">
            <p className="text-2xl font-bold text-blue-900">
            What is the minting price?
            </p>
            <p  className="text-blue-900">
            Presale - FREE MINT
            Public Sale - 0.5 SOL
            </p>
          </div>
  
  
          <div className="mt-3">
            <p className="text-2xl font-bold text-blue-900">
            How many Whitelist spots are available?
            </p>
            <p  className="text-blue-900">
            2000
            </p>
          </div>
  
  
          <div className="mt-3">
            <p className="text-2xl font-bold text-blue-900">
            Are there limits in minting?
            </p>
            <p  className="text-blue-900">
            Presale: 2 max mint per wallet
            Public Sale: 3 max mint per wallet
            </p>
          </div>
          </div>
        </section>
  </PageLayout>
);

export default FAQ;
