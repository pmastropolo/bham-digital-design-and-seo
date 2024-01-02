import React from 'react';
import Link from 'next/link';

const ecommercePackages = [
  {
    "name": "Starter E-commerce Website Package",
    "price": "$200 - $900",
    "duration": "2 Weeks",
    "features": [
      "- Showcase 3-10 Products",
      "- Basic Payment Integration | PayPal",
      "- Responsive Design | Desktop & Mobile",
      "- Links to Social Media",
      "- Basic contact form"
    ],
    "websiteIncludes": [
      "One-Page Storefront",
      "Privacy Policy Page",
      "Combined Home & Product Page",
      "Combined About & Contact Page"
    ],
    "totalPages": "2-3",
    "idealFor": "Small Home-Based Businesses, Artisans, or Anyone Wanting to Test the Waters of E-Commerce with Minimal Investment."
  },
  {
    "name": "Basic E-commerce Launch Package",
    "price": "$1,000 - $4,500",
    "duration": "6 Weeks",
    "features": [
      "- Showcase up to 50 Products with Dedicated Pages",
      "- Easy Payments via PayPal & Stripe",
      "- Responsive design | All Devices",
      "- Essential SEO Setup",
      "- Customers Profiles | Register & Manage",
      "- Easy-to-use cart and checkout system"
    ],
    "websiteIncludes": [
      "Engaging Homepage",
      "About Us & Contact",
      "Privacy Policy and Terms of Service",
      "Basic Search Function",
      "Product and Category Pages"
    ],
    "totalPages": "5-20",
    "idealFor": "Small Businesses or Startups Aiming to Establish a Robust Online Presence."
  },
  {
    "name": "Intermediate E-commerce Growth Package",
    "price": "$5,000 - $15,000",
    "duration": "16 Weeks",
    "features": [
      "- Showcase up to 500 Products with Dedicated Pages",
      "- Semi-Custom Design Elements",
      "- Enhanced SEO Capabilities",
      "- Responsive Design for All Devices",
      "- Links to Social Media",
      "- Wishlist Functionality",
      "- Multiple Gateways and Subscription Models",
      "- SSL Certificates and Data Encryption",
      "- Integrated Blog or News Section",
      "- CRM and ERP Integrations",
      "- Customer Reviews and Ratings",
      "- Insightful Analytic Tools",
      "- Enhanced Mobile Responsiveness",
      "- Essential Marketing Tools"
    ],
    "websiteIncludes": [
      "Efficient Search with Filters",
      "Diverse Payment Methods",
      "Live Chat Feature for Immediate Customer Assistance",
      "User-Friendly CMS",
      "Engaging Homepage",
      "About Us & Contact",
      "Privacy Policy and Terms of Service",
      "Helpful FAQ Page",
      "Extended Product Listings, Show More Products and Options",
      "20-50 Pages Including Blogs, Reviews, Profiles, and More"
    ],
    "totalPages": "20-50 | Including Blogs, Reviews, Profiles, and More",
    "idealFor": "For Businesses Seeking to Expand Their Reach with More Customization, Scalability, and Essential Features Like Customer Reviews, Wish Lists, and Analytics"
  },
  {
    "name": "Advanced E-commerce Powerhouse Package",
    "price": "$15,000 - $50,000+",
    "duration": "28 Weeks",
    "features": [
      "-Unlimited Product Showcase",
      "- Tailored Designs",
      "- Global Payment Solutions",
      "- Top-Level SEO for Online Presence",
      "- Strong Security with DDoS Protection and Audits",
      "- Seamless CRM, ERP, and Inventory Integration",
      "- Comprehensive Analytics for Smart Decisions",
      "- Automated Marketing via Email and Social Media",
      "- Global Reach with Multi-language Support",
      "- Exclusive Shopping Experience with AI Features"
    ],
    "websiteIncludes": [
      "Interactive & Customizable Pages",
      "Marketing-Driven Landing Pages",
      "Manage a Vast Catalog with Categories",
      "Pages for Industry-Specific Requirements",
      "Cutting-Edge Product Customization Offering Your Customers the Freedom to Create Their Perfect Product",
      "Seamless Connection with Essential Business Systems",
      "Advanced Data Analysis",
      "Automated Marketing",
      "Exclusive Membership Options, Subscription Models, and Membership Plans",
      "Two-Factor Authentication and More for Ironclad Security",
      "Open API for Custom Development",
      "Beyond 50 Pages"
    ],
    "totalPages": "50+",
    "idealFor": "Large Enterprises Managing a Significant Number of Products, Seeking a Highly customized, scalable, and secure e-commerce solution."
  }
];

