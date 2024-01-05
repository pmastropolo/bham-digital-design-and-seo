import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const WebDesignBessemer = () => {
    return (
        <>
            <NextSeo
                title="Web Design Services in Bessemer, AL | Bham Web Design and SEO Co."
                description="Custom web design solutions in Bessemer, AL. Elevate your business with our professional web design services tailored for the Bessemer market."
                openGraph={{
                    title: 'Web Design Services in Bessemer, AL | Bham Web Design and Co.',
                    description: 'Custom web design solutions in Bessemer, AL. Elevate your business with our professional web design services tailored for the Bessemer market.',
                    url: 'https://bhamseoanddesignco.com/web-design-bessemer-al',
                    type: 'website',
                }}
            />
            <div>
            <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
  <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Web Design Services in Bessemer, AL</h2>
  <p className="text-lg mb-8 text-gray-600">Welcome to our bespoke web design solutions for Bessemer, Alabama. At Bham Web Design and SEO Co., we focus on creating websites that drive growth and enhance digital presence for businesses in Bessemer.</p>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us for Your Web Design in Bessemer</h2>
    <p className="text-gray-600">Our web design team in Bessemer is dedicated to understanding the unique needs of local businesses. We combine this insight with our expertise to deliver impactful web experiences.</p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get Started with Your Web Design Project</h2>
    <p className="text-gray-600">Are you ready to transform your online presence? Contact our Bessemer web design team today and lets discuss how we can help your business succeed.</p>
  
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

export default WebDesignBessemer;