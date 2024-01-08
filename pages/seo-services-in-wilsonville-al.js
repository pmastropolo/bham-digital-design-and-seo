import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

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
                <div className="text-center mt-8">
  <p className="text-4xl mb-4 text-slate-900 font-semibold">
  Looking to Enhance Your Websites SEO?
  </p>
  <p className="text-lg text-gray-600">
  Discover how our specialized SEO services can elevate your online presence.
  </p> 
  <p className="text-lg text-gray-600">
  Begin with an initial consultation to understand the unique needs of your business.
  </p>
  <Link href="/seoConsultation" legacyBehavior>
    <a className="inline-block bg-slate-600 hover:bg-slate-950 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
     Start SEO Form
    </a>
  </Link>
</div>
        <div className="border-bottom-gray"></div>
            </div>
        </>
    );
}

export default SEOWilsonville;
