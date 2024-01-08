import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';

const WebDesignWoodstock = () => {
    return (
        <>
            <NextSeo
                title="Web Design Services in Woodstock, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch web design services in Woodstock, AL. Explore our customized web solutions designed to elevate your Woodstock business's online presence."
                openGraph={{
                    title: 'Web Design Services in Woodstock, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch web design services in Woodstock, AL. Explore our customized web solutions designed to elevate your Woodstock businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/web-design-woodstock-al',
                    type: 'website',
                }}
            />

            <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
                <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Web Design Services in Woodstock, AL</h2>
                <p className="text-gray-600 mb-4">Fun Fact | The town of Woodstock was formally named North Bibb until 2000</p>

                <section className="mb-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-gray-700">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">Discover Woodstock, AL</h2>
                            <p className="text-red-600 mb-4 text-left"><b>County</b> | Bibb</p>
                            <p className="mb-2 text-left">Woodstock was incorporated as a town in 1996.</p>
                            <p className="mb-2 text-left">The towns name, Woodstock, is believed to have been inspired by the famous music festival Woodstock that took place in 1969 in New York.</p>
                            <p className="mb-2 text-left">Woodstock is in Bibb County, part of the Birmingham area.</p>
                            <p className="mb-2 text-left">Since incorporation, it has steadily grown as a suburban community.</p>
                            <p className="mb-2 text-left">Woodstock has a diverse local economy, with businesses ranging from retail to manufacturing.</p>
                            <p className="mb-2 text-left">Known for its strong community spirit and local pride.</p>
                            <p className="text-gray-600 mb-4 text-left"><b>Zip Code</b> | 35188</p>
                        </div>
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                            <a href="https://commons.wikimedia.org/wiki/File:WoodstockAlabama.jpg" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/2c/WoodstockAlabama.jpg?20091002212557"
                                    alt="Businesses in Woodstock, Alabama"
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
                        <a href="https://commons.wikimedia.org/wiki/File:Red-Tailed_Hawk_Spreading_Wings.jpg" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Red-Tailed_Hawk_Spreading_Wings.jpg/732px-Red-Tailed_Hawk_Spreading_Wings.jpg?20200603204128"
                                    alt=" A Red Tail Hawk spreading its wings"
                                    width={400}
                                    height={300}
                                    className="rounded-lg max-w-sm"
                                />
                            </a>
                        </div>
                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-gray-700 text-center md:text-center mt-4">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Best Things to Do in Woodstock, AL</h2>
                            <div className="mt-4">
                                <p className="mb-2 text-indigo-500"><b>Tannehill Ironworks Historical State Park</b> | Explore Alabamas iron history.</p>
                                <p className="mb-2 text-indigo-500"><b>Fishing at Buck Creek</b> | Enjoy angling in Woodstock.</p>
                                <p className="mb-2 text-indigo-500"><b>Downtown Stroll</b> | Discover local shops.</p>
                                <p className="mb-2 text-indigo-500"><b>Local Dining</b> | Savor Southern cuisine.</p>
                                <p className="mb-2 text-indigo-500"><b>Attend Local Events</b> | Connect with the community.</p>
                                <p className="mb-2 text-indigo-500"><b>Bibb County Heritage Museum</b> | Explore regional history.</p>
                                <p className="mb-2 text-indigo-500"><b>Bird Watching</b> | Observe diverse species.</p>
                                <p className="mb-2 text-indigo-500"><b>Relax by Buck Creek</b> | Enjoy natures beauty.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-8 mt-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-gray-700">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Elevate Your Business in Woodstock with Our Web Design Expertise</h2>
                            <p>In the digital age, a compelling online presence is more than just a luxury. Its a necessity. At Bham Web Design and SEO Co., we understand the heartbeat of Woodstock, AL. Our web design solutions are not just aesthetically pleasing but also strategically crafted to meet the unique needs and goals of your local business.</p>
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

export default WebDesignWoodstock;
