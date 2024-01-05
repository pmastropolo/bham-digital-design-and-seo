import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const EcommerceWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="E-Commerce Website Development Services | Bham Web Design and SEO Co."
              description="Looking for a professional e-commerce website? Bham Web Design and SEO Co. offers expert e-commerce website development services tailored to your business needs."
              openGraph={{
                  title: 'E-Commerce Website Development Services | Bham Web Design and SEO Co.',
                  description: 'Looking for a professional e-commerce website? Bham Web Design and SEO Co. offers expert e-commerce website development services tailored to your business needs.',
                  url: 'https://bhamseoanddesignco.com/ecommerce-website-services',
                  type: 'website',
              }}
          />
          <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
              <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">E-Commerce Website Development Services</h2>
              <p className="text-lg text-gray-600 mb-8">Create a powerful online store that drives sales and growth for your business.</p>
              <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-800 mb-4">At Bham Web Design and SEO Co., we specialize in designing and developing e-commerce websites that meet the unique needs of your business. Whether youre a small boutique or a large online retailer, we have the expertise to create a stunning and effective e-commerce platform for you.</p>
                  <p className="text-xl text-gray-800 mb-4">Our e-commerce website development services include:</p>
                  <ul className="list-disc pl-6">
                      <li className="text-lg text-gray-800 mb-2">Custom e-commerce website design</li>
                      <li className="text-lg text-gray-800 mb-2">Product catalog and inventory management</li>
                      <li className="text-lg text-gray-800 mb-2">Secure payment gateway integration</li>
                      <li className="text-lg text-gray-800 mb-2">User-friendly shopping cart</li>
                      <li className="text-lg text-gray-800 mb-2">Mobile-responsive design</li>
                      <li className="text-lg text-gray-800 mb-2">Search engine optimization (SEO)</li>
                      <li className="text-lg text-gray-800 mb-2">E-commerce analytics and reporting</li>
                  </ul>
                  <p className="text-xl text-gray-800 mb-4">Ready to take your online store to the next level? Contact us today to discuss your e-commerce website project and start selling online with confidence.</p>
              </div>
          </div>
      </>
  );
}

export default EcommerceWebsiteServices;