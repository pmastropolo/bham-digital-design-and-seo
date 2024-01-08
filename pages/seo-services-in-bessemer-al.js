import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';

const SEOBessemer = () => {
    return (
        <>
            <NextSeo
                title="SEO Services in Bessemer, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch SEO services in Bessemer, AL. Explore our customized SEO solutions designed to elevate your Bessemer business's online presence."
                openGraph={{
                    title: 'SEO Services in Bessemer, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch SEO services in Bessemer, AL. Explore our customized SEO solutions designed to elevate your Bessemer businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/seo-services-bessemer-al',
                    type: 'website',
                }}
            />


            <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
                <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">SEO Services in Bessemer, AL</h2>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Boost Your Bessemer Business with SEO-Optimized Web Design</h2>
            <p>In todays digital landscape, a strong online presence is crucial for success. At Bham Web Design and SEO Co., we are deeply rooted in the Bessemer, AL community. Our web design and development services are meticulously crafted to maximize the online visibility and performance of your Bessemer-based business.</p>
            <p className="mt-4">We seamlessly integrate cutting-edge web design with advanced SEO techniques, ensuring that your website not only captivates visitors but also effectively aligns with your business objectives. By staying at the forefront of the latest SEO trends while adhering to proven design principles, we deliver a website that is visually stunning, functionally powerful, and optimized for organic growth. Our approach centers on engaging your target audience, enhancing your brands online footprint, and generating measurable business results through SEO-driven strategies.</p>
            <div className="mt-6 gap-8">
                <Link href="/contact" legacyBehavior>
                    <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white mr-4 mb-4 py-2 px-4 rounded">
                        Contact Us
                    </a>
                </Link>
                <Link href="/seopackagepage" legacyBehavior>
                    <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white mb-4 py-2 px-4 rounded">
                        View SEO Services
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

export default SEOBessemer;
