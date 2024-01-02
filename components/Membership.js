import React from 'react';
import Link from 'next/link';

const membershipPackages = [
  {
    "name": "Basic Membership Starter Package",
    "price": "$1,500 - $3,000",
    "duration": "4 Weeks",
    "features": [
      "- User-Friendly Membership Sign-Up",
      "- Basic Member Profile Management",
      "- Mobile-Responsive Design",
      "- Simple Member-Only Content Access"
    ],
    "websiteIncludes": [
      "Home Page with Membership Overview",
      "About Page with Organization Information",
      "Membership Sign-Up Page",
      "Members-Only Blog or News Section"
    ],
    "totalPages": "5-7",
    "idealFor": "Small Clubs, Groups, or Communities Starting Their Membership Platform Online."
  },
  {
    "name": "Enhanced Membership Engagement Package",
    "price": "$3,500 - $6,000",
    "duration": "6 Weeks",
    "features": [
      "- Advanced Membership Profiles",
      "- Interactive Event Calendar",
      "- Member Forums or Discussion Boards",
      "- Email Integration for Newsletters"
    ],
    "websiteIncludes": [
      "Dynamic Home Page with Member Features",
      "Detailed About and FAQ Sections",
      "Event Listings and Registration",
      "Member Directory and Forums"
    ],
    "totalPages": "10-15",
    "idealFor": "Growing Organizations and Networks Looking to Boost Member Engagement and Provide More Value."
  },
  {
    "name": "Premium Membership Experience Package",
    "price": "$7,000 - $10,000",
    "duration": "8 Weeks",
    "features": [
      "- Custom Design Tailored to Community",
      "- Advanced Member Dashboard",
      "- Online Payment and Subscription Management",
      "- Integrated Social Media Features"
    ],
    "websiteIncludes": [
      "Customized Landing Pages for Members",
      "Resource Library or Knowledge Base",
      "Membership Tier and Benefits Pages",
      "Interactive Member Activities and Rewards Section"
    ],
    "totalPages": "15-20",
    "idealFor": "Mid-Sized to Large Organizations Seeking a Premium Online Experience for Members."
  },
  {
    "name": "Elite Membership Platform Suite",
    "price": "$12,000+",
    "duration": "12+ Weeks",
    "features": [
      "- State-of-the-Art Platform Features",
      "- Comprehensive CRM and Member Analytics",
      "- Mobile App Integration",
      "- Multi-Layered Security and Data Protection"
    ],
    "websiteIncludes": [
      "Advanced Custom Interface and User Experience",
      "Extensive Member Management Tools",
      "E-Commerce Integration for Merchandise and Subscriptions",
      "Custom API Integrations and Tech Support"
    ],
    "totalPages": "20+",
    "idealFor": "Large Scale Membership Organizations and Clubs Needing a Comprehensive and Fully-Integrated Online System."
  }
];  

const Membership = () => {
  return (

<div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "2px 6px 8px rgba(255, 255, 0, 0.4)" }}>
                    <div className="p-4 sm:p-3">
                      <div className="bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-yellow-950 transition-colors duration-300 p-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Building Strong Connections
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg text-gray-100 mt-2 sm:mt-4">
                        One Member at a Time
                        </p>
                      </div>
              
<h4 className="text-4xl mt-4 font-semibold text-gray-800">Exclusive<span className="text-yellow-500"> Membership</span> Website Package</h4>
<p className="text-md text-gray-700 mt-4">Foster a vibrant community with our Exclusive Membership Website Package. This package is ideal for organizations, clubs, and online platforms looking to build and manage a membership-based community, offering exclusive content, services, or products to their members.</p>
      
<div className="custom-category-card-container">
      <div class="custom-category-card">
  <div class="custom-category-icon">🤝</div>
  <span class="custom-category-title">User-Friendly Membership Sign-Up</span>
  <div class="custom-category-description">Join our community with ease through a simple and welcoming registration process.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📱</div>
  <span class="custom-category-title">Mobile-Responsive Design</span>
  <div class="custom-category-description">Enjoy seamless access from any device, ensuring a great experience on smartphones, tablets, and desktops.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🏠</div>
  <span class="custom-category-title">Membership Dashboard</span>
  <div class="custom-category-description">Your personalized hub for managing your profile, accessing exclusive content, and engaging with fellow members.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📜</div>
  <span class="custom-category-title">Member-Only Content Access</span>
  <div class="custom-category-description">Unlock a treasure trove of premium content, services, or products available exclusively to our valued members.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">👤</div>
  <span class="custom-category-title">Advanced Member Profiles</span>
  <div class="custom-category-description">Showcase your identity with detailed member profiles that encourage connections and interactions.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🌐</div>
  <span class="custom-category-title">Integrated Social Media Features</span>
  <div class="custom-category-description">Seamlessly connect, share, and interact with the community across various social media platforms.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📊</div>
  <span class="custom-category-title">Comprehensive CRM and Member Analytics</span>
  <div class="custom-category-description">Gain insights and optimize your membership experience with powerful tools for data management and analysis.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">💳</div>
  <span class="custom-category-title">E-Commerce Integration</span>
  <div class="custom-category-description">Conveniently handle online payments, merchandise purchases, and subscription management right within our platform.</div>
