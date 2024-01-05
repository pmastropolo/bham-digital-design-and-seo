import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const LandingPageWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="Landing Page Website Development Services | Bham Web Design and SEO Co."
              description="Bham Web Design and SEO Co. offers professional landing page website development services. Create high-converting landing pages for your business or product."
              openGraph={{
                  title: 'Landing Page Website Development Services | Bham Web Design and SEO Co.',
                  description: 'Bham Web Design and SEO Co. offers professional landing page website development services. Create high-converting landing pages for your business or product.',
                  url: 'https://bhamseoanddesignco.com/landing-page-website-services',
                  type: 'website',
              }}
          />
          <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
              <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Landing Page Website Development Services</h2>
              <p className="text-lg text-gray-600 mb-8">Create high-converting landing pages for your business or product.</p>
              <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-800 mb-4">At Bham Web Design and SEO Co., we specialize in crafting landing page websites that are designed to convert visitors into customers. Whether youre launching a new product, running a marketing campaign, or need a dedicated page for your business, our landing page website development services can help you achieve your goals.</p>
                  <p className="text-xl text-gray-800 mb-4">Our landing page website development services include:</p>
                  <ul className="list-disc pl-6">
                      <li className="text-lg text-gray-800 mb-2">Custom landing page design and development</li>
                      <li className="text-lg text-gray-800 mb-2">High-quality graphics and visuals</li>
                      <li className="text-lg text-gray-800 mb-2">Clear and compelling call-to-action (CTA) elements</li>
                      <li className="text-lg text-gray-800 mb-2">Mobile-responsive design for all devices</li>
                      <li className="text-lg text-gray-800 mb-2">Lead capture forms and data collection</li>
                      <li className="text-lg text-gray-800 mb-2">Integration with marketing tools and analytics</li>
                      <li className="text-lg text-gray-800 mb-2">SEO optimization for improved search visibility</li>
                  </ul>
                  <p className="text-xl text-gray-800 mb-4">Ready to create high-converting landing pages for your business or product? Contact us today to discuss your landing page website project and drive more conversions.</p>
              </div>
          </div>
      </>
  );
}

export default LandingPageWebsiteServices;