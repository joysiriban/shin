import React from 'react';
import PageLayout from '../layouts/page';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

const ContactUs = () => (
  <PageLayout
    seo={<SEO
      title="test"
      keywords={['iban', 'test', 'sign-up', 'test']} />
    }
  >
    <section className="relative py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-pink-600 font-bold text-5xl text-center mb-6">
          Sign Up
        </h1>
        <div className="items-start justify-center flex flex-wrap">
          <div className="lg:w-8/12 px-4 mr-auto ml-auto my-4">
            <div className="md:pr-12">
              <h3 className="text-4xl text-center font-bold text-blue-900 my-6">
                You are in a good company
              </h3>
              <p className="text-blue-900 font-semibold">
              Please fill in the form below and we’ll get back to you as soon as possible.
              <br/><br/>
              Tell us what payment challenges you are facing or send us any questions you might have about TEST.
              <br/><br/>
              <i>When contacting us, always include your full name, company name, email address, website, and phone number in your communication. Due to spam messages, unless you provide us with all the requested details, we may choose not to get back to you.</i>
              </p>
            </div>
          </div>
          <div className="lg:w-8/12 px-12 py-16 rounded overflow-hidden shadow-2xl">
            <ContactForm />
          </div>
        </div>

      </div>
    </section>

  </PageLayout>
);

export default ContactUs;
