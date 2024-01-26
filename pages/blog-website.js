import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import BlogPackages from '../components/BlogPackages';                          // BLOG COMPONENT

const BlogWebsiteServices = () => {
    return (
      <>
        <NextSeo
          title="💫 Elevate Your Brand with Bham's Premier Blog Development Services!"
          description="Revolutionize your online presence with Bham Web Design and SEO Co. - Your gateway to custom, SEO-optimized blog platforms designed to captivate and engage."
          canonical="https://bhamseoanddesignco.com/blog-website-services"
          openGraph={{
            url: 'https://bhamseoanddesignco.com/blog-website-services',
            title: '💫 Elevate Your Brand with Bhams Premier Blog Development Services!',
            description: 'Revolutionize your online presence with Bham Web Design and SEO Co. - Your gateway to custom, SEO-optimized blog platforms designed to captivate and engage.',
            type: 'website',
          }}
          additionalMetaTags={[
            {
              property: 'keywords',
              content: 'Blog Development, Responsive Design, CMS, SEO Blogging, Bham Web Design, Custom Blog Platforms, Engaging Blog Content'
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1'
            },
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

<div className="bg-gradient-to-br from-blue-500 to-blue-800 text-white mt-8 py-16 px-6 shadow-2xl rounded-3xl mb-12 overflow-hidden">
  <div className="animate-pulse absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-blue-400 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 bg-blue-400 rounded-full w-80 h-80 filter blur-3xl"></div>
  </div>
  
  <div className="relative z-10">
    <h2 className="text-6xl font-bold text-center mb-4">
      🔥 Set Your Brand Ablaze!
    </h2>
    <p className="text-3xl text-center mb-8">
      Capture the market with Bhams Elite Blog Development.
    </p>
  
    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8">
      <p className="text-2xl font-semibold text-gray-900 mb-6">
        Elevate your digital presence with <span className="text-blue-600 font-bold">Bham Web Design and SEO Co.</span> – Your key to digital mastery.
      </p>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Why Partner with Bham
      </h3>
      
      <ul className="list-disc pl-10 text-xl text-gray-800 mb-6 space-y-2 text-left">
  <li><strong>Global Influence</strong> | Reach an international audience and connect with readers worldwide, making your blog a global hub of ideas and interaction.</li>
  <li><strong>Income Potential</strong> | Turn your blog into a profitable venture with opportunities like affiliate marketing, advertisements, and sponsored content.</li>
  <li><strong>Creative Freedom</strong> | Personalize your blog with unique designs and content, reflecting your individual style and passion.</li>
  <li><strong>Authority Building</strong> | Establish yourself as an expert in your niche, gaining credibility and opening doors to new opportunities.</li>
  <li><strong>Community Engagement</strong> | Create a loyal community by interacting with your readers, fostering a space for shared interests and discussions.</li>
</ul>    
      <p className="text-2xl font-semibold text-gray-900 mb-8">
        Transform your blog into a digital powerhouse. Collaborate with us for a journey to unparalleled digital success!
      </p>
      
      <div className="text-center">
      <Link href="/webDesignConsultation" legacyBehavior>
          <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
            Begin Your Blogging Journey
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>





<BlogPackages />
      </>
  );
}

export default BlogWebsiteServices;
