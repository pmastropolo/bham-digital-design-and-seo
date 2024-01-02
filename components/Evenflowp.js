import React from 'react';
import Link from 'next/link';

const evenflowpdata = [
  {
    "name": "Basic Event Showcase Package",
    "price": "$900 - $2,000",
    "duration": "3 Weeks",
    "features": [
      "- Simple and Elegant Design",
      "- Basic Event Information and Schedule",
      "- Contact Form for Queries",
      "- Social Media Integration for Promotion"
    ],
    "websiteIncludes": [
      "Home Page with Event Highlight",
      "Event Details and Schedule Page",
      "About the Event Organizers Page",
      "Contact and Inquiry Form Page"
    ],
    "totalPages": "4-6",
    "idealFor": "Local and Community Events, Small Gatherings."
  },
  {
    "name": "Professional Event Promotion Package",
    "price": "$2,500 - $5,000",
    "duration": "6 Weeks",
    "features": [
      "- Advanced Event Listing with Filters",
      "- Online Registration and Ticketing System",
      "- Interactive Maps and Venue Information",
      "- Email Newsletter Integration for Updates"
    ],
    "websiteIncludes": [
      "Dynamic Home Page with Upcoming Events",
      "Detailed Individual Event Pages",
      "Registration and Ticketing System",
      "Photo Gallery of Past Events"
    ],
    "totalPages": "8-12",
    "idealFor": "Conferences, Festivals, and Medium-Scale Events."
  },
  {
    "name": "Premium Event Management Package",
    "price": "$6,000 - $10,000",
    "duration": "10 Weeks",
    "features": [
      "- Custom Branding and High-End Design",
      "- Comprehensive Event Scheduling Tools",
      "- E-commerce Integration for Merchandise Sales",
      "- SEO and Social Media Marketing Campaigns"
    ],
    "websiteIncludes": [
      "Custom Landing Pages for Major Events",
      "Advanced Booking and CRM Integration",
      "Interactive Venue and Seating Maps",
      "Integrated Blog for Announcements and Articles"
    ],
    "totalPages": "15-20",
    "idealFor": "Large-Scale Events, Trade Shows, and Industry Expos."
  },
  {
    "name": "Elite Full-Service Event Digital Platform",
    "price": "$12,000+",
    "duration": "14+ Weeks",
    "features": [
      "- State-of-the-Art Website Features",
      "- Multi-Event Management and Analytics",
      "- Virtual Event Capabilities",
      "- Comprehensive Digital Marketing and SEO Suite"
    ],
    "websiteIncludes": [
      "Individual Event Microsites",
      "Full-Scale Ticketing and Registration Systems",
      "Live Streaming and Virtual Event Features",
      "Extensive Analytics and Reporting Dashboard"
    ],
    "totalPages": "20+",
    "idealFor": "National and International Event Series, Large Music and Arts Festivals."
  }
];

const Evenflowp = () => {
  return (

    <div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "0px 4px 4px rgba(75, 0, 130, 0.4)" }}>
            <div className="p-4 sm:p-3">
              <div className="bg-gradient-to-b from-slate-400 to-slate-500 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-slate-300 transition-colors duration-300 p-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Your Event Online
                </h1>
                <p className="text-sm sm:text-md md:text-lg text-gray-100 mt-2 sm:mt-4">
                Designing Experiences, One Click at a Time
                </p>
              </div>


    <h4 className="text-4xl font-semibold text-gray-800 mt-4">
    Streamlined <span className="text-slate-400">Event</span> Website Package
        </h4>

      <p className="text-md text-gray-700 mt-4 mb-4">Simplify and enhance your event planning with our Streamlined Event Management Website Package. This package is designed for event organizers, businesses, and individuals who want to create an impactful and user-friendly online platform for managing and promoting events effectively.</p>
      
      <div className="custom-category-card-container">

{/* Event Showcase and Information */}
<div class="custom-category-card">
  <div class="custom-category-icon">🎉📅</div>
  <span class="custom-category-title">Event Showcase & Information</span>
  <div class="custom-category-description">Elegantly highlight your events with essential details and schedules.</div>
</div>

{/* Communication and Social Media */}
<div class="custom-category-card">
  <div class="custom-category-icon">📞🌐</div>
  <span class="custom-category-title">Communication and Social Media</span>
  <div class="custom-category-description">User-friendly contact forms and social media integration for effective promotion.</div>
</div>

{/* Home Page Focus and Event Listing */}
<div class="custom-category-card">
  <div class="custom-category-icon">🏡📋</div>
  <span class="custom-category-title">Home Page | Event Listing</span>
  <div class="custom-category-description">Prominently showcase upcoming events on the home page with detailed listings.</div>
</div>

{/* Registration, Ticketing, and Maps */}
<div class="custom-category-card">
  <div class="custom-category-icon">🎟️🗺️</div>
  <span class="custom-category-title">Registration, Ticketing & Maps</span>
  <div class="custom-category-description">Online registration and ticket sales, complemented by interactive maps for venues.</div>
</div>

{/* Email Newsletter and Gallery */}
<div class="custom-category-card">
  <div class="custom-category-icon">✉️📷</div>
  <span class="custom-category-title">Email Newsletter | Gallery</span>
  <div class="custom-category-description">Inform attendees with newsletters and display event highlights in a photo gallery.</div>
</div>

{/* Branding and E-commerce */}
<div class="custom-category-card">
  <div class="custom-category-icon">🎨💼</div>
  <span class="custom-category-title">Branding | E-commerce</span>
  <div class="custom-category-description">Tailor your site’s design to your brand and integrate e-commerce for merchandise sales.</div>
</div>

