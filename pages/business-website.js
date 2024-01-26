import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Business from '../components/Business';                  // BUSINESS COMPONENT

const BusinessWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="Unleash Your Business Potential with Top-Tier Web Development | Bham Web Design and SEO Co."
              description="Elevate your brand with Bham Web Design and SEO Co. – offering unparalleled business website development services that promise to skyrocket your digital presence!"
              openGraph={{
                  title: 'Unleash Your Business Potential with Top-Tier Web Development | Bham Web Design and SEO Co.',
                  description: 'Elevate your brand with Bham Web Design and SEO Co. – offering unparalleled business website development services that promise to skyrocket your digital presence!',
                  url: 'https://bhamseoanddesignco.com/business-website-services',
                  type: 'website',
              }}
              additionalMetaTags={[
                {
                  property: 'keywords',
                  content: 'Business Website Development, Business Design, SEO Blogging, Bham Web Design, Custom Business Platforms, Engaging Business Content'
                },
                {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1'
                },
              ]}
              robotsProps={{
                nosnippet: true,
                notranslate: true,
                noimageindex: true,
                noarchive: true,
                maxSnippet: -1,
                maxImagePreview: 'none',
                maxVideoPreview: -1
              }}
          />
<div className="bg-gradient-to-br from-green-600 to-green-800 text-white mt-6 py-16 px-6 shadow-2xl rounded-3xl mb-12 overflow-hidden">
  <div className="animate-pulse absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-green-400 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 bg-green-400 rounded-full w-80 h-80 filter blur-3xl"></div>
  </div>

  <div className="relative z-10">
    <h2 className="text-6xl font-bold text-center mb-6">
      🚀 Propel Your Business to New Heights!
    </h2>
    <p className="text-3xl text-center mb-8">
      Elevate your enterprise with our unparalleled Business Web Solutions.
    </p>

    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8">
      <p className="text-2xl font-semibold text-gray-900 mb-6">
        Join hands with <span className="text-green-600">Bham Web Design and SEO Co.</span> and witness a transformative journey for your business.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Discover the Bham Advantage:
      </h3>
      
      <ul className="list-disc pl-10 text-xl text-gray-800 mb-6 space-y-2 text-left">
        <li><strong>Tailored Designs</strong> | Craft a unique digital identity that captures your brands essence and attracts customers.</li>
        <li><strong>E-commerce Excellence</strong> | Skyrocket your online sales with our advanced, user-friendly e-commerce solutions.</li>
        <li><strong>Effortless Content Management</strong> | Take control of your narrative with a CMS that simplifies digital storytelling.</li>
        <li><strong>Universal Accessibility</strong> | Connect with clients across devices with responsive, mobile-friendly designs.</li>
        <li><strong>SEO Supremacy</strong> | Climb to the top of search results and outshine your competitors.</li>
        <li><strong>Business Integration</strong> | Seamlessly integrate essential tools for peak performance and efficiency.</li>
        <li><strong>Reliable Security</strong> | Depend on our robust hosting for a secure, uninterrupted online presence.</li>
      </ul>

      <p className="text-2xl font-semibold text-gray-900 mb-8">
        Ready to revolutionize your digital footprint? Partner with us and turn your website into a powerful business asset.
      </p>

      <div className="text-center">
      <Link href="/webDesignConsultation" legacyBehavior>
          <a className="inline-block bg-green-500 hover:bg-green-700 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
            Elevate Your Business Now!
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>

<Business />
      </>
  );
}

export default BusinessWebsiteServices;
