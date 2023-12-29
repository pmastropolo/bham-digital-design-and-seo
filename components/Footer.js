import React from 'react';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const email = 'services@bhamseoanddesignco.com';

  return (
    <footer className="bg-white text-black py-5">
      <section aria-label="Site Footer" className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center space-x-2">

          {/* EMAIL */}
          <MdEmail className="text-black" size="1.7em" />
          <a href={`mailto:${email}`} className="hover:text-gray-800">
            {email}
          </a>
        </div>

        {/* ABOUT US PAGE LINK */}
        <div className="my-3 md:my-0">
          <Link href="/apply" legacyBehavior>
            <a className="hover:text-gray-800">About Us & FAQ</a>
          </Link>
        </div>

        {/* CONTACT US LINK */}
        <div className="my-3 md:my-0">
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-gray-800">Contact</a>
          </Link>
        </div>

        {/* Website Pricing Link */}
        <div className="my-3 md:my-0">
          <Link href="/PackagePage" legacyBehavior>
            <a className="hover:text-primary-500">Website Pricing</a>
          </Link>
        </div>

        {/* Privacy Policy Link */}
        <div className="my-3 md:my-0">
          <Link href="/privacy" legacyBehavior>
            <a className="hover:text-primary-500">Privacy Policy</a>
          </Link>
        </div>
   
        <p>
          &copy; {new Date().getFullYear()} Bham SEO & Design Co. All rights reserved.
        </p>

      </section>
    </footer>
  );

};

export default Footer;
