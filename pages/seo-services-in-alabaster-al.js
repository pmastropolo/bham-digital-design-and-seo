import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';

const SEOAlabaster = () => {
    return (
        <>
            <NextSeo
                title="SEO Services in Alabaster, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. offers top-notch SEO services in Alabaster, AL. Explore our customized SEO solutions designed to elevate your Alabaster business's online presence."
                openGraph={{
                    title: 'SEO Services in Alabaster, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. offers top-notch SEO services in Alabaster, AL. Explore our customized SEO solutions designed to elevate your Alabaster businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/seo-services-alabaster-al',
                    type: 'website',
                }}
            />

            <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
                <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">SEO in Alabaster, AL</h2>
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
        {/* Image Section with Next.js Image component */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
        <a href="https://commons.wikimedia.org/wiki/File:Alabaster_City_Hall.jpg" target="_blank" rel="noopener noreferrer">
                        <Image
                src="https://upload.wikimedia.org/wikipedia/commons/3/35/Alabaster_City_Hall.jpg?20160316195729"
                alt="Alabaster City Hall"
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
                        <a href="https://commons.wikimedia.org/wiki/File:Alabaster,_Alabama_City_Hall.JPG" target="_blank" rel="noopener noreferrer">
                        <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Alabaster%2C_Alabama_City_Hall.JPG/1200px-Alabaster%2C_Alabama_City_Hall.JPG?20120226115852"
                alt="This is a photograph of the city hall in Alabaster, Alabama."
                width={400} 
                height={300} 
                className="rounded-lg max-w-sm"
            />
            </a>
                        </div>
                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-gray-700 text-center md:text-center mt-4">
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Boost Your Online Visibility with Our SEO Expertise</h2>
            <p>In todays digital landscape, having a strong online presence is not just an advantage; its essential. At Bham Web Design and SEO Co., we specialize in Search Engine Optimization (SEO) services in Alabaster, AL. We understand the heartbeat of your local business and can strategically enhance your websites visibility in search engines.</p>
            <p className="mt-4">Our SEO solutions combine the latest industry trends with proven strategies, ensuring that your website not only looks appealing but also ranks higher in search results. With our expertise, we can drive organic traffic, engage your target audience, and elevate your brands online presence.</p>
            <div className="mt-6 gap-8">
                <Link href="/contact" legacyBehavior>
                    <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white mr-4 mb-4 py-2 px-4 rounded">
                        Contact Us
                    </a>
                </Link>

                {/* SEO Packages Button with Link */}
                <Link href="/SEOpackages" legacyBehavior>
                    <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white mb-4 py-2 px-4 rounded">
                        View SEO Packages
                    </a>
                </Link>
            </div>
        </div>
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

export default SEOAlabaster;

