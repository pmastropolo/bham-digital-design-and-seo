import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const WebDesignLeeds = () => {
    return (
        <>
            <NextSeo
                title="Web Design Services in Leeds, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. specializes in web design services in Leeds, AL. Explore our customized web solutions designed to enhance your online presence in Leeds."
                openGraph={{
                    title: 'Web Design Services in Leeds, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. specializes in web design services in Leeds, AL. Explore our customized web solutions designed to enhance your online presence in Leeds.',
                    url: 'https://bhamseoanddesignco.com/web-design-leeds-al',
                    type: 'website',
                }}
            />
<div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
  <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Web Design Services in Leeds, AL</h2>
  <p className="text-lg mb-8 text-gray-600">Welcome to Bham Web Design and SEO Co., your go-to source for professional web design services in Leeds, AL. We focus on creating websites that effectively showcase your brand and resonate with your Leeds audience.</p>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us for Web Design in Leeds?</h2>
    <p className="text-gray-600">In Leeds, AL, a strong web presence is crucial. Our web design solutions are tailored to meet the unique needs and goals of your Leeds business, ensuring a powerful and engaging online presence.</p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ready to Elevate Your Online Presence?</h2>
    <p className="text-gray-600">If youre ready to enhance your digital footprint in Leeds, AL, contact Bham Web Design and SEO Co. today. Lets discuss your web design project and take the first steps towards online success.</p>
  </section>
</div>

        </>
    );
}

export default WebDesignLeeds;