import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import heroImg from '../../static/images/hero_image.png';
import shinTitle from '../../static/images/shin_title.png';

const FullLayout = ({ children, seo }) => (
  <>
    {seo}
    
    <Navbar transparent />
    <main>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh"
        }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${heroImg})`
            }}>
          {/* <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span> */}
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-easing="ease-in-out"
              className="w-full lg:w-9/12 px-4 mt-10 ml-auto mr-auto text-center">
              <div className="py-5">
                <div
                  data-sal="slide-left"
                  data-sal-delay="400"
                  data-sal-easing="ease-in"
                  className="w-full md:w-8/12 ml-auto mr-auto px-4 py-6">
                  <img
                    alt="Who we are"
                    className="max-w-full rounded-lg shadow-lg"
                    src={shinTitle}
                    // width="400px"
                    style={{width: '50vw'}}
                  />
                </div>
                <div className="mt-10 text-center">
                  <a
                    href="https:/mint.shinigamisins.io/"
                    className="bg-red-700 hover:bg-red-700 text-white font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    style={{transition: 'all .15s ease'}}
                  >
                    MINT
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {children}
    </main>

    <Footer />
  </>
);

export default FullLayout;
