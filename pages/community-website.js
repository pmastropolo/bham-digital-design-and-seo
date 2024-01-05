import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const CommunityWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="Community Website Development Services | Bham Web Design and SEO Co."
              description="Bham Web Design and SEO Co. offers professional community website development services. Connect and engage with your community through a custom website."
              openGraph={{
                  title: 'Community Website Development Services | Bham Web Design and SEO Co.',
                  description: 'Bham Web Design and SEO Co. offers professional community website development services. Connect and engage with your community through a custom website.',
                  url: 'https://bhamseoanddesignco.com/community-website-services',
                  type: 'website',
              }}
          />
          <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
              <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Community Website Development Services</h2>
              <p className="text-lg text-gray-600 mb-8">Connect and engage with your community through a custom website.</p>
              <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-800 mb-4">At Bham Web Design and SEO Co., we specialize in creating community websites that foster connections and engagement. Whether youre a local organization, neighborhood association, or community event organizer, our community website development services can help you build an online presence that brings people together.</p>
                  <p className="text-xl text-gray-800 mb-4">Our community website development services include:</p>
                  <ul className="list-disc pl-6">
                      <li className="text-lg text-gray-800 mb-2">Custom community website design and development</li>
                      <li className="text-lg text-gray-800 mb-2">Interactive features for forums, discussions, and events</li>
                      <li className="text-lg text-gray-800 mb-2">User-friendly content management system (CMS)</li>
                      <li className="text-lg text-gray-800 mb-2">Integration of social media and community updates</li>
                      <li className="text-lg text-gray-800 mb-2">Mobile-responsive design for easy access</li>
                      <li className="text-lg text-gray-800 mb-2">Member registration and profile management</li>
                      <li className="text-lg text-gray-800 mb-2">Secure communication and data protection</li>
                  </ul>
                  <p className="text-xl text-gray-800 mb-4">Ready to connect and engage with your community online? Contact us today to discuss your community website project and strengthen your local bonds.</p>
              </div>
          </div>
      </>
  );
}

export default CommunityWebsiteServices;