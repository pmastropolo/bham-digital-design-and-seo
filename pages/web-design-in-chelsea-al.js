import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const WebDesignChelsea = () => {
    return (
        <>
            <NextSeo
                title="Web Design Services in Chelsea, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers professional web design services in Chelsea, AL. Our tailored solutions are designed to elevate your Chelsea business's online presence."
                openGraph={{
                    title: 'Web Design Services in Chelsea, AL | Bham Web Design and SEO Co.',
                    description: 'Professional web design services in Chelsea, AL. Our tailored solutions are designed to elevate your Chelsea businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/web-design-chelsea-al',
                    type: 'website',
                }}
            />
<div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
  <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Web Design Services in Chelsea, AL</h2>
  <p className="text-lg mb-8 text-gray-600">Welcome to Bham Web Design and SEO Co. - your destination for bespoke web design solutions in Chelsea, AL. We specialize in creating websites that are visually appealing, user-friendly, and optimized for search engines.</p>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Our Chelsea Web Design Services?</h2>
    <p className="text-gray-600">Our team at Bham Web Design and SEO Co. is dedicated to understanding the Chelsea market. We provide custom web design services that align with your business goals and resonate with your local audience in Chelsea.</p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us for Your Web Design Needs</h2>
    <p className="text-gray-600">Are you ready to start your web design project in Chelsea, AL? Get in touch with Bham Web Design and SEO Co. today, and lets build a website that sets your business apart.</p>
  </section>
</div>

        </>
    );
}

export default WebDesignChelsea;