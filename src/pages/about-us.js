import React from 'react';
import PageLayout from '../layouts/page';
import SEO from '../components/SEO';

import teamworkHero from '../../static/images/aboutus.webp';
import bankingHero from '../../static/images/banking.webp';
import ContactSection from '../components/sections/ContactSection';

const AboutUs = () => (
  <PageLayout
    seo={<SEO
      title="test"
      keywords={['iban', 'test', 'about us', 'test']} />
    }
  >
    <section className="relative py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-pink-600 font-bold text-5xl text-center mb-6">
          About Us
        </h1>
        <div className="items-start flex flex-wrap lg:flex-row flex-col-reverse">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="md:pr-12">
              <h3
                data-sal="fade"
                data-sal-delay="300"
                data-sal-easing="ease"
                className="text-4xl font-bold text-blue-900 my-6"
              >
                Who we are
              </h3>
              <p className="text-blue-900 font-semibold">
              TEST is a service offered by Test Ltd., a Malta-based e-money institution,. The company’s license is issued by the MFSA and has been passported within the EU and EEA.
              <br /><br />
              Our mission is to enable our customers to quickly and easily initiate and receive payments in whatever form best suits them, wherever they are in the world.
              <br /><br />
              The company was founded in 2014 by Jens Podewski, CEO, and Stefan Haenel, CFO. Together they are leading a growing team of talented professionals across 3 countries, having established Test Ltd. as a trusted payment service provider.
              </p>
            </div>
          </div>
          <div
            data-sal="slide-left"
            data-sal-delay="400"
            data-sal-easing="ease-in"
            className="w-full md:w-5/12 ml-auto mr-auto px-4 py-6">
            <img
              alt="Who we are"
              className="max-w-full rounded-lg shadow-lg"
              src={teamworkHero}
              width="400px"
            />
          </div>
        </div>

      </div>
    </section>

    <section className="relative pt-20 pb-20">
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
        <div className="items-start flex flex-wrap">
          <div
            data-sal="slide-right"
            data-sal-delay="400"
            data-sal-easing="ease-in"
            className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <img
              alt="What we offer"
              className="max-w-full rounded-lg shadow-lg"
              src={bankingHero}
              width="400px"
            />
          </div>

          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="md:pr-12">
              <h3
                data-sal="fade"
                data-sal-delay="300"
                data-sal-easing="ease"
                className="text-4xl font-bold text-blue-900 my-6"
              >
                What we offer
              </h3>
              <p className="text-blue-900 font-semibold">
              We offer several payment solutions including online TEST accounts, an omni-channel payment gateway (with 350+ payment methods), and a payment-as-a-service solution.
              <br /><br />
              In addition, fraud prevention and risk management are handled by our specialists under the company’s liability and license umbrella. This is a significant benefit as customers are relieved of potentially expensive manual work by accessing the company’s optimized and efficient processes.
              <br /><br />
              Finally, clients can benefit from consulting support for their needs relating to operative, regulatory, and technical issues regarding payment processing, such as Open Banking, 4AMLD and MDES.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <ContactSection />
  </PageLayout>
);

export default AboutUs;
