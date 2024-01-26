import React from 'react';
import PPrivacyPolicy from '../components/PPrivacyPolicy';
import { NextSeo } from 'next-seo';

const privacy = () => (
  <>
    <NextSeo
      title="Privacy Policy | Bham Web Design and SEO Co."
      description="Learn about our privacy policy at Bham Web Design and SEO Co. We are committed to protecting your personal information and privacy."
      canonical="https://bhamseoanddesignco.com/privacy"
      openGraph={{
        url: 'https://bhamseoanddesignco.com/privacy',
        title: 'Privacy Policy | Bham Web Design and SEO Co.',
        description: 'Explore the privacy policy at Bham Web Design and SEO Co. Understand how we handle your personal information and protect your privacy.',
      }}
      additionalMetaTags={[
        {
          property: 'keywords',
          content: 'privacy, personal information, privacy policy, policy, data protection, Bham Web Design and SEO Co.'
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
    <PPrivacyPolicy />
  </div>
  </>
);

export default privacy;
