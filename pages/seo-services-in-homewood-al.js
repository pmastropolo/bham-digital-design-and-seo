import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const SEOHomewood = () => {
    return (
        <>
            <NextSeo
                title="SEO Services in Homewood, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch SEO services in Homewood, AL. Explore our customized SEO solutions designed to elevate your Homewood business's online presence."
                openGraph={{
                    title: 'SEO Services in Homewood, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch SEO services in Homewood, AL. Explore our customized SEO solutions designed to elevate your Homewood businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/seo-services-homewood-al',
                    type: 'website',
                }}
            />
            <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
                <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">SEO Services in Homewood, AL</h2>
                {/* Add your SEO services content for Homewood here */}
            </div>
        </>
    );
}

export default SEOHomewood;