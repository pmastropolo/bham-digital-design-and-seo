import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';

const SEOChelsea = () => {
    return (
        <>
            <NextSeo
                title="SEO Services in Chelsea, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch SEO services in Chelsea, AL. Explore our customized SEO solutions designed to elevate your Chelsea business's online presence."
                openGraph={{
                    title: 'SEO Services in Chelsea, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch SEO services in Chelsea, AL. Explore our customized SEO solutions designed to elevate your Chelsea businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/seo-services-chelsea-al',
                    type: 'website',
                }}
            />
   <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
                <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">SEO Services in Chelsea, AL</h2>
                <p className="text-gray-600 mb-4">Fun Fact | Chelsea used to be called Melrose</p>

                <section className="mb-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-gray-700">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">Explore Chelsea, AL Heritage</h2>
                            <p className="text-red-600 mb-4 text-left"><b>County</b> | Shelby</p>
                            <p className="mb-2 text-left">Named after Chelsea, London, its now a thriving suburban community.</p>
                            <p className="mb-2 text-left">Known for excellent schools like Chelsea High School and a strong sense of community.</p>
                            <p className="mb-2 text-left">Offers outdoor activities in scenic landscapes, including hiking trails.</p>
                            <p className="mb-2 text-left">Frequent community events and festivals, such as Chelsea Fest.</p>
                            <p className="text-slate-800 mb-4 text-left"><b>Zip Codes</b> | 35043, 35051</p>
                        </div>
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                        <a href="https://commons.wikimedia.org/wiki/File:Chelsea,_Alabama.JPG" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Chelsea%2C_Alabama.JPG/1200px-Chelsea%2C_Alabama.JPG?20120225194048"
                                alt="This is a photograph of Chelsea, Alabama"
                                width={400}
                                height={300}
                                className="rounded-lg"
                            />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="mt-4">
                    <div className="bg-slate-100 p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-center items-center">
                        <a href="https://commons.wikimedia.org/wiki/File:Chelsea,_Alabama_City_Hall.JPG" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Chelsea%2C_Alabama_City_Hall.JPG"
                                alt="This is a photograph of the City Hall in Chelsea, Alabama."
                                width={400}
                                height={300}
                                className="rounded-lg max-w-sm"
                            />
                            </a>
                        </div>
                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-gray-700 text-center md:text-center">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Best Things to Do in Chelsea, AL</h2>
                            <div className="mt-4">
                                <p className="mb-2 text-indigo-500"><b>Oak Mountain State Park</b> | Vast green space with activities for all ages.</p>
                                <p className="mb-2 text-indigo-500"><b>TreeTop Family Adventure</b> | Fun-filled family amusement center.</p>
                                <p className="mb-2 text-indigo-500"><b>Cat-n-Bird Winery</b> | Local wine tasting and charming vineyard.</p>
                                <p className="mb-2 text-indigo-500"><b>Aldridge Gardens</b> | Tranquil woodland garden with diverse birdlife.</p>
                                <p className="mb-2 text-indigo-500"><b>Oak Mountain Amphitheatre</b> | Premier outdoor music venue.</p>
                                <p className="mb-2 text-indigo-500"><b>Statue of Liberty Replica</b> | A familiar and iconic sight in nearby Vestavia Hills.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-gray-700">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Elevate Your Business in Chelsea with Our Web Design Expertise</h2>
                            <p>In todays digital landscape, a strong online presence is crucial for success. At Bham Web Design and SEO Co., we are deeply rooted in the Chelsea, AL community. Our web design and development services are meticulously crafted to maximize the online visibility and performance of your Bessemer-based business.</p>
                            <p className="mt-4">We seamlessly integrate cutting-edge web design with advanced SEO techniques, ensuring that your website not only captivates visitors but also effectively aligns with your business objectives. By staying at the forefront of the latest SEO trends while adhering to proven design principles, we deliver a website that is visually stunning, functionally powerful, and optimized for organic growth. Our approach centers on engaging your target audience, enhancing your brands online footprint, and generating measurable business results through SEO-driven strategies.</p>
                            <div className="mt-6 gap-8">
                                <Link href="/contact" legacyBehavior>
                                    <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white mr-4 mb-4 py-2 px-4 rounded">
                                        Contact Us
                                    </a>
                                </Link>
                                {/* Web Design Packages Button with Link */}
                                <Link href="/seopackagepage" legacyBehavior>
                                    <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white mb-4 py-2 px-4 rounded">
                                        View SEO Packages
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

export default SEOChelsea;
