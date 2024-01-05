import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const WebDesignHelena = () => {
    return (
        <>
            <NextSeo
                title="Web Design Services in Helena, AL | Bham Web Design and SEO Co."
                description="Bham Web Design and SEO Co. specializes in web design services in Helena, AL. Explore our tailored web solutions designed to enhance your Helena business's online presence."
                openGraph={{
                    title: 'Web Design Services in Helena, AL | Bham Web Design and SEO Co.',
                    description: 'Bham Web Design and SEO Co. specializes in web design services in Helena, AL. Explore our tailored web solutions designed to enhance your Helena businesss online presence.',
                    url: 'https://bhamseoanddesignco.com/web-design-helena-al',
                    type: 'website',
                }}
            />
<div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
  <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Web Design Services in Helena, AL</h2>
  <p className="text-lg mb-8 text-gray-600">Welcome to Bham Web Design and SEO Co., your destination for professional web design services in Helena, AL. We focus on creating websites that reflect your brand and cater to the unique needs of your Helena business.</p>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Approach to Web Design in Helena</h2>
    <p className="text-gray-600">Understanding the Helena market is crucial to our web design process. Our goal is to deliver websites that not only look impressive but also effectively engage your target audience and drive business growth.</p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us for Your Web Design Project</h2>
    <p className="text-gray-600">Ready to enhance your online presence in Helena, AL? Contact Bham Web Design and SEO Co. today to discuss your web design needs and embark on a journey to strengthen your digital presence.</p>
  </section>
</div>

        </>
    );
}

export default WebDesignHelena;