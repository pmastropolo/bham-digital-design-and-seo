import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

const NotFoundPage = () => {
  return (
    <>
      <NextSeo
        title="404 Not Found | Bham SEO & Design Co."
        description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
        noindex={true}  
        nofollow={true} 
      />
      <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
        <div>
          <h1 className="text-6xl font-bold text-gray-800">404</h1>
          <p className="text-2xl md:text-3xl font-light text-gray-600 mt-2 mb-6">
            Page Not Found
          </p>
          <p className="mb-8 text-gray-500">
            Oops! The page youre looking for doesnt seem to exist.
          </p>
          <Link href="/">
            <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Return Home
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
