import React from 'react';
import Link from 'next/link';

const entertainmentPackageData = [
  {
    "name": "Entertainment Basics Web Package",
    "price": "$1,000 - $2,500",
    "duration": "4 Weeks",
    "features": [
      "- Responsive Design for All Devices",
      "- Basic Event Listing and Information",
      "- Social Media Integration for Fan Engagement",
      "- Contact Form and Basic Booking Features"
    ],
    "websiteIncludes": [
      "Home Page with Introduction",
      "About Us Page for Background and History",
      "Events Calendar or Listing Page",
      "Contact and Booking Information Page"
    ],
    "totalPages": "4-6",
    "idealFor": "Local Bands, Small Theaters, or Entertainment Startups Seeking Basic Online Presence."
  },
  {
    "name": "Professional Entertainment Showcase Package",
    "price": "$3,000 - $6,000",
    "duration": "6 Weeks",
    "features": [
      "- Custom Design with Multimedia Integration",
      "- Online Ticket Booking System",
      "- Advanced SEO for Better Online Visibility",
      "- Interactive Photo and Video Galleries"
    ],
    "websiteIncludes": [
      "Dynamic Home Page with Featured Content",
      "Detailed Event and Performance Pages",
      "Media Gallery with High-Quality Images and Videos",
      "Fan Interaction Section with Social Media Feeds"
    ],
    "totalPages": "8-12",
    "idealFor": "Professional Entertainers, Medium-Sized Venues, or Entertainment Companies."
  },
  {
    "name": "Advanced Entertainment Portal Package",
    "price": "$7,000 - $10,000",
    "duration": "8 Weeks",
    "features": [
      "- High-End Custom Web Design",
      "- Integrated E-Commerce for Merchandise Sales",
      "- Comprehensive Event Management Tools",
      "- Email Marketing and Fan Club Features"
    ],
    "websiteIncludes": [
      "Custom Landing Pages for Different Entertainment Segments",
      "E-Commerce Section for Merchandise",
      "VIP and Fan Club Membership Areas",
      "Interactive Event Calendar with Online Booking"
    ],
    "totalPages": "15-20",
    "idealFor": "Larger Entertainment Entities, Concert Venues, or Production Companies."
  },
  {
    "name": "Elite Entertainment Experience Platform",
    "price": "$12,000+",
    "duration": "12+ Weeks",
    "features": [
      "- State-of-the-Art Web and Mobile Experience",
      "- Virtual Event and Streaming Capabilities",
      "- Comprehensive CRM and Analytics Suite",
      "- Multi-Language Support for Global Audiences"
    ],
    "websiteIncludes": [
      "Sophisticated Main Portal with Interactive Features",
      "Dedicated Artist or Performer Pages",
      "Live Streaming and Virtual Event Features",
      "Advanced Ticketing and Reservation Systems"
    ],
    "totalPages": "20+",
    "idealFor": "Major Entertainment Brands, Large Venues, and International Event Organizers."
  }
];

const Entertainment = () => {
  return (

<div>
<div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "0px 4px 4px rgba(75, 0, 130, 0.4)" }}>
<div className="p-2 sm:p-3">
<div className="bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-indigo-800 transition-colors duration-300 p-8">

{/* Entertainment TITLE ONE*/}
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> Transforming Entertainment</h1>
<p className="text-sm sm:text-md md:text-lg text-gray-100 mt-2 sm:mt-4"> Where Entertainment Meets Excellence</p>
</div>

{/* Entertainment TITLE TWO */}
<h4 className="text-4xl mt-4 font-semibold text-gray-800">Vibrant<span className="text-indigo-400"> Entertainment</span> Website Package</h4>
<p className="text-md text-gray-700 mt-4 mb-6">Engage and captivate your audience with our Vibrant Entertainment Website Package. This package is perfectly suited for artists, performers, event organizers, and entertainment companies looking to create an engaging, visually stunning, and interactive online presence.</p>

