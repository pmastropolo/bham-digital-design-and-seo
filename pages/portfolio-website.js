import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Portfolio from '../components/Portfolio';                                // PORTFOLIO COMPONENT

const PortfolioWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="🎨 Portfolio Website Development Services | Bham Web Design and SEO Co."
              description="🌐 Bham Web Design and SEO Co. offers professional portfolio website development services. Showcase your work and talents with a stunning, custom-designed portfolio website."
              openGraph={{
                  title: '🎨 Portfolio Website Development Services | Bham Web Design and SEO Co.',
                  description: '🌐 Bham Web Design and SEO Co. offers professional portfolio website development services. Showcase your work and talents with a stunning, custom-designed portfolio website.',
                  url: 'https://bhamseoanddesignco.com/portfolio-website-services',
                  type: 'website',
              }}
          />

          
<div className="bg-gradient-to-r from-cyan-300 to-cyan-300 text-white mt-8 py-16 px-6 shadow-2xl rounded-3xl mb-12 overflow-hidden">
  <div className="animate-pulse absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-cyan-500 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 bg-cyan-600 rounded-full w-80 h-80 filter blur-3xl"></div>
  </div>

  <div className="relative z-10">
    <h2 className="text-6xl font-bold text-center mb-6">
      Portfolio Website Development Services 🌟
    </h2>
    <p className="text-3xl text-center mb-8">
      Display Your Work and Talents with a Stunning Portfolio Website 🖼️
    </p>

    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8">
      <p className="text-2xl font-semibold text-gray-900 mb-6">
        At Bham Web Design and SEO Co., we craft portfolio websites that showcase your unique work and talents. Perfect for photographers, designers, artists, and all creative professionals, our services provide a visually appealing and professional platform to make a lasting impression.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Explore Our Portfolio Website Services:
      </h3>

      <ul className="list-disc pl-10 text-xl text-gray-800 mb-6 space-y-2 text-left">
        <li><strong>Custom Design</strong> | Reflect your personal style and brand with a custom design.</li>
        <li><strong>User-Friendly Galleries</strong> | Highlight your work with user-friendly galleries and showcases.</li>
        <li><strong>Easy-to-Use CMS</strong> | Hassle-free updates with an easy-to-use content management system.</li>
        <li><strong>Mobile-Responsive</strong> | Perfect viewing on any device with mobile-responsive design.</li>
        <li><strong>Social Media Integration</strong> | Connect with your audience through social media integration.</li>
        <li><strong>SEO Optimization</strong> | Enhance online visibility with SEO optimization.</li>
        <li><strong>Secure Hosting</strong> | Reliable and secure hosting for peace of mind.</li>
      </ul>

      <p className="text-2xl font-semibold text-gray-900 mb-8">
        Ready to showcase your work with a beautifully crafted portfolio website? Contact us today to discuss your project and lets create a digital space that truly highlights your creative talents.
      </p>

      <div className="text-center">
      <Link href="/webDesignConsultation" legacyBehavior>
          <a className="bg-cyan-500 hover:bg-cyan-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
            🖌️ Start Building Your Portfolio Now!
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>


          <Portfolio />
      </>
  );
}

export default PortfolioWebsiteServices;
