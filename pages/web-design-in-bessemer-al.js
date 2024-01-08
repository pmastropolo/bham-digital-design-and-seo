import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';

const WebDesignBessemer = () => {
    return (
        <>
            <NextSeo
                title="Web Design Services in Bessemer, AL | Bham Web Design and SEO Co."
                description="Custom web design solutions in Bessemer, AL. Elevate your business with our professional web design services tailored for the Bessemer market."
                openGraph={{
                    title: 'Web Design Services in Bessemer, AL | Bham Web Design and Co.',
                    description: 'Custom web design solutions in Bessemer, AL. Elevate your business with our professional web design services tailored for the Bessemer market.',
                    url: 'https://bhamseoanddesignco.com/web-design-bessemer-al',
                    type: 'website',
                }}
            />

            <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
                <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Web Design Services in Bessemer, AL</h2>
                <p className="text-gray-600 mb-4">Nickname | The Marvel City</p>

                <section className="mb-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
                        <div className="w-full md:w-1/2 text-gray-700">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">Explore Bessemer, AL Heritage</h2>
                            <p className="text-purple-900 mb-4 text-left"><b>County</b> | Jefferson</p>
                            <p className="mb-2 text-left">Founded in 1887, Bessemer rapidly grew due to the steel industry.</p>
                            <p className="mb-2 text-left">Tannehill Ironworks State Park preserves a 19th-century iron furnace and hosts trade events.</p>
                            <p className="mb-2 text-left">Home to The Bright Star, opened in 1907, known for Greek-style seafood and steaks.</p>
                            <p className="mb-2 text-left">The Bessemer Hall of History Museum showcases local artifacts and history.</p>
                            <p className="mb-2 text-left">Alabama Adventure & Splash Adventure offers water attractions and roller coasters.</p>
                            <p className="text-purple-800 mb-4 text-left"><b>Zip Codes</b> | 35111, 35023, 35022, 35021, 35020</p>
                        </div>
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                        <Image
                src="/images/bessemeralabama.jpg"
                alt="Image of Bessemer, Alabama"
                width={400} 
                height={300} 
                className="rounded-lg"
            />
                        </div>
                    </div>
                </section>

                <section className="mt-4">
                    <div className="bg-slate-100 p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                        <Image
                src="/images/bessemeralabamaadventure.jpg"
                alt="Best things to do in Alabama"
                width={400} 
                height={300} 
                className="rounded-lg"
            />
                        </div>
                        <div className="w-full md:w-1/2 text-gray-700 text-center md:text-center">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Best Things to Do in Bessemer, AL</h2>
                            <div className="mt-4">
                                <p className="mb-2 text-indigo-500"><b>Bessemer Hall of History Museum</b> | Citys historical artifacts.</p>
                                <p className="mb-2 text-indigo-500"><b>Alabama Adventure & Splash Adventure</b> | Fun park for all ages.</p>
                                <p className="mb-2 text-indigo-500"><b>DeBardeleben Park</b> | Historic downtown park.</p>
                                <p className="mb-2 text-indigo-500"><b>Watercress Darter National Wildlife Refuge</b> | Endangered fish, photography, hiking.</p>
                                <p className="mb-2 text-indigo-500"><b>Alabama Wine Trail</b> | Local vineyards, award-winning wines.</p>
                                <p className="mb-2 text-indigo-500"><b>Bessemer Farmers Market</b> | Fresh, local produce.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
                        <div className="w-full md:w-1/2 text-gray-700">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Transform Your Bessemer Business with Tailored Web Design and Development</h2>
                            <p>In todays digital world, an impactful online presence is essential. At Bham Web Design and SEO Co., were deeply connected with the Bessemer, AL community. Our web design and development services are specifically tailored to enhance the unique characteristics and objectives of your Bessemer-based business.</p>
                            <p className="mt-4">We merge innovative web design with advanced technological solutions, ensuring your website not only captures attention but also effectively serves your business goals. Staying ahead of the latest trends while grounding our work in proven design principles, we deliver a website that is visually striking, functionally robust, and optimized for growth. Our approach focuses on engaging your audience, boosting your brands online presence, and driving tangible business results.</p>
                            <div className="mt-6 gap-8">
                                <Link href="/contact" legacyBehavior>
                                    <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white mr-4 mb-4 py-2 px-4 rounded">
                                        Contact Us
                                    </a>
                                </Link>
                                <Link href="/PackagePage" legacyBehavior>
                                    <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white mb-4 py-2 px-4 rounded">
                                        View Web Design Packages
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                        <Image
                src="/images/sweethomealabama.jpg"
                alt="SEO Visual"
                width={400} 
                height={300} 
                className="rounded-lg"
            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default WebDesignBessemer;
