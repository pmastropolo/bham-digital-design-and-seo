import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const WebDesignPleasantGrove = () => {
    return (
        <>
            <NextSeo
                title="Web Design Services in Pleasant Grove, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch web design services in Pleasant Grove, AL. Explore our customized web solutions designed to elevate your Pleasant Grove business's online presence."
                openGraph={{
                    title: 'Web Design Services in Pleasant Grove, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch web design services in Pleasant Grove, AL. Explore our customized web solutions designed to elevate your Pleasant Grove businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/web-design-pleasant-grove-al',
                    type: 'website',
                }}
            />


<div className="bg-gradient-to-br from-slate-950 to-indigo-950 text-center py-12 px-6 shadow-xl rounded-2xl mt-10 mb-12 transform hover:scale-105 transition duration-500 ease-in-out relative overflow-hidden">
    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-white to-indigo-200 my-4 animate-gradient">
        Web Design Services in Pleasant Grove, AL
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
                <h2 className="text-4xl font-bold text-gray-800">Discover Pleasant Grove</h2>  
                    <div className="p-8 rounded-2xl shadow-lg mb-4 flex-1 hover:shadow-2xl">
                    <p className="mb-2 text-indigo-500 text-left">
    <b>The Grid</b> | Auto Racing Track.
</p>

<p className="mb-2 text-indigo-500 text-left">
    <b>Pleasant Grove City Park</b> | Outdoor activities.
</p>

<p className="mb-2 text-indigo-500 text-left">
    <b>Historic Sites</b> | Discover local history.
</p>

<p className="mb-2 text-indigo-500 text-left">
    <b>Community Events</b> | Enjoy local festivals.
</p>

<p className="mb-2 text-indigo-500 text-left">
    <b>Outdoor Adventures</b> | Explore nature.
</p>

<p className="mb-2 text-indigo-500 text-left">
    <b>Birmingham Attractions</b> | Visit nearby city.
</p>

<p className="mb-2 text-indigo-500 text-left">
    <b>Relaxation</b> | Unwind in peaceful surroundings.
</p>



<p className="text-gray-600">Countys | <span className="text-indigo-900"></span></p>
<p className="text-gray-600">Zip Codes | <span className="text-indigo-900"></span></p>
        </div>

        <div className="mt-auto">
        <Link href="/PackagePage" legacyBehavior>
                    <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition duration-300">
                        Elevate Your Pleasant Grove Business Online
                    </a>
                    </Link>
                </div>
            </div>
        </div>


        <div className="flex-1 flex flex-col">
    <div className="rounded-lg shadow-md mb-6 flex-grow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
        <h2 className="text-4xl font-bold text-indigo-950 mt-5 mb-6 text-center">Explore Pleasant Grove</h2>





        </div>
    </div>
</div>


{/* Elevate Your Business Title Section */}
<div className="bg-gradient-to-br from-gray-100 to-blue-50 p-8 rounded-3xl shadow-2xl">
<h2 className="text-5xl font-bold text-gray-800 mb-5 text-center">Elevate Your Business with Web Design</h2>

{/* Elevate Your Business Section */}
<p className="mt-6 mb-8 text-lg md:text-md text-gray-700">
In the digital age, a compelling online presence is more than just a luxury. Its a necessity. Our web design solutions are strategically crafted to meet the unique needs and goals of your local business. Blending innovative design with cutting-edge functionality, we ensure your site stands out in a crowded digital landscape.
</p>

                {/* Contact Us Button */}
                <Link href="/contact" legacyBehavior>
                <a className="inline-block bg-blue-600 hover:bg-cyan-800 text-white mb-4 py-2 px-6 rounded-full transition duration-300 transform hover:scale-110 mx-2">
                    Contact Us
                </a>
                </Link>

                {/* Web Design Form Button */}
                <Link href="/webDesignConsultation" legacyBehavior>
                <a className="inline-block bg-blue-600 hover:bg-indigo-800 text-white py-2 px-6 rounded-full transition duration-300 transform hover:scale-110 mx-2">
                    Start Web Design Initial Consultation
                </a>
                </Link>
            </div>
        </div>
    </div>

        </>
    );
}

export default WebDesignPleasantGrove;


