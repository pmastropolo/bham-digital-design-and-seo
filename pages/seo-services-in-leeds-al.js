import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const SEOLeeds = () => {
    return (
        <>
            <NextSeo
                title="SEO Services in Leeds, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch SEO services in Leeds, AL. Explore our customized SEO solutions designed to elevate your Leeds business's online presence."
                openGraph={{
                    title: 'SEO Services in Leeds, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch SEO services in Leeds, AL. Explore our customized SEO solutions designed to elevate your Leeds businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/seo-services-leeds-al',
                    type: 'website',
                }}
            />
            <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
                <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">SEO Services in Leeds, AL</h2>
                {/* Add your SEO services content for Leeds here */}
            </div>
        </>
    );
}

export default SEOLeeds;