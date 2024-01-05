import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const SEOMeadowbrook = () => {
    return (
        <>
            <NextSeo
                title="SEO Services in Meadowbrook, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch SEO services in Meadowbrook, AL. Explore our customized SEO solutions designed to elevate your Meadowbrook business's online presence."
                openGraph={{
                    title: 'SEO Services in Meadowbrook, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch SEO services in Meadowbrook, AL. Explore our customized SEO solutions designed to elevate your Meadowbrook businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/seo-services-meadowbrook-al',
                    type: 'website',
                }}
            />
            <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
                <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">SEO Services in Meadowbrook, AL</h2>
           
            </div>
        </>
    );
}

export default SEOMeadowbrook;