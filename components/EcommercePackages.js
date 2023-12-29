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
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
    Ecommerce Made Easy
  </h1>
  <p className="text-sm sm:text-md md:text-lg text-gray-300 mt-2 sm:mt-4">
  Collaborate with us to turn your vision into a successful reality.
  </p>
</div>


    <h4 className="text-4xl font-semibold text-gray-800 mt-4">Professional <span className="text-red-600">Ecommerce</span> Website Packages</h4>
    <p className="text-md text-gray-700 mt-2">Kickstart your online business with our comprehensive e-commerce web design package. Designed to help you start selling online effortlessly, this package offers everything you need to establish a strong digital presence and expand your business reach.</p>
        
<div class="custom-category-card-container">

        <div class="custom-category-card">
          <div class="custom-category-icon">📱</div>
          <span class="custom-category-title">Responsive Design</span>
          <div class="custom-category-description">
          No matter which package you choose, your website will look great on any device. Our responsive design ensures your site is user-friendly, whether viewed on a desktop, tablet, or smartphone.
          </div>
        </div>
  
        <div class="custom-category-card">
          <div class="custom-category-icon">💳</div>
          <span class="custom-category-title">Secure Payment Integration</span>
          <div class="custom-category-description">
          Each of our packages includes secure payment integration. Whether its PayPal or other gateways, we make sure your customers can easily and safely make purchases on your site.
          </div>
        </div>
  
        <div class="custom-category-card">
  <div class="custom-category-icon">🏷️</div>
  <span class="custom-category-title">Dynamic Product Showcase</span>
  <div class="custom-category-description">
    Showcasing your products is key. Depending on your needs, our packages allow you to display anywhere from a few products to an unlimited range, each with its own dedicated page.
  </div>
</div>
  
<div class="custom-category-card">
  <div class="custom-category-icon">🔗</div>
  <span class="custom-category-title">Integrated Social Media Links</span>
  <div class="custom-category-description">
    We understand the importance of social media in todays market. Thats why all our packages include social media integration, helping you connect with a wider audience and enhance your online presence.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🔍</div>
  <span class="custom-category-title">SEO Capabilities</span>
  <div class="custom-category-description">
    To help your website rank better on search engines and attract more visitors, each of our packages comes with SEO capabilities, tailored to your package level.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📄</div>
  <span class="custom-category-title">Contact and Information Pages</span>
  <div class="custom-category-description">
    Its essential for your customers to know who you are. Our packages all include About Us and Contact pages, ensuring your business is approachable and transparent.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📜</div>
  <span class="custom-category-title">Privacy Policy and Terms of Service</span>
  <div class="custom-category-description">
    We cover the legal aspects too. Every package comes with a Privacy Policy and Terms of Service pages, ensuring your website meets legal requirements.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📊</div>
  <span class="custom-category-title">Variety in Page Range</span>
  <div class="custom-category-description">
    Whether youre starting small or going big, our packages offer a range of pages to suit your business size and needs. This includes everything from basic one-page layouts to extensive, multi-page sites.
  </div>
</div>




</div>

<h5 className="text-2xl font-semibold text-gray-800 mt-6">Benefits of having a Business WebSite</h5>
<p className="text-md text-gray-700 mt-2"><b>Global Reach</b> | Sell to customers worldwide, expanding your market effortlessly.</p>
<p className="text-md text-gray-700 mt-2"><b>Available 24/7</b> | Your store never closes, increasing sales potential day and night.</p>
<p className="text-md text-gray-700 mt-2"><b>Lower Costs</b> | Enjoy reduced overhead compared to brick-and-mortar stores.</p>
<p className="text-md text-gray-700 mt-2"><b>Scalability</b> | Start small and expand as your business grows.</p>
<p className="text-md text-gray-700 mt-2"><b>Competitive Edge</b> | Stay ahead in the digital age with an online presence.</p>
<p className="text-md text-gray-700 mt-4"><b>Join the e-commerce revolution! Start your journey to success today. Your e-commerce store could be the next big thing in the digital marketplace.</b></p>
 
  
        <p className="mt-6 text-md text-gray-700">
          Connect with us for a personalized consultation at{' '}
          <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a> or click the button below to begin your blogging journey.
        </p>
  
  </div>
  </div>
  <section></section>
    

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

      <div className="text-center mt-8">
        <p className="text-2xl text-red-700 font-semibold">
          Interested in our E-commerce Web Design Package?
        </p>
        <p className="text-lg text-gray-600">
          Contact us today to request a <span className="text-red-700">free price quote</span>.
        </p>
        <Link href="/contact" legacyBehavior>
          <a className="inline-block bg-red-700 hover:bg-red-800 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
            Request a Free Price Quote
          </a>
        </Link>
      </div>

    </div>
  );
};

export default EcommercePackages;


