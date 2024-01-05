import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const WebDesignHoover = () => {
    return (
        <>
            <NextSeo
                title="Web Design Services in Hoover, AL | Bham Web Design and SEO Co."
                description="Leading web design services in Hoover, AL. Enhance your online presence with our custom web solutions tailored for Hoover businesses."
                openGraph={{
                    title: 'Web Design Services in Hoover, AL | Bham Web Design and SEO Co.',
                    description: 'Leading web design services in Hoover, AL. Enhance your online presence with our custom web solutions tailored for Hoover businesses.',
                    url: 'https://bhamseoanddesignco.com/web-design-hoover-al',
                    type: 'website',
                }}
            />
<div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
  <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Web Design Services in Hoover, AL</h2>
  <p className="text-lg mb-8 text-gray-600">At YourCompanyName, we offer specialized web design services for businesses in Hoover, Alabama. Our approach combines innovative design with effective digital strategies to boost your online presence.</p>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Customized Web Design in Hoover</h2>
    <p className="text-gray-600">Understanding the Hoover market is key to our design process. We create websites that resonate with local audiences, ensuring your business stands out in the Hoover community.</p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h2>
    <p className="text-gray-600">Start your web design journey with us in Hoover, AL. Reach out today for a consultation, and lets create a website that drives results.</p>
  </section>
</div>

        </>
    );
}

export default WebDesignHoover;