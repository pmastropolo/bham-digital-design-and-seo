import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const RestaurantWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="Restaurant Website Development Services | Bham Web Design and SEO Co."
              description="Bham Web Design and SEO Co. offers professional restaurant website development services. Create stunning websites for your restaurant or food-related business."
              openGraph={{
                  title: 'Restaurant Website Development Services | Bham Web Design and SEO Co.',
                  description: 'Bham Web Design and SEO Co. offers professional restaurant website development services. Create stunning websites for your restaurant or food-related business.',
                  url: 'https://bhamseoanddesignco.com/restaurant-website-services',
                  type: 'website',
              }}
          />
          <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
              <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Restaurant Website Development Services</h2>
              <p className="text-lg text-gray-600 mb-8">Create stunning websites for your restaurant or food-related business.</p>
              <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-800 mb-4">At Bham Web Design and SEO Co., we specialize in crafting restaurant websites that showcase your culinary creations, attract diners, and enhance your online presence. Whether you own a restaurant, cafe, catering service, or food-related business, our restaurant website development services can help you create a mouthwatering online experience.</p>
                  <p className="text-xl text-gray-800 mb-4">Our restaurant website development services include:</p>
                  <ul className="list-disc pl-6">
                      <li className="text-lg text-gray-800 mb-2">Custom website design and development</li>
                      <li className="text-lg text-gray-800 mb-2">Menu presentation with images and descriptions</li>
                      <li className="text-lg text-gray-800 mb-2">Online ordering and reservation features</li>
                      <li className="text-lg text-gray-800 mb-2">Customer reviews and testimonials</li>
                      <li className="text-lg text-gray-800 mb-2">Contact information and location maps</li>
                      <li className="text-lg text-gray-800 mb-2">Integration with delivery services</li>
                      <li className="text-lg text-gray-800 mb-2">Mobile-responsive design for all devices</li>
                  </ul>
                  <p className="text-xl text-gray-800 mb-4">Ready to create a stunning website for your restaurant or food-related business? Contact us today to discuss your restaurant website project and make your online presence as delicious as your cuisine.</p>
              </div>
          </div>
      </>
  );
}

export default RestaurantWebsiteServices;