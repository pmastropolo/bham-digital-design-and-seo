import React from 'react';

export default function QuoteRequest() {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-2xl">
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Reach Us Today
        </h2>
        <p className="text-lg text-blue-600">
          Email:<a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>
        </p>
        <p className="text-lg text-blue-600">
          Phone: <a href="tel:(205) 705-7145">(205) 705-7145</a>
        </p>
        <p className="my-6 text-gray-600">
          <span className="block text-xl">Or</span>
          <span className="block text-xl">Scroll down below to fill out the form and get a free quote.</span>
        </p>
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-800 mt-6 mb-6">Contact Form</h2>
      <iframe
        title="Google Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLScY_4_5vgNW7xyMNX0PUessBnK40dijaK08rvjPcwOgwtkq0w/viewform?embedded=true"
        width="650"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        className="mx-auto"
      >
        Loading…
      </iframe>
    </div>
  );
}