import React from 'react';
import Link from 'next/link';

const portfolioPackages = [
  {
    "name": "Basic Portfolio Website Package",
    "price": "$500 - $1,500",
    "duration": "3 Weeks",
    "features": [
      "- Up To 5 Pages | Home, About, Portfolio, Blog, Contact",
      "- Selection Of Basic Design Templates",
      "- Mobile-Responsive Design",
      "- Gallery Or Portfolio Section To Showcase Work",
      "- Basic SEO Setup",
      "- Social Media Integration",
      "- Simple Contact Form"
    ],
    "websiteIncludes": [
      "Home Page",
      "About Page",
      "Portfolio Page",
      "Blog Page",
      "Contact Page"
    ],
    "totalPages": "5",
    "idealFor": "New Professionals, Freelancers, Or Artists Wanting To Establish An Online Presence."
  },
  {
    "name": "Professional Portfolio Website Package",
    "price": "$1,500 - $3,000",
    "duration": "8 Weeks",
    "features": [
      "- Up To 10 Pages With Enhanced Design Options",
      "- Customized Design To Align With Personal Branding",
      "- Interactive Portfolio With Categorization",
      "- Blog Integration For Content Marketing",
      "- Enhanced SEO Optimization",
      "- CMS For Easy Content Updates",
      "- Basic Analytics For Visitor Tracking"
    ],
    "websiteIncludes": [  
      "Home Page",
      "About Me/Us Page",
      "Portfolio Page",
      "Blog Page",
      "Contact Page",
      "Services Page",
      "Testimonials Page",
      "FAQ Page",
      "Privacy Policy Page",
      "Custom Page"
    ],
    "totalPages": "10",
    "idealFor": "Ideal For Established Professionals Or Creative Individuals Seeking A More Refined And Robust Platform To Showcase Their Work."
  },
  {
    "name": "Premium Portfolio Website Package",
    "price": "$3,000 - $6,000",
    "duration": "12 Weeks",
    "features": [
      "- Up To 15 Pages With Advanced Functionality",
      "- Fully Custom And Interactive Website Design",
      "- Advanced Portfolio Features (E.G., High-Quality Image Galleries, Video Integration)",
      "- Comprehensive SEO Strategy",
      "- Advanced CMS With Rich Content Management",
      "- Email Marketing And Subscription Setup",
      "- Enhanced Security Features",
      "- Detailed Analytics And Performance Reports"
    ],
    "websiteIncludes": [
      "Home Page",
      "About Me/Us Page",
      "Individual Portfolio Pages (Multiple)",
      "Blog Page",
      "Contact Page",
      "Services Page",
      "Client Testimonials Page",
      "FAQ Page",
      "Privacy Policy Page",
      "Gallery Page",
      "Video Showcase Page",
      "Custom Integration Page",
      "Email Marketing Page",
      "Security Information Page",
      "Custom Page"
    ],
    "totalPages": "15",
    "idealFor": "High-Profile Professionals, Seasoned Freelancers, Or Artists Who Require A Top-Tier Portfolio Website With Advanced Features."
  },
  {
    "name": "Elite Portfolio Website Package",
    "price": "$6,000+",
    "duration": "24 Weeks",
    "features": [
      "- Unlimited Pages With Bespoke Functionalities",
      "- High-End, Unique Design Tailored To Specific Needs And Brand Identity",
      "- Advanced Interactive Portfolio Showcases (VR/AR Capabilities, 3D Models, Etc.)",
      "- Full-Scale SEO And Digital Marketing Services",
      "- Multilingual Support For International Reach",
      "- Custom Integrations (E.G., Client Portals, CRM Systems)",
      "- Comprehensive Security And Regular Maintenance",
      "- Ongoing Technical Support And Content Updates"
    ],
    "websiteIncludes": [
      "Home Page",
      "About Me/Us Page",
      "Advanced Portfolio Pages (Multiple, With VR/AR Capabilities)",
      "Multilingual Pages",
      "Blog Page",
      "Contact Page",
      "Services Page",
      "Client Portal Page",
      "Custom CRM Integration Page",
      "SEO and Marketing Pages",
      "Security and Maintenance Info Page",
      "Technical Support Page",
      "Content Update Page",
      "Privacy Policy Page",
      "Terms and Conditions Page",
      "Any Additional Custom Pages As Required"
    ],
    "totalPages": "Unlimited",
    "idealFor": "Perfect for Top-Level Professionals, Renowned Artists, Or Influencers Needing A Highly Personalized And Feature-Rich Website To Match Their Stature"
  }
];

