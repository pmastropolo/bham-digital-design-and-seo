import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const email = 'bhamseodesignco@mail.com';

  return (
    <footer>
      <section aria-label="Site Footer" className="bg-white flex flex-col md:flex-row py-3 justify-center items-center">
        <p className="text-xs text-black pb-2">
          © {new Date().getFullYear()} Bham SEO & Design Co. All rights reserved.
        </p>
        </section>
        <section aria-label="Site Footer" className="bg-white flex flex-col md:flex-row py-3 justify-center items-center">
        <p className="text-xs text-black">
          Contact us at: <a href={`mailto:${email}`} className="text-indigo-600">{email}</a><br />
        </p>
      </section>
    </footer>
  );
};

export default Footer