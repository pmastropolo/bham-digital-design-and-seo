import React from 'react';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const email = 'services@bhamseoanddesignco.com';

  return (
    <footer className="bg-gray-800 text-gray-300 py-5">
      <section aria-label="Site Footer" className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
        <div className="flex items-center space-x-2 mb-3 md:mb-0">
          <MdEmail className="text-primary-500" size="1.5em" />
          <a href={`mailto:${email}`} className="hover:text-primary-500">
            {email}
          </a>
        </div>
        <div className="mb-3 md:mb-0">
          <Link href="/apply">About Us & FAQ</Link>
        </div>
        <div className="mb-3 md:mb-0">
          <Link href="/contact">Contact</Link>
        </div>
        <div className="mb-3 md:mb-0">
          <Link href="/PackagePage">Website Pricing</Link>
        </div>
        <div className="mb-3 md:mb-0">
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Bham SEO & Design Co. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
