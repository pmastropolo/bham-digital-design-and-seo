import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Entertainment from '../components/Entertainment';                        // ENTERTAINMENT COMPONENT

const EntertainmentWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="🎤 Entertainment Website Development Services | Bham Web Design and SEO Co."
              description="🎬 Bham Web Design and SEO Co. offers top-notch entertainment website development services. Create captivating websites for your entertainment business or events."
              openGraph={{
                  title: '🎤 Entertainment Website Development Services | Bham Web Design and SEO Co.',
                  description: '🎬 Bham Web Design and SEO Co. offers top-notch entertainment website development services. Create captivating websites for your entertainment business or events.',
                  url: 'https://bhamseoanddesignco.com/entertainment-website-services',
                  type: 'website',
              }}
          />


<div className="bg-gradient-to-r from-indigo-400 to-indigo-400 text-white mt-8 py-16 px-6 shadow-2xl rounded-3xl mb-12 overflow-hidden">
  <div className="animate-pulse absolute inset-0 z-0 opacity-20">
   
    <div className="absolute bottom-0 right-0 bg-indigo-600 rounded-full w-80 h-80 filter blur-3xl"></div>
  </div>

  <div className="relative z-10">
    <h2 className="text-6xl font-bold text-center mb-6">
      Entertainment Website Development Services 🎉
    </h2>
    <p className="text-3xl text-center mb-8">
      Create Engaging Websites for Your Entertainment Business or Events 💃
    </p>

    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8">
      <p className="text-2xl font-semibold text-gray-900 mb-6">
        At Bham Web Design and SEO Co., were experts in designing entertainment websites that not only captivate audiences but also promote events and create memorable online experiences. Our services are perfect for anyone in the entertainment industry, from event planning to nightlife businesses, helping you build a dynamic and engaging online presence.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Explore Our Entertainment Web Development Services:
      </h3>

      <ul className="list-disc pl-10 text-xl text-gray-800 mb-6 space-y-2 text-left">
        <li><strong>Custom Designs</strong> | Create a unique online identity with custom website design and development.</li>
        <li><strong>Event Promotion</strong> | Boost your events success with event promotion and ticketing features.</li>
        <li><strong>Multimedia Content</strong> | Enhance the user experience with multimedia content integration.</li>
        <li><strong>Social Media Integration</strong> | Expand your reach and engagement with social media integration.</li>
        <li><strong>Blog Updates</strong> | Keep your audience informed with blog and news updates.</li>
        <li><strong>Contact Forms</strong> | Facilitate inquiries and bookings with contact forms.</li>
        <li><strong>Mobile-Responsive Design</strong> | Ensure optimal viewing on all devices with mobile-responsive design.</li>
      </ul>

      <p className="text-2xl font-semibold text-gray-900 mb-8">
        Ready to bring the excitement online? Reach out to us today, and lets discuss how we can transform your entertainment business into a thrilling digital experience for your audience.
      </p>

      <div className="text-center">
        <Link href="/webDesignConsultation" legacyBehavior>
          <a className="bg-indigo-400 hover:bg-indigo-500 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
            🚀 Launch Your Entertainment Site Today!
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>

<Entertainment />

      </>
  );
}

export default EntertainmentWebsiteServices;
