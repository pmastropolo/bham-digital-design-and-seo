import React from 'react';
import Link from 'next/link';

const restaurantPackages = [
  {
    "name": "Basic Restaurant Web Presence Package",
    "price": "$800 - $2,000",
    "duration": "3 Weeks",
    "features": [
      "- Sleek, Mobile-Responsive Design",
      "- Basic Menu Display",
      "- Contact Form with Location Map",
      "- Social Media Integration"
    ],
    "websiteIncludes": [
      "Home Page with Restaurant Overview",
      "Menu Page with Food Categories",
      "About Us Page for Restaurant Story",
      "Contact Page with Map and Inquiry Form"
    ],
    "totalPages": "4-5",
    "idealFor": "Small Restaurants, Cafes, or Food Trucks Seeking Basic Online Presence and Menu Display."
  },
  {
    "name": "Enhanced Restaurant Marketing Package",
    "price": "$2,500 - $5,000",
    "duration": "5 Weeks",
    "features": [
      "- Interactive Menu with Images",
      "- Online Reservation System",
      "- SEO Optimization for Local Visibility",
      "- Email Newsletter Signup for Promotions"
    ],
    "websiteIncludes": [
      "Dynamic Home Page with Specials Highlight",
      "Detailed Menu Pages with Gallery",
      "Reservation and Booking Page",
      "Customer Reviews and Testimonials Section"
    ],
    "totalPages": "6-10",
    "idealFor": "Mid-Size Restaurants Looking to Enhance Online Booking and Marketing Capabilities."
  },
  {
    "name": "Premium Restaurant Online Experience Package",
    "price": "$6,000 - $10,000",
    "duration": "7 Weeks",
    "features": [
      "- Custom, High-End Web Design",
      "- Advanced SEO and Social Media Strategy",
      "- Integrated E-Commerce for Online Orders",
      "- Multilingual Menu and Pages"
    ],
    "websiteIncludes": [
      "Custom Home Page with Interactive Features",
      "Online Ordering and Delivery System",
      "Event and Catering Information Pages",
      "Gallery Page with High-Quality Images"
    ],
    "totalPages": "10-15",
    "idealFor": "High-End Restaurants and Chains Seeking Advanced Online Ordering and Brand Experience."
  },
  {
    "name": "Elite Full-Service Restaurant Digital Suite",
    "price": "$12,000+",
    "duration": "10+ Weeks",
    "features": [
      "- State-of-the-Art Website with Cutting-Edge Design",
      "- Full Online Booking and Order Management System",
      "- Comprehensive Digital Marketing and SEO Campaigns",
      "- Custom Mobile App Development for Enhanced Engagement"
    ],
    "websiteIncludes": [
      "Innovative Landing Pages for Each Service",
      "Integrated CRM for Customer Loyalty Programs",
      "Detailed Food and Beverage Menus with Nutrition Info",
      "Blogs and Articles for Engagement and SEO"
    ],
    "totalPages": "20+",
    "idealFor": "Large Restaurant Enterprises or Franchises Needing a Comprehensive Digital Ecosystem with Mobile App."
  }
];

const Restaurant = () => {
  return (

        <div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "0px 4px 6px rgba(0, 255, 0, 0.1)" }}>
          <div className="p-4 sm:p-3">
          <div className="bg-gradient-to-b from-emerald-900 to-emerald-900 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-emerald-950 transition-colors duration-300 p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
       Digital Dining Redefined
              </h1>
              <p className="text-sm sm:text-md md:text-lg text-gray-100 mt-2 sm:mt-4">
              Byte to Bite 
              </p>
            </div>
        
<h4 className="text-4xl mt-2 font-semibold text-gray-800 mt-4">Gourmet <span className="text-emerald-800">Restaurant </span>Website Package</h4>
<p className="text-md text-gray-700 mt-4 mb-4">Enhance your culinary presence online with our Gourmet Restaurant Website Package. Designed for restaurants, cafes, and culinary businesses, this package provides an enticing platform to showcase your menu, ambiance, and unique dining experiences to attract more food enthusiasts.</p>
      
