import React from 'react';
import Link from 'next/link';

const personalPackages = [
  {
    "name": "Personal Blog Starter Package",
    "price": "$500 - $1,200",
    "duration": "3 Weeks",
    "features": [
      "- Basic Responsive Design",
      "- User-Friendly Blogging Platform",
      "- Social Media Integration",
      "- Basic SEO Setup"
    ],
    "websiteIncludes": [
      "Home Page with Blog Feed",
      "About Me Page",
      "Blog Post Pages",
      "Contact Form Page"
    ],
    "totalPages": "4-6",
    "idealFor": "Individuals Starting a Personal Blog or Hobby Site."
  },
  {
    "name": "Professional Personal Website Package",
    "price": "$1,500 - $3,000",
    "duration": "5 Weeks",
    "features": [
      "- Customized Design Reflecting Personal Brand",
      "- Enhanced SEO for Better Online Presence",
      "- Portfolio or Gallery Integration",
      "- Blog with Advanced Features"
    ],
    "websiteIncludes": [
      "Custom Home Page",
      "Professional Portfolio or Gallery Page",
      "Detailed About/Bio Page",
      "Contact Page with Enhanced Functionality"
    ],
    "totalPages": "5-8",
    "idealFor": "Professionals, Artists, or Freelancers Looking to Showcase Their Work and Expand Their Reach."
  },
  {
    "name": "Advanced Personal Branding Website Package",
    "price": "$3,500 - $6,000",
    "duration": "8 Weeks",
    "features": [
      "- High-End Custom Design",
      "- Advanced SEO and Social Media Integration",
      "- Interactive Content Features",
      "- E-commerce Integration for Merchandising"
    ],
    "websiteIncludes": [
      "Personalized Landing Page",
      "Comprehensive Blog with Categories",
      "Professional Portfolio Showcasing Work",
      "Online Store for Products or Services"
    ],
    "totalPages": "10-15",
    "idealFor": "Influencers, Creatives, or Entrepreneurs Seeking a Robust Platform for Personal Branding and E-commerce."
  },
  {
    "name": "Elite Personal Web Presence and Marketing Suite",
    "price": "$7,000+",
    "duration": "12+ Weeks",
    "features": [
      "- State-of-the-Art Website Design",
      "- Comprehensive Digital Marketing Tools",
      "- Full-Scale SEO and Analytics",
      "- Custom Mobile App for Enhanced Engagement"
    ],
    "websiteIncludes": [
      "Advanced Custom Home Page",
      "Interactive Multimedia Portfolio",
      "Integrated Personal Blog with Rich Media",
      "Personalized Mobile App for Direct Engagement"
    ],
    "totalPages": "15+",
    "idealFor": "High-Profile Individuals or Public Figures Seeking an Extensive Online Presence with Advanced Marketing and Engagement Tools."
  }
];

