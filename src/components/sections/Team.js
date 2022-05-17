import React from 'react';
import { StaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";

const Team = () => (
  <StaticQuery
    query={imgQuery}
    render={data => (
      
    <section className="flex flex-wrap justify-center">
    <div
      className="container md:w-10/12 py-10"
    >
      <h1 
      style={{
        fontFamily: 'Ash'
      }}
      className="text-shinred-600 font-bold text-5xl text-center mb-6">
        Our Team
      </h1>
      <p>
      We built this community with members as our priority. Our vision in this project is to always bring back to the community the solid support and loyalty they give us. Thus, we treat them as the commanders of Shinigami Satsujin’s Army.
      </p>
    </div>

    <div className="flex flex-wrap pt-8">
    <div
      className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4"
      data-sal="fade"
      data-sal-delay="100"
      data-sal-easing="ease"
      >
      <div className="px-6">
        <Img fluid={data.team_specpro.childImageSharp.fluid} alt="team_specpro" className="shadow-lg rounded-full max-w-full mx-auto"/>
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


    <div
      className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4"
      data-sal="fade"
      data-sal-delay="200"
      data-sal-easing="ease"
      >
      <div className="px-6">
        <Img fluid={data.team_77god.childImageSharp.fluid} alt="team_77god" className="shadow-lg rounded-full max-w-full mx-auto"/>
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


    <div
      className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4"
      data-sal="fade"
      data-sal-delay="300"
      data-sal-easing="ease"
      >
      <div className="px-6">
        <Img fluid={data.team_fiji.childImageSharp.fluid} alt="team_fiji" className="shadow-lg rounded-full max-w-full mx-auto"/>
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


    <div
      className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4"
      data-sal="fade"
      data-sal-delay="400"
      data-sal-easing="ease"
      >
      <div className="px-6">
        <Img fluid={data.team_stormspirit.childImageSharp.fluid} alt="team_stormspirit" className="shadow-lg rounded-full max-w-full mx-auto"/>
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




    <div
      className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4"
      data-sal="fade"
      data-sal-delay="100"
      data-sal-easing="ease"
      >
      <div className="px-6">
      <Img fluid={data.team_dabi.childImageSharp.fluid} alt="team_dabi" className="shadow-lg rounded-full max-w-full mx-auto"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            Dabi
          </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            2D Artist
          </p>
        </div>
      </div>
    </div>




    <div
      className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4"
      data-sal="fade"
      data-sal-delay="200"
      data-sal-easing="ease"
      >
      <div className="px-6">
      <Img fluid={data.team_yanz.childImageSharp.fluid} alt="team_yanz" className="shadow-lg rounded-full max-w-full mx-auto"/>
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




    <div
      className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4"
      data-sal="fade"
      data-sal-delay="300"
      data-sal-easing="ease"
      >
      <div className="px-6">
        
      <Img fluid={data.team_leigh.childImageSharp.fluid} alt="team_leigh" className="shadow-lg rounded-full max-w-full mx-auto"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            Leigh
          </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            MOD
          </p>
        </div>
      </div>
    </div>


    <div
      className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 py-4"
      data-sal="fade"
      data-sal-delay="400"
      data-sal-easing="ease"
      >
      <div className="px-6">
      <Img fluid={data.team_aki.childImageSharp.fluid} alt="team_aki" className="shadow-lg rounded-full max-w-full mx-auto"/>
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">
            Aki
          </h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            MOD
          </p>
        </div>
      </div>
    </div>

    </div>
    </section>
    )}
  />
);

export default Team;

const imgQuery = graphql`
  query {
    team_specpro: file(relativePath: { eq: "team_specpro.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    team_77god: file(relativePath: { eq: "team_77god.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    team_dabi: file(relativePath: { eq: "team_dabi.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    team_yanz: file(relativePath: { eq: "team_yanz.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    team_stormspirit: file(relativePath: { eq: "team_stormspirit.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    team_leigh: file(relativePath: { eq: "team_leigh.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    team_aki: file(relativePath: { eq: "team_aki.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    team_fiji: file(relativePath: { eq: "team_fiji.webp" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 64) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }`;
