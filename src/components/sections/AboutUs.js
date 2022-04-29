import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { keyFeatureItems } from '../../constants';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import heroImg from '../../../static/images/hero_aboutus.jpg';
import shinTitle from '../../../static/images/shin_title.png';

const AboutUs = () => (
  <StaticQuery
    query={imgQuery}
    render={data => (        
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh"
        }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundColor: '1d1d1b'
              // backgroundImage: `url(${heroImg})`
            }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="flex flex-col">

          </div>
          {/* <div className="items-center flex flex-wrap">
              <h3
              >
                About Us
              </h3>
              <div
                data-sal="fade"
                data-sal-delay="300"
                data-sal-easing="ease-in"
                className="text-7xl font-bold text-center text-red-600"
              >
              <p className="text-7xl font-bold text-center text-gray-700">
              Shinigami Sins is more than your typical NFT collection. By owning an NFT in the Shinigami Sins Collection, you become part of Shingami Satsujin’s Army. You will be a priority in future projects. You will be with us for many years to come.
              </p>
              <p className="text-7xl font-bold text-center text-gray-700">
              We are a team of NFT lovers. Thus, we dedicate ourselves in creative amazing NFTs with actual case use and utility for all.
              </p>
              </div>

          </div> */}
        </div>
      </div>
    )}
  />
);

export default AboutUs;

const imgQuery = graphql`
  query {
    file(relativePath: { eq: "keyfeatures.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }`;
