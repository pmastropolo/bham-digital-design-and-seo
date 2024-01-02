import React from 'react';
import Link from 'next/link';

const landerData = [
  {
    "name": "Basic Landing Page Design Package",
    "price": "$300 - $800",
    "duration": "1-2 Weeks",
    "features": [
      "- Single-Page Responsive Design",
      "- Basic Contact Form Integration",
      "- SEO Fundamentals for Visibility",
      "- Social Media Links Integration"
    ],
    "websiteIncludes": [
      "A Single Landing Page with Basic Design Elements",
      "Clear Call-to-Action (CTA) Buttons",
      "Contact Information Section"
    ],
    "idealFor": "Small Businesses or Startups Needing a Simple Online Presence Quickly."
  },
  {
    "name": "Enhanced Landing Page Package with Analytics",
    "price": "$800 - $1,500",
    "duration": "2-3 Weeks",
    "features": [
      "- Custom Design Tailored to Brand",
      "- Advanced Contact Forms with Lead Capturing",
      "- Basic Google Analytics Integration",
      "- Optimized for Speed and SEO"
    ],
    "websiteIncludes": [
      "A Custom-Designed Landing Page",
      "Interactive Elements and Animations",
      "Integration of Analytics for Performance Tracking"
    ],
    "idealFor": "Businesses Aiming to Generate Leads and Track Visitor Engagement."
  },
  {
    "name": "Premium Conversion-Optimized Landing Page Package",
    "price": "$1,500 - $3,000",
    "duration": "3-4 Weeks",
    "features": [
      "- High-Converting Landing Page Design",
      "- A/B Testing to Maximize Conversion Rates",
      "- Email Marketing Integration",
      "- Advanced SEO and Speed Optimization"
    ],
    "websiteIncludes": [
      "Custom, High-Quality Landing Page Design",
      "Multiple CTAs for Different User Journeys",
      "Email Signup Forms and Lead Magnets"
    ],
    "idealFor": "Marketing Campaigns and Product Launches Requiring Focused User Conversion."
  },
  {
    "name": "Elite Full-Service Landing Page and Campaign Management",
    "price": "$3,000+",
    "duration": "4+ Weeks",
    "features": [
      "- Comprehensive Landing Page Strategy",
      "- Multi-Landing Page Funnels for Various Campaigns",
      "- Full Integration with CRM and Marketing Tools",
      "- Ongoing Optimization and Support"
    ],
    "websiteIncludes": [
      "Multiple Landing Pages for Comprehensive Campaigns",
      "Advanced Interactivity and Multimedia Content",
      "Continuous A/B Testing and Analytics Reporting"
    ],
    "idealFor": "Large-Scale Digital Marketing Campaigns Needing Extensive Landing Page Support and Strategic Insight."
  }
];

const Lander = () => {
  return (
    
    <div>
      <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "2px 6px 8px rgba(900, 105, 0.9, 0.4)" }}>
        <div className="p-4 sm:p-3">
          <div className="bg-gradient-to-b from-orange-500 to-orange-600 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-orange-200 transition-colors duration-300 p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            The Ultimate Portfolio Experience
            </h1>
            <p className="text-sm sm:text-md md:text-lg text-gray-100 mt-2 sm:mt-4">
            Craft, Showcase, Inspire: Your Portfolio, Your Story!
            </p>
          </div>
  
<h4 className="text-4xl mt-4 font-semibold text-gray-800">Conversion-Focused <span className="text-orange-500">Landing Page</span> Package</h4>
<p className="text-md text-gray-700 mt-4 mb-4">Maximize your marketing efforts with our Conversion-Focused Landing Page Package. Ideal for businesses and marketers, this package is designed to create high-impact landing pages that effectively convert visitors into leads, subscribers, or customers.</p>

  
  <div className="custom-category-card-container">
  <div class="custom-category-card">
  <div class="custom-category-icon">📱</div>
  <span class="custom-category-title">Responsive Design</span>
  <div class="custom-category-description">
    Ensure your landing pages look great and function smoothly on all devices for a seamless user experience.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📝</div>
  <span class="custom-category-title">Contact Forms</span>
  <div class="custom-category-description">
    Capture visitor information and inquiries with user-friendly contact forms.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🔍</div>
  <span class="custom-category-title">SEO Optimization</span>
  <div class="custom-category-description">
    Improve your landing pages visibility in search engine results with basic SEO fundamentals.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🌐</div>
  <span class="custom-category-title">Social Media Integration</span>
  <div class="custom-category-description">
    Connect with a wider audience by integrating your landing page with social media links.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎨</div>
  <span class="custom-category-title">Custom Design</span>
  <div class="custom-category-description">
    Enjoy custom design options that match your brand identity and captivate your audience.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📈</div>
  <span class="custom-category-title">Integrated Analytics</span>
  <div class="custom-category-description">
    Track your landing pages performance with integrated analytics to make data-driven decisions.
  </div>