const EcommercePackages = () => {
  return (
<div>
<div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "0px 3px 2px rgba(255, 0, 0, 0.5)" }}>
<div className="p-2 sm:p-3">
<div className="bg-gradient-to-b from-red-600 to-red-800 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-red-900 transition-colors duration-300 p-8">

{/* ECOMMERCE TITLE ONE*/}
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Ecommerce Made Easy</h1>
<p className="text-sm sm:text-md md:text-lg text-gray-100 mt-2 sm:mt-4">Collaborate with us to turn your vision into a successful reality.</p>
</div>

{/* ECOMMERCE TITLE TWO */}
<h4 className="text-4xl font-semibold text-gray-800 mt-4">Professional <span className="text-red-600">Ecommerce</span> Website Packages</h4>
<p className="text-md text-gray-700 mt-2">Kickstart your online business with our comprehensive e-commerce web design package. Designed to help you start selling online effortlessly, this package offers everything you need to establish a strong digital presence and expand your business reach.</p>

{/* ECOMMERCE FEATURES */}        
<div class="custom-category-card-container">
{/* RESPONSIVE DESIGN SECTION */}
<div class="custom-category-card">
<div class="custom-category-icon">📱</div>
<span class="custom-category-title">Responsive Design</span>
<div class="custom-category-description">Optimized for all devices, ensuring a seamless user experience on desktops, tablets, and smartphones.</div>
</div>
{/* SECURE PAYMENT INTEGRATION SECTION */}
<div class="custom-category-card">
<div class="custom-category-icon">💳</div>
<span class="custom-category-title">Secure Payment Integration</span>
<div class="custom-category-description">Includes safe and easy payment solutions like PayPal, enhancing customer transaction security.</div>
</div>
{/* DYNAMIC PRODUCT SHOWCASE SECTION */}
<div class="custom-category-card">
<div class="custom-category-icon">🏷️</div>
<span class="custom-category-title">Dynamic Product Showcase</span>
<div class="custom-category-description">Flexible product display options, from a few to unlimited products, each with its own page.</div>
</div>
{/* INTEGRATED SOCIAL MEDIA LINKS SECTION */}
<div class="custom-category-card">
<div class="custom-category-icon">🔗</div>
<span class="custom-category-title">Integrated Social Media Links</span>
<div class="custom-category-description">Social media integration to boost your market reach and online presence.</div>
</div>
{/* SEO CAPABILITIES SECTION */}
<div class="custom-category-card">
<div class="custom-category-icon">🔍</div>
<span class="custom-category-title">SEO Capabilities</span>
<div class="custom-category-description">Enhanced SEO features for improved search engine ranking and visibility.</div>
</div>
{/* CONTACT AND INFORMATION PAGES SECTION */}
<div class="custom-category-card">
<div class="custom-category-icon">📄</div>
<span class="custom-category-title">Contact and Information Pages</span>
<div class="custom-category-description">Includes essential About Us and Contact pages for business transparency.</div>
</div>
{/* PRIVACY POLICY AND TERMS OF SERVICE SECTION */}
<div class="custom-category-card">
<div class="custom-category-icon">📜</div>
<span class="custom-category-title">Privacy Policy and Terms of Service</span>
<div class="custom-category-description">Provides necessary legal pages like Privacy Policy and Terms of Service.</div>
</div>
{/* VARIETY IN PAGE RANGE SECTION */}
<div class="custom-category-card">
<div class="custom-category-icon">📊</div>
<span class="custom-category-title">Variety in Page Range</span>
<div class="custom-category-description">Offers a range of page options, from simple layouts to extensive multi-page sites.</div>
</div>
</div>

{/* Section for Benefits of the Ecommerce Package */}
<div className="mt-6">
<h5 className="text-3xl font-semibold text-gray-800">Benefits of Owning a Ecommerce Website</h5>
<hr className="mb-3 mt-3" />
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">

{/* Availability 24/7 Card */}
<div className="benefit-card">
<h6 className="title font-bold text-lg">Availability 24/7</h6>
<p className="description">Open non-stop for sales & leads.</p>
</div>

{/* Global Reach Card */}
<div className="benefit-card">
<h6 className="title font-bold text-lg">Global Reach</h6>
<p className="description">Sell to customers worldwide.</p>
</div>

{/* Lower Costs Card */}
<div className="benefit-card">
<h6 className="title font-bold text-lg">Lower Costs</h6>
<p className="description">Enjoy reduced overhead.</p>
</div>

