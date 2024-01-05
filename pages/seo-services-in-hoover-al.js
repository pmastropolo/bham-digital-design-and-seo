import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const SEOHoover = () => {
    return (
        <>
            <NextSeo
                title="SEO Services in Hoover, AL | YourCompanyName"
                description="YourCompanyName offers top-notch SEO services in Hoover, AL. Explore our customized SEO solutions designed to elevate your Hoover business's online presence."
                openGraph={{
                    title: 'SEO Services in Hoover, AL | YourCompanyName',
                    description: 'YourCompanyName offers top-notch SEO services in Hoover, AL. Explore our customized SEO solutions designed to elevate your Hoover businesss online presence.',
                    url: 'https://yourcompanywebsite.com/seo-services-hoover-al',
                    type: 'website',
                }}
            />
            <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
                <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">SEO Services in Hoover, AL</h2>
                {/* Add your SEO services content for Hoover here */}
            </div>
        </>
    );
}

export default SEOHoover;
