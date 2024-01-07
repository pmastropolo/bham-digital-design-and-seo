import React from 'react';
import Link from 'next/link';
import SubscribeForm from './subbscribe'; 

const Footer = () => {
  const email = 'services@bhamseoanddesignco.com';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black p-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* Explore Section */}
        <div className="w-full sm:w-auto mb-8 sm:mb-0">
          <span className="font-bold mb-2 block">Explore</span>
          <Link href="/" legacyBehavior><a className="block mb-2">Home</a></Link>
          <Link href="/contact" legacyBehavior><a className="block mb-2">Contact</a></Link>
          <Link href="/apply" legacyBehavior><a className="block mb-2">About Us & FAQ</a></Link>
          <Link href="/serviceareas" legacyBehavior><a className="block mb-2">Service Areas</a></Link>
          <Link href="/site-map" legacyBehavior><a className="block mb-2">Sitemap</a></Link>
        </div>

        {/* Our Expertise Section */}
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <span className="font-bold mb-2 block">Our Expertise</span>
          <Link href="/PackagePage" legacyBehavior><a className="block mb-2">Website Design</a></Link>
          <Link href="/seopackagepage" legacyBehavior><a className="block mb-2">SEO | Search Engine Optimization</a></Link>
          <span className="font-bold mb-2 block">Forms</span>
          <Link href="/seoConsultation" legacyBehavior><a className="block mb-2">SEO Form</a></Link>
          <Link href="/webDesignConsultation" legacyBehavior><a className="block mb-2">Website Design Form</a></Link>
        </div>

        {/* Service Agreements Section */}
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <span className="font-bold mb-2 block">Service Agreements</span>
          <Link href="/privacy" legacyBehavior><a className="block mb-2">Privacy Policy</a></Link>
          <Link href="/terms" legacyBehavior><a className="block mb-2">Terms & Conditions</a></Link>
          <Link href="/billingTerms" legacyBehavior><a className="block mb-2">Payment Guidelines</a></Link>
        </div>

        {/* Subscribe Form */}
        <div className="w-full sm:w-auto">
          <span className="font-bold mb-2 block">Stay Updated — Subscribe Now</span>
          <SubscribeForm />
        </div>

        {/* Contact and Copyright */}
        <div className="w-full text-center mt-6">
          <span className="mb-2 block">
            Email | <a href={`mailto:${email}`} className="text-purple-600 hover:text-purple-800">services@bhamseoanddesignco.com</a>
          </span>
          <p className="text-sm">© {currentYear} Bham Web Design & SEO Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

