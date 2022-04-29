import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { peaceOfMindItems } from '../../constants';
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const PeaceMindSection = () => (
  <StaticQuery
    query={imgQuery}
    render={data => (
      <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="items-start flex-wrap lg:flex flex-row-reverse">
            <div
              data-sal="slide-right"
              data-sal-delay="400"
              data-sal-easing="ease-in"
              className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <Img fluid={data.file.childImageSharp.fluid} alt="TEST Peace of Mind" className="max-w-full rounded-lg shadow-lg"/>
            </div>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="md:pr-12">
                <h3
                  data-sal="fade"
                  data-sal-delay="300"
                  data-sal-easing="ease-in"
                  className="text-4xl font-bold text-center text-pink-600"
                >
                  Peace of Mind
                </h3>
                <ul className="list-none mt-6">
                  {peaceOfMindItems.map((item, index) => {
                    return <li
                              data-sal="slide-down"
                              data-sal-delay="300"
                              data-sal-easing="ease-in-out"
                              key={index}
                              className="py-2">
                              <div className="flex items-center"
                            >
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
      </section>
    )}
  />
);

export default PeaceMindSection;

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
