import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';

const WebDesignAlabaster = () => {
    return (
        <>
            <NextSeo
                title="Web Design Services in Alabaster, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. specializes in professional web design services in Alabaster, AL. Elevate your business with our expert web solutions."
                openGraph={{
                    title: 'Web Design Services in Alabaster, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. specializes in professional web design services in Alabaster, AL. Elevate your business with our expert web solutions.',
                    url: 'https://bhamseoanddesignco.com/web-design-alabaster-al',
                    type: 'website',
                }}
            />

            <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
                <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Web Design Services in Alabaster, AL</h2>
                <p className="text-gray-600 mb-4">Nickname | The Good Neighbor City</p>

                <section className="mb-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-gray-700">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">Discover Alabaster, AL</h2>
                            <p className="text-red-600 mb-4 text-left"><b>County</b> | Shelby</p>
                            <p className="mb-2 text-left">Named after the calcium carbonate mineral, Alabaster has a rich mining history.</p>
                            <p className="mb-2 text-left">George L. Scott Sr. founded the Alabaster Lime Co., known as - Scott Rock.</p>
                            <p className="mb-2 text-left">In 1952, the citys first bank was established, led by George L. Scott Jr., the first mayor.</p>
                            <p className="mb-2 text-left">Officially incorporated in 1953, Alabaster transformed from a small community to Alabamas 16th largest city.</p>
                            <p className="mb-2 text-left">The Main Street Medical Mile development began in 2015, signifying growth.</p>
                            <p className="mb-2 text-left">District 31, a major retail complex, reflects Alabasters expansion at Highway 31 and Interstate 65.</p>
                            <p className="text-gray-600 mb-4 text-left"><b>Zip Codes</b> | 35007, 35114, 35144</p>
                        </div>
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                        <Image
                src="/images/alabasteralabama.jpg"
                alt="Image of Alabaster"
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
                        <Image
                src="/images/alabasterimage.jpg"
                alt="Best things to do in Alabama"
                width={400} 
                height={300} 
                className="rounded-lg max-w-sm"
            />
                        </div>
                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-gray-700 text-center md:text-center">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">Best Things to Do in Alabaster, AL</h2>
                            <div className="mt-4">
                                <p className="mb-2 text-indigo-500"><b>Buck Creek Trail</b> | Scenic trails and events.</p>
                                <p className="mb-2 text-indigo-500"><b>Siluria Brewing Company</b> | Craft brews in a historic setting.</p>
                                <p className="mb-2 text-indigo-500"><b>American Village</b> | Interactive historical experience.</p>
                                <p className="mb-2 text-indigo-500"><b>Ebenezer Swamp Ecological Preserve</b> | Nature lovers paradise.</p>
                                <p className="mb-2 text-indigo-500"><b>Veterans Park</b> | Family-friendly outdoor activities.</p>
                                <p className="mb-2 text-indigo-500"><b>Central Alabama Paintball Park</b> | Exciting paintball experience.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-8 mt-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-gray-700">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Elevate Your Business in Alabaster with Our Web Design Expertise</h2>
                            <p>In the digital age, a compelling online presence is more than just a luxury. Its a necessity. At Bham Web Design and SEO Co., we understand the heartbeat of Alabaster, AL. Our web design solutions are not just aesthetically pleasing but also strategically crafted to meet the unique needs and goals of your local business.</p>
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

export default WebDesignAlabaster;
