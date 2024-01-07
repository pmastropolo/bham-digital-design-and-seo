import React from 'react';
import Link from 'next/link';

const Sitemap = () => {
    return (
<div className="sitemap mt-12 mb-20 max-w-4xl mx-auto">
  
   {/* Website Navigation Header */}
  <h2 className="text-3xl font-semibold text-blue-800 underline mb-2 mt-6">Website Navigation</h2>
  <ul className="list-none p-0">
    
    {/* Homepage */}
    <li className="mb-8">
      <Link href="/" legacyBehavior>
        <a className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Homepage</a>
      </Link>
    </li>

        {/* Contact */}
        <li className="mb-8">
      <Link href="/contact" legacyBehavior>
        <a className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Contact</a>
      </Link>
    </li>
    
    {/* About Us & FAQ */}
    <li className="mb-8">
      <Link href="/apply" legacyBehavior>
        <a className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">About Us & FAQ</a>
      </Link>
    </li>

        {/* Service Areas */}
        <li className="mb-8">
      <Link href="/serviceareas" legacyBehavior>
        <a className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Service Areas</a>
      </Link>
    </li>

 {/* Form Title/Header*/}
    <h2 className="text-3xl font-semibold text-blue-800 underline mb-2 mt-4">Forms</h2>

        {/* SEO Form */}
        <li className="mb-8">
      <Link href="/seoConsultation" legacyBehavior>
        <a className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Form</a>
      </Link>
    </li>
    
    {/* Web Design Form */}
    <li className="mb-8">
      <Link href="/webDesignConsultation" legacyBehavior>
        <a className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Website Design Form</a>
      </Link>
    </li>


     {/* Our Expertise Title/Header*/}
     <h2 className="text-3xl font-semibold text-blue-800 mb-2 mt-4 underline">Our Expertise</h2>

             {/* Web Design */}
             <li className="mb-8">
      <Link href="/PackagePage" legacyBehavior>
        <a className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design & Development</a>
      </Link>
    </li>

               {/* SEO */}
               <li className="mb-8">
      <Link href="/seopackagepage" legacyBehavior>
        <a className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO | Search Engine Optimization</a>
      </Link>
    </li>
    



     {/* Web Design Title/Header*/}
    <h3 className="text-3xl font-semibold text-blue-800 mb-2 mt-4 underline">Websites</h3>
<ul className="list-inside pl-8 mt-4 space-y-2">

  {/* Blog Website */}
  <li>
    <Link href="/blog-website" legacyBehavior>
      <a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Blog Website</a>
    </Link>
  </li>
  
  {/* Business Website */}
  <li>
    <Link href="/business-website" legacyBehavior><a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Business Website</a>
    </Link>
  </li>
  
  {/* Community Website */}
  <li className="mb-8">
    <Link href="/community-website" legacyBehavior>
      <a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Community Website</a>
    </Link>
  </li>
  
  {/* Ecommerce Website */}
  <li className="mb-8">
    <Link href="/ecommerce-website" legacyBehavior>
      <a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Ecommerce Website</a>
    </Link>
  </li>
  
  {/* Educational Website */}
  <li className="mb-8">
    <Link href="/educational-website" legacyBehavior>
      <a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Educational Website</a>
    </Link>
  </li>
  
  {/* Entertainment Website */}
  <li className="mb-8">
    <Link href="/entertainment-website" legacyBehavior>
      <a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Entertainment Website</a>
    </Link>
  </li>
  
  {/* Event Website */}
  <li className="mb-8">
    <Link href="/event-website" legacyBehavior>
      <a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Event Website</a>
    </Link>
  </li>
  
  {/* Health and Wellness Website */}
  <li className="mb-8">
    <Link href="/health-and-wellness-website" legacyBehavior>
      <a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Health and Wellness Website</a>
    </Link>
  </li>
  
  {/* Landing Page Website */}
  <li className="mb-8">
    <Link href="/landing-page-website" legacyBehavior>
      <a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Landing Page Website</a>
    </Link>
  </li>
  
  {/* Membership Website */}
  <li className="mb-8">
    <Link href="/membership-website" legacyBehavior>
      <a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Membership Website</a>
    </Link>
  </li>
  
  {/* Personal Website */}
  <li className="mb-8">
    <Link href="/personal-website" legacyBehavior>
      <a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Personal Website</a>
    </Link>
  </li>
  
  {/* Portfolio Website */}
  <li className="mb-8">
    <Link href="/portfolio-website" legacyBehavior>
      <a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Portfolio Website</a>
    </Link>
  </li>
  
  {/* Real Estate Website */}
  <li className="mb-8">
    <Link href="/real-estate-website" legacyBehavior>
      <a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Real Estate Website</a>
    </Link>
  </li>
  
  {/* Restaurant Website */}
  <li className="mb-8">
    <Link href="/restaurant-website" legacyBehavior>
      <a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Restaurant Website</a>
    </Link>
  </li>
</ul>

{/* Web Design Service Areas Title Header */}
<h3 className="text-3xl font-semibold text-blue-800 mb-2 mt-4 underline">Web Design Service Areas</h3>

{/* Web Design Alabaster */}
<li className="mb-8">
    <Link href="/web-design-in-alabaster-al" legacyBehavior><a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Web Design Services in Alabaster, AL</a></Link>
</li>

{/* Web Design Bessemer */}
<li className="mb-8">
    <Link href="/web-design-in-bessemer-al" legacyBehavior><a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Web Design Services in Bessemer, AL</a></Link>
</li>

{/* Web Design Birmingham */}
<li>
    <Link href="/web-design-in-birmingham-al" legacyBehavior><a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Web Design Services in Birmingham, AL</a></Link>
</li>

{/* Web Design Chelsea */}
<li>
    <Link href="/web-design-in-chelsea-al" legacyBehavior><a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Web Design Services in Chelsea, AL</a></Link>
</li>

{/* Web Design Clanton */}
<li>
  <Link href="/web-design-in-clanton-al" legacyBehavior><a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Web Design Services in Clanton, AL</a></Link>
</li>

{/* Web Design Columbiana */}
<li>
  <Link href="/web-design-in-columbiana-al" legacyBehavior><a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">Web Design Services in Columbiana, AL</a></Link>
</li>
    
<li className="mb-8">
  {/* Web Design Services in Fultondale, AL */}
  <Link href="/web-design-in-fultondale-al" legacyBehavior>
    <a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Fultondale, AL</a>
  </Link>
</li>

<li className="mb-8">
  {/* Web Design Services in Gardendale, AL */}
  <Link href="/web-design-in-gardendale-al" legacyBehavior>
    <a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Gardendale, AL</a>
  </Link>
</li>

<li className="mb-8">
  {/* Web Design Services in Greystone, AL */}
  <Link href="/web-design-in-greystone-al" legacyBehavior>
    <a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Greystone, AL</a>
  </Link>
</li>

<li className="mb-8">
  {/* Web Design Services in Helena, AL */}
  <Link href="/web-design-in-helena-al" legacyBehavior>
    <a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Helena, AL</a>
  </Link>
</li>

<li className="mb-8">
  {/* Web Design Services in Homewood, AL */}
  <Link href="/web-design-in-homewood-al" legacyBehavior>
    <a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Homewood, AL</a>
  </Link>
</li>

<li className="mb-8">
  {/* Web Design Services in Hoover, AL */}
  <Link href="/web-design-in-hoover-al" legacyBehavior>
    <a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Hoover, AL</a>
  </Link>
</li>

<li className="mb-8">
  {/* Web Design Services in Hueytown, AL */}
  <Link href="/web-design-in-hueytown-al" legacyBehavior>
    <a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Hueytown, AL</a>
  </Link>
</li>

{/* Web Design Irondale */}
<li className="mb-8">
    <Link href="/web-design-in-irondale-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Irondale, AL</a></Link>
</li>

{/* Web Design Jemison */}
<li className="mb-8">
    <Link href="/web-design-in-jemison-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Jemison, AL</a></Link>
</li>

{/* Web Design Leeds */}
<li className="mb-8">
    <Link href="/web-design-in-leeds-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Leeds, AL</a></Link>
</li>

{/* Web Design McCalla */}
<li className="mb-8">
    <Link href="/web-design-in-mccalla-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in McCalla, AL</a></Link>
</li>

{/* Web Design Meadowbrook */}
<li className="mb-8">
    <Link href="/web-design-in-meadowbrook-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Meadowbrook, AL</a></Link>
</li>

{/* Web Design Montevallo */}
<li className="mb-8">
    <Link href="/web-design-in-montevallo-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Montevallo, AL</a></Link>
</li>

{/* Web Design Moody */}
<li className="mb-8">
    <Link href="/web-design-in-moody-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Moody, AL</a></Link>
</li>

{/* Web Design Mountain Brook */}
<li className="mb-8">
    <Link href="/web-design-in-mountain-brook-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Mountain Brook, AL</a></Link>
</li>

{/* Web Design Pelham */}
<li className="mb-8">
    <Link href="/web-design-in-pelham-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Pelham, AL</a></Link>
</li>

{/* Web Design Pinson */}
<li className="mb-8">
    <Link href="/web-design-in-pinson-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Pinson, AL</a></Link>
</li>

{/* Web Design Pleasant Grove */}
<li className="mb-8">
    <Link href="/web-design-in-pleasant-grove-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Pleasant Grove, AL</a></Link>
</li>

{/* Web Design Shelby */}
<li className="mb-8">
    <Link href="/web-design-in-shelby-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Shelby, AL</a></Link>
</li>

{/* Web Design Sylacauga */}
<li className="mb-8">
    <Link href="/web-design-in-sylacauga-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Sylacauga, AL</a></Link>
</li>

{/* Web Design Trussville */}
<li className="mb-8">
    <Link href="/web-design-in-trussville-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Trussville, AL</a></Link>
</li>

{/* Web Design Vestavia Hills */}
<li className="mb-8">
    <Link href="/web-design-in-vestavia-hills-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Vestavia Hills, AL</a></Link>
</li>

{/* Web Design Wilsonville */}
<li className="mb-8">
    <Link href="/web-design-in-wilsonville-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Wilsonville, AL</a></Link>
</li>

{/* Web Design Woodstock */}
<li className="mb-8">
    <Link href="/web-design-in-woodstock-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Web Design Services in Woodstock, AL</a></Link>
</li>



                    
{/* SEO Service Areas Title Header */}
<h3 className="text-3xl font-semibold text-blue-800 mb-2 mt-4 underline">SEO | Search Engine Optimization Service Areas</h3>

 {/* SEO Alabaster */}
<li className="mb-8">
    <Link href="/seo-services-in-alabaster-al" legacyBehavior><a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">SEO Services in Alabaster, AL</a></Link>
</li>

 {/* SEO Bessemer */}
<li className="mb-8">
    <Link href="/seo-services-in-bessemer-al" legacyBehavior><a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">SEO Services in Bessemer, AL</a></Link>
</li>

 {/* SEO Birmingham */}
<li>
    <Link href="/seo-services-in-birmingham-al" legacyBehavior><a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">SEO Services in Birmingham, AL</a></Link>
</li>

{/* SEO Chelsea */}
<li>
    <Link href="/seo-services-in-chelsea-al" legacyBehavior><a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">SEO Services in Chelsea, AL</a></Link>
</li>

{/* SEO Bessemer */}
<li>
  <Link href="/seo-services-in-clanton-al" legacyBehavior><a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">SEO Services in Clanton, AL</a></Link>
</li>

{/* SEO Columbiana */}
<li>
  <Link href="/seo-services-in-columbiana-al" legacyBehavior><a className="text-xl text-blue-600 hover:text-blue-800 transition duration-300 font-medium">SEO Services in Columbiana, AL</a></Link>
</li>
    
<li className="mb-8">
  {/* SEO Services in Fultondale, AL */}
  <Link href="/seo-services-in-fultondale-al" legacyBehavior>
    <a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Fultondale, AL</a>
  </Link>
</li>

<li className="mb-8">
  {/* SEO Services in Gardendale, AL */}
  <Link href="/seo-services-in-gardendale-al" legacyBehavior>
    <a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Gardendale, AL</a>
  </Link>
</li>

<li className="mb-8">
  {/* SEO Services in Greystone, AL */}
  <Link href="/seo-services-in-greystone-al" legacyBehavior>
    <a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Greystone, AL</a>
  </Link>
</li>

<li className="mb-8">
  {/* SEO Services in Helena, AL */}
  <Link href="/seo-services-in-helena-al" legacyBehavior>
    <a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Helena, AL</a>
  </Link>
</li>

<li className="mb-8">
  {/* SEO Services in Homewood, AL */}
  <Link href="/seo-services-in-homewood-al" legacyBehavior>
    <a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Homewood, AL</a>
  </Link>
</li>

<li className="mb-8">
  {/* SEO Services in Hoover, AL */}
  <Link href="/seo-services-in-hoover-al" legacyBehavior>
    <a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Hoover, AL</a>
  </Link>
</li>

<li className="mb-8">
  {/* SEO Services in Hueytown, AL */}
  <Link href="/seo-services-in-hueytown-al" legacyBehavior>
    <a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Hueytown, AL</a>
  </Link>
</li>

    <li className="mb-8">
        <Link href="/seo-services-in-irondale-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Irondale, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-jemison-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Jemison, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-leeds-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Leeds, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-mccalla-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in McCalla, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-meadowbrook-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Meadowbrook, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-montevallo-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Montevallo, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-moody-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Moody, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-mountain-brook-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Mountain Brook, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-pelham-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Pelham, AL</a></Link>
    </li>




    <li className="mb-8">
        <Link href="/seo-services-in-pinson-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Pinson, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-pleasant-grove-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Pleasant Grove, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-shelby-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Shelby, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-sylacauga-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Sylacauga, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-trussville-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Trussville, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-vestavia-hills-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Vestavia Hills, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-wilsonville-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Wilsonville, AL</a></Link>
    </li>
    <li className="mb-8">
        <Link href="/seo-services-in-woodstock-al" legacyBehavior><a className="text-xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">SEO Services in Woodstock, AL</a></Link>
    </li>

{/* Term Header */}
<h3 className="text-3xl font-semibold text-blue-800 mb-2 mt-4 underline">Terms</h3>

<ul className="list-inside pl-8 mt-4 space-y-2">
  {/* Payment Guidelines */}
  <li className="mb-8">
    <Link href="/billingTerms" legacyBehavior>
      <a className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Payment Guidelines</a>
    </Link>
  </li>

  {/* Terms & Conditions */}
  <li className="mb-8">
    <Link href="/terms" legacyBehavior>
      <a className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Terms & Conditions</a>
    </Link>
  </li>

  {/* Privacy Policy */}
  <li className="mb-8">
    <Link href="/privacy" legacyBehavior>
      <a className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300 font-medium">Privacy Policy</a>
    </Link>
  </li>
</ul>
</ul>

  {/* Border bottom gray */}
<div className="border-bottom-gr"></div>
</div>

    );
}

export default Sitemap;
