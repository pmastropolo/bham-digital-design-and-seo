import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const PortfolioWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="Portfolio Website Development Services | Bham Web Design and SEO Co."
              description="Bham Web Design and SEO Co. offers professional portfolio website development services. Showcase your work and talents with a stunning portfolio website."
              openGraph={{
                  title: 'Portfolio Website Development Services | Bham Web Design and SEO Co.',
                  description: 'Bham Web Design and SEO Co. offers professional portfolio website development services. Showcase your work and talents with a stunning portfolio website.',
                  url: 'https://bhamseoanddesignco.com/portfolio-website-services',
                  type: 'website',
              }}
          />
          <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
              <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Portfolio Website Development Services</h2>
              <p className="text-lg text-gray-600 mb-8">Display your work and talents with a stunning portfolio website.</p>
              <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-800 mb-4">At Bham Web Design and SEO Co., we specialize in creating portfolio websites that allow you to showcase your work, talents, and achievements in a visually appealing and professional manner. Whether youre a photographer, designer, artist, or any other creative professional, our portfolio website development services can help you leave a lasting impression.</p>
                  <p className="text-xl text-gray-800 mb-4">Our portfolio website development services include:</p>
                  <ul className="list-disc pl-6">
                      <li className="text-lg text-gray-800 mb-2">Custom portfolio website design to match your style</li>
                      <li className="text-lg text-gray-800 mb-2">User-friendly galleries and showcases for your work</li>
                      <li className="text-lg text-gray-800 mb-2">Easy-to-update content management system (CMS)</li>
                      <li className="text-lg text-gray-800 mb-2">Mobile-responsive design for a seamless viewing experience</li>
                      <li className="text-lg text-gray-800 mb-2">Integration of social media and sharing options</li>
                      <li className="text-lg text-gray-800 mb-2">Search engine optimization (SEO) for better discoverability</li>
                      <li className="text-lg text-gray-800 mb-2">Secure and reliable hosting options</li>
                  </ul>
                  <p className="text-xl text-gray-800 mb-4">Ready to showcase your work with a stunning portfolio website? Contact us today to discuss your portfolio website project and create a digital showcase that highlights your talents.</p>
              </div>
          </div>
      </>
  );
}

export default PortfolioWebsiteServices;