{/* Scalability Card */}
<div className="benefit-card">
<h6 className="title font-bold text-lg">Scalability</h6>
<p className="description">Start small and expand.</p>
</div>

{/* Lead Generation Card */}
<div className="benefit-card">
<h6 className="title font-bold text-lg">Competitive Edge</h6>
<p className="description">Stay ahead in the digital age.</p>
</div>
</div>
<p className="text-md text-gray-700 mt-4"><b>Join the e-commerce revolution! Start your journey to success today. Your e-commerce store could be the next big thing in the digital marketplace.</b></p> 
</div>


{/* IDEAL FOR SECTION */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Ideal For</h5>
<div className="custom-category-card-container">
{/* SMALL AND EMERGING BUSINESSES CARD */}
<div class="custom-category-card">
<div class="custom-category-icon">🏠</div>
<span class="custom-category-title">Small and Emerging Businesses</span>
<div class="custom-category-descrgiption">Businesses, artisans, & startups seeking to launch with essential ecommerce features.</div>
</div>

{/* GROWTH AND EXPANSION FOCUSED BUSINESSES CARD */}
<div class="custom-category-card">
<div class="custom-category-icon">🚀</div>
<span class="custom-category-title">Growth and Expansion Focused Businesses</span>
<div class="custom-category-descrgiption">Businesses aiming for growth, scalability, and reaching international markets.</div>
</div>

{/* ESTABLISHED AND LARGE ENTERPRISES CARD */}
<div class="custom-category-card">
<div class="custom-category-icon">💼</div>
<span class="custom-category-title">Established and Large Enterprises</span>
<div class="custom-category-descgiption">Large enterprises needing customized, scalable, & secure ecommerce solutions.</div>
</div>

{/* INNOVATIVE AND SUSTAINABLE BUSINESSES CARD */}
<div class="custom-category-card">
<div class="custom-category-icon">🔭</div>
<span class="custom-category-title">Innovative and Sustainable Businesses</span>
<div class="custom-category-descrigption">Innovative and eco-friendly businesses focusing on unique online experiences and sustainability.</div>
</div>
</div>

{/* Contact link */}  
<p className="mt-6 text-md text-gray-700">
Connect with us for a personalized consultation at{' '}
<a href="mailto:services@bhamseoanddesignco.com" style={{ color: 'red' }}>services@bhamseoanddesignco.com</a> or click the button below to get started.
</p>
{/* Button for Learning More */}
<Link href="/contact" legacyBehavior>
    <a className="inline-block mt-4 mb-6 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-800 hover:to-red-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
      Enhance Your Ecommerce Reach
    </a>
  </Link>
</div>
</div>
    
{/* ECOMMERCE PACKAGE PRICING TITLE*/}
<div className="relative py-5 px-6 lg:px-12 bg-gradient-to-br from-red-500 via-red-500 to-red-600 rounded-3xl shadow-xl mx-4 my-10">
<div className="text-center">
<h1 className="text-xl lg:text-3xl font-extrabold text-white mb-2 mt-2 tracking-wide leading-tight hover:text-red-800 transition-colors duration-300">
Ecommerce Package Pricing
</h1>
<p className="text-md lg:text-lg font-medium text-white mb-2">
Find the Ideal Plan for Your Business
</p>
<span className="inline-block w-16 h-1 bg-red-100 rounded"></span>
</div>
</div>

{/* ECOMMERCE PACKAGES PRICING */}   
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
  {ecommercePackages.map((pkg, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-red-500 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <div className="flex flex-col h-full"> 
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-800 hover:text-red-800 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
          <p className="text-md mb-1 font-medium text-red-500">{pkg.price}</p>
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
        <div className="bg-red-600 p-4 text-white mt-auto"> 
          {pkg.idealFor}
        </div>
      </div>
    </div>
  ))}
</div>

{/* ECOMMERCE CONTACT/FREE QUOTE */}  
<div className="text-center mt-8">
<p className="text-2xl text-red-700 font-semibold">Interested in our E-commerce Web Design Package?</p>
<p className="text-lg text-gray-600">Contact us today to request a <span className="text-red-700">free price quote</span>.</p>

{/* CONTACT LINK */}  
<Link href="/contact" legacyBehavior>
<a className="inline-block bg-red-700 hover:bg-red-800 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">Request a Free Price Quote</a>
</Link>
</div>
{/* RED BORDER BOTTOM */} 
<div className="border-bottom-red"></div>
</div>
  );
};

export default EcommercePackages;
