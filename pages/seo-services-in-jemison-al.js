import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const SEOJemison = () => {
    return (
        <>
            <NextSeo
                title="SEO Services in Jemison, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch SEO services in Jemison, AL. Explore our customized SEO solutions designed to elevate your Jemison business's online presence."
                openGraph={{
                    title: 'SEO Services in Jemison, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch SEO services in Jemison, AL. Explore our customized SEO solutions designed to elevate your Jemison businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/seo-services-jemison-al',
                    type: 'website',
                }}
            />
            <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
                <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">SEO Services in Jemison, AL</h2>
                {/* Add your SEO services content for Jemison here */}
            </div>
        </>
    );
}

export default SEOJemison;