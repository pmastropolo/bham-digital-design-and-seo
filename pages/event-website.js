import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const EventWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="Event Website Development Services | Bham Web Design and SEO Co."
              description="Bham Web Design and SEO Co. offers professional event website development services. Create stunning websites for your events, conferences, and gatherings."
              openGraph={{
                  title: 'Event Website Development Services | Bham Web Design and SEO Co.',
                  description: 'Bham Web Design and SEO Co. offers professional event website development services. Create stunning websites for your events, conferences, and gatherings.',
                  url: 'https://bhamseoanddesignco.com/event-website-services',
                  type: 'website',
              }}
          />
          <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
              <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Event Website Development Services</h2>
              <p className="text-lg text-gray-600 mb-8">Create stunning websites for your events, conferences, and gatherings.</p>
              <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-800 mb-4">At Bham Web Design and SEO Co., we specialize in crafting event websites that make your gatherings shine. Whether youre organizing a conference, seminar, trade show, or any other event, our event website development services can help you create a captivating online presence.</p>
                  <p className="text-xl text-gray-800 mb-4">Our event website development services include:</p>
                  <ul className="list-disc pl-6">
                      <li className="text-lg text-gray-800 mb-2">Custom event website design and development</li>
                      <li className="text-lg text-gray-800 mb-2">Event schedules, agendas, and speaker profiles</li>
                      <li className="text-lg text-gray-800 mb-2">Online registration and ticketing systems</li>
                      <li className="text-lg text-gray-800 mb-2">Interactive event maps and floor plans</li>
                      <li className="text-lg text-gray-800 mb-2">Social media integration for event promotion</li>
                      <li className="text-lg text-gray-800 mb-2">Photo and video galleries</li>
                      <li className="text-lg text-gray-800 mb-2">Mobile-responsive design for all devices</li>
                  </ul>
                  <p className="text-xl text-gray-800 mb-4">Ready to create a stunning website for your upcoming event? Contact us today to discuss your event website project and make your event memorable.</p>
              </div>
          </div>
      </>
  );
}

export default EventWebsiteServices;