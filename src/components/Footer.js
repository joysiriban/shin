import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import footerLogo from '../../static/images/shin_logo.png';
import { footerLinks } from '../constants/footerItems';

library.add(faInstagram, faFacebookF, faLinkedinIn, faTwitter, faYoutube);

const Footer = () => {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        const socialLinks = data.site.siteMetadata.socialLinks;
        return (
          <>
            <footer className="relative bg-blue-900 pt-16 pb-6">
              <div className="container px-12 mx-auto">
                <div className="w-full flex flex-wrap justify-between items-center ">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="w-1/2">
                      <a className="inline-block mr-4 whitespace-no-wrap" href="https://test.com">
                        <img src={footerLogo} alt="TEST Logo" width="180px" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <h5 className="text-md my-0 text-white">
                        Copyright © {new Date().getFullYear()}
                      </h5>
                      <h5 className="text-md my-0 text-white">
                        All rights reserved.
                      </h5>
                    </div>
                    <div className="mt-6 ml-3">
                      <ul className="flex">
                        {socialLinks.map((item, index) => {
                          return <li
                            key={index}
                            className="mr-3 text-blue-500"
                          >
                            <a href={item.link} alt={item.alt} target="_blank" rel="noreferrer">
                              <span className="text-lg rounded-full h-8 w-8 flex bg-white items-center justify-center shadow">
                                <FontAwesomeIcon icon={['fab', item.icon]} size="1x" />
                              </span>
                            </a>
                          </li>
                        })}
                      </ul>
                    </div>
                  </div>

                  <div className="w-full lg:w-6/12 px-4 pt-6 mb-6">
                    <div className="w-full flex-wrap flex justify-between items-start ml-3">
                      {footerLinks.map(({ title, links }, index) => {
                        return <div
                          key={index}
                          className="w-full lg:w-6/12 ml-auto">
                            <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                              { title }
                            </span>
                            <ul className="list-none text-md text-white">
                              {links.map((item, i) => {
                                return <li
                                  key={i}
                                  className="font-semibold mb-2">
                                    <a href={item.link} target={item.target} rel="noreferrer">
                                      {item.title}
                                    </a>
                                </li>
                              })}
                            </ul>
                        </div>
                      })}
                    </div>
                  </div>
                </div>
                <hr className="my-6 border-gray-400" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full px-4 mx-auto text-center">
                    <div className="text-sm text-gray-600 font-semibold py-1">
                      Creative NFT Minds
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </>
        );
      }}
    />
  )
};

export default Footer;

const footerQuery = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        socialLinks {
          icon
          link
          alt
        }
      }
    }
  }
`;
