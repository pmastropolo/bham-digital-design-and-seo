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
      
{/* Custom Category Card Container */}
<div className="custom-category-card-container">

  {/* User-Friendly Membership Sign-Up Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🤝</div>
    <span className="custom-category-title">User-Friendly Membership Sign-Up</span>
    <div className="custom-category-description">
      Easy and welcoming sign-up process.
    </div>
  </div>

  {/* Mobile-Responsive Design Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">📱</div>
    <span className="custom-category-title">Mobile-Responsive Design</span>
    <div className="custom-category-description">
      Flawless access across all devices.
    </div>
  </div>

  {/* Membership Dashboard Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🏠</div>
    <span className="custom-category-title">Membership Dashboard</span>
    <div className="custom-category-description">
      Manage your profile and interact with ease.
    </div>
  </div>

  {/* Member-Only Content Access Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">📜</div>
    <span className="custom-category-title">Member-Only Content Access</span>
    <div className="custom-category-description">
      Exclusive access to premium content.
    </div>
  </div>

  {/* Advanced Member Profiles Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">👤</div>
    <span className="custom-category-title">Advanced Member Profiles</span>
    <div className="custom-category-description">
      Create and connect through detailed profiles.
    </div>
  </div>

  {/* Integrated Social Media Features Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🌐</div>
    <span className="custom-category-title">Integrated Social Media Features</span>
    <div className="custom-category-description">
      Engage across social platforms seamlessly.
    </div>
  </div>

  {/* Comprehensive CRM and Member Analytics Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">📊</div>
    <span className="custom-category-title">Comprehensive CRM and Member Analytics</span>
    <div className="custom-category-description">
      Insightful tools for member management and analytics.
    </div>
  </div>

  {/* E-Commerce Integration Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">💳</div>
    <span className="custom-category-title">E-Commerce Integration</span>
    <div className="custom-category-description">
      Streamline online sales and subscriptions.
    </div>
  </div>
</div>

{/* BENEFITS section */}
<div className="mt-6">
  <h5 className="text-3xl font-semibold text-gray-800">Benefits of Owning a Community Website</h5>
  <hr className="mb-3 mt-3" />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">

    {/* Community Building Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Community Building</h6>
      <p className="description">Strengthen community bonds and member loyalty.</p>
    </div>

    {/* Full Customization Control Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Customization Control</h6>
      <p className="description">Personalize your site for your communitys needs.</p>
    </div>

    {/* Direct Communication Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Direct Communication</h6>
      <p className="description">Engage directly and authentically with members.</p>
    </div>

    {/* Revenue Generation Opportunities Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Revenue Opportunities</h6>
      <p className="description">Monetize through memberships and exclusive content.</p>
    </div>

    {/* Data Ownership and Insights Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Data Insights</h6>
      <p className="description">Own your data for better community insights.</p>
    </div>

    {/* Enhanced Security and Privacy Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Security and Privacy</h6>
      <p className="description">Protect member data with enhanced security.</p>
    </div>
  </div>
</div>

  {/* IDEAL FOR SECTION */}
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

{/* Get In Touch Email Section */}
  <p className="mt-6 text-md text-gray-700">
    To create a thriving online membership platform, connect with us at{' '}
    <a href="mailto:services@bhamseoanddesignco.com" style={{ color: 'orange' }}>
      services@bhamseoanddesignco.com
    </a> or click the button below to get started.
  </p> 

  {/* Contact Link Button */}
  <Link href="/contact" legacyBehavior>
    <a className="inline-block mt-4 mb-6 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-400 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
      Join the Membership
    </a>
  </Link>
    </div>
  </div>


{/* Membership Package Pricing Title Section */}
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

      {/* Grid for Membership Packages */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
        {membershipPackages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-yellow-500 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
            <div className="flex flex-col h-full">
              <div className="p-4">
                {/* Package Name */}
                <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-800 hover:text-yellow-500 transition-colors duration-300 ease-in-out">
                  {pkg.name}
                </h3>
                {/* Package Price */}
                <p className="text-md mb-1 font-medium text-yellow-500">
                  {pkg.price}
                </p>
                <hr className="mb-2" />
                {/* Package Duration */}
                <p className="text-gray-800 mb-3">
                  <strong>Duration |</strong> {pkg.duration}
                </p>
                {/* Package Features */}
                <div className="bg-gray-50 p-2 rounded-lg mb-2">
                  <p className="font-semibold text-gray-700 mb-1">Features</p>
                  {pkg.features.map((feature, idx) => (
                    <p key={idx} className="text-sm text-gray-600 font-medium mb-1">
                      {feature}
                    </p>
                  ))}
                </div>
                {/* Website Includes Section */}
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-bold text-gray-900">Website Includes</p>
                  {pkg.websiteIncludes.map((include, idx) => (
                    <p key={idx}>{include}</p>
                  ))}
                  <p className="bold">Total Pages | {pkg.totalPages}</p>
                </div>
              </div>
              {/* Ideal For Section */}
              <div className="bg-yellow-500 p-4 text-white mt-auto">
                {pkg.idealFor}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Information and Call to Action */}
      <div className="text-center mt-8">
        <p className="text-2xl text-yellow-600 font-semibold">
          Interested in our Membership Web Design Package?
        </p>
        <p className="text-lg text-gray-600">
          Contact us today to request a <span className="text-yellow-500">free price quote</span>.
        </p>
        <Link href="/contact" legacyBehavior>
          <a className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
            Request a Free Price Quote
          </a>
        </Link>
      </div>

      {/* Yellow Border Bottom */}
      <div className="border-bottom-orange"></div>
    </div>
  );
};

export default Membership;
