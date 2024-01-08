import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';

const SEOWilsonville = () => {
    return (
        <>
            <NextSeo
                title="SEO Services in Wilsonville, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch SEO services in Wilsonville, AL. Explore our customized SEO solutions designed to elevate your Wilsonville business's online presence."
                openGraph={{
                    title: 'SEO Services in Wilsonville, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch SEO services in Wilsonville, AL. Explore our customized SEO solutions designed to elevate your Wilsonville businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/seo-services-wilsonville-al',
                    type: 'website',
                }}
            />
    <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
      <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">SEO Services in Wilsonville, AL</h2>
      <p className="text-gray-500">Looking to boost your online presence in Wilsonville, Alabama? Our SEO services can help!</p>
      <p className="text-gray-500">We specialize in driving organic traffic to your website by optimizing your content and improving your search engine rankings.</p>
      <p className="text-gray-500">Our team of experienced professionals will work closely with you to understand your business goals and develop a tailored SEO strategy that aligns with your objectives.</p>
      <p className="text-gray-500">Contact us today to learn more about how our SEO services can benefit your business in Wilsonville, AL.</p>

    </div>
        </>
    );
}

export default SEOWilsonville;