{/* Custom Category Card Container */}
<div className="custom-category-card-container">

  {/* Responsive Design Card */}
  {/* React comment: Responsive Design Feature */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🖥️</div>
    <span class="custom-category-title">Responsive Design</span>
    <div class="custom-category-description">
      Your website will look great and function smoothly on all devices.
    </div>
  </div>

  {/* Social Media Integration Card */}
  {/* React comment: Social Media Integration Feature */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📱</div>
    <span class="custom-category-title">Social Media Integration</span>
    <div class="custom-category-description">
      Connect with your audience through seamless integration with social media platforms.
    </div>
  </div>

  {/* Contact Form Card */}
  {/* React comment: Contact Form Feature */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📝</div>
    <span class="custom-category-title">Contact Form</span>
    <div class="custom-category-description">
      Make it easy for fans and clients to get in touch with you or inquire about bookings.
    </div>
  </div>

  {/* Multimedia Integration Card */}
  {/* React comment: Multimedia Integration Feature */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📸</div>
    <span class="custom-category-title">Multimedia Integration</span>
    <div class="custom-category-description">
      Showcase your talent with high-quality images, videos, and interactive media galleries.
    </div>
  </div>

  {/* Event Management Card */}
  {/* React comment: Event Listing and Comprehensive Event Management Feature */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📅</div>
    <span class="custom-category-title">Event Management</span>
    <div class="custom-category-description">
      List your events and manage them efficiently with powerful tools.
    </div>
  </div>

  {/* Online Ticket Booking and E-Commerce Card */}
  {/* React comment: Online Ticket Booking and E-Commerce Feature */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎫</div>
    <span class="custom-category-title">Ticket Booking & E-Commerce</span>
    <div class="custom-category-description">
      Enable online ticket booking and sell products related to your entertainment brand.
    </div>
  </div>

  {/* Fan Engagement Card */}
  {/* React comment: Fan Engagement Feature */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎉</div>
    <span class="custom-category-title">Fan Engagement</span>
    <div class="custom-category-description">
      Interact with your fans through social media feeds and engagement features.
    </div>
  </div>

  {/* VIP and Membership Areas Card */}
  {/* React comment: VIP and Fan Club Membership Areas Feature */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🌟</div>
    <span class="custom-category-title">VIP & Membership Areas</span>
    <div class="custom-category-description">
      Create exclusive spaces for your loyal supporters and fans.
    </div>
  </div>
</div>

{/* BENEFITS section */}
<div className="mt-6">
  <h5 className="text-3xl font-semibold text-gray-800">Benefits of Owning an Entertainment Website</h5>
  <hr className="mb-3 mt-3" />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">

    {/* Enhanced Visibility Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Enhanced Visibility</h6>
      <p className="description">Showcase your talent globally and boost your online reach!</p>
    </div>

    {/* Event Promotion Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Event Promotion</h6>
      <p className="description">Promote your events easily and attract more attendees!</p>
    </div>

    {/* Multimedia Showcase Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Multimedia Showcase</h6>
      <p className="description">Highlight your work with stunning images, videos, and audio.</p>
    </div>

    {/* Booking and Ticketing Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Booking and Ticketing</h6>
      <p className="description">Simplify ticket purchases and bookings online.</p>
    </div>

    {/* Analytics and Insights Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Analytics and Insights</h6>
      <p className="description">Get valuable audience insights to guide your decisions.</p>
    </div>
  </div>
</div>

{/* Ideal For Section */}
<h5 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Ideal For</h5>
<div className="custom-category-card-container">

  {/* Performing Arts Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎭</div>
    <span class="custom-category-title">Performing Arts</span>
    <div>Showcasing talent in music, theater, and performances.</div>
  </div>

  {/* Event Management Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎪</div>
    <span class="custom-category-title">Event Management</span>
    <div>For planners and organizers of diverse events.</div>
  </div>

  {/* Entertainment Industry Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📽️</div>
    <span class="custom-category-title">Entertainment Industry</span>
    <div>For startups and studios in film, gaming, and media.</div>
  </div>

  {/* Recreational Attractions Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🏰</div>
    <span class="custom-category-title">Recreational Attractions</span>
    <div>Attractions and locations like theme parks and fairs.</div>
  </div>

  {/* Creative Showcases Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎨</div>
    <span class="custom-category-title">Creative Showcases</span>
    <div>Artists and galleries displaying creative works.</div>
  </div>

  {/* Community and Social Interaction Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🤝</div>
    <span class="custom-category-title">Community and Social</span>
    <div>Enhancing local community engagement and social ties.</div>
  </div>

  {/* Global Outreach Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🌍</div>
    <span class="custom-category-title">Global Outreach</span>
    <div>For businesses catering to an international audience.</div>
  </div>

  {/* Business Growth Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📈</div>
    <span class="custom-category-title">Business Growth</span>
    <div>Focused on online marketing and revenue growth.</div>
  </div>
</div>

{/* GET IN TOUCH EMAIL PURPLE */}  
<p className="mt-6 text-md text-gray-700">
To start building your entertainment empire online, get in touch with us at{' '}
<a href="mailto:services@bhamseoanddesignco.com" style={{ color: 'purple' }}>services@bhamseoanddesignco.com</a> or click the button below to get started.
</p>    
      
{/* CONTACT LINK */}        
<Link href="/contact" legacyBehavior>
  <a className="inline-block mb-6 mt-4 bg-indigo-400 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Discover Entertainment
        </a>
      </Link>
    </div>
  </div>

{/* Entertainment PACKAGE PRICING TITLE */}
<div className="relative py-5 px-6 lg:px-12 bg-gradient-to-br from-indigo-500 via-indigo-500 to-indigo-600 rounded-3xl shadow-xl mx-4 my-10">
  <div className="text-center">
    <h1 className="text-xl lg:text-3xl font-extrabold text-white mb-2 mt-2 tracking-wide leading-tight hover:text-indigo-800 transition-colors duration-300">
    Entertainment Package Pricing
    </h1>
    <p className="text-md lg:text-lg font-medium text-white mb-2">
      Find the Ideal Plan for Your Business
    </p>
    <span className="inline-block w-16 h-1 bg-indigo-100 rounded"></span>
  </div>
</div>

{/* Entertainment PACKAGE PRICING */} 
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
  {entertainmentPackageData.map((pkg, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-indigo-300 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
        <div className="flex flex-col h-full"> 
        <div className="p-4">
        <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-800 hover:text-indigo-800 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
          <p className="text-md mb-1 font-medium text-indigo-700">{pkg.price}</p>
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
        <div className="bg-indigo-400 p-4 text-white mt-auto"> 
          {pkg.idealFor}
          </div>
      </div>
    </div>
  ))}
</div>

  {/* Contact Information */}
  <div className="text-center mt-8">
    <p className="text-2xl text-indigo-600 font-semibold">
      Interested in our Entertainment Web Design Package?
    </p>
    <p className="text-lg text-gray-600">
      Contact us today to request a <span className="text-indigo-400">free price quote</span>.
    </p>
    <Link href="/contact" legacyBehavior>
      <a className="inline-block bg-indigo-400 hover:bg-indigo-600 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
        Request a Free Price Quote
      </a>
    </Link>
          </div>

{/* indigo BORDER BOTTOM */} 
<div className="border-bottom-indigo"></div>

        </div>

   );
};

export default Entertainment;
