import React from 'react';
import Link from 'next/link';
import SubscribeForm from './subbscribe'; 

const Footer = () => {
  const email = 'services@bhamseoanddesignco.com';

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
          <span className="font-bold mb-2 block">Subscribe to Our Email Newsletter</span>
          <SubscribeForm />
        </div>
                </div>
      
        </footer>
    );
};

export default Footer;
