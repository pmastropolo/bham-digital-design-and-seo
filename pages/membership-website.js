import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Membership from '../components/Membership';                              // MEMBERSHIP COMPONENT

const MembershipWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="🌟 Membership Website Development Services | Bham Web Design and SEO Co."
              description="🔐 Bham Web Design and SEO Co. offers professional membership website development services. Create exclusive and engaging websites for your membership-based organization."
              openGraph={{
                  title: '🌟 Membership Website Development Services | Bham Web Design and SEO Co.',
                  description: '🔐 Bham Web Design and SEO Co. offers professional membership website development services. Create exclusive and engaging websites for your membership-based organization.',
                  url: 'https://bhamseoanddesignco.com/membership-website-services',
                  type: 'website',
              }}
          />

<div className="bg-gradient-to-r from-yellow-400 to-yellow-500 mt-6 text-white py-16 px-6 shadow-2xl rounded-3xl mb-12 overflow-hidden">
  <div className="animate-pulse absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-yellow-600 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 bg-yellow-500 rounded-full w-80 h-80 filter blur-3xl"></div>
  </div>

  <div className="relative z-10">
    <h2 className="text-6xl font-bold text-center mb-6">
      Membership Website Development Services 
    </h2>
    <p className="text-3xl text-center mb-8">
      Create Exclusive and Engaging Websites for Your Membership-Based Organization 🏢
    </p>

    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8">
      <p className="text-2xl font-semibold text-gray-900 mb-6">
        Join Bham Web Design and SEO Co. in elevating your membership-based organization with a custom-designed website. Our expertise lies in creating platforms that cater specifically to the needs of professional associations, nonprofits, and other member-centric groups, providing an engaging and exclusive online space for your members.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Explore Our Membership Website Services:
      </h3>

      <ul className="list-disc pl-10 text-xl text-gray-800 mb-6 space-y-2 text-left">
        <li><strong>Custom Design</strong> | Tailored website design and development for your organization.</li>
        <li><strong>Member Registration</strong> | Secure member registration and login features.</li>
        <li><strong>Exclusive Content</strong> | Member-only content areas to add value and exclusivity.</li>
        <li><strong>Payment Processing</strong> | Easy membership management with payment processing.</li>
        <li><strong>Member Communication</strong> | Effective member communication tools for outreach.</li>
        <li><strong>Event Management</strong> | Event management and registration for community engagement.</li>
        <li><strong>Mobile-Responsive</strong> | Accessibility on all devices with mobile-responsive design.</li>
      </ul>

      <p className="text-2xl font-semibold text-gray-900 mb-8">
        Ready to provide your members with a premium online experience? Reach out to us today to start your membership website project and enhance your organizations digital presence.
      </p>

      <div className="text-center">
      <Link href="/webDesignConsultation" legacyBehavior>
          <a className="bg-yellow-500 hover:bg-yellow-700 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
            🚀 Launch Your Membership Site Now!
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>

          <Membership />
      </>
  );
}

export default MembershipWebsiteServices;