</div>
</div>

      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Benefits</h5>   
      <p className="text-md text-gray-700 mt-4"><b>Exclusive Access:</b> Get exclusive access to premium content, services, or products that are not available to the general public.</p>

<p className="text-md text-gray-700 mt-4"><b>Community Interaction:</b> Engage and connect with like-minded individuals or fellow enthusiasts who share your interests and passions.</p>

<p className="text-md text-gray-700 mt-4"><b>Personalized Experience:</b> Enjoy a personalized and tailored experience, including custom profiles and content recommendations.</p>

<p className="text-md text-gray-700 mt-4"><b>Member Discounts:</b> Access special discounts, promotions, or offers that are only available to members, helping you save money.</p>

<p className="text-md text-gray-700 mt-4"><b>Knowledge Sharing:</b> Participate in knowledge sharing, discussions, and forums to gain insights and learn from experts in your field.</p>

<p className="text-md text-gray-700 mt-4"><b>Enhanced Support:</b> Receive dedicated support, assistance, and guidance from the community or organization to address your specific needs.</p>


<h5 className="text-2xl font-semibold text-gray-800 mt-6">Ideal For</h5>
<div className="custom-category-card-container">

  {/* Clubs and Societies */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🌟</div>
    <span class="custom-category-title">Clubs & Societies</span>
    <div>Perfect for clubs and groups to organize events and connect members online.</div>
  </div>

  {/* Subscription-Based Businesses */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🏬</div>
    <span class="custom-category-title">Subscription Based</span>
    <div>Ideal for enhancing subscriber engagement and offering exclusive benefits.</div>
  </div>

  {/* Content Creators */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📸</div>
    <span class="custom-category-title">Content Creators</span>
    <div>Great for bloggers and creators to monetize and offer premium content.</div>
  </div>

  {/* Professional Associations */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🤝</div>
    <span class="custom-category-title">Professional Associations</span>
    <div>Tailor-made for organizations to offer exclusive resources and networking.</div>
  </div>
</div>

      
      
{/* GET IN TOUCH EMAIL YELLOW */}  
<p className="mt-6 text-md text-gray-700">
To create a thriving online membership platform, connect with us at{' '}
<a href="mailto:services@bhamseoanddesignco.com" style={{ color: 'orange' }}>services@bhamseoanddesignco.com</a> or click the button below to explore your options.
</p>  

{/* CONTACT LINK */}      
<Link href="/contact" legacyBehavior>
<a className="inline-block mt-4 mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-400 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
  Join the Membership
</a>
      </Link>
    </div>
  </div>



{/* MEMBERSHIP PACKAGE PRICING TITLE*/}
<div className="relative py-5 px-6 lg:px-12 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl shadow-xl mx-4 my-10">
<div className="text-center">
<h1 className="text-xl lg:text-3xl font-extrabold text-white mb-2 mt-2 tracking-wide leading-tight hover:text-yellow-950 transition-colors duration-300">
Membership Package Pricing
</h1>
<p className="text-md lg:text-lg font-medium text-white mb-2">
Find the Ideal Plan for Your Business
</p>
<span className="inline-block w-16 h-1 bg-yellow-100 rounded"></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
  {membershipPackages.map((pkg, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-yellow-500 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <div className="flex flex-col h-full">
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-800 hover:text-yellow-500 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
          <p className="text-md mb-1 font-medium text-yellow-500">{pkg.price}</p>
          <hr className="mb-2" />
          <p className="text-gray-800 mb-3"><strong>Duration |</strong> {pkg.duration}</p>
          <div className="bg-gray-50 p-2 rounded-lg mb-2">
            <p className="font-semibold text-gray-700 mb-1">Features</p>
            {pkg.features.map((feature, idx) => (
              <p key={idx} className="text-sm text-gray-600 font-medium mb-1">{feature}</p>
            ))}
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p className="font-bold text-gray-900">Website Includes</p>
            {pkg.websiteIncludes.map((include, idx) => (
              <p key={idx} className="">{include}</p>
            ))}
            <p className="bold">Total Pages | {pkg.totalPages}</p>
          </div>
        </div>
        <div className="bg-yellow-600 p-4 text-white mt-auto">
          {pkg.idealFor}
        </div>
      </div>
    </div>
  ))}
</div>

<div className="text-center mt-8">
  <p className="text-2xl text-yellow-600 font-semibold">
    Interested in our Membership Web Design Package?
  </p>
  <p className="text-lg text-gray-600">
    Contact us today to request a <span className="text-yellow-400">free price quote</span>.
  </p>
  <Link href="/contact" legacyBehavior>
    <a className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
      Request a Free Price Quote
    </a>
  </Link>
</div>

{/* YELLOW BORDER BOTTOM */} 
<div className="border-bottom-orange"></div>

    </div>
  );
};

export default Membership;
