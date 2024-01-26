import React from 'react';
import { NextSeo } from 'next-seo';
import PaymentTerms from '../components/PaymentTerms';

const BillingTerms = () => {
  return (
    <>
      <NextSeo
        title="Billing Terms | Bham Web Design and SEO Co."
        description="Explore the billing terms and conditions at Bham Web Design and SEO Co. Understand our payment processes and policies in detail."
        canonical="https://bhamseoanddesignco.com/billingTerms"
        openGraph={{
          url: 'https://bhamseoanddesignco.com/billingTerms',
          title: 'Billing Terms | Bham Web Design and SEO Co.',
          description: 'Explore the billing terms and conditions at Bham Web Design and SEO Co. Understand our payment processes and policies in detail.'
        }}
        additionalMetaTags={[
          {
            property: 'keywords',
            content: 'Billing, Payment Terms, Bham Web Design and SEO Co., Payment Policies, Invoice Terms'
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
        <PaymentTerms />
      </div>
    </>
  );
}

export default BillingTerms;
