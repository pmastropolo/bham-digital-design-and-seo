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

<div className="custom-category-card-container">

{/* Responsive Design CARD */}
<div class="custom-category-card">
<div class="custom-category-icon">🖥️</div>
  <span class="custom-category-title">Responsive Design</span>
  <div class="custom-category-description">
    Your website will look great and function smoothly on desktops, tablets, and mobile devices.
  </div>
</div>

{/* SOCIAL MEDIA CARD */}
<div class="custom-category-card">
<div class="custom-category-icon">📱</div>
<span class="custom-category-title">Social Media Integration</span>
<div class="custom-category-description">
Connect with your audience through seamless integration with popular social media platforms.
</div>
</div>

{/* CONTACT FORM CARD */}
<div class="custom-category-card">
<div class="custom-category-icon">📝</div>
<span class="custom-category-title">Contact Form</span>
<div class="custom-category-description">
Make it easy for fans and clients to get in touch with you or inquire about bookings.
</div>
</div>

{/* MULTIMEDIA CARD */}
<div class="custom-category-card">
<div class="custom-category-icon">📸</div>
<span class="custom-category-title">Multimedia Integration</span>
<div class="custom-category-description">
Showcase your talent with high-quality images, videos, and interactive media galleries.
</div>
</div>

{/* EVENT LISTING CARD */}
<div class="custom-category-card">
<div class="custom-category-icon">📅</div>
<span class="custom-category-title">Event Listing and Information</span>
<div class="custom-category-description">
Keep your audience informed about upcoming events, performances, and shows.
</div>
</div>

{/* ONLINE TICKET BOOKING CARD */}
<div class="custom-category-card">
<div class="custom-category-icon">🎫</div>
<span class="custom-category-title">Online Ticket Booking System</span>
<div class="custom-category-description">
Enable fans to purchase tickets or book seats for your events conveniently.
</div>
</div>

<div class="custom-category-card">
<div class="custom-category-icon">🌐</div>
<span class="custom-category-title">Advanced SEO</span>
<div class="custom-category-description">
Improve online visibility and reach a wider audience through search engine optimization.
</div>
</div>

<div class="custom-category-card">
<div class="custom-category-icon">🎉</div>
<span class="custom-category-title">Fan Engagement</span>
<div class="custom-category-description">
Interact with your fans and followers through social media feeds and engagement features.
</div>
</div>

<div class="custom-category-card">
<div class="custom-category-icon">💼</div>
<span class="custom-category-title">E-Commerce for Merchandise Sales</span>
<div class="custom-category-description">
Sell merchandise, tickets, or other products related to your entertainment brand.
</div>
</div>

<div class="custom-category-card">
<div class="custom-category-icon">📊</div>
<span class="custom-category-title">Comprehensive Event Management</span>
<div class="custom-category-description">
Efficiently manage and promote your events with powerful tools.
</div>
</div>

<div class="custom-category-card">
<div class="custom-category-icon">🌟</div>
<span class="custom-category-title">VIP and Fan Club Membership Areas</span>
<div class="custom-category-description">
Create exclusive spaces for your loyal supporters and fans.
</div>
</div>

<div class="custom-category-card">
<div class="custom-category-icon">🌍</div>
<span class="custom-category-title">Multi-Language Support</span>
<div class="custom-category-description">
Reach a global audience by offering your website in multiple languages.
</div>
</div>
</div>


{/* BENEFITS section */}
<div className="mt-6">
  <h5 className="text-3xl font-semibold text-gray-800">Benefits</h5>
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

{/* Container for Category Cards */}
<div className="custom-category-card-container">

  {/* Card for Local Bands */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎸</div>
    <span class="custom-category-title">Local Bands</span>
    <div>Perfect for showcasing your music and upcoming gigs.</div>
  </div>

  {/* Card for Small Theaters */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎭</div>
    <span class="custom-category-title">Small Theaters</span>
    <div>Great for promoting your shows and engaging with audiences.</div>
  </div>

  {/* Card for Entertainment Startups */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎤</div>
    <span class="custom-category-title">Entertainment Startups</span>
    <div class="custom--description">
    Ideal for quickly establishing your online presence.
    </div>
  </div>

  {/* Card for Event Organizers */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎪</div>
    <span class="custom-category-title">Event Organizers</span>
    <div class="custom--description">Effective for promoting and managing your events.</div>
  </div>

  {/* Card for Party Planners */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎉</div>
    <span class="custom-category-title">Party Planners</span>
    <div>Showcase your services & highlight upcoming events.</div>
  </div>

  {/* Card for Circus Performers */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🤹‍♀️</div>
    <span class="custom-category-title">Circus Performers</span>
    <div class="custom--description">Display your acts and schedule, & connect with fans.</div>
  </div>

  {/* Card for Gaming Communities */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎮</div>
    <span class="custom-category-title">Gaming Communities</span>
    <div class="custom--description">Promote your tournaments and share the latest news and events.</div>
  </div>

  {/* Card for Film Production Houses */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📽️</div>
    <span class="custom-category-title">Film Production Houses</span>
    <div class="custom--description">Ideal for showcasing your films and upcoming projects.</div>
  </div>

  {/* Card for Music Festivals */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎶</div>
    <span class="custom-category-title">Music Festivals</span>
    <div class="custom--description">Announce lineups, sell tickets, and provide event info easily.</div>
  </div>

  {/* Card for Carnivals and Fairs */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎪</div>
    <span class="custom-category-title">Carnivals and Fairs</span>
    <div class="custom--description"> Promote your attractions, schedules, and ticket sales.</div>
  </div>

  {/* Card for Theme Parks */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🏰</div>
    <span class="custom-category-title">Theme Parks</span>
    <div class="custom--description">Show off your rides, entertainment, and visitor info.</div>
  </div>

  {/* Card for Art Galleries */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎨</div>
    <span class="custom-category-title">Art Galleries</span>
    <div class="custom--description">Display your exhibitions and featured artists.</div>
  </div>
</div>

{/* GET IN TOUCH EMAIL PURPLE */}  
<p className="mt-6 text-md text-gray-700">
To start building your entertainment empire online, get in touch with us at{' '}
<a href="mailto:services@bhamseoanddesignco.com" style={{ color: 'purple' }}>services@bhamseoanddesignco.com</a> or click the button below to begin your blogging journey.
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
