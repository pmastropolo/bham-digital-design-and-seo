import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const EducationalWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="Educational Website Development Services | Bham Web Design and SEO Co."
              description="Bham Web Design and SEO Co. offers professional educational website development services. Create an engaging online learning experience with our educational websites."
              openGraph={{
                  title: 'Educational Website Development Services | Bham Web Design and SEO Co.',
                  description: 'Bham Web Design and SEO Co. offers professional educational website development services. Create an engaging online learning experience with our educational websites.',
                  url: 'https://bhamseoanddesignco.com/educational-website-services',
                  type: 'website',
              }}
          />
          <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
              <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Educational Website Development Services</h2>
              <p className="text-lg text-gray-600 mb-8">Create an engaging online learning experience with our educational websites.</p>
              <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-800 mb-4">At Bham Web Design and SEO Co., we specialize in creating educational websites that provide a dynamic and interactive online learning experience. Whether youre an educational institution, e-learning platform, or an individual educator, our educational website development services can help you deliver knowledge effectively to your audience.</p>
                  <p className="text-xl text-gray-800 mb-4">Our educational website development services include:</p>
                  <ul className="list-disc pl-6">
                      <li className="text-lg text-gray-800 mb-2">Custom educational website design and development</li>
                      <li className="text-lg text-gray-800 mb-2">User-friendly content management system (CMS)</li>
                      <li className="text-lg text-gray-800 mb-2">Interactive e-learning modules and quizzes</li>
                      <li className="text-lg text-gray-800 mb-2">Mobile-responsive design for accessible learning</li>
                      <li className="text-lg text-gray-800 mb-2">Integration of video, audio, and other multimedia</li>
                      <li className="text-lg text-gray-800 mb-2">User analytics and reporting tools</li>
                      <li className="text-lg text-gray-800 mb-2">Secure and private student portals</li>
                  </ul>
                  <p className="text-xl text-gray-800 mb-4">Ready to create an engaging online learning experience? Contact us today to discuss your educational website project and empower your audience with valuable knowledge.</p>
              </div>
          </div>
      </>
  );
}

export default EducationalWebsiteServices;