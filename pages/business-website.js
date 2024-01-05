import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const BusinessWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="Business Website Development Services | Bham Web Design and SEO Co."
              description="Bham Web Design and SEO Co. offers professional business website development services tailored to your business needs. Create a powerful online presence with us."
              openGraph={{
                  title: 'Business Website Development Services | Bham Web Design and SEO Co.',
                  description: 'Bham Web Design and SEO Co. offers professional business website development services tailored to your business needs. Create a powerful online presence with us.',
                  url: 'https://bhamseoanddesignco.com/business-website-services',
                  type: 'website',
              }}
          />
          <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
              <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Business Website Development Services</h2>
              <p className="text-lg text-gray-600 mb-8">Enhance your online presence and drive business growth with a professional business website.</p>
              <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-800 mb-4">At Bham Web Design and SEO Co., we specialize in designing and developing business websites that cater to your unique business needs. Whether youre a small startup, a local business, or a large corporation, we have the expertise to create a powerful online presence for you.</p>
                  <p className="text-xl text-gray-800 mb-4">Our business website development services include:</p>
                  <ul className="list-disc pl-6">
                      <li className="text-lg text-gray-800 mb-2">Custom website design tailored to your brand</li>
                      <li className="text-lg text-gray-800 mb-2">E-commerce functionality for online sales</li>
                      <li className="text-lg text-gray-800 mb-2">Content management system (CMS) for easy updates</li>
                      <li className="text-lg text-gray-800 mb-2">Mobile-responsive design for a seamless user experience</li>
                      <li className="text-lg text-gray-800 mb-2">Search engine optimization (SEO) for better visibility</li>
                      <li className="text-lg text-gray-800 mb-2">Integration of essential business tools and features</li>
                      <li className="text-lg text-gray-800 mb-2">Secure and reliable hosting options</li>
                  </ul>
                  <p className="text-xl text-gray-800 mb-4">Ready to take your business to the next level with a professional website? Contact us today to discuss your business website project and create a digital solution that drives results.</p>
              </div>
          </div>
      </>
  );
}

export default BusinessWebsiteServices;