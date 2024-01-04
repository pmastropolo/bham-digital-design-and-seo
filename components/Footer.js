import React from 'react';
import Link from 'next/link';
import SubscribeForm from './subbscribe'; 

const Footer = () => {
  const email = 'services@bhamseoanddesignco.com';
  const currentYear = new Date().getFullYear(); 

    return (
        <footer className="bg-white text-black p-4">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full sm:w-auto mb-8 sm:mb-0">
                <span className="font-bold mb-2 block">Explore</span>
                    <Link href="/" legacyBehavior>
                        <a className="block mb-2">Home</a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                        <a className="block mb-2">Contact</a>
                    </Link>
                    <Link href="/apply" legacyBehavior>
                        <a className="block mb-2">About Us & FAQ</a>
                    </Link>
                          <span className="font-bold mb-2 block">Forms</span>
                    <Link href="/seoConsultation" legacyBehavior>
                        <a className="block mb-2">SEO Form</a>
                    </Link>
                    <Link href="/webDesignConsultation" legacyBehavior>
                        <a className="block mb-2">Website Design Form</a>
                    </Link>
                    
                </div>
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                    <span className="font-bold mb-2 block">Our Expertise</span>
                    <Link href="/PackagePage" legacyBehavior>
                        <a className="block mb-2">Website Design</a>
                    </Link>
                    <Link href="/digitalmarketingg" legacyBehavior>
                        <a className="block mb-2">Digital Marketing</a>
                    </Link>
                    <Link href="/seopackagepage" legacyBehavior> 
                        <a className="block mb-2">SEO | Search Engine Optimization</a>
                    </Link>

                </div>
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                    <span className="font-bold mb-2 block">Service Agreements</span>
                    
                    <Link href="/privacy" legacyBehavior>
                        <a className="block mb-2">Privacy Policy</a>
                    </Link>
                    <Link href="/terms" legacyBehavior>
                        <a className="block mb-2">Terms & Conditions</a>
                    </Link>
                    <Link href="/billingTerms" legacyBehavior>
                        <a className="block mb-2">Payment Guidelines</a>
                    </Link>


                </div>
                <div className="w-full sm:w-auto">
          <span className="font-bold mb-2 block">Stay Updated — Subscribe Now</span>
          <SubscribeForm />
        </div>
        <div className="w-full text-center mt-6">
        <span className="mb-2 block">Email | {' '}
<a href="mailto:services@bhamseoanddesignco.com" style={{ color: 'purple' }}>services@bhamseoanddesignco.com</a></span>

          <p className="text-sm">
            © {currentYear} Bham Web Design & SEO Co. All rights reserved.
          </p>
    
        </div>
                </div>
      
        </footer>
    );
};

export default Footer;

