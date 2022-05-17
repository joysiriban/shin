import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { keyFeatureItems } from '../../constants';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import aboutUsImg from '../../../static/images/AboutUs.png';
import shinTitle from '../../../static/images/shin_title.png';

const AboutUs = () => (
  <StaticQuery
    query={imgQuery}
    render={data => (        
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh"
        }}>
        <div className="absolute sm:z-0 top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${aboutUsImg})`
            }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-25 bg-black"></span>
        </div>
        
        <div className="items-start z-50 flex flex-wrap lg:flex-row flex-col-reverse">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
          </div>
          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="md:pr-12">
              <h3
                data-sal="fade"
                data-sal-delay="300"
                data-sal-easing="ease"
                className="text-4xl text-center font-bold text-shinred-600 my-6"
                style={{
                  fontFamily: 'Ash'
                }}
              >
                About Us
              </h3>
              <p 
                data-sal="fade"
                data-sal-delay="300"
                data-sal-easing="ease"
                className="text-white text-center sm:z-50 font-semibold">
              Imprisoned in the underworld for a thousand years by the ancient seal of Amaterasu (celestial sun goddess), Shinigami Satsujin gathered the evilest akuto (villains) to take vengeance and eliminate Amaterasu’s military.
              </p>
              <br></br>
              <p 
              data-sal="fade"
              data-sal-delay="300"
              data-sal-easing="ease"
              className="text-white text-center sm:z-50 font-semibold">
              An army made up of 5,555 unique akuto NFTs, Shinigami aims to destroy anyone in his path and reclaim his throne as the true god of the new world.
              </p>
            </div>
          </div>
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
