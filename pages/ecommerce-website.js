import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import EcommercePackages from '../components/EcommercePackages';                // ECOMMERCE COMPONENT

const EcommerceWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="🛒 E-Commerce Website Development Services | Bham Web Design and SEO Co."
              description="💼 Elevate your online store with Bham Web Design and SEO Co.'s expert e-commerce website development services. Tailored solutions for your business success."
              openGraph={{
                  title: '🛒 E-Commerce Website Development Services | Bham Web Design and SEO Co.',
                  description: '💼 Elevate your online store with Bham Web Design and SEO Co.s expert e-commerce website development services. Tailored solutions for your business success.',
                  url: 'https://bhamseoanddesignco.com/ecommerce-website-services',
                  type: 'website',
              }}
          />
<div className="bg-gradient-to-r from-red-700 to-red-700 text-white mt-8 py-16 px-6 shadow-2xl rounded-3xl mb-12 overflow-hidden">
  <div className="animate-pulse absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-red-500 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 bg-red-600 rounded-full w-80 h-80 filter blur-3xl"></div>
  </div>

  <div className="relative z-10">
    <h2 className="text-6xl font-bold text-center mb-6">
    🛒 Elevate Your Business with E-Commerce Excellence!
    </h2>
    <p className="text-3xl text-center mb-8">
      Create a Thriving Online Store that Boosts Sales and Expands Your Reach.
    </p>

    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8">
      <p className="text-2xl font-semibold text-gray-900 mb-6">
        At Bham Web Design and SEO Co., we excel in crafting e-commerce websites that combine visual appeal with high performance. Our solutions cater to businesses of all sizes, delivering stunning and effective online shopping experiences.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Transform Your E-Commerce Venture with Our Services:
      </h3>

      <ul className="list-disc pl-10 text-xl text-gray-800 mb-6 space-y-2 text-left">
        <li><strong>Custom Designs</strong> | Represent your brand with a captivating e-commerce website design.</li>
        <li><strong>Product Management</strong> | Streamline operations with a user-friendly product catalog and inventory management system.</li>
        <li><strong>Secure Payments</strong> | Build customer trust with secure payment gateway integration.</li>
        <li><strong>Enhanced Shopping Experience</strong> | Improve user satisfaction with a user-friendly shopping cart.</li>
        <li><strong>Mobile-Responsive</strong> | Ensure accessibility with a mobile-responsive design for shopping on-the-go.</li>
        <li><strong>SEO Optimization</strong> | Increase visibility and sales with effective SEO strategies.</li>
        <li><strong>Analytics and Reporting</strong> | Make informed decisions with e-commerce analytics and reporting.</li>
      </ul>

      <p className="text-lg text-gray-900 mb-8">
        Ready to take your online store to new heights? Contact us today to discuss your e-commerce project and embark on a journey to transform your digital sales.
      </p>

      <div className="text-center">
      <Link href="/webDesignConsultation" legacyBehavior>
          <a className="inline-block bg-red-600 hover:bg-red-700 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
            Launch Your Online Store
          </a>
        </Link>
      </div>
    </div>
  </div>
  </div>

  <EcommercePackages />


      </>
  );
}

export default EcommerceWebsiteServices;
