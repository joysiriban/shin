import React from 'react';

const SignUpSection = () => (
  <section className="py-10 bg-gray-300">
    <div className="container mx-auto px-4 text-center mb-10">
      <h2 className="text-blue-900 font-bold text-3xl">
        Interested in opening a European Payment Account?
      </h2>
      <div className="mt-5 text-center">
        <a
          href="/sign-up"
          className="bg-pink-600 hover:bg-pink-600 text-white font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          style={{transition: 'all .15s ease'}}
        >
          Sign Up
        </a>
      </div>
    </div>
  </section>
);

export default SignUpSection;