</div>
{/* Speed Optimizations Card */}
<div class="custom-category-card">
  <div class="custom-category-icon">⚡</div>
  <span class="custom-category-title">Speed Optimization</span>
  <div class="custom-category-description">
    Optimize page loading times for lightning-fast user experiences.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎯</div>
  <span class="custom-category-title">A/B Testing</span>
  <div class="custom-category-description">
    Maximize conversion rates through A/B testing, refining your landing page for better results.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📧</div>
  <span class="custom-category-title">E-mail Marketing</span>
  <div class="custom-category-description">
    Nurture leads and engage with visitors through integrated email marketing tools.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎯</div>
  <span class="custom-category-title">Lead Capture</span>
  <div class="custom-category-description">
    Implement advanced lead capture techniques to generate valuable leads.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📊</div>
  <span class="custom-category-title">CRM Integration</span>
  <div class="custom-category-description">
    Efficiently manage leads with CRM integration, streamlining your lead management process.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🛠️</div>
  <span class="custom-category-title">Ongoing Support</span>
  <div class="custom-category-description">
    Receive ongoing optimization, support, and strategic insights for your marketing campaigns.
  </div>
</div>
</div>

{/* BENEFITS SECTION */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Benefits</h5>

{/* BENEFIT DESCRIPTIONS */}
<p className="text-md text-gray-700 mt-4"><b>Boost Conversions</b><br></br>Increase your conversion rates with focused messaging.</p>
<p className="text-md text-gray-700 mt-4"><b>Simplify Your Message</b><br></br>Deliver a clear, distraction-free pitch.</p>
<p className="text-md text-gray-700 mt-4"><b>Collect Valuable Data</b><br></br>Gather insights to tailor your marketing.</p>
<p className="text-md text-gray-700 mt-4"><b>Enhance Credibility</b><br></br>Build trust and professionalism.</p>
<p className="text-md text-gray-700 mt-4"><b>Track Performance</b><br></br>Analyze metrics for informed decisions.</p>
<p className="text-md text-gray-700 mt-4"><b>Increase ROI</b><br></br>Maximize returns on your marketing investment.</p>

{/* IDEAL FOR */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Ideal For</h5>

<div className="custom-category-card-container">
  {/* Startups */}
  <div className="custom-category-card">
  <div className="custom-category-icon">🚀</div>
  <span className="custom-category-title">Startups</span>
  <div className="custom-category-descriphtion">
    {/* Description for Startups */}
    Get your new business off the ground quickly with our Basic Landing Page Design Package. Its perfect for startups looking to establish an online presence and capture initial customer interest.
  </div>
</div>

{/* Small Businesses */}
<div className="custom-category-card">
  <div className="custom-category-icon">💼</div>
  <span className="custom-category-title">Small Businesses</span>
  <div className="custom-category-descrihption">
    {/* Description for Small Businesses */}
    Our Enhanced Landing Page Package with Analytics is tailored for small businesses. Generate leads and track visitor engagement to grow your customer base effectively.
  </div>
</div>

{/* Marketing Campaigns */}
<div className="custom-category-card">
  <div className="custom-category-icon">📈</div>
  <span className="custom-category-title">Marketing Campaigns</span>
  <div className="custom-category-descrihption">
    {/* Description for Marketing Campaigns */}
    The Premium Conversion-Optimized Landing Page Package is designed for marketing campaigns and product launches. Maximize conversion rates, integrate email marketing, and boost your online presence.
  </div>
</div>

{/* Digital Marketing Professionals */}
<div className="custom-category-card">
  <div className="custom-category-icon">🌐</div>
  <span className="custom-category-title">Digital Marketing Professionals</span>
  <div className="custom-category-descrhiption">
    {/* Description for Digital Marketing Professionals */}
    If youre a digital marketing professional handling large-scale campaigns, our Elite Full-Service Landing Page and Campaign Management package is ideal. It offers comprehensive strategies, multiple landing pages, and ongoing support to ensure your marketing efforts shine.
  </div>
</div>
</div>
         
{/* LANDING PAGE INFORMATION */}
<p className="mt-6 text-md text-gray-700">
  Launch your next campaign with a high-converting landing page. Contact us at{' '}
  <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or click the button below for a detailed consultation.
</p>

<Link href="/contact" legacyBehavior>
  <a className="inline-block mt-4 mb-6 bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-400 hover:to-orange-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
    Explore Landing Pages
  </a>
</Link>
</div>
</div>

{/* LANDING PAGE PACKAGE PRICING TITLE */}
<div className="relative py-5 px-6 lg:px-12 bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 rounded-3xl shadow-xl mx-4 my-10">
<div className="text-center">
<h1 className="text-xl lg:text-3xl font-extrabold text-white mb-2 mt-2 tracking-wide leading-tight hover:text-red-800 transition-colors duration-300">
Landing Page Package Pricing
</h1>
<p className="text-md lg:text-lg font-medium text-white mb-2">
Find the Ideal Plan for Your Business
</p>
<span className="inline-block w-16 h-1 bg-orange-100 rounded"></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
  {landerData.map((pkg, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-orange-300 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <div className="flex flex-col h-full">
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-800 hover:text-orange-400 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
          <p className="text-md mb-1 font-medium text-orange-400">{pkg.price}</p>
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
        <div className="bg-orange-500 p-4 text-white mt-auto">
          {pkg.idealFor}
        </div>
      </div>
    </div>
  ))}
</div>

{/* CONTACT INFORMATION */}
<div className="text-center mt-8">
<p className="text-2xl text-orange-600 font-semibold">
Interested in our Landing Page Web Design Package?
</p>
<p className="text-lg text-gray-600">
Contact us today to request a <span className="text-orange-500">free price quote</span>.
</p>
<Link href="/contact" legacyBehavior>
<a className="inline-block bg-orange-500 hover:bg-orange-800 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
Request a Free Price Quote
</a>
</Link>
</div>
</div>
   );
};

export default Lander;
