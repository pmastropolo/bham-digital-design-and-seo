import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const WebDesignAlabaster = () => {
    return (
        <>
            <NextSeo
                title="Web Design Services in Alabaster, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. specializes in professional web design services in Alabaster, AL. Elevate your business with our expert web solutions."
                openGraph={{
                    title: 'Web Design Services in Alabaster, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. specializes in professional web design services in Alabaster, AL. Elevate your business with our expert web solutions.',
                    url: 'https://bhamseoanddesignco.com/web-design-alabaster-al',
                    type: 'website',
                }}
            />
            <div>
            <div class="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
  <h2 class="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Web Design Services in Alabaster, AL</h2>
  <p class="text-lg mb-8 text-gray-600">Welcome to Bham Web Design and SEO Co., where we offer cutting-edge web design services for businesses in Alabaster, AL. Our team is committed to delivering websites that are not only visually appealing but also functionally robust.</p>
  
  
  
  <section class="mb-8">
    <h2 class="text-2xl font-semibold text-gray-800 mb-2">Our Approach to Web Design in Alabaster</h2>
    <p class="text-gray-600">We believe in creating custom web solutions that cater to the specific needs of businesses in Alabaster. Our approach is centered around understanding your brand, your audience, and your business goals.</p>
  </section>

  <section>
    <h2 class="text-2xl font-semibold text-gray-800 mb-2">Contact Us for Web Design Services in Alabaster</h2>
    <p class="text-gray-600">Are you ready to transform your online presence with a professional website? Contact Bham Web Design and SEO Co. today to learn more about our web design services in Alabaster, AL.</p>
    
    
    <Link href="/PackagePage" legacyBehavior>
        <a className="inline-block bg-blue-600 hover:bg-blue-800 text-white text-lg mt-6 py-3 px-8 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
          Learn More
        </a>
      </Link>
  
  </section>
</div>

            </div>
        </>
    );
}

export default WebDesignAlabaster;