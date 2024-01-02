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
                <div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "2px 6px 8px rgba(900, 105, 0.9, 0.4)" }}></div>
                    <div className="p-4 sm:p-3">
                      <div className="bg-gradient-to-b from-yellow-700 to-yellow-800 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-yellow-950 transition-colors duration-300 p-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        The Ultimate Portfolio Experience
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg text-gray-100 mt-2 sm:mt-4">
                        Craft, Showcase, Inspire: Your Portfolio, Your Story!
                        </p>
                      </div>
              
<h4 className="text-4xl mt-4 font-semibold text-gray-800">Stunning<span className="text-yellow-700"> Portfolio</span> Website Package</h4>
<p className="text-md text-gray-700 mt-4">Dazzle the digital world with our Stunning Portfolio Website Package. This exclusive offering is meticulously designed to empower individuals and professionals from various creative domains. Elevate your online presence and leave an indelible mark in your industry with a captivating and visually immersive digital portfolio</p>
          
<div className="custom-category-card-container">
<div class="custom-category-card">
  <div class="custom-category-icon">📄</div>
  <span class="custom-category-title">Multiple Page Options</span>
  <div class="custom-category-description">
    Create up to 5 pages, including Home, About, Portfolio, Blog, and Contact. Showcase your work and share your story effortlessly.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎨</div>
  <span class="custom-category-title">Design Templates</span>
  <div class="custom-category-description">
    Choose from a selection of design templates, allowing you to customize your website to match your unique personal brand.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📱</div>
  <span class="custom-category-title">Mobile-Responsive Design</span>
  <div class="custom-category-description">
    Your website will look stunning on any device, ensuring that your portfolio shines on both desktop and mobile screens.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🖼️</div>
  <span class="custom-category-title">Gallery or Portfolio Section</span>
  <div class="custom-category-description">
    Highlight your creative work with a dedicated gallery or portfolio section, making it easy for visitors to explore your talents.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🔍</div>
  <span class="custom-category-title">SEO Setup</span>
  <div class="custom-category-description">
    Boost your online visibility with basic SEO setup, helping potential clients discover your portfolio through search engines.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🌐</div>
  <span class="custom-category-title">Social Media Integration</span>
  <div class="custom-category-description">
    Connect your portfolio to your social media profiles, expanding your reach and engaging with a wider audience.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">💌</div>
  <span class="custom-category-title">Contact Form</span>
  <div class="custom-category-description">
    A user-friendly contact form ensures that potential clients can easily reach out to you for inquiries and collaborations.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🖥️</div>
  <span class="custom-category-title">Content Management System (CMS)</span>
  <div class="custom-category-description">
    Update your content effortlessly with our user-friendly CMS, so your portfolio is always up to date.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📈</div>
  <span class="custom-category-title">Analytics</span>
  <div class="custom-category-description">
    Gain insights into your websites performance with basic analytics, helping you understand your audience and their interactions.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎨</div>
  <span class="custom-category-title">Custom Design Options</span>
  <div class="custom-category-description">
    Enjoy enhanced design options, including personalized and interactive designs that perfectly match your personal branding.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📝</div>
  <span class="custom-category-title">Blog Integration</span>
  <div class="custom-category-description">
    Share your knowledge and insights through integrated blogging features, attracting and engaging your target audience.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🔐</div>
  <span class="custom-category-title">Security and Maintenance</span>
  <div class="custom-category-description">
    Rest easy knowing your portfolio is secure, with ongoing technical support to keep your website running smoothly.
  </div>
</div>
</div>

<h5 className="text-2xl font-semibold text-gray-800 mt-6">Benefits of having a Portfolio WebSite</h5>
<p className="text-md text-gray-700 mt-4"><b>Showcase Your Talent</b> | Display your work professionally to impress clients and employers.</p>
<p className="text-md text-gray-700 mt-4"><b>Boost Your Image</b> | Elevate your online presence with a sleek, personal portfolio.</p>
<p className="text-md text-gray-700 mt-4"><b>Unique Branding</b> | Customize your site to stand out and define your personal brand.</p>
<p className="text-md text-gray-700 mt-4"><b>Get Noticed</b> | Attract job offers, freelance gigs, and collaborations with a stunning portfolio.</p>
<p className="text-md text-gray-700 mt-4"><b>Global Exposure</b> | Reach a worldwide audience and expand your opportunities.</p>
<p className="text-md text-gray-700 mt-4"><b>Total Control</b> | Manage and update your content effortlessly to keep your portfolio fresh.</p>
<p className="text-md text-gray-700 mt-4"><b>Engage Your Audience</b> | Connect with your viewers, gather feedback, and share your journey.</p>


{/* Section for Key Features of the Portfolio Package */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Ideal For</h5>
<div className="custom-category-card-container">
      <div class="custom-category-card">
        <div class="custom-category-icon">🎨</div>
        <span class="custom-category-title">Visual Artists</span>
        <div class="custom-category-description">
          Showcase your artwork with a stunning digital portfolio. Reflect your personal style and captivate your audience.
        </div>
      </div>

      {/* Individual Card for Designers */}
      <div class="custom-category-card">
        <div class="custom-category-icon">✏️</div>
        <span class="custom-category-title">Designers</span>
        <div class="custom-category-description">
          Display your innovative design projects. Get a unique platform that highlights your creativity.
        </div>
      </div>

      {/* Individual Card for Photographers */}
      <div class="custom-category-card">
        <div class="custom-category-icon">📷</div>
        <span class="custom-category-title">Photographers</span>
        <div class="custom-category-description">
          Showcase your photography skills. From landscapes to portraits, make an impact with your digital portfolio.
        </div>
      </div>

      {/* Individual Card for Freelancers */}
      <div class="custom-category-card">
        <div class="custom-category-icon">💼</div>
        <span class="custom-category-title">Freelancers</span>
        <div class="custom-category-description">
          Highlight your expertise and services as a freelancer. Create a captivating digital narrative.
        </div>
      </div>
      </div>


      
      {/* Call to Action for Contact */}
      <p className="mt-6 text-md text-gray-700">To create a portfolio that truly represents you and your work, reach out to us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or press the button to get started.</p>

      {/* Contact Button to Launch Portfolio */}
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-800 hover:to-yellow-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Launch Your Portfolio Now
        </a>
      </Link>
    </div>
  </div>


<section></section>
<h1 className="text-3xl lg:text-5xl font-bold text-center mb-8 mt-10 underline decoration-yellow-900 decoration-4 underline-offset-8">
  Portfolio Package Pricing
</h1>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
  {portfolioPackages.map((pkg, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-yellow-500 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <div className="flex flex-col h-full"> 
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-800 hover:text-yellow-800 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
          <p className="text-md mb-1 font-medium text-yellow-700">{pkg.price}</p>
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
        <div className="bg-yellow-900 p-4 text-white mt-auto"> 
          {pkg.idealFor}
        </div>
      </div>
    </div>
  ))}
</div>

  {/* Contact Information */}
  <div className="text-center mt-8">
  <p className="text-2xl text-yellow-700 font-semibold">
    Interested in our Business Web Design Package?
  </p>
  <p className="text-lg text-gray-600">
    Contact us today to request a <span className="text-yellow-700">free price quote</span>.
  </p>
  <Link href="/contact" legacyBehavior>
    <a className="inline-block bg-yellow-700 hover:bg-yellow-800 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
      Request a Free Price Quote
    </a>
  </Link>

          </div>
        </div>

   );
};


export default Portfolio;






