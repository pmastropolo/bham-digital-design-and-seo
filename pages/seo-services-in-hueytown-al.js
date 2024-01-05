import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const SEOHueytown = () => {
    return (
        <>
            <NextSeo
                title="SEO Services in Hueytown, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch SEO services in Hueytown, AL. Explore our customized SEO solutions designed to elevate your Hueytown business's online presence."
                openGraph={{
                    title: 'SEO Services in Hueytown, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch SEO services in Hueytown, AL. Explore our customized SEO solutions designed to elevate your Hueytown businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/seo-services-hueytown-al',
                    type: 'website',
                }}
            />
            <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
                <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">SEO Services in Hueytown, AL</h2>
                {/* Add your SEO services content for Hueytown here */}
            </div>
        </>
    );
}

export default SEOHueytown;