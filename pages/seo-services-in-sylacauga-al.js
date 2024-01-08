import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';

const SEOSylacauga = () => {
    return (
        <>
            <NextSeo
                title="SEO Services in Sylacauga, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch SEO services in Sylacauga, AL. Explore our customized SEO solutions designed to elevate your Sylacauga business's online presence."
                openGraph={{
                    title: 'SEO Services in Sylacauga, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch SEO services in Sylacauga, AL. Explore our customized SEO solutions designed to elevate your Sylacauga businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/seo-services-sylacauga-al',
                    type: 'website',
                }}
            />

    <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
    <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">SEO Services in Sylacauga, AL</h2>
    <p className="text-gray-600 mb-4">Long known as The Marble City</p>

    <section className="mb-4">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">Discover Sylacauga, AL</h2>
                <p className="text-slate-600 mb-4 text-left"><b>County</b> | Talladega</p>
                <p className="mb-2 text-left">Sylacauga is renowned for its fine white marble bedrock, forming the basis of the areas first industry.</p>
                <p className="mb-2 text-left">Its the site of the first documented incident of a person being hit by a meteorite in 1954.</p>
                <p className="mb-2 text-left">The name Sylacauga is derived from Native American words, meaning The Place of the Chalaka Tribe.</p>
                <p className="mb-2 text-left">Early infrastructure included important roads and a plank road connecting Montgomery to Winterboro through Sylacauga.</p>
                <p className="mb-2 text-left">The citys first newspaper, the Sylacauga Argus, began publication in 1887.</p>
                <p className="mb-2 text-left">Nicknamed The Marble City, Sylacaugas marble is acclaimed as the finest in the world, used in several prominent buildings.</p>

                <p className="text-slate-700 mb-4 text-left"><b>Zip Codes</b> | 35150, 35151</p>
            </div>
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <a href="https://commons.wikimedia.org/wiki/File:Sylacauga_Alabama.JPG" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Sylacauga_Alabama.JPG/1199px-Sylacauga_Alabama.JPG?20110219195414"
                        alt="This is a photograph of Sylacauga, Alabama"
                        width={400} 
                        height={300}
                        className="rounded-lg max-w-full"
                    />
                </a>
            </div>
        </div>
    </section>

</div>
        </>
    );
}

export default SEOSylacauga;
