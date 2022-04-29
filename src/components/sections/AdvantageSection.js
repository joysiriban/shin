import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { advantageItems } from '../../constants';

const AdvantageSection = () => (
  <StaticQuery
    query={imgQuery}
    render={data => (
      <div className="container mx-auto px-4 pt-20">
        <div className="items-start flex flex-wrap">
          <div
            data-sal="slide-right"
            data-sal-delay="400"
            data-sal-easing="ease-in"
            className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <video className="max-w-full rounded-lg shadow-lg" src="https://www.youtube.com/watch?v=d_PSxT414JM&ab_channel=Test"></video>
            {/* <Img fluid={data.file.childImageSharp.fluid} alt="TEST Advantages" className="max-w-full rounded-lg shadow-lg"/> */}
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h3
                data-sal="fade"
                data-sal-delay="300"
                data-sal-easing="ease-in"
                className="text-4xl font-bold text-center text-pink-600">
                Advantages
              </h3>
              <ul className="list-none mt-6">
                {advantageItems.map((item, index) => {
                  return <li
                            data-sal="slide-down"
                            data-sal-delay="300"
                            data-sal-easing="ease-in-out"
                            key={index}
                            className="py-2"
                          >
                          <div className="flex items-center">
                            <div>
                              <span className="text-sm font-semibold px-4 py-3 inline-block uppercase rounded-full text-pink-600 bg-pink-200 mr-3 shadow-lg">
                                <FontAwesomeIcon icon={item.icon} size="1x" />
                              </span>
                            </div>
                            <div>
                              <h3 className="text-blue-900 font-semibold text-2xl">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                        </li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )}
  />
);

export default AdvantageSection;

const imgQuery = graphql`
  query {
    file(relativePath: { eq: "advantages.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }`;
