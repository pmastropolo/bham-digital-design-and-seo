import React from 'react';
import Link from 'next/link';

const realestatePackages = [
  {
    "name": "Realtor Starter Website Package",
    "price": "$1,200 - $2,500",
    "duration": "4 Weeks",
    "features": [
      "- Clean and Professional Design",
      "- Basic Property Listing Functionality",
      "- Contact Form with Lead Capture",
      "- Mobile-Responsive Layout"
    ],
    "websiteIncludes": [
      "Home Page with Featured Listings",
      "About Page for Realtor or Agency Profile",
      "Property Listings Page",
      "Contact Page with Form"
    ],
    "totalPages": "4-6",
    "idealFor": "Individual Realtors or Small Agencies Looking to Establish an Online Presence."
  },
  {
    "name": "Enhanced Real Estate Website Package",
    "price": "$3,000 - $6,000",
    "duration": "6 Weeks",
    "features": [
      "- Advanced Property Search Features",
      "- High-Quality Image Galleries for Listings",
      "- SEO Optimization for Local Market",
      "- Integrated Blog for Market Insights"
    ],
    "websiteIncludes": [
      "Dynamic Home Page with Search Functionality",
      "Detailed Property Pages",
      "Agent Profiles with Listings",
      "Client Testimonials and Reviews Page"
    ],
    "totalPages": "10-15",
    "idealFor": "Growing Real Estate Agencies Seeking to Enhance Online User Experience and Listing Visibility."
  },
  {
    "name": "Premium Real Estate Agency Website Package",
    "price": "$7,000 - $12,000",
    "duration": "10 Weeks",
    "features": [
      "- Custom, High-End Web Design",
      "- Interactive Maps and Virtual Tours",
      "- CRM and Lead Management Integration",
      "- Comprehensive SEO and Analytics Suite"
    ],
    "websiteIncludes": [
      "Customized Landing Pages for Featured Properties",
      "Neighborhood Guides and Market Trends",
      "Advanced Search with Filters",
      "Dedicated Resource Center for Buyers and Sellers"
    ],
    "totalPages": "20-30",
    "idealFor": "Established Real Estate Firms Looking for a Comprehensive and Interactive Online Platform."
  },
  {
    "name": "Elite Real Estate Digital Platform Package",
    "price": "$15,000+",
    "duration": "16+ Weeks",
    "features": [
      "- State-of-the-Art Platform Design",
      "- Full-Scale Property Listing Database",
      "- Automated Marketing and Lead Nurturing Tools",
      "- Multi-Language Support for Global Reach"
    ],
    "websiteIncludes": [
      "Ultra-Modern Home Page with Featured Properties",
      "Extensive Property Database with User Accounts",
      "Agent and Broker Profile Pages",
      "Investor Relations and Market Analytics Section"
    ],
    "totalPages": "30+",
    "idealFor": "Top-Tier Real Estate Agencies and Property Developers Needing an Advanced Digital Solution for Global Real Estate Markets."
  }
];

const RealEstate = () => {
  return (

        <div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "0px 3px 2px rgba(0, 0, 230, 0.5)" }}>
          <div className="p-4 sm:p-3">
          <div className="bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-blue-200 transition-colors duration-300 p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Real Estate Elevated
              </h1>
              <p className="text-sm sm:text-md md:text-lg text-gray-100 mt-2 sm:mt-4">
              Results Amplified
              </p>
            </div>
    
<h4 className="text-4xl mt-2 font-semibold text-gray-800 mt-6">Premier <span className="text-blue-400">Real Estate</span> Website Package</h4>
<p className="text-md text-gray-700 mt-4 mb-4">Elevate your property business with our Premier Real Estate Website Package. Designed for real estate agents, brokers, and property managers, this package offers a sophisticated platform to showcase properties, attract potential buyers or tenants, and streamline the real estate transaction process.</p>

      <div className="custom-category-card-container">


<div class="custom-category-card">
  <div class="custom-category-icon">📱</div>
  <span class="custom-category-title">Mobile-Friendly</span>
  <div class="custom-category-description">Ensures your site looks great on all devices.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📬</div>
  <span class="custom-category-title">Lead Capture</span>
  <div class="custom-category-description">Contact forms to capture potential leads.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🏢</div>
  <span class="custom-category-title">Listing Functionality</span>
  <div class="custom-category-description">Showcase properties effectively.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🔍</div>
  <span class="custom-category-title">Advanced Search</span>
  <div class="custom-category-description">Helps users find properties easily.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🖼️</div>
  <span class="custom-category-title">Image Galleries</span>
  <div class="custom-category-description">High-quality images for listings.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📝</div>
  <span class="custom-category-title">Integrated Blog</span>
  <div class="custom-category-description">Share market insights and news.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🗺️</div>
  <span class="custom-category-title">Maps & Tours</span>
  <div class="custom-category-description">Engage users with interactive features.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📊</div>
  <span class="custom-category-title">CRM Integration</span>
  <div class="custom-category-description">Efficient lead management.</div>
</div>
</div>

