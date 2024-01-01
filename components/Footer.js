import React from 'react';
import Link from 'next/link';
import SubscribeForm from './subbscribe'; 

const Footer = () => {
  const email = 'services@bhamseoanddesignco.com';
  const currentYear = new Date().getFullYear(); 

    return (
        <footer className="bg-white text-black p-4">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                    <Link href="/" legacyBehavior>
                        <a className="block mb-2">Home</a>
                    </Link>
                    <Link href="/apply" legacyBehavior>
                        <a className="block mb-2">About Us & FAQ</a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                        <a className="block mb-2">Contact</a>
                    </Link>
                    <Link href="/privacy" legacyBehavior>
                        <a className="block mb-2">Privacy Policy</a>
                    </Link>
                </div>
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                    <span className="font-bold mb-2 block">Services:</span>
                    <Link href="/digitalmarketingg" legacyBehavior>
                        <a className="block mb-2">Digital Marketing</a>
                    </Link>
                    <Link href="/seopackagepage" legacyBehavior>
                        <a className="block mb-2">SEO</a>
                    </Link>
                    <a href={`mailto:${email}`} className="block mb-2">{email}</a>

                </div>
                <div className="w-full sm:w-auto">
          <span className="font-bold mb-2 block">Join Our Email List</span>
          <SubscribeForm />
        </div>
        <div className="w-full text-center mt-4">
          <p className="text-sm">
            © {currentYear} Bham SEO and Design Co. All rights reserved.
          </p>
        </div>
                </div>
      
        </footer>
    );
};

export default Footer;
