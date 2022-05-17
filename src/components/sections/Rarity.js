import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import rarityBgImg from '../../../static/images/BG01.png';
import Img from "gatsby-image";

const Rarity = () => (
  <section>
    <StaticQuery
    query={imgQuery}
    render={data => (
      <div>
      <section className="relative py-10">
      <div className="container mx-auto px-4">
        <h1 
          style={{
            fontFamily: 'Ash'
          }}
          className="text-shinred-600 font-bold text-4xl text-center mb-6"
        >
          Rarity
        </h1>
        <div className="items-start flex flex-wrap justify-center lg:flex-row flex-col-reverse">
          <div className="w-full md:w-5/12 ml-auto">
            <div className="px-6">
              <h3
                style={{
                  fontFamily: 'Ash'
                }}
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease"
                className="text-3xl text-right font-bold text-blue-900 my-6"
              >
                "The Shogun"
              </h3>
              <p 
              data-sal="fade"
              data-sal-delay="100"
              data-sal-easing="ease"
              className="text-blue-900 text-right text-3xl font-semibold">
                The commander generals of Shinigami’s army, made out of the strongest, meanest, and most voracious akuto ever to walk the underworld.
              </p>
            </div>
          </div>
          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-easing="ease-in"
            className="w-full md:w-4/12 mr-auto px-6 py-6">
              <Img fluid={data.shogun.childImageSharp.fluid} alt="shogun" className="max-w-full rounded-lg shadow-lg"/>
          </div>
        </div>

      </div>
    </section>
      <section className="relative py-10">
      <div className="container mx-auto px-4">
        <div className="items-start flex flex-wrap justify-center lg:flex-row flex-col-reverse">
        <div
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-easing="ease-in"
            className="w-full md:w-4/12 ml-auto px-6 py-6">
              <Img fluid={data.daimyos.childImageSharp.fluid} alt="daimyos" className="max-w-full rounded-lg shadow-lg"/>
          </div>
          <div className="w-full md:w-5/12 px-4 mr-auto">
            <div className="md:pr-12">
              <h3
                style={{
                  fontFamily: 'Ash'
                }}
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease"
                className="text-3xl font-bold text-blue-900 my-6"
              >
              "The Daimyos"
              </h3>
              <p 
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease"
              className="text-blue-900 text-3xl font-semibold">
                Fueled by greed and impure ambitions, they are the wisest yet most abominable of them all. They kill through deception and hoodwinking, leaving nothing but bones and rotting flesh for the vultures to feast on.
                </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section className="relative py-10">
      <div className="container mx-auto px-4">
        <div className="items-start flex flex-wrap justify-center lg:flex-row flex-col-reverse">
          <div className="w-full md:w-5/12 px-4 ml-auto">
            <div className="md:pr-12">
              <h3
                style={{
                  fontFamily: 'Ash'
                }}
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease"
                className="text-3xl text-right font-bold text-blue-900 my-6"
              >
              "The Bannerman"
              </h3>
              <p 
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease"
              className="text-blue-900 text-right text-3xl font-semibold">
              The foot soldiers; but each cursed by Shinigami with infernal powers, ready to die for him and fight until the last drop of their evil blood.</p>
            </div>
          </div>
          <div
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-easing="ease-in"
            className="w-full md:w-4/12 mr-auto px-4 py-6">
              <Img fluid={data.bannerman.childImageSharp.fluid} alt="bannerman" className="max-w-full rounded-lg shadow-lg"/>
          </div>
        </div>

      </div>
    </section>
      </div>
    )}
  />
  </section>
);

export default Rarity;

  const imgQuery = graphql`
  query {
    daimyos: file(relativePath: { eq: "rarity_daimyos.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    shogun: file(relativePath: { eq: "rarity_shogun.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    bannerman: file(relativePath: { eq: "rarity_bannerman.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }`;
