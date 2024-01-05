import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

const WebDesignBirmingham = () => {
    return (
        <>
            <NextSeo
                title="Web Design Services in Birmingham, AL | Bham Web Design and SEO Co."
                description="Expert web design services in Birmingham, AL. Our team provides custom web solutions to enhance your business's online presence in Birmingham."
                openGraph={{
                    title: 'Web Design Services in Birmingham, AL | Bham Web Design and SEO Co.',
                    description: 'Expert web design services in Birmingham, AL. Our team provides custom web solutions to enhance your businesss online presence in Birmingham.',
                    url: 'https://bhamseoanddesignco.com/web-design-birmingham-al',
                    type: 'website',
                }}
            />
           <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
  <h2 className="text-5xl font-extrabold text-gray-800 mt-4 mb-6">Web Design Services in Birmingham, AL</h2>
  <p className="text-lg mb-8 text-gray-600">At Bham Web Design and SEO Co., we specialize in creating stunning and effective web designs for businesses in Birmingham, AL. Our approach is tailored to meet the unique digital needs of the Birmingham market.</p>

  <section className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Web Design Expertise in Birmingham</h2>
    <p className="text-gray-600">We understand the Birmingham business landscape and offer web design solutions that not only look great but also drive business growth and engagement.</p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Start Your Project Today</h2>
    <p className="text-gray-600">Ready to elevate your online presence in Birmingham, AL? Contact us to discuss how we can bring your web design vision to life.</p>
  </section>
</div>

        </>
    );
}

export default WebDesignBirmingham;