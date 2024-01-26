import React from 'react';
import Link from 'next/link';

const BlogPackageData = [
  {
    "name": "Basic Blog Package",
    "price": "$900 - $1500",
    "duration": "4 Weeks",
    "features": [
      "- Up to 10 Initial Blog Posts Setup",
      "- User Friendly Layout for Beginners",
      "- Basic SEO to Boost Online Visibility",
      "- Responsive Design for Mobile and Desktop",
      "- Social Media Integration to Connect with Audiences",
      "- Efficient CMS for Easy Blog Post Management"
    ],
    "websiteIncludes": [
      "Home | Featured Posts",
      "About | Personal or Brand Story",
      "Standard Blog Layout with up to 10 Posts",
      "Contact | Simple Inquiry Form",
      "Social Media Links & Integration"  
    ],
    "totalPages": "10",
    "idealFor": "Individuals or Hobbyists Starting a Personal Blog."
  },
  {
    "name": "Standard Blog Package",
    "price": "$1500 - $3000",
    "duration": "8 Weeks",
    "features": [
      "- Up to 20 Initial Blog Posts Setup",
      "- Enhanced Customizable Templates",
      "- Advanced SEO Tools for Greater Reach",
      "- Integrated Blog Analytics to Track Performance",
      "- Email Subscription for Audience Engagement",
      "- Multi Category Blog Support"
    ],
    "websiteIncludes": [
      "Customizable Home Page with Dynamic Layout",
      "Detailed About Section",
      "Expanded Blog Section with up to 20 Posts",
      "Contact Page with Enhanced Functionality",
      "Dedicated Category and Archive Pages"
    ],
    "totalPages": "20",
    "idealFor": "Emerging Bloggers or Small Businesses Focusing on Content Marketing."
  },
  {
    "name": "Premium Blog Package",
    "price": "$3,000 - $6,000",
    "duration": "12 Weeks",
    "features": [
      "- Premium Custom Design Aligning With Brand Identity",
      "- Comprehensive SEO And Content Strategy",
      "- Advanced CMS With Diverse Content Capabilities",
      "- Social Media Strategy And Integration",
      "- Robust Security And Advanced Analytics"
    ],
    "websiteIncludes": [
      "Custom Designed Home and Landing Pages",
      "In-Depth About Page with Team Profiles",
      "Extensive Blog Section with Unlimited Posts",
      "Interactive Contact Page with Social Media Feeds",
      "Specialized Pages for Email Sign-up, Privacy Policies"
    ],
    "totalPages": "25+",
    "idealFor": "Professional Bloggers, Influencers, or Businesses That Require a Robust Blogging Platform with Advanced Features."
  },
  {
    "name": "Enterprise Blogger's Premium Suite",
    "price": "$6000+",
    "duration": "24 Weeks",
    "features": [
      "- Fully Customized Design and Interactive Features",
      "- Unlimited Blog Post Capability",
      "- Full Scale CMS with E-Commerce Integration",
      "- Personalized User Experience Design",
      "- Dedicated Account and Multilingual Support"
    ],
    "websiteIncludes": [
      "State-of-the-Art Landing Page with Interactive Elements",
      "Comprehensive About Us Page with Detailed Company Story",
      "Unlimited Blog Posts with Advanced Layouts",
      "E-Commerce Integration for Merchandising",
      "Multi-Language Support Pages for Global Reach"
    ],
    "totalPages": "30+",
    "idealFor": "Large Businesses Or Media Companies Needing a High-End Blogging Platform With Full Customization And Extensive Features."
  }
];

