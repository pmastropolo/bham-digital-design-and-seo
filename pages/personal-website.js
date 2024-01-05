import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Personal from '../components/Personal';                                  // PERSONAL COMPONENT

const PersonalWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="🌟 Personal Website Development Services | Bham Web Design and SEO Co."
              description="👤 Bham Web Design and SEO Co. offers expert personal website development services. Showcase your skills, portfolio, or personal brand with a distinctive custom website."
              openGraph={{
                  title: '🌟 Personal Website Development Services | Bham Web Design and SEO Co.',
                  description: '👤 Bham Web Design and SEO Co. offers expert personal website development services. Showcase your skills, portfolio, or personal brand with a distinctive custom website.',
                  url: 'https://bhamseoanddesignco.com/personal-website-services',
                  type: 'website',
              }}
          />


<div className="bg-gradient-to-r from-pink-900 to-pink-900 text-white mt-6 py-16 px-6 shadow-2xl rounded-3xl mb-12 overflow-hidden">
  <div className="animate-pulse absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-pink-500 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 bg-pink-800 rounded-full w-80 h-80 filter blur-3xl"></div>
  </div>

  <div className="relative z-10">
    <h2 className="text-6xl font-bold text-center mb-6">
      Personal Website Development Services 🎨
    </h2>
    <p className="text-3xl text-center mb-8">
      Showcase Your Skills, Portfolio, or Personal Brand with a Unique Custom Website 💼
    </p>

    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8">
      <p className="text-2xl font-semibold text-gray-900 mb-6">
        Join Bham Web Design and SEO Co. in creating a personal website that reflects your unique talents and brand. Ideal for artists, freelancers, bloggers, and entrepreneurs, our services are tailored to help you establish a compelling and memorable online presence.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Explore Our Personal Website Services:
      </h3>

      <ul className="list-disc pl-10 text-xl text-gray-800 mb-6 space-y-2 text-left">
        <li><strong>Custom Design</strong> | Tailored personal website design and development for your unique style.</li>
        <li><strong>Portfolio Showcase</strong> | Highlight your work with a portfolio and project showcase.</li>
        <li><strong>Blog Integration</strong> | Share your thoughts and content with integrated blogging.</li>
        <li><strong>Contact Forms</strong> | Engage your audience with contact forms and lead generation tools.</li>
        <li><strong>Social Media Integration</strong> | Enhance your online presence with social media integration.</li>
        <li><strong>Mobile-Responsive</strong> | Seamless viewing on all devices with mobile-responsive design.</li>
        <li><strong>Personal Branding</strong> | Develop your personal brand and identity to make your mark.</li>
        <li><strong>SEO Optimization</strong> | Increase visibility with SEO optimization.</li>
      </ul>

      <p className="text-2xl font-semibold text-gray-900 mb-8">
        Ready to build your personal brand online? Contact us today to begin crafting a personal website that truly represents you and stands out in the digital world.
      </p>

      <div className="text-center">
      <Link href="/webDesignConsultation" legacyBehavior>
          <a className="bg-pink-600 hover:bg-pink-700 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
            🌐 Personal Website Consultation Form
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>

<Personal />
      </>
  );
}

export default PersonalWebsiteServices;
