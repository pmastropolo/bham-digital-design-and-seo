import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const SEOGreystone = () => {
    return (
        <>
            <NextSeo
                title="SEO Services in Greystone, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch SEO services in Greystone, AL. Explore our customized SEO solutions designed to elevate your Greystone business's online presence."
                openGraph={{
                    title: 'SEO Services in Greystone, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch SEO services in Greystone, AL. Explore our customized SEO solutions designed to elevate your Greystone businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/seo-services-greystone-al',
                    type: 'website',
                }}
            />

<div className="bg-gradient-to-br from-slate-950 to-indigo-950 text-center py-12 px-6 shadow-xl rounded-2xl mt-10 mb-12 transform hover:scale-105 transition duration-500 ease-in-out relative overflow-hidden">
    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-white to-indigo-200 my-4 animate-gradient">
        SEO Services in Greystone, AL
    </h1>

    <p className="text-white text-opacity-90 mb-8 text-lg md:text-xl leading-loose max-w-xl md:max-w-3xl mx-auto">
        Empowering your businesss online presence with our expert web design and SEO solutions.
    </p>
    <div className="py-4 px-6 mb-4 md:mb-6 mt-4 bg-white bg-opacity-20 rounded-lg">
        <p className="text-lg md:text-xl text-white">
            <span className="block mb-2 text-2xl md:text-3xl text-indigo-300">Nick Name</span>
         
        </p>
    </div>
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
</div>


{/* Discover Section */}
<div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 flex flex-col">
            <div className="bg-gradient-to-br from-gray-50 to-blue-100 p-8 rounded-2xl shadow-lg mb-8 flex-grow transform transition duration-500 hover:shadow-2xl">

                {/* Discover Title */}
                <h2 className="text-4xl font-bold text-gray-800">Discover Greystone</h2>  
                    <div className="p-8 rounded-2xl shadow-lg mb-4 flex-1 hover:shadow-2xl">
                    <p className="mb-2 text-left"><span className="font-semibold text-indigo-900">Overview:</span> Greystone is a 4,000-acre master-planned golf community in Birmingham, Alabama, developed by Daniel Corporation, featuring 3,000 homes and two championship golf courses.</p>
<p className="mb-2 text-left"><span className="text-indigo-500">Development History:</span> Development began in 1989 and completed in 2006. The community includes the Founders course (designed by Bob Cupp and Hubert Green) and the Legacy course (designed by Rees Jones).</p>
<p className="mb-2 text-left"><span className="font-semibold text-indigo-900">Golfing Excellence:</span> Greystone has hosted significant tournaments, including the Brunos Memorial Classic Champions Tour and the Regions Tradition, contributing over $14 million to Alabama charities.</p>
<p className="mb-2 text-left"><span className="text-indigo-500">Awards and Recognition:</span> Recognized among Americas Top 100 Golf Communities by TRAVEL + LEISURE GOLF and ranked in the Top 100 Residential Golf Courses by GolfWeek.</p>
<p className="mb-2 text-left"><span className="font-semibold text-indigo-900">Expansion of Amenities:</span> In 2001, Greystone added a swim and tennis facility. The club became member-owned in 2009, enhancing its community focus.</p>
<p className="mb-2 text-left"><span className="text-indigo-500">Ongoing Development:</span> The addition of a TaylorMade Performance Lab, a 24/7 fitness center, and other facilities have continuously improved the communitys offerings.</p>
<p className="mb-2 text-left"><span className="font-semibold text-indigo-900">Major Golf Tournaments:</span> Since 2016, the Founders Course has hosted the Regions Tradition, a senior major championship, highlighting Greystones prominence in the golfing world.</p>

        </div>

        <div className="mt-auto">
        <Link href="/seopackagepage" legacyBehavior>
                    <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">
                        Elevate Your Greystone Business Online
                    </a>
                    </Link>
                </div>
            </div>
        </div>


        <div className="flex-1 flex flex-col">
    <div className="rounded-lg shadow-md mb-6 flex-grow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <h2 className="text-4xl font-bold text-indigo-950 mt-5 mb-6 text-center">Explore Greystone</h2>






        </div>
    </div>
</div>


{/* Elevate Your Business Title Section */}
<div className="bg-gradient-to-br from-gray-100 to-blue-50 p-8 rounded-3xl shadow-2xl">
<h2 className="text-5xl font-bold text-gray-800 mb-5 text-center">Elevate Your Business with SEO</h2>

{/* Elevate Your Business Section */}
<p className="mt-6 mb-8 text-lg md:text-md text-gray-700">
We seamlessly integrate cutting-edge web design with advanced SEO techniques, ensuring that your website not only captivates visitors but also effectively aligns with your business objectives. By staying at the forefront of the latest SEO trends while adhering to proven design principles, we deliver a website that is visually stunning, functionally powerful, and optimized for organic growth. Our approach centers on engaging your target audience, enhancing your brands online footprint, and generating measurable business results through SEO-driven strategies.
</p>

                {/* Contact Us Button */}
                <Link href="/contact" legacyBehavior>
                <a className="inline-block bg-blue-600 hover:bg-cyan-800 text-white mb-4 py-2 px-6 rounded-full transition duration-300 transform hover:scale-110 mx-2">
                    Contact Us
                </a>
                </Link>

                {/* Web Design Form Button */}
                <Link href="/seoConsultation" legacyBehavior>
                <a className="inline-block bg-blue-600 hover:bg-indigo-800 text-white py-2 px-6 rounded-full transition duration-300 transform hover:scale-110 mx-2">
                    Start SEO Initial Consultation
                </a>
                </Link>
            </div>
        </div>
    </div>
    
        </>
    );
}

export default SEOGreystone;