const BlogPackages = () => {
  return (
    
<div>
        <div className="bg-blue rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "0px 4px 2px rgba(0, 0, 255, 0.1)" }}>
        <div className="p-2 sm:p-3">
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-blue-900 transition-colors duration-300 p-8">
        
        {/* BLOG TITLE ONE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        Unleash Your Blogging Potential
          </h1>
          <p className="text-sm sm:text-md md:text-lg text-gray-100 mt-2 sm:mt-4">
          Elevate your digital voice.
          </p>
          </div>
  
{/* BLOG TITLE TWO */}
<h4 className="text-4xl font-semibold text-gray-800 mt-4">Dynamic <span className="text-blue-800">Blog</span> Creation Package</h4>
<p className="text-md text-gray-700 mt-2 mb-4">Elevate your digital voice with our Dynamic Blog Creation Package. Tailored to empower your storytelling and idea sharing, this package is designed for influencers, thought leaders, and businesses aiming to engage a wider audience through compelling and informative content.</p>
      
<div class="custom-category-card-container">
  {/* Initial Blog Posts Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🚀</div>
    <span class="custom-category-title">Start Strong with Initial Blog Posts</span>
    <div class="custom-category-description">Kickstart your blog with our initial post setups.</div>
  </div>

  {/* User-Friendly Design Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">👩‍💻</div>
    <span class="custom-category-title">User-Friendly for Everyone</span>
    <div class="custom-category-description">Beginner-friendly design for easy content creation.</div>
  </div>

  {/* Responsive Design Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📱</div>
    <span class="custom-category-title">Looks Great Everywhere</span>
    <div class="custom-category-description">Responsive design for an excellent look on all devices.</div>
  </div>

  {/* Social Media Integration Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📱</div>
    <span class="custom-category-title">Connect on Social Media</span>
    <div class="custom-category-description">Link and engage with your audience on social platforms.</div>
  </div>

  {/* Content Management Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">💼</div>
    <span class="custom-category-title">Effortless Content Management</span>
    <div class="custom-category-description">Manage your posts easily with our intuitive CMS.</div>
  </div>

  {/* Essential Pages Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🏠</div>
    <span class="custom-category-title">All the Essential Pages</span>
    <div class="custom-category-description">Includes Home, About, Contact, and social links.</div>
  </div>

  {/* Reader Engagement Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">💌</div>
    <span class="custom-category-title">Keeping Readers Engaged</span>
    <div class="custom-category-description">Email subscriptions to maintain audience interest.</div>
  </div>

  {/* Content Organization Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📂</div>
    <span class="custom-category-title">Organize Your Content</span>
    <div class="custom-category-description">Easy categorization for your posts.</div>
  </div>
</div>

{/* BENEFITS section */}
<div className="mt-6">
  <h5 className="text-3xl font-semibold text-gray-800">Benefits of Owning a Blogging Website</h5>
  <hr className="mb-3 mt-3" />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">

    {/* Establish Authority Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Establish Authority</h6>
      <p className="description">Share expertise and become an industry thought leader.</p>
    </div>

    {/* Boost SEO Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Boost SEO</h6>
      <p className="description">Enhance search rankings and online visibility.</p>
    </div>

    {/* Engage Audience Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Engage with Your Audience</h6>
      <p className="description">Build a community and connect with readers.</p>
    </div>

    {/* Content Marketing Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Content Marketing</h6>
      <p className="description">Drive marketing with informative and engaging content.</p>
    </div>

    {/* Monetization Opportunities Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Monetization Opportunities</h6>
      <p className="description">Earn from ads, affiliates, and product sales.</p>
    </div>

    {/* Personal Branding Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Personal Branding</h6>
      <p className="description">Showcase your unique voice and enhance your brand.</p>
    </div>
  </div>

{/* Ideal For Section */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Ideal For</h5>
<div className="custom-category-card-container">

  {/* Card for Aspiring Influencers */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🌟</div>
    <span className="custom-category-title">Aspiring Influencers</span>
    <div className="custom--description">
      Kickstart your influencer path and inspire a global audience.
    </div>
  </div>

  {/* Card for Food Bloggers */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🍲</div>
    <span className="custom-category-title">Food Bloggers</span>
    <div className="custom--description">
      Captivate food enthusiasts with your culinary adventures.
    </div>
  </div>

  {/* Card for Tech Enthusiasts */}
  <div className="custom-category-card">
    <div className="custom-category-icon">💻</div>
    <span className="custom-category-title">Tech Enthusiasts</span>
    <div className="custom--description">
      Lead the tech conversation with your insights and reviews.
    </div>
  </div>

  {/* Card for Fitness Coaches */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🏋️</div>
    <span className="custom-category-title">Fitness Coaches</span>
    <div className="custom--description">
      Empower and motivate with your fitness and health expertise.
    </div>
  </div>

  {/* Card for Creative Writers */}
  <div className="custom-category-card">
    <div className="custom-category-icon">✍️</div>
    <span className="custom-category-title">Creative Writers</span>
    <div className="custom--description">
      Share your creative journey and connect with fellow writers.
    </div>
  </div>

  {/* Card for Travel Experts */}
  <div className="custom-category-card">
    <div className="custom-category-icon">✈️</div>
    <span className="custom-category-title">Travel Experts</span>
    <div className="custom--description">
      Guide and inspire with your unique travel stories and tips.
    </div>
  </div>

  {/* Card for DIY Crafters */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🎨</div>
    <span className="custom-category-title">DIY Crafters</span>
    <div className="custom--description">
      Ignite creativity by sharing your DIY crafts and ideas.
    </div>
  </div>

  {/* Card for Parenting Advisors */}
  <div className="custom-category-card">
    <div className="custom-category-icon">👪</div>
    <span className="custom-category-title">Parenting Advisors</span>
    <div className="custom--description">
      Offer guidance and build a community with your parenting insights.
    </div>
  </div>

</div>
</div>

{/* Contact link */}  
<p className="mt-6 text-md text-gray-700">
Connect with us for a personalized consultation at{' '}
<a href="mailto:services@bhamseoanddesignco.com" style={{ color: 'blue' }}>services@bhamseoanddesignco.com</a> or click the button below to get started.
</p>
{/* Button for Learning More */}
<Link href="/contact" legacyBehavior>
    <a className="inline-block mt-4 mb-6 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
      Start Blogging
    </a>
  </Link>
</div>
</div>

 
{/* BLOG PACKAGE PRICING TITLE */}
<div className="relative py-5 px-6 lg:px-12 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-600 rounded-3xl shadow-xl mx-4 my-10">
  <div className="text-center">
    <h1 className="text-xl lg:text-3xl font-extrabold text-white mb-2 mt-2 tracking-wide leading-tight hover:text-blue-800 transition-colors duration-300">
    Blog Package Pricing
    </h1>
    <p className="text-md lg:text-lg font-medium text-white mb-2">
      Find the Ideal Plan for Your Business
    </p>
    <span className="inline-block w-16 h-1 bg-indigo-100 rounded"></span>
  </div>
</div>

{/* BLOG PACKAGES PRICING */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {BlogPackageData.map((pkg, index) => (
    <div
      key={index}
      className="bg-white rounded-lg overflow-hidden shadow-lg border border-blue-500 hover:shadow-2xl transition-shadow duration-500 ease-in-out"
    >
      <div className="p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-1 text-gray-700">{pkg.name}</h3>
        <p className="text-md mb-1 font-medium text-blue-800">{pkg.price}</p>
        <hr className="mb-2" />
        <p className="text-gray-800 mb-3">
          <strong>Duration |</strong> {pkg.duration}
        </p>
        <div className="bg-gray-50 p-2 rounded-lg mb-2">
          <p className="font-semibold text-gray-700 mb-1">Features</p>
          {pkg.features.map((feature, idx) => (
            <p key={idx} className="text-sm text-gray-600 font-medium mb-1">
              {feature}
            </p>
          ))}
        </div>
        <div className="space-y-2 text-sm text-gray-700">
          <p className="font-bold text-gray-900">Website Pages Includes</p>
          {pkg.websiteIncludes.map((include, idx) => (
            <p key={idx}>{include}</p>
          ))}
          <p className="bold">Total Pages | {pkg.totalPages}</p>
        </div>
      </div>
      <div className="bg-blue-800 p-4 text-white">
        {pkg.idealFor}
      </div>
    </div>
  ))}
</div>

{/* BLOG CONSULTATION REQUEST LINK */}
<div className="text-center mt-10 bg-white py-8 px-6 rounded-lg shadow-lg mx-auto max-w-2xl">
  <h2 className="text-3xl text-blue-800 font-bold mb-4">
    Elevate Your Blog with Expert Guidance
  </h2>
  <p className="text-xl text-gray-700 mb-6">
    Kickstart your journey with a <span className="underline decoration-blue-700 decoration-2">complimentary initial consultation</span>. Our Blog Web Design Package is tailored to meet your unique needs.
  </p>
  <Link href="/webDesignConsultation" legacyBehavior>
    <a className="inline-block bg-blue-700 hover:bg-blue-800 text-white text-lg font-medium py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-sm">
      Begin Consultation
    </a>
  </Link>
  <p className="text-sm text-gray-500 mt-4">
    Lets craft a strategy that brings your vision to life.
  </p>
</div>


{/* BLUE BORDER BOTTOM */} 
<div className="border-bottom-blue"></div>

    </div>
  );
};

export default BlogPackages;

