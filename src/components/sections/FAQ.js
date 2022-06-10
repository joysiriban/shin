import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { peaceOfMindItems } from '../../constants';
import { StaticQuery, graphql } from "gatsby";
import faqImage from '../../../static/images/BG01.png';
import Img from "gatsby-image";

const FAQ = () => (
  <section className="">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
              style={{
                minHeight: "75vh"
              }}>
        <div className="absolute z-0 top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${faqImage})`
            }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-25 bg-black"></span>
        </div>
        <div className="z-50 py-10 flex flex-col justify-center w-full md:w-8/12 mr-auto ml-auto">
          <h1 
          style={{
            fontFamily: 'Ash'
          }}
          className="text-shinred-600 font-bold text-5xl text-center mb-6">
            FAQ
          </h1>
          <div 
            className="border rounded py-2 px-4 mt-3"
            data-sal="fade"
            data-sal-delay="300"
            data-sal-easing="ease"
            >
            <p className="text-2xl font-bold text-white">
            What is the utility of owning a Shinigami Sins NFT?
            </p>
            <p  className="text-white">
            Owning a Shinigami Sins NFT gives you exclusive access to the greatest benefits developed for its members. Exclusive access to Play to Earn (P2E) game Shinigami Sins: Revenge of Satsujin, and free airdrop of $SINS token to be used in the game. Owners are likewise automatically whitelisted in the Development Team’s upcoming project.
            </p>
          </div>
  
  
          <div 
            className="border rounded py-2 px-4 mt-3"
            data-sal="fade"
            data-sal-delay="300"
            data-sal-easing="ease"
            >
            <p className="text-2xl font-bold text-white">
            When are Shinigami Sins NFTs minted?
            </p>
            <p  className="text-white">
            Presale: 11 June 2022 FREE MINT
            Public Sale: 13 June 2022
            </p>
          </div>
  
  
          <div 
            className="border rounded py-2 px-4 mt-3"
            data-sal="fade"
            data-sal-delay="300"
            data-sal-easing="ease"
            >
            <p className="text-2xl font-bold text-white">
            What’s the total size of Shinigami Sins?
            </p>
            <p  className="text-white">
            5,555 NFTs
            </p>
          </div>
  
  
          <div 
            className="border rounded py-2 px-4 mt-3"
            data-sal="fade"
            data-sal-delay="300"
            data-sal-easing="ease"
            >
            <p className="text-2xl font-bold text-white">
            What is the minting price?
            </p>
            <p  className="text-white">
            Presale - FREE MINT
            Public Sale - 0.5 SOL
            </p>
          </div>
  
  
          <div 
            className="border rounded py-2 px-4 mt-3"
            data-sal="fade"
            data-sal-delay="300"
            data-sal-easing="ease"
            >
            <p className="text-2xl font-bold text-white">
            How many Whitelist spots are available?
            </p>
            <p  className="text-white">
            2000
            </p>
          </div>
  
  
          <div className="border rounded py-2 px-4 border rounded py-2 px-4 mt-3">
            <p className="text-2xl font-bold text-white">
            Are there limits in minting?
            </p>
            <p  className="text-white">
            Presale: 2 max mint per wallet
            Public Sale: 3 max mint per wallet
            </p>
          </div>
          </div>
          </div>
        </section>
  
);

export default FAQ;

const imgQuery = graphql`
  query {
    file(relativePath: { eq: "peaceofmind.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }`;
