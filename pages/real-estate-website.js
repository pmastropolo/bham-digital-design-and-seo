import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import RealEstate from '../components/RealEstate';                              // REAL ESTATE COMPONENT


const RealEstateWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="🏠 Real Estate Website Development Services | Bham Web Design and SEO Co."
              description="🌆 Bham Web Design and SEO Co. offers professional real estate website development services. Create visually stunning and functional websites for your real estate agency or property listings."
              openGraph={{
                  title: '🏠 Real Estate Website Development Services | Bham Web Design and SEO Co.',
                  description: '🌆 Bham Web Design and SEO Co. offers professional real estate website development services. Create visually stunning and functional websites for your real estate agency or property listings.',
                  url: 'https://bhamseoanddesignco.com/real-estate-website-services',
                  type: 'website',
              }}
          />


<div className="bg-gradient-to-r from-blue-400 to-blue-500 mt-8 text-white py-16 px-6 shadow-2xl rounded-3xl mb-12 overflow-hidden">
  <div className="animate-pulse absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-blue-400 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-80 h-80 filter blur-3xl"></div>
  </div>

  <div className="relative z-10">
    <h2 className="text-6xl font-bold text-center mb-6">
      Real Estate Website Development Services 🏢
    </h2>
    <p className="text-3xl text-center mb-8">
      Create Stunning Websites for Your Real Estate Agency or Property Listings 
    </p>

    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8">
      <p className="text-2xl font-semibold text-gray-900 mb-6">
        Join Bham Web Design and SEO Co. in elevating your real estate business online. Our expertise in real estate website development focuses on showcasing properties, attracting potential buyers, and providing a user-friendly experience. Perfect for real estate agencies, property managers, and owners, our services will help you captivate your audience with a top-tier online presence.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Explore Our Real Estate Website Services:
      </h3>

      <ul className="list-disc pl-10 text-xl text-gray-800 mb-6 space-y-2 text-left">
  <li><strong>Dynamic Portfolios</strong> | Showcase your projects with dynamic, interactive portfolio pages.</li>
  <li><strong>Blog Integration</strong> | Engage visitors with a professional blog section for insights and updates.</li>
  <li><strong>E-commerce Features</strong> | Sell products or services directly through an integrated e-commerce platform.</li>
  <li><strong>Client Testimonials</strong> | Build trust with potential clients by featuring client testimonials and reviews.</li>
  <li><strong>Email Subscription</strong> | Grow your audience with an email subscription form for newsletters and updates.</li>
  <li><strong>Analytics Tracking</strong> | Gain insights into visitor behavior with integrated analytics tracking.</li>
  <li><strong>SEO-Optimized Content</strong> | Enhance your websites visibility with SEO-optimized content and structure.</li>
</ul>


      <p className="text-2xl font-semibold text-gray-900 mb-8">
        Ready to transform your real estate business with a stunning website? Contact us today to start your project and connect your clients with their dream properties.
      </p>

      <div className="text-center">
      <Link href="/webDesignConsultation" legacyBehavior>
          <a className="bg-blue-500 hover:bg-blue-700 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
            🌍 Launch Your Real Estate Website Today!
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>

<RealEstate />
  
      </>
  );
}

export default RealEstateWebsiteServices;