{/* Interactive Features */}
<div class="custom-category-card">
  <div class="custom-category-icon">🛠️</div>
  <span class="custom-category-title">Interactive Features</span>
  <div class="custom-category-description">Engage visitors with interactive features like quizzes, polls, and live chats.</div>
</div>

{/* Analytics and Insights */}
<div class="custom-category-card">
  <div class="custom-category-icon">📊</div>
  <span class="custom-category-title">Analytics & Insights</span>
  <div class="custom-category-description">Track event success and audience engagement with robust analytics tools.</div>
</div>
</div>

<div className="mt-6">
  <h5 className="text-3xl font-semibold text-gray-800">Benefits of Owning an Event Website</h5>
  <hr className="mb-3 mt-3" />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

    {/* Pro Event Presence Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Pro Event Presence</h6>
      <p className="description">Showcase your event with a sophisticated online platform, making a lasting impression on attendees.</p>
    </div>

    {/* Easy Event Management Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Easy Event Management</h6>
      <p className="description">Efficiently organize and promote your event with user-friendly tools and features.</p>
    </div>

    {/* Boosted Attendee Interaction Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Boosted Attendee Interaction</h6>
      <p className="description">Captivate your audience with interactive elements and easy registration.</p>
    </div>

    {/* Streamlined Ticketing Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Streamlined Ticketing</h6>
      <p className="description">Offer hassle-free ticketing and sign-ups for a smooth attendee experience.</p>
    </div>

    {/* All-in-One Info Hub Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">All-in-One Info Hub</h6>
      <p className="description">Centralize all event details, directions, and resources for attendee convenience.</p>
    </div>

    {/* Post-Event Connection Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Post-Event Connection</h6>
      <p className="description">Maintain engagement after the event with photo galleries, feedback, and updates.</p>
    </div>

  </div>
</div>


      <h5 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Ideal For</h5>
      <div className="custom-category-card-container">
      <div class="custom-category-card">
  <div class="custom-category-icon">🏘️</div>
  <span class="custom-category-title">Local and Community</span>
  <div class="custom--description">Perfect for organizing small local gatherings and community events.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎪</div>
  <span class="custom-category-title">Conferences | Festivals</span>
  <div class="custom--description">Ideal for managing conferences, festivals, and medium-scale events.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🏢</div>
  <span class="custom-category-title">Large-Scale Events | Trade Shows</span>
  <div class="custom--description">Tailored for large-scale events, trade shows, and industry expos.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🌎</div>
  <span class="custom-category-title">National and International Event Series</span>
  <div class="custom--description">Designed for managing national and international event series.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎤</div>
  <span class="custom-category-title">Music and Arts Festivals</span>
  <div class="custom--description">Perfect for organizing large music and arts festivals.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🏆</div>
  <span class="custom-category-title">Awards Ceremonies</span>
  <div class="custom--description">Ideal for planning and promoting awards ceremonies.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🌟</div>
  <span class="custom-category-title">Celebrity | Entertainment</span>
  <div class="custom--description">Tailored for managing celebrity appearances and entertainment events.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎓</div>
  <span class="custom-category-title">Educational Conferences</span>
  <div class="custom--description">Perfect for educational conferences and seminars.</div>
</div>
</div>     
    
      <p className="mt-6 text-md text-gray-700">To revolutionize your event management experience, reach out to us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or click the button below for more information.</p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 mb-4 bg-gradient-to-r from-slate-400 to-slate-800 hover:from-slate-800 hover:to-slate-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Plan Your Event
        </a>
      </Link>
    </div>
  </div>

{/* Event PACKAGE PRICING TITLE*/}
<div className="relative py-5 px-6 lg:px-12 bg-gradient-to-br from-slate-400 via-slate-500 to-slate-800 rounded-3xl shadow-xl mx-4 my-10">
<div className="text-center">
<h1 className="text-xl lg:text-3xl font-extrabold text-white mb-2 mt-2 tracking-wide leading-tight hover:text-slate-950 transition-colors duration-300">
Event Package Pricing
</h1>
<p className="text-md lg:text-lg font-medium text-white mb-2">
Find the Ideal Plan for Your Business
</p>
<span className="inline-block w-16 h-1 bg-blue-100 rounded"></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
  {evenflowpdata.map((pkg, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-slate-400 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <div className="flex flex-col h-full"> 
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-950 hover:text-slate-400 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
          <p className="text-md mb-1 font-medium text-slate-400">{pkg.price}</p>
          <hr className="mb-2" />
          <p className="mb-3"><strong>Duration |</strong> {pkg.duration}</p>
          <div className="bg-gray-50 p-2 rounded-lg mb-2">
            <p className="font-semibold mb-1">Features</p>
            {pkg.features.map((feature, idx) => (
              <p key={idx} className="text-sm font-medium mb-1">{feature}</p>
            ))}
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-bold">Website Includes</p>
            {pkg.websiteIncludes.map((include, idx) => (
              <p key={idx} className="">{include}</p>
            ))}
            <p className="bold">Total Pages | {pkg.totalPages}</p>
          </div>
        </div>
        <div className="bg-slate-500 p-4 text-white mt-auto"> 
          {pkg.idealFor}
        </div>
      </div>
    </div>
  ))}
</div>

<div className="text-center mt-8">
  <p className="text-2xl text-slate-500 font-semibold">
    Interested in our Event Web Design Package?
  </p>
  <p className="text-lg text-gray-600">
    Contact us today to request a <span className="text-slate-400">free price quote</span>.
  </p>
  <Link href="/contact" legacyBehavior>
    <a className="inline-block bg-slate-400 hover:bg-slate-600 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
      Request a Free Price Quote
    </a>
  </Link>
</div>

{/* GRAY BORDER BOTTOM */} 
<div className="border-bottom-gray"></div>

    </div>
  );
};

export default Evenflowp;
