import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const WebDesignColumbiana = () => {
    return (
        <>
            <NextSeo
                title="Web Design Services in Columbiana, AL | Bham Web Design and SEO Co."
                description="Expert web design services in Columbiana, AL. Custom solutions for Columbiana businesses. Get in touch for a personalized approach!"
                openGraph={{
                    title: 'Web Design Services in Columbiana, AL | Bham Web Design and SEO Co.',
                    description: 'Expert web design services in Columbiana, AL. Custom solutions for Columbiana businesses. Get in touch for a personalized approach!',
                    url: 'https://www.yourwebsite.com/web-design-columbiana-al',
                    type: 'website',
                }}
            />
<div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
  <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Web Design Services in Columbiana, AL</h2>
  <p className="text-lg mb-8 text-gray-600">Discover our bespoke web design services for businesses in Columbiana, Alabama. Were dedicated to creating websites that not only look great but also drive results.</p>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Our Columbiana Web Design Services Stand Out</h2>
    <p className="text-gray-600">In Columbiana, we understand that every business is unique. Thats why our web design approach is tailored to meet your specific business needs, ensuring a digital presence that truly stands out.</p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
    <p className="text-gray-600">Ready to start your web design project in Columbiana, AL? Contact us today, and let’s discuss how we can help your business shine online.</p>
  </section>
</div>

        </>
    );
}

export default WebDesignColumbiana;