const Portfolio = () => {
  return (
    <div>
      {/* Portfolio Card */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        {/* Portfolio Title Section One */}
        <div className="p-2 sm:p-3">
          <div className="bg-gradient-to-b from-cyan-200 to-cyan-500 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-cyan-600 transition-colors duration-300 p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              The Ultimate Portfolio Experience
            </h1>
            <p className="text-sm sm:text-md md:text-lg text-gray-100 mt-2 sm:mt-4">
              Craft, Showcase, Inspire: Your Portfolio, Your Story!
            </p>
          </div>

          {/* Portfolio Title Section Two */}
          <h4 className="text-4xl mt-4 font-semibold text-gray-800">
            Stunning<span className="text-cyan-400"> Portfolio</span> Website Package
          </h4>
          <p className="text-md text-gray-700 mt-4 mb-4">
            Dazzle the digital world with our Stunning Portfolio Website Package. This exclusive offering is meticulously designed to empower individuals and professionals from various creative domains. Elevate your online presence and leave an indelible mark in your industry with a captivating and visually immersive digital portfolio.
          </p>
                    
{/* Custom Category Card Container */}
<div className="custom-category-card-container">



  {/* Mobile-Responsive Design Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📱</div>
    <span class="custom-category-title">Mobile-Responsive Design</span>
    <div class="custom-category-description">
      Your site will look great on all devices, desktop and mobile alike.
    </div>
  </div>

  {/* Gallery or Portfolio Section Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🖼️</div>
    <span class="custom-category-title">Gallery or Portfolio Section</span>
    <div class="custom-category-description">
      Highlight your work with a dedicated gallery or portfolio section.
    </div>
  </div>

  {/* SEO Setup Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🔍</div>
    <span class="custom-category-title">SEO Setup</span>
    <div class="custom-category-description">
      Boost your online visibility with basic SEO setup.
    </div>
  </div>

  {/* Social Media Integration Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🌐</div>
    <span class="custom-category-title">Social Media Integration</span>
    <div class="custom-category-description">
      Connect your site to your social media for expanded reach.
    </div>
  </div>

  {/* Contact Form Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">💌</div>
    <span class="custom-category-title">Contact Form</span>
    <div class="custom-category-description">
      A user-friendly contact form for inquiries and collaborations.
    </div>
  </div>

  {/* Content Management System (CMS) Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🖥️</div>
    <span class="custom-category-title">Content Management System (CMS)</span>
    <div class="custom-category-description">
      Update your content easily with our user-friendly CMS.
    </div>
  </div>

  {/* Blog Integration Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📝</div>
    <span class="custom-category-title">Blog Integration</span>
    <div class="custom-category-description">
      Share your insights with integrated blogging features.
    </div>
  </div>

  {/* Security and Maintenance Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🔐</div>
    <span class="custom-category-title">Security and Maintenance</span>
    <div class="custom-category-description">
      Enjoy peace of mind with secure and well-maintained website hosting.
    </div>
  </div>
</div>

{/* Benefits Section */}
<div className="mt-6">
<h5 className="text-3xl font-semibold text-gray-800">Benefits of Owning a Portfolio Website</h5>
<hr className="mb-3 mt-3" />
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

    {/* Showcase Your Talent Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Showcase Your Talent</h6>
      <p className="description">Display your work professionally to impress clients and employers.</p>
    </div>

    {/* Boost Your Image Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Boost Your Image</h6>
      <p className="description">Elevate your online presence with a sleek, personal portfolio.</p>
    </div>

    {/* Get Noticed Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Get Noticed</h6>
      <p className="description">Attract job offers, freelance gigs, and collaborations with a stunning portfolio.</p>
    </div>

    {/* Global Exposure Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Global Exposure</h6>
      <p className="description">Reach a worldwide audience and expand your opportunities.</p>
    </div>

    {/* Total Control Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Total Control</h6>
      <p className="description">Manage and update your content effortlessly to keep your portfolio fresh.</p>
    </div>

    {/* Availability 24/7 Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Availability 24/7</h6>
      <p className="description">Open non-stop for sales & leads.</p>
    </div>

  </div>
</div>


{/* IDEAL FOR SECTION */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Ideal For</h5>
<div className="custom-category-card-container">

  {/* Card for Visual Artists */}
  <div class="custom-category-card">
      <div class="custom-category-icon">🎨</div>
      <span class="custom-category-title">Visual Artists</span>
      <div>
        Stunning digital portfolios to showcase your art.
      </div>
    </div>

    {/* Card for Designers */}
    <div class="custom-category-card">
      <div class="custom-category-icon">✏️</div>
      <span class="custom-category-title">Designers</span>
      <div>
        Creative platforms to highlight your design projects.
      </div>
    </div>

    {/* Card for Photographers */}
    <div class="custom-category-card">
      <div class="custom-category-icon">📷</div>
      <span class="custom-category-title">Photographers</span>
      <div>
        Impactful portfolios for your photography work.
      </div>
    </div>

    {/* Card for Freelancers */}
    <div class="custom-category-card">
      <div class="custom-category-icon">💼</div>
      <span class="custom-category-title">Freelancers</span>
      <div>
        Showcase your skills and services with a professional flair.
      </div>
    </div>
  </div>

  {/* Call to Action for Contact */}
  <p className="mt-6 text-md text-gray-700">
    To create a portfolio that truly represents you and your work, reach out to us at<a href="mailto:services@bhamseoanddesignco.com" style={{ color: 'blue' }}> services@bhamseoanddesignco.com</a>, or press the button to get started.
  </p>

  {/* Contact Button to Launch Portfolio */}
  <Link href="/contact" legacyBehavior>
    <a className="inline-block mt-6 mb-6 bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-800 hover:to-cyan-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
      Launch Your Portfolio Now
    </a>
  </Link>
</div>
  </div>

{/* Portfolio Package Pricing Title */}
<div className="relative py-5 px-6 lg:px-12 bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-500 rounded-3xl shadow-xl mx-4 my-10">
  <div className="text-center">
    <h1 className="text-xl lg:text-3xl font-extrabold text-white mb-2 mt-2 tracking-wide leading-tight hover:text-cyan-950 transition-colors duration-300">
      Portfolio Package Pricing
    </h1>
    <p className="text-md lg:text-lg font-medium text-white mb-2">
      Find the Ideal Plan for Your Business
    </p>
    <span className="inline-block w-16 h-1 bg-cyan-100 rounded"></span>
  </div>
</div>

{/* Portfolio Packages Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
  {portfolioPackages.map((pkg, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-cyan-400 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <div className="flex flex-col h-full"> 
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-800 hover:text-cyan-800 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
          <p className="text-md mb-1 font-medium text-cyan-400">{pkg.price}</p>
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
              <p key={idx}>{include}</p>
            ))}
            <p className="bold">Total Pages | {pkg.totalPages}</p>
          </div>
        </div>
        <div className="bg-cyan-500 p-4 text-white mt-auto"> 
          {pkg.idealFor}
        </div>
      </div>
    </div>
  ))}
</div>

{/* Contact Information */}
<div className="text-center mt-8">
  <p className="text-2xl text-cyan-500 font-semibold">
    Interested in our Business Web Design Package?
  </p>
  <p className="text-lg text-gray-600">
    Contact us today to request a <span className="text-cyan-400">free price quote</span>.
  </p>
  <Link href="/contact" legacyBehavior>
    <a className="inline-block bg-cyan-500 hover:bg-cyan-700 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
      Request a Free Price Quote
    </a>
  </Link>
</div>

{/* Yellow Border Bottom */}
<div className="border-bottom-blue"></div>
</div>
   );
};


export default Portfolio;
