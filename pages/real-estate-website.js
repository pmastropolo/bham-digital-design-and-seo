import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const RealEstateWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="Real Estate Website Development Services | Bham Web Design and SEO Co."
              description="Bham Web Design and SEO Co. offers professional real estate website development services. Create stunning websites for your real estate agency or property listings."
              openGraph={{
                  title: 'Real Estate Website Development Services | Bham Web Design and SEO Co.',
                  description: 'Bham Web Design and SEO Co. offers professional real estate website development services. Create stunning websites for your real estate agency or property listings.',
                  url: 'https://bhamseoanddesignco.com/real-estate-website-services',
                  type: 'website',
              }}
          />
          <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
              <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Real Estate Website Development Services</h2>
              <p className="text-lg text-gray-600 mb-8">Create stunning websites for your real estate agency or property listings.</p>
              <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-800 mb-4">At Bham Web Design and SEO Co., we specialize in crafting real estate websites that showcase properties, attract potential buyers, and provide a seamless browsing experience. Whether youre a real estate agency, property manager, or individual property owner, our real estate website development services can help you create a captivating online presence.</p>
                  <p className="text-xl text-gray-800 mb-4">Our real estate website development services include:</p>
                  <ul className="list-disc pl-6">
                      <li className="text-lg text-gray-800 mb-2">Custom website design and development</li>
                      <li className="text-lg text-gray-800 mb-2">Property listings with high-quality images and descriptions</li>
                      <li className="text-lg text-gray-800 mb-2">Interactive property search and filtering</li>
                      <li className="text-lg text-gray-800 mb-2">Virtual property tours and 3D walkthroughs</li>
                      <li className="text-lg text-gray-800 mb-2">Contact forms for inquiries and appointments</li>
                      <li className="text-lg text-gray-800 mb-2">Integration with MLS and property databases</li>
                      <li className="text-lg text-gray-800 mb-2">Mobile-responsive design for all devices</li>
                  </ul>
                  <p className="text-xl text-gray-800 mb-4">Ready to create stunning websites for your real estate business? Contact us today to discuss your real estate website project and help your clients find their dream properties.</p>
              </div>
          </div>
      </>
  );
}

export default RealEstateWebsiteServices;