{/* BENEFITS section */}
<div className="mt-6">
  <h5 className="text-3xl font-semibold text-gray-800">Benefits of Owning a Real Estate Website</h5>
  <hr className="mb-3 mt-3" />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">

    {/* Always Open Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Always Open</h6>
      <p className="description">Your properties shine online 24/7, always accessible to potential buyers.</p>
    </div>

    {/* Reach Far and Wide Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Reach Far and Wide</h6>
      <p className="description">Attract buyers from everywhere, not just locally.</p>
    </div>

    {/* Showcase Like a Pro Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Showcase Like a Pro</h6>
      <p className="description">Stunning virtual tours and galleries make your listings irresistible.</p>
    </div>

    {/* Generate & Track Leads Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Generate & Track Leads</h6>
      <p className="description">Easily collect and manage client inquiries right from your site.</p>
    </div>

    {/* Build Your Brand Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Build Your Brand</h6>
      <p className="description">Stand out with a sleek website that boosts your professional image.</p>
    </div>

    {/* Smart Insights Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Smart Insights</h6>
      <p className="description">Get the edge with analytics that reveal what buyers really want.</p>
    </div>
  </div>
</div>

  {/* IDEAL FOR SECTION */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Ideal For</h5>
<div className="custom-category-card-container">
 {/* Real Estate Agents Card */}
 <div class="custom-category-card">
      <div class="custom-category-icon">🏠</div>
      <span class="custom-category-title">Real Estate Agents</span>
      <div class="custom--description">
        Showcase property listings, reach a wider audience, and provide resources for clients.
      </div>
    </div>

    {/* Property Managers Card */}
    <div class="custom-category-card">
      <div class="custom-category-icon">🏢</div>
      <span class="custom-category-title">Property Managers</span>
      <div class="custom--description">
        Efficiently manage properties, communicate with tenants, and offer online rent payments.
      </div>
    </div>

    {/* Real Estate Investors Card */}
    <div class="custom-category-card">
      <div class="custom-category-icon">🏘️</div>
      <span class="custom-category-title">Real Estate Investors</span>
      <div class="custom--description">
        Track market trends, find investment opportunities, and connect with sellers or agents.
      </div>
    </div>

    {/* Homebuyers and Sellers Card */}
    <div class="custom-category-card">
      <div class="custom-category-icon">🏡</div>
      <span class="custom-category-title">Homebuyers and Sellers</span>
      <div class="custom--description">
        Search for properties, obtain market insights, and connect with agents for transactions.
      </div>
    </div>
  </div>

  {/* Contact Information */}
  <p className="mt-6 text-md text-gray-700">
    To create a dynamic online presence for your real estate business, contact us at
    <a href="mailto:services@bhamseoanddesignco.com" style={{ color: 'blue' }}> services@bhamseoanddesignco.com</a>, 
    or click the button below to get started.
  </p>

  {/* Contact Link */}
  <Link href="/contact" legacyBehavior>
    <a className="inline-block mt-4 mb-6 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
      Explore Real Estate
    </a>
  </Link>
    </div>
</div>

{/* Real Estate PACKAGE PRICING TITLE*/}
<div className="relative py-5 px-6 lg:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl shadow-xl mx-4 my-10">
<div className="text-center">
<h1 className="text-xl lg:text-3xl font-extrabold text-white mb-2 mt-2 tracking-wide leading-tight hover:text-blue-950 transition-colors duration-300">
Real Estate Package Pricing
</h1>
<p className="text-md lg:text-lg font-medium text-white mb-2">
Find the Ideal Plan for Your Business
</p>
<span className="inline-block w-16 h-1 bg-blue-100 rounded"></span>
</div>
</div>

  {/* REAL ESTATE PACKAGE PRICING */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
  {realestatePackages.map((pkg, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-blue-500 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <div className="flex flex-col h-full"> 
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-800 hover:text-blue-800 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
          <p className="text-md mb-1 font-medium text-blue-400">{pkg.price}</p>
          <hr className="mb-2" />
          <p className="text-gray-800 mb-3"><strong>Duration |</strong> {pkg.duration}</p>
          <div className="bg-gray-50 p-2 rounded-lg mb-2">
            <p className="font-semibold text-gray-700 mb-1">Features</p>
            {pkg.features.map((feature, idx) => (
              <p key={idx} className="text-sm text-gray-600 font-medium mb-1">{feature}</p>
            ))}
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p className="font-bold text-gray-900">Website Pages Included</p>
            {pkg.websiteIncludes.map((include, idx) => (
              <p key={idx} className="">{include}</p>
            ))}
            <p className="bold">Total Pages | {pkg.totalPages}</p>
          </div>
        </div>
        <div className="bg-blue-600 p-4 text-white mt-auto"> 
          {pkg.idealFor}
        </div>
      </div>
    </div>
  ))}
</div>

  {/* Contact Information */}
  <div className="text-center mt-8">
  <p className="text-2xl text-blue-600 font-semibold">
    Interested in our Real Estate Web Design Package?
  </p>
  <p className="text-lg text-gray-600">
    Contact us today to request a <span className="text-blue-400">free price quote</span>.
  </p>
  <Link href="/contact" legacyBehavior>
    <a className="inline-block bg-blue-500 hover:bg-blue-800 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
      Request a Free Price Quote
    </a>
  </Link>
</div>

{/* BLUE BORDER BOTTOM */} 
<div className="border-bottom-blue"></div>

        </div>
   );
};

export default RealEstate;
