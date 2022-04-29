import React from 'react';
import PageLayout from '../layouts/page';
import SEO from '../components/SEO';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => (
  <PageLayout
    seo={<SEO
      title="test"
      keywords={['iban', 'test', 'sign-up', 'test']} />
    }
  >
    <section className="relative py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-pink-600 font-bold text-5xl text-center mb-6">
          TEST SIGN-UP FORM
        </h1>
        <div className="items-start justify-center flex flex-wrap">
          <div className="lg:w-8/12 px-4 mr-auto ml-auto my-4">
            <div className="md:pr-12">
              <h3 className="text-4xl text-center font-bold text-blue-900 my-6">
              Open a business account and make instant payouts!
              </h3>

              <p className="text-xl text-blue-1000 font-bold">
              How does it work?
              </p>

              <p className="text-blue-900 font-semibold">
              TEST is a dedicated online payment account in Euros that allows companies to make and receive SEPA payments. Benefit from fast account activation, 100% protection of funds, and 24/7 online access to your funds. The account is opened directly with Test, no intermediary banks are involved.
              <br/><br/>
              In addition, through our B2B2C Closed-Loop System, promote TEST with your users and use our banking ecosystem to make and receive instant payments between you. Moreover, increase brand engagement by providing your users with easy access to their funds by offering them a custom debit card displaying your brand.
              <br/><br/>
              <br/><br/>
              </p>

              <p className="text-blue-900">
              The information you provide will be used to carry out due diligence as is required by industry regulations. Submitting this form does not oblige you to become a Test customer.
              </p>
            </div>
          </div>
          <div className="lg:w-8/12 px-12 py-16 rounded overflow-hidden shadow-2xl">
            <SignUpForm />
          </div>
        </div>

      </div>
    </section>

  </PageLayout>
);

export default SignUp;
