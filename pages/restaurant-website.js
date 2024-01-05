import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Restaurant from '../components/Restaurant';                              // RESTAURANT COMPONENT

const RestaurantWebsiteServices = () => {
  return (
      <>
      <NextSeo
        title="Restaurant Website Development Services | Bham Web Design and SEO Co."
        description="Elevate your culinary venture online with our restaurant website development services. Create stunning websites for your restaurant or food-related business."
        canonical="https://bhamseoanddesignco.com/restaurant-website-services"
        openGraph={{
          title: "Restaurant Website Development Services | Bham Web Design and SEO Co.",
          description: "Elevate your culinary venture online with our restaurant website development services. Create stunning websites for your restaurant or food-related business.",
          url: "https://bhamseoanddesignco.com/restaurant-website-services",
          type: "website",
        }}
      />

<div className="bg-gradient-to-r from-emerald-400 to-emerald-400 text-white mt-6 py-16 px-6 shadow-2xl rounded-3xl mb-12 overflow-hidden">
  <div className="animate-pulse absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-emerald-600 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 bg-emerald-500 rounded-full w-80 h-80 filter blur-3xl"></div>
  </div>

  <div className="relative z-10">
    <h2 className="text-6xl font-bold text-center mb-6">
      Restaurant Website Development Services 🌮
    </h2>
    <p className="text-3xl text-center mb-8">
      Create Stunning Websites for Your Restaurant or Food-Related Business 🍰
    </p>

    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8">
      <p className="text-2xl font-semibold text-gray-900 mb-6">
        Join Bham Web Design and SEO Co. in elevating your culinary venture online. Our expertise in restaurant website development is tailored to showcase your culinary creations, attract more diners, and enhance your digital footprint. Perfect for restaurants, cafes, catering services, or any food-related businesses, our services will help you create a website that’s as appealing as your dishes.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Discover Our Restaurant Website Services:
      </h3>

      <ul className="list-disc pl-10 text-xl text-gray-800 mb-6 space-y-2 text-left">
        <li><strong>Custom Design</strong> | Reflect your brand’s flavor with custom website design and development.</li>
        <li><strong>Menu Presentation</strong> | Enticing images and descriptions for menu presentation.</li>
        <li><strong>Online Ordering</strong> | Convenient online ordering and reservation systems.</li>
        <li><strong>Customer Reviews</strong> | Build trust with customer reviews and testimonials.</li>
        <li><strong>Contact Information</strong> | Easy navigation with contact information and location maps.</li>
        <li><strong>Delivery Services</strong> | Expand your reach with integration with delivery services.</li>
        <li><strong>Mobile-Responsive</strong> | Seamless user experience with mobile-responsive design.</li>
      </ul>

      <p className="text-2xl font-semibold text-gray-900 mb-8">
        Ready to whisk up a stunning website for your restaurant or food business? Contact us today to start your project and serve your online presence with a side of excellence.
      </p>

      <div className="text-center">
        <Link href="https://bhamseoanddesignco.com/contact" legacyBehavior>
          <a className="bg-emerald-500 hover:bg-emerald-700 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
            🍴 Begin Crafting Your Restaurants Website
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>


<Restaurant />

      </>
  );
}

export default RestaurantWebsiteServices;
