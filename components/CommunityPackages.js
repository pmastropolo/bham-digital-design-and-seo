import React from 'react';
import Link from 'next/link';

const packages = [
  {
    "name": "Community Outreach Starter Package",
    "price": "$800 - $1,500",
    "duration": "3 Weeks",
    "features": [
      "- Basic Responsive Design for Community Engagement",
      "- Event Calendar for Local Activities",
      "- Blog or News Section for Updates",
      "- Contact Form for Member Inquiries"
    ],
    "websiteIncludes": [
      "Home Page with Community Overview",
      "About Us Page for Mission and Vision",
      "Upcoming Events Calendar",
      "Community News or Blog Section"
    ],
    "totalPages": "4-6",
    "idealFor": "Small Community Groups and Local Non-Profits Seeking Basic Online Presence."
  },
  {
    "name": "Engaged Community Platform Package",
    "price": "$2,500 - $5,000",
    "duration": "6 Weeks",
    "features": [
      "- Interactive Event Registration and RSVPs",
      "- Member Profiles and Directories",
      "- Forum or Discussion Board for Member Interaction",
      "- Social Media Integration for Wider Reach"
    ],
    "websiteIncludes": [
      "Dynamic Home Page with Event Highlights",
      "Detailed Member Directory",
      "Interactive Community Forum",
      "Resources and Documents Library"
    ],
    "totalPages": "8-12",
    "idealFor": "Growing Community Organizations Looking to Foster Engagement and Networking Online."
  },
  {
    "name": "Comprehensive Community Network Package",
    "price": "$6,000 - $10,000",
    "duration": "10 Weeks",
    "features": [
      "- Custom Design Tailored to Community Branding",
      "- Advanced Member Management and CRM Integration",
      "- Online Donation and Fundraising Capabilities",
      "- Email Marketing Tools for Effective Communication"
    ],
    "websiteIncludes": [
      "Branded Landing Page for Community",
      "Advanced Event Management with Online Payments",
      "Member Portal with Customized Access",
      "Volunteer Sign-Up and Management Section"
    ],
    "totalPages": "15-20",
    "idealFor": "Large Community Organizations and Networks Seeking a Robust Online Platform for Member Management and Fundraising."
  },
  {
    "name": "Elite Community Ecosystem Package",
    "price": "$12,000+",
    "duration": "14+ Weeks",
    "features": [
      "- State-of-the-Art Website and Mobile App Integration",
      "- Multi-Lingual Support for Global Communities",
      "- Full-Scale Analytics for Community Insights",
      "- Custom API Integrations for Additional Functionality"
    ],
    "websiteIncludes": [
      "Sophisticated Main Portal with High-End Features",
      "Dedicated Sections for Different Community Groups",
      "Integrated E-Commerce for Community Merchandise",
      "Comprehensive Resource Center with Multi-Media Content"
    ],
    "totalPages": "20+",
    "idealFor": "National or International Community Organizations Needing an Extensive Digital Ecosystem."
  }
];

const CommunityPackages = () => {
        return (

                <div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "2px 6px 8px rgba(900, 105, 0.9, 0.4)" }}>
                  <div className="p-4 sm:p-3">
                    <div className="bg-gradient-to-b from-orange-800 to-orange-700 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-orange-900 transition-colors duration-300 p-8">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                      Stronger Communities Online
                      </h1>
                      <p className="text-sm sm:text-md md:text-lg text-gray-100 mt-2 sm:mt-4">
                      Uniting People, Unleashing Potential
                      </p>
                    </div>

