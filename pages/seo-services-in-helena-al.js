import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const SEOHelena = () => {
    return (
        <>
            <NextSeo
                title="SEO Services in Helena, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch SEO services in Helena, AL. Explore our customized SEO solutions designed to elevate your Helena business's online presence."
                openGraph={{
                    title: 'SEO Services in Helena, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch SEO services in Helena, AL. Explore our customized SEO solutions designed to elevate your Helena businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/seo-services-helena-al',
                    type: 'website',
                }}
            />
            <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
                <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">SEO Services in Helena, AL</h2>
                {/* Add your SEO services content for Helena here */}
            </div>
        </>
    );
}

export default SEOHelena;