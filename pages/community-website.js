import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import CommunityPackages from '../components/CommunityPackages';                // COMMUNITY COMPONENT

const CommunityWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="🌐 Empower Your Community with Bham's Custom Web Development Services!"
              description="🤝 Bham Web Design and SEO Co. delivers exceptional community website development services. Build a vibrant online hub that brings your community together."
              openGraph={{
                  title: '🌐 Empower Your Community with Bhams Custom Web Development Services!',
                  description: '🤝 Bham Web Design and SEO Co. delivers exceptional community website development services. Build a vibrant online hub that brings your community together.',
                  url: 'https://bhamseoanddesignco.com/community-website-services',
                  type: 'website',
              }}
          />
          
<div className="bg-gradient-to-br from-green-500 to-blue-700 text-white py-16 px-6 shadow-2xl rounded-3xl mb-12 overflow-hidden">
  <div className="animate-pulse absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-green-400 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 bg-blue-400 rounded-full w-80 h-80 filter blur-3xl"></div>
  </div>

  <div className="relative z-10">
    <h2 className="text-6xl font-bold text-center mb-6">
      🌟 Empower Your Community with a Vibrant Online Platform!
    </h2>
    <p className="text-3xl text-center mb-8">
      Build lasting connections and engage effectively with a bespoke community website.
    </p>

    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8">
      <p className="text-2xl font-semibold text-gray-900 mb-6">
        At Bham Web Design and SEO Co., we specialize in crafting websites that bring communities together, fostering interaction and engagement.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Tailored Solutions for Community Engagement:
      </h3>

      <ul className="list-disc pl-10 text-xl text-gray-800 mb-6 space-y-2 text-left">
        <li><strong>Custom Designs</strong> | Reflect the spirit of your community with a unique and inviting website.</li>
        <li><strong>Interactive Features</strong> | Foster lively discussions and community involvement with integrated forums and event platforms.</li>
        <li><strong>Easy-to-Use CMS</strong> | Keep your community updated effortlessly with a user-friendly content management system.</li>
        <li><strong>Social Media Integration</strong> | Expand your reach and connect with more community members through integrated social platforms.</li>
        <li><strong>Responsive Layouts</strong> | Ensure everyone can access and interact with your site on any device.</li>
        <li><strong>Membership Management</strong> | Streamline member registration and profiles for a cohesive community experience.</li>
        <li><strong>Robust Security</strong> | Protect community data and conversations with top-tier website security.</li>
      </ul>

      <p className="text-2xl font-semibold text-gray-900 mb-8">
        Ready to unite and inspire your community? Contact us today and lets create a central hub that brings everyone together.
      </p>

      <div className="text-center">
      <Link href="/webDesignConsultation" legacyBehavior>
          <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
            Build Your Community Site
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>

<CommunityPackages />

      </>
  );
}

export default CommunityWebsiteServices;
