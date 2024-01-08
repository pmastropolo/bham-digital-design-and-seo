import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';

const WebDesignPelham = () => {
  return (
    <>
      <NextSeo
        title="Web Design Services in Pelham, AL | Bham Web Design and SEO Co."
        description="Bham Web Design and SEO Co. offers top-notch web design services in Pelham, AL. Explore our customized web solutions designed to elevate your Pelham business's online presence."
        openGraph={{
          title: 'Web Design Services in Pelham, AL | Bham Web Design and SEO Co.',
          description: 'Bham Web Design and SEO Co. offers top-notch web design services in Pelham, AL. Explore our customized web solutions designed to elevate your Pelham businesss online presence.',
          url: 'https://bhamseoanddesignco.com/web-design-pelham-al',
          type: 'website',
        }}
      />

      <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
        <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Web Design Services in Pelham, AL</h2>
        <p className="text-gray-600 mb-4">Home to Alabamas largest state park.</p>

        <section className="mb-4">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-gray-700">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">Discover the Charms of Pelham, AL</h2>
              <p className="text-red-600 mb-4 text-left"><b>County</b> | Shelby</p>
              <p className="mb-2 text-left">Founded in the 1820s as Shelbyville.</p>
              <p className="mb-2 text-left">Renamed Pelham in 1867 | Became a city in 1964</p>
              <p className="mb-2 text-left">Played a key role in Alabamas railroad development.</p>
              <p className="mb-2 text-left">Houses a regional general aviation hub.</p>
              <p className="mb-2 text-left">Hosts the annual Butterbean Festival.</p>
              <p className="mb-2 text-left">Known for its distinctive castle-like school building.</p>
              <p className="mb-2 text-left">Served by Pelham City School System.</p>
              <p className="text-gray-600 mb-4 text-left"><b>Zip Codes</b> | 35043, 35124, 35242, 35244</p>
            </div>
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <a href="https://commons.wikimedia.org/wiki/File:Pelham_High_School.JPG" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Pelham_High_School.JPG/1200px-Pelham_High_School.JPG?20150215194738"
                  alt="The front of Pelham High School, located in Pelham, AL"
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
              <a href="https://commons.wikimedia.org/wiki/File:Oak_Mountain_State_Park,_Pelham,_United_States_(Unsplash).jpg" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Oak_Mountain_State_Park%2C_Pelham%2C_United_States_%28Unsplash%29.jpg/1200px-Oak_Mountain_State_Park%2C_Pelham%2C_United_States_%28Unsplash%29.jpg?20170823040546"
                  alt="Oak Mountain State Park, Pelham, United States."
                  width={400}
                  height={300}
                  className="rounded-lg max-w-sm"
                />
              </a>
            </div>
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-gray-700 text-center md:text-center mt-4">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Best Things to Do in Pelham, AL</h2>
              <div className="mt-4">
                <p className="mb-2 text-indigo-500"><b>Oak Mountain State Park</b> | Explore the largest park in Alabama, offering hiking, fishing, and camping.</p>
                <p className="mb-2 text-indigo-500"><b>Pelham Civic Complex</b> | Enjoy ice skating and events at this civic complex.</p>
                <p className="mb-2 text-indigo-500"><b>Ballantrae Golf Club</b> | Play golf with scenic views at Ballantrae Golf Club.</p>
                <p className="mb-2 text-indigo-500"><b>Bike Trails at Oak Mountain</b> | Explore scenic biking trails at Oak Mountain State Park.</p>
                <p className="mb-2 text-indigo-500"><b>Butterbean Festival</b> | Attend the annual Butterbean Festival for food, music, and fun.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8 mt-4">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap md:flex-nowrap">
            {/* Text Section */}
            <div className="w-full md:w-1/2 text-gray-700">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Elevate Your Business in Pelham with Our Web Design Expertise</h2>
              <p>In the digital age, a compelling online presence is more than just a luxury. Its a necessity. At Bham Web Design and SEO Co., we understand the heartbeat of Pelham, AL. Our web design solutions are not just aesthetically pleasing but also strategically crafted to meet the unique needs and goals of your local business.</p>
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

export default WebDesignPelham;
