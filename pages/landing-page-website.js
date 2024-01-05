import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Lander from '../components/Lander';                                      // LANDING PAGE COMPONENT

const LandingPageWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="🎯 Landing Page Website Development Services | Bham Web Design and SEO Co."
              description="🚀 Elevate your business or product with our top-tier landing page website development services. Create high-converting landing pages that will skyrocket your online presence."
              openGraph={{
                  title: '🎯 Landing Page Website Development Services | Bham Web Design and SEO Co.',
                  description: '🚀 Elevate your business or product with our top-tier landing page website development services. Create high-converting landing pages that will skyrocket your online presence.',
                  url: 'https://bhamseoanddesignco.com/landing-page-website-services',
                  type: 'website',
              }}
          />
<div className="bg-orange-400 mt-8 text-white py-16 px-6 shadow-2xl rounded-3xl mb-12 overflow-hidden">
  <div className="animate-pulse absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-orange-700 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 bg-orange-500 rounded-full w-80 h-80 filter blur-3xl"></div>
  </div>

  <div className="relative z-10">
    <h2 className="text-6xl font-bold text-center mb-6">
      Landing Page Website Development Services 🌟
    </h2>
    <p className="text-3xl text-center mb-8">
      Create High-Converting Landing Pages for Your Business or Product 💼
    </p>

    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8">
      <p className="text-2xl font-semibold text-gray-900 mb-6">
        At Bham Web Design and SEO Co., we excel in creating landing pages that not only look great but are engineered to convert. Whether launching a new product, spearheading a marketing campaign, or spotlighting your business, our landing page services are tailored to meet your specific goals and drive results.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Explore Our Landing Page Services:
      </h3>

      <ul className="list-disc pl-10 text-xl text-gray-800 mb-6 space-y-2 text-left">
        <li><strong>Customized Design</strong> | Create a unique landing page design that suits your goals.</li>
        <li><strong>High-Quality Visuals</strong> | Captivate visitors with high-quality graphics and visuals.</li>
        <li><strong>Compelling CTAs</strong> | Use clear and compelling call-to-action (CTA) elements for increased conversions.</li>
        <li><strong>Mobile-Responsive</strong> | Ensure a seamless user experience with mobile-responsive design.</li>
        <li><strong>Lead Capture Forms</strong> | Collect valuable leads with lead capture forms and data analytics.</li>
        <li><strong>Marketing Integration</strong> | Integrate with marketing tools for seamless campaigns.</li>
        <li><strong>SEO Optimization</strong> | Enhance online visibility with SEO optimization.</li>
      </ul>

      <p className="text-2xl font-semibold text-gray-900 mb-8">
        Ready to elevate your online presence with high-converting landing pages? Connect with us today to discuss your project and take your business to new heights.
      </p>

      <div className="text-center">
      <Link href="/webDesignConsultation" legacyBehavior>
          <a className="bg-orange-600 hover:bg-orange-700 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
            🎯 Start Your Landing Page Project Now!
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>


<Lander />

      </>
  );
}

export default LandingPageWebsiteServices;