<div className="custom-category-card-container">

  {/* Web Presence Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🌐</div>
    <span class="custom-category-title">Web Presence</span>
    <div class="custom-category-description">
      Create a captivating online identity to highlight your culinary skills.
    </div>
  </div>

  {/* Menu Display Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📜</div>
    <span class="custom-category-title">Menu Display</span>
    <div class="custom-category-description">
      Showcase your menu enticingly, from simple lists to interactive galleries.
    </div>
  </div>

  {/* Contact Information Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📞</div>
    <span class="custom-category-title">Contact Information</span>
    <div class="custom-category-description">
      Easy access to contact details, maps, and inquiry forms for your customers.
    </div>
  </div>

  {/* Mobile-Responsive Design Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📱</div>
    <span class="custom-category-title">Mobile-Responsive Design</span>
    <div class="custom-category-description">
      Optimize your site for all devices, ensuring a smooth mobile experience.
    </div>
  </div>

  {/* Online Booking/Reservation System Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📅</div>
    <span class="custom-category-title">Online Booking | Reservation System</span>
    <div class="custom-category-description">
      Hassle-free online reservations for customer convenience and efficiency.
    </div>
  </div>

  {/* E-Commerce Capabilities Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">💻</div>
    <span class="custom-category-title">E-Commerce Capabilities</span>
    <div class="custom-category-description">
      Smooth online ordering for an enhanced customer experience.
    </div>
  </div>

  {/* Content Variety Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📄</div>
    <span class="custom-category-title">Content Variety</span>
    <div class="custom-category-description">
      Diverse web pages to showcase different aspects of your restaurant.
    </div>
  </div>

  {/* Marketing Tools Card */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📣</div>
    <span class="custom-category-title">Marketing Tools</span>
    <div class="custom-category-description">
      Advanced tools for promotions and digital marketing.
    </div>
  </div>
</div>

 
{/* Section for Benefits of the Ecommerce Package */}
<div className="mt-6">
<h5 className="text-3xl font-semibold text-gray-800">Benefits of Owning a Restaurant Website</h5>
<hr className="mb-3 mt-3" />
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
{/* Online Visibility Card */}
<div className="benefit-card">
  <h6 className="title font-bold text-lg">Online Visibility</h6>
  <p className="description">Enhances your restaurants findability on the internet.</p>
</div>

{/* Customer Convenience Card */}
<div className="benefit-card">
  <h6 className="title font-bold text-lg">Customer Convenience</h6>
  <p className="description">Facilitates menu viewing, reservations, and online ordering.</p>
</div>

{/* Showcasing the Menu Card */}
<div className="benefit-card">
  <h6 className="title font-bold text-lg">Showcasing the Menu</h6>
  <p className="description">Attracts customers with a well-presented online menu.</p>
</div>

{/* Marketing and Promotions Card */}
<div className="benefit-card">
  <h6 className="title font-bold text-lg">Marketing and Promotions</h6>
  <p className="description">Ideal for advertising specials and events.</p>
</div>

{/* Building Brand Identity Card */}
<div className="benefit-card">
  <h6 className="title font-bold text-lg">Building Brand Identity</h6>
  <p className="description">Strengthens your restaurants online branding.</p>
</div>

{/* Data Collection and Analytics Card */}
<div className="benefit-card">
  <h6 className="title font-bold text-lg">Data Collection and Analytics</h6>
  <p className="description">Gathers customer insights for targeted marketing.</p>
</div>
</div>
</div>

<h5 className="text-2xl font-semibold text-gray-800 mt-6">Ideal For</h5>
<div className="custom-category-card-container">

  {/* The Trendsetter Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🌟</div>
    <span className="custom-category-title">The Trendsetter</span>
    <div className="custom--description">
      Embracing culinary trends and technology in their online presence.
    </div>
  </div>

  {/* The Culinary Artist Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">👩‍🍳</div>
    <span className="custom-category-title">The Culinary Artist</span>
    <div className="custom--description">
      Showcasing artistic culinary creations on a visually impressive website.
    </div>
  </div>

  {/* The Business Savvy Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">📈</div>
    <span className="custom-category-title">The Business Savvy</span>
    <div className="custom--description">
      Leveraging online marketing and SEO for business growth.
    </div>
  </div>

  {/* The Traditionalist Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🍽️</div>
    <span className="custom-category-title">The Traditionalist</span>
    <div className="custom--description">
      Balancing tradition with modern digital adaptation.
    </div>
  </div>

  {/* The Mobile Eateries Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🚚</div>
    <span className="custom-category-title">The Mobile Eateries</span>
    <div>
      For food trucks and mobile cafes to connect with customers online.
    </div>
  </div>

  {/* The Global Diner Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🌍</div>
    <span className="custom-category-title">The Global Diner</span>
    <div>
      Offering multilingual support for a diverse, international clientele.
    </div>
  </div>

  {/* The Community Hub Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🤝</div>
    <span className="custom-category-title">The Community Hub</span>
    <div>
      Local spots focusing on community engagement and local SEO.
    </div>
  </div>

  {/* The Industry Leader Card */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🥇</div>
    <span className="custom-category-title">The Industry Leader</span>
    <div>
      For chains or franchises needing a robust digital platform.
    </div>
  </div>
</div>
      
      
      
      
      <p className="mt-6 text-md text-gray-700">To take your restaurants online presence to the next level, contact us at <a href="mailto:services@bhamseoanddesignco.com" style={{ color: 'green' }}>services@bhamseoanddesignco.com</a>, or click the button below to get started.</p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 hover:from-lime-800 hover:to-emerald-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Savor Dining Experiences
        </a>
      </Link>
    </div>
  </div>


{/* Restaurant PACKAGE PRICING TITLE*/}
<div className="relative py-5 px-6 lg:px-12 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-3xl shadow-xl mx-4 my-10">
<div className="text-center">
<h1 className="text-xl lg:text-3xl font-extrabold text-white mb-2 mt-2 tracking-wide leading-tight hover:text-emerald-950 transition-colors duration-300">
Restaurant Package Pricing
</h1>
<p className="text-md lg:text-lg font-medium text-white mb-2">
Find the Ideal Plan for Your Business
</p>
<span className="inline-block w-16 h-1 bg-emerald-100 rounded"></span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
  {restaurantPackages.map((pkg, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-emerald-800 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <div className="flex flex-col h-full"> 
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-800 hover:text-emerald-800 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
          <p className="text-md mb-1 font-medium text-emerald-700">{pkg.price}</p>
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
        <div className="bg-emerald-900 p-4 text-white mt-auto"> 
          {pkg.idealFor}
        </div>
      </div>
    </div>
  ))}
</div>

  {/* Contact Information */}
  <div className="text-center mt-8">
  <p className="text-2xl text-emerald-700 font-semibold">
    Interested in our Restaurant Web Design Package?
  </p>
  <p className="text-lg text-gray-600">
    Contact us today to request a <span className="text-emerald-700">free price quote</span>.
  </p>
  <Link href="/contact" legacyBehavior>
    <a className="inline-block bg-emerald-800 hover:bg-emerald-800 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
      Request a Free Price Quote
    </a>
  </Link>

          </div>

{/* EMERALD BORDER BOTTOM */} 
<div className="border-bottom-green"></div>

</div>

   );
};

export default Restaurant;