<h4 className="text-4xl mt-4 font-semibold text-gray-800">Empowering<span className="text-yellow-700"> Community </span> Website Package</h4>
<p className="text-md text-gray-700 mt-4 mb-4">Unite and inspire your community with our Empowering Community Website Package. This package is perfectly crafted for non-profits, social groups, and community organizations looking to foster engagement, collaboration, and positive change through an impactful online presence.</p>
      
      
<div className="custom-category-card-container">

  {/* Online Presence and Community Engagement */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🌐🤝</div>
    <span class="custom-category-title">Online Presence & Community Engagement</span>
    <div class="custom-category-description">
      Enhance your online presence and foster community bonds with interactive features.
    </div>
  </div>

  {/* Responsive Design and Event Management */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📱📅</div>
    <span class="custom-category-title">Responsive Design & Event Management</span>
    <div class="custom-category-description">
      Ensure device compatibility and efficient event promotion with integrated tools.
    </div>
  </div>

  {/* Information Sharing and Communication Tools */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📰✉️</div>
    <span class="custom-category-title">Information Sharing & Communication Tools</span>
    <div class="custom-category-description">
      Keep your community informed with news sections and facilitate inquiries with contact tools.
    </div>
  </div>

  {/* Member Engagement and Social Connectivity */}
  <div class="custom-category-card">
    <div class="custom-category-icon">👥🔗</div>
    <span class="custom-category-title">Member Engagement & Social Connectivity</span>
    <div class="custom-category-description">
      Engage members with personalized features and expand reach with social media integration.
    </div>
  </div>

  {/* Customization, Branding, and Fundraising */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎨💰</div>
    <span class="custom-category-title">Customization, Branding & Fundraising</span>
    <div class="custom-category-description">
      Customize your sites design and raise funds with integrated fundraising tools.
    </div>
  </div>

  {/* Advanced Communication and CRM */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📧📊</div>
    <span class="custom-category-title">Advanced Communication & CRM</span>
    <div class="custom-category-description">
      Optimize member communication and manage efficiently with CRM and analytics tools.
    </div>
  </div>

  {/* Custom User Experience */}
  <div class="custom-category-card">
    <div class="custom-category-icon">👤</div>
    <span class="custom-category-title">Custom User Experience</span>
    <div class="custom-category-description">
      Personalize your community space to enhance user interaction and satisfaction.
    </div>
  </div>

  {/* E-commerce and Online Transactions */}
  <div class="custom-category-card">
    <div class="custom-category-icon">💼</div>
    <span class="custom-category-title">E-commerce & Online Transactions</span>
    <div class="custom-category-description">
      Facilitate e-commerce activities and transactions for community-driven commerce.
    </div>
  </div>
</div>

<div className="mt-6">
  <h5 className="text-3xl font-semibold text-gray-800">Benefits of Owning a Community Website</h5>
  <hr className="mb-3 mt-3" />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">

    {/* Inclusive and Accessible Design Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Inclusive and Accessible Design</h6>
      <p className="description">Ensuring that everyone in your community feels welcomed and engaged.</p>
    </div>

    {/* Community Engagement Tools Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Community Engagement Tools</h6>
      <p className="description">Features such as forums, event calendars, and membership sign-ups to boost participation.</p>
    </div>

    {/* Mobile-Friendly Interface Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Mobile-Friendly Interface</h6>
      <p className="description">Accessible on all devices for wider reach and engagement.</p>
    </div>

    {/* Content Management System Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Content Management System</h6>
      <p className="description">Easy update and management of community news, events, and resources.</p>
    </div>

    {/* Social Media Integration Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Social Media Integration</h6>
      <p className="description">Seamlessly connect with popular social media platforms to enhance outreach.</p>
    </div>

  </div>
</div>


      
      <h5 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Ideal For</h5>
<div className="custom-category-card-container">

  {/* Emerging Non-Profit */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🌱</div>
    <span className="custom-category-title">The Emerging Non-Profit</span>
    <div className="custom--description">
      Establish and grow your non-profits online presence.
    </div>
  </div>

  {/* Local Community Groups */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🏘️</div>
    <span className="custom-category-title">Local Community Groups</span>
    <div className="custom--description">
      Enhance local community engagement and connectivity.
    </div>
  </div>

  {/* Social Networking Platforms */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🤝</div>
    <span className="custom-category-title">Social Networking Platforms</span>
    <div className="custom--description">
      Foster social connections and member interactions.
    </div>
  </div>

  {/* Charity Organizations */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🎗️</div>
    <span className="custom-category-title">Charity Organizations</span>
    <div className="custom--description">
      Boost awareness and support for your charitable cause.
    </div>
  </div>

  {/* Educational Communities */}
  <div className="custom-category-card">
    <div className="custom-category-icon">📚</div>
    <span className="custom-category-title">Educational Communities</span>
    <div className="custom--description">
      Create a hub for learning, collaboration, and information sharing.
    </div>
  </div>

  {/* Global Networks */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🌍</div>
    <span className="custom-category-title">Global Networks</span>
    <div className="custom--description">
      Connect and engage with diverse international communities.
    </div>
  </div>

  {/* Advocacy Groups */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🔊</div>
    <span className="custom-category-title">Advocacy Groups</span>
    <div className="custom--description">
      Amplify your message and rally support for your cause.
    </div>
  </div>

  {/* Professional Associations */}
  <div className="custom-category-card">
    <div className="custom-category-icon">💼</div>
    <span className="custom-category-title">Professional Associations</span>
    <div className="custom--description">
      Network and provide resources within your professional community.
    </div>
  </div>
</div>

      
      
      <p className="mt-6 text-md text-gray-700">To discuss how we can help your community thrive online, contact us at <a href="mailto:services@bhamseoanddesignco.com" style={{ color: 'orange' }}>services@bhamseoanddesignco.com</a>, or press the button to get started.</p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 mb-6 bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-800 hover:to-orange-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Build Your Community Space
        </a>
      </Link>
    </div>
  </div>

{/* COMMUNITY PACKAGE PRICING TITLE*/}
<div className="relative py-5 px-6 lg:px-12 bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 rounded-3xl shadow-xl mx-4 my-10">
<div className="text-center">
<h1 className="text-xl lg:text-3xl font-extrabold text-white mb-2 mt-2 tracking-wide leading-tight hover:text-orange-800 transition-colors duration-300">
Community Package Pricing
</h1>
<p className="text-md lg:text-lg font-medium text-white mb-2">
Find the Ideal Plan for Your Business
</p>
<span className="inline-block w-16 h-1 bg-orange-100 rounded"></span>
</div>
</div>



                <div className="container mx-auto px-4 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <div key={index} className="border border-gray-200 shadow-lg p-4 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">{pkg.name}</h3>
                  <p className="text-orange-600">{pkg.price}</p>
                  <p className="mb-2"><strong>Duration:</strong> {pkg.duration}</p>
                  <ul className="mb-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-sm mb-1">- {feature}</li>
                    ))}
                  </ul>
                  <p className="italic">Ideal for: {pkg.idealFor}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
        <p className="text-2xl text-orange-600 font-semibold">
          Interested in our Community Web Design Package?
        </p>
        <p className="text-lg text-gray-600">
          Contact us today to request a <span className="text-orange-400">free price quote</span>.
        </p>
        <Link href="/contact" legacyBehavior>
          <a className="inline-block bg-orange-600 hover:bg-orange-800 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
            Request a Free Price Quote
          </a>
        </Link>
      </div>
</div>

          </div>
        );
      };
      
      export default CommunityPackages;
