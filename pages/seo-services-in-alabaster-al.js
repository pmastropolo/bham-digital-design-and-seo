import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const SEOAlabaster = () => {
    return (
        <>
            <NextSeo
                title="SEO Services in Alabaster, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch SEO services in Alabaster, AL. Explore our customized SEO solutions designed to elevate your Alabaster business's online presence."
                openGraph={{
                    title: 'SEO Services in Alabaster, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch SEO services in Alabaster, AL. Explore our customized SEO solutions designed to elevate your Alabaster businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/seo-services-alabaster-al',
                    type: 'website',
                }}
            />
            <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
                <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">SEO Services in Alabaster, AL</h2>
                {/* Add your SEO services content for Alabaster here */}
            </div>
        </>
    );
}

export default SEOAlabaster;