import React from 'react';
import TermsandConditions from '../components/termsandconditions';
import { NextSeo } from 'next-seo';

const terms = () => (
  <>
    <NextSeo
      title="Terms and Conditions | Bham SEO & Design Co."
      description="Read the terms and conditions for using the Bham SEO & Design Co. website. Learn about our policies, user agreements, and legal information."
      canonical="https://bhamseoanddesignco.com/terms"
      openGraph={{
        url: 'https://bhamseoanddesignco.com/terms',
        title: 'Terms and Conditions | Bham SEO & Design Co.',
        description: 'Discover the detailed terms and conditions for engaging with services and content provided by Bham SEO & Design Co.',
      }}
      additionalMetaTags={[
        {
          property: 'keywords',
          content: 'terms and conditions, user agreement, legal policies, Bham SEO, website policies'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]}
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: 'none',
        maxVideoPreview: -1
      }}
    />
  
  <div>
    <TermsandConditions />
  </div>
  </>
);

export default terms;
