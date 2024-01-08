import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';

const WebDesignClanton = () => {
    return (
        <>
            <NextSeo
                title="Web Design Services in Clanton, AL | Bham Web Design and SEO Co."
                description="Custom web design solutions in Clanton, AL by Bham Web Design and SEO Co. Enhance your online presence with our professional web design services."
                openGraph={{
                    title: 'Web Design Services in Clanton, AL | Bham Web Design and SEO Co.',
                    description: 'Custom web design solutions in Clanton, AL by Bham Web Design and SEO Co. Enhance your online presence with our professional web design services.',
                    url: 'https://bhamseoanddesignco.com/web-design-clanton-al',
                    type: 'website',
                }}
            />

<div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
    <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Web Design Services in Clanton, AL</h2>
    <p className="text-gray-600 mb-4">Fun Fact | Clanton is known for its Peach Festival</p>

    <section className="mb-4">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-gray-700">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">Explore Clanton, AL Heritage</h2>
                <p className="text-red-600 mb-4 text-left"><b>County</b> | Chilton</p>
                <p className="mb-2 text-left">Named after James H. Clanton, its a charming city with a rich history.</p>
                <p className="mb-2 text-left">Famous for its Peach Park, offering delicious peach-themed treats.</p>
                <p className="mb-2 text-left">Proud home to the annual Peach Festival, a local tradition.</p>
                <p className="mb-2 text-left">Explore historic sites like the Clanton Confederate Memorial.</p>
            </div>
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <Image
                    src="/images/clantonpeach.jpg"
                    alt="Image of Clanton, Alabama"
                    width={400}
                    height={300}
                    className="rounded-lg"
                />
                            </div>
        </div>
    </section>

    <section className="mt-4">
    <div className="bg-slate-100 p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
        <a href="https://commons.wikimedia.org/wiki/File:Watertower_shaped_like_a_peach,_Clanton,_Alabama_LCCN2010640907.tif" target="_blank" rel="noopener noreferrer">
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Watertower_shaped_like_a_peach%2C_Clanton%2C_Alabama_LCCN2010640907.tif/lossy-page1-600px-Watertower_shaped_like_a_peach%2C_Clanton%2C_Alabama_LCCN2010640907.tif.jpg?20160828113115"
                alt="Watertower shaped like a peach, Clanton, Alabama"
                width={400}
                height={300}
                className="rounded-lg max-w-sm"
            />
            </a>
        </div>
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-700 text-center md:text-center mt-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Best Things to Do in Clanton, AL</h2>
            <div className="mt-4">
                <p className="mb-2 text-indigo-500"><b>Peach Park</b> | Enjoy delicious peach-themed treats.</p>
                <p className="mb-2 text-indigo-500"><b>Peach Festival</b> | Experience the local Peach Festival tradition.</p>
                <p className="mb-2 text-indigo-500"><b>Clanton Confederate Memorial</b> | Explore historic sites.</p>
                <p className="mb-2 text-indigo-500"><b>Chilton County History Museum</b> | Learn about the countys history.</p>
                <p className="mb-2 text-indigo-500"><b>Cedar Creek Reservoir</b> | Fishing and outdoor activities.</p>
                <p className="text-gray-600 mb-4 text-left"><b>Zip Codes</b> | 35045, 35046</p>
            </div>
        </div>
    </div>
</section>

<section className="mt-4">
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Elevate Your Business in Clanton with Our Web Design Expertise</h2>
            <p>In the digital age, a compelling online presence is more than just a luxury. Its a necessity. At Bham Web Design and SEO Co., we understand the heartbeat of Clanton, AL. Our web design solutions are not just aesthetically pleasing but also strategically crafted to meet the unique needs and goals of your local business.</p>
            <p className="mt-4">We blend innovative design with cutting-edge functionality, ensuring your site stands out in a crowded digital landscape. With our finger on the pulse of current trends and timeless design principles, we promise a website that not only looks stunning but also drives growth, engages your audience, and elevates your brand.</p>
            <div className="mt-6 gap-8">
                <Link href="/contact" legacyBehavior>
                    <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white mr-4 mb-4 py-2 px-4 rounded">
                        Contact Us
                    </a>
                </Link>
                {/* Web Design Packages Button with Link */}
                <Link href="/PackagePage" legacyBehavior>
                    <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white mb-4 py-2 px-4 rounded">
                        View Web Design Packages
                    </a>
                </Link>
            </div>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
        <a href="https://commons.wikimedia.org/wiki/File:Alabama-Tennessee-state-line-207-11-altn1.jpg" target="_blank" rel="noopener noreferrer">
            <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Alabama-Tennessee-state-line-207-11-altn1.jpg/1200px-Alabama-Tennessee-state-line-207-11-altn1.jpg?20161031223120"
                alt="Alabama welcome sign Sweet Home, Alabama at the border between Giles County, Tennessee, and Lauderdale County, Alabama, in the southern United States."
                width={400} 
                height={300} 
                className="rounded-lg"
            />
              </a>
        </div>
    </div>
</section>
            </div>
        </>
    );
}

export default WebDesignClanton;
