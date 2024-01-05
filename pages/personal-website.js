import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const PersonalWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="Personal Website Development Services | Bham Web Design and SEO Co."
              description="Bham Web Design and SEO Co. offers professional personal website development services. Showcase your skills, portfolio, or personal brand with a custom website."
              openGraph={{
                  title: 'Personal Website Development Services | Bham Web Design and SEO Co.',
                  description: 'Bham Web Design and SEO Co. offers professional personal website development services. Showcase your skills, portfolio, or personal brand with a custom website.',
                  url: 'https://bhamseoanddesignco.com/personal-website-services',
                  type: 'website',
              }}
          />
          <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
              <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Personal Website Development Services</h2>
              <p className="text-lg text-gray-600 mb-8">Showcase your skills, portfolio, or personal brand with a custom website.</p>
              <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-800 mb-4">At Bham Web Design and SEO Co., we specialize in creating personal websites that help individuals showcase their talents, skills, and personal brand. Whether youre an artist, freelancer, blogger, or entrepreneur, our personal website development services can help you establish a strong online presence.</p>
                  <p className="text-xl text-gray-800 mb-4">Our personal website development services include:</p>
                  <ul className="list-disc pl-6">
                      <li className="text-lg text-gray-800 mb-2">Custom personal website design and development</li>
                      <li className="text-lg text-gray-800 mb-2">Portfolio and project showcase</li>
                      <li className="text-lg text-gray-800 mb-2">Blog integration for content sharing</li>
                      <li className="text-lg text-gray-800 mb-2">Contact forms and lead generation</li>
                      <li className="text-lg text-gray-800 mb-2">Social media integration for online presence</li>
                      <li className="text-lg text-gray-800 mb-2">Mobile-responsive design for accessibility</li>
                      <li className="text-lg text-gray-800 mb-2">Personal branding and identity development</li>
                      <li className="text-lg text-gray-800 mb-2">SEO optimization for better visibility</li>
                  </ul>
                  <p className="text-xl text-gray-800 mb-4">Ready to showcase your skills or personal brand online? Contact us today to discuss your personal website project and create a digital identity that stands out.</p>
              </div>
          </div>
      </>
  );
}

export default PersonalWebsiteServices;