const Personal = () => {
  return (
    <div>
      {/* Main Personal Website Package Card */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "0px 3px 2px rgba(230, 0, 0, 0.5)" }}>
        <div className="p-4 sm:p-3">
          {/* Title Section */}
          <div className="bg-gradient-to-b from-pink-900 to-pink-900 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-pink-200 transition-colors duration-300 p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Elevate Your Online Presence
            </h1>
            <p className="text-sm sm:text-md md:text-lg mt-2 sm:mt-4">
              Unlock the power of a stunning personal website.
            </p>
          </div>

          {/* Package Description */}
          <h4 className="text-4xl mt-4 font-semibold text-gray-800">
            Unique <span className="text-pink-800">Personal</span> Website Package
          </h4>
          <p className="text-md text-gray-700 mt-4 mb-4">
            Create your individual online identity with our Unique Personal Website Package. Ideal for bloggers, artists, freelancers, and anyone looking to establish a personal brand or share their passions.
          </p>


{/* Custom Category Card Container */}
<div className="custom-category-card-container">

  {/* Customized Design Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🎨</div>
    <span className="custom-category-title">Customized Design</span>
    <div className="custom-category-description">
      Your website will be a reflection of your unique style and personality, ensuring you stand out online.
    </div>
  </div>

  {/* About Me/Bio Page Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">👤</div>
    <span className="custom-category-title">About Me | Bio</span>
    <div className="custom-category-description">
      Share your story and let your audience get to know the person behind the website.
    </div>
  </div>

  {/* Online Resume Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">📝</div>
    <span className="custom-category-title">Online Resume</span>
    <div className="custom-category-description">
    Showcase your skills and experience interactively on your site.
    </div>
  </div>

  {/* Social Media Integration Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📱</div>
    <span class="custom-category-title">Connect on Social Media</span>
    <div class="custom-category-description">Link and engage with your audience on social platforms.</div>
  </div>

  {/* Portfolio/Gallery Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">📷</div>
    <span className="custom-category-title">Portfolio | Gallery</span>
    <div className="custom-category-description">
      Showcase your work or creations beautifully with integrated portfolios or galleries.
    </div>
  </div>

  {/* Mobile Responsiveness Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">📱💻</div>
    <span className="custom-category-title">Mobile Responsiveness</span>
    <div className="custom-category-description">
      Your website will look stunning and function perfectly on all devices.
    </div>
  </div>

  {/* Networking Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">💼</div>
    <span className="custom-category-title">Networking</span>
    <div className="custom-category-description">
    Connect with peers and share contact information through your site.
    </div>
  </div>

  {/* Global Reach Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🌎</div>
    <span className="custom-category-title">Global Reach</span>
    <div className="custom-category-description">
    Expand your visibility worldwide with an online presence.
    </div>
  </div>
</div>

{/* BENEFITS section */}
<div className="mt-6">
  <h5 className="text-3xl font-semibold text-gray-800">Benefits of Owning a Personal Website</h5>
  <hr className="mb-3 mt-3" />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-6">

{/* Control and Ownership Card */}
<div className="benefit-card">
  <h6 className="title font-bold text-lg">Control and Ownership</h6>
  <p className="description">Full control over your content and presentation with your own website.</p>
</div>

{/* Improved Credibility Card */}
<div className="benefit-card">
  <h6 className="title font-bold text-lg">Improved Credibility</h6>
  <p className="description">Enhance your professional image with a well-designed website.</p>
</div>

{/* Content Sharing Card */}
<div className="benefit-card">
  <h6 className="title font-bold text-lg">Content Sharing</h6>
  <p className="description">Position yourself as an expert by sharing blogs and articles.</p>
</div>

{/* Career Advancement Card */}
<div className="benefit-card">
  <h6 className="title font-bold text-lg">Career Advancement</h6>
  <p className="description">Attract new opportunities by highlighting your achievements.</p>
</div>

{/* Diversify Income Card */}
<div className="benefit-card">
  <h6 className="title font-bold text-lg">Diversify Income</h6>
  <p className="description">Use your website to sell products, offer courses, or consult.</p>
</div>

    {/* Personal Branding Card */}
    <div className="benefit-card">
      <h6 className="title font-bold text-lg">Personal Branding</h6>
      <p className="description">Showcase your identity and stand out.</p>
    </div>
  </div>
</div>

{/* Ideal For Section */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Ideal For</h5>
<div className="custom-category-card-container">

  {/* Card for Bloggers */}
  <div className="custom-category-card">
    <div className="custom-category-icon">👩‍💻</div>
    <span className="custom-category-title">Bloggers</span>
    <div className="custom--description">
      Establish your personal brand and share your passions with the world using our Unique Personal Website Package.
    </div>
  </div>

  {/* Card for Artists */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🎨</div>
    <span className="custom-category-title">Artists</span>
    <div className="custom--description">
      Showcase your work and portfolio in a distinctive and memorable way.
    </div>
  </div>

  {/* Card for Freelancers */}
  <div className="custom-category-card">
    <div className="custom-category-icon">💼</div>
    <span className="custom-category-title">Freelancers</span>
    <div className="custom--description">
      Build your personal online identity and connect with clients. 
    </div>
  </div>

  {/* Card for Online Presence */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🌐</div>
    <span className="custom-category-title">Online Presence</span>
    <div className="custom--description">
      Enhance your online presence and reach a broader audience with our Unique Personal Website Package.
    </div>
  </div>
</div>


{/* Contact Information */}
<p className="mt-6 text-md text-gray-700">
  Ready to build your online presence? Contact us at 
  <a href="mailto:services@bhamseoanddesignco.com" style={{ color: 'purple' }}> services@bhamseoanddesignco.com
  </a> for a consultation, or click the button below to start your journey.
</p>
     
{/* Contact Button */}      
<Link href="/contact" legacyBehavior>
  <a className="inline-block mt-6 mb-6 bg-gradient-to-r from-pink-800 to-pink-900 hover:from-pink-900 hover:to-pink-900 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
    Craft Your Personal Space
 </a>
</Link>
</div>
</div>

{/* PERSONAL PACKAGE PRICING TITLE */}
<div className="relative py-5 px-6 lg:px-12 bg-gradient-to-br from-pink-500 via-pink-500 to-pink-600 rounded-3xl shadow-xl mx-4 my-10">
  <div className="text-center">
    <h1 className="text-xl lg:text-3xl font-extrabold text-white mb-2 mt-2 tracking-wide leading-tight hover:text-pink-800 transition-colors duration-300">
    Personal Package Pricing
    </h1>
    <p className="text-md lg:text-lg font-medium text-white mb-2">
      Find the Ideal Plan for Your Business
    </p>
    <span className="inline-block w-16 h-1 bg-pink-100 rounded"></span>
  </div>
</div>

{/* PERSONAL PACKAGES PRICING */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
  {personalPackages.map((pkg, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-pink-900 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <div className="flex flex-col h-full">
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-800 hover:text-pink-900 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
          <p className="text-md mb-1 font-medium text-pink-800">{pkg.price}</p>
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
        <div className="bg-pink-950 p-4 text-white mt-auto">
          {pkg.idealFor}
        </div>
      </div>
    </div>
  ))}
</div>

{/* FREE PRICE QUOTE */} 
<div className="text-center mt-8">
  <p className="text-2xl text-pink-900 font-semibold">
    Interested in our Personal Web Design Package?
  </p>
  <p className="text-lg text-gray-600">
    Contact us today to request a <span className="text-pink-700">free price quote</span>.
  </p>
  <Link href="/contact" legacyBehavior>
    <a className="inline-block bg-pink-900 hover:bg-pink-950 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
      Request a Free Price Quote
    </a>
  </Link>
</div>

{/* PINK BORDER BOTTOM */} 
<div className="border-bottom-pink"></div>

    </div>
  );
};


export default Personal;
