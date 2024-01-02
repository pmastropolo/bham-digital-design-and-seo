import React from 'react';
import Link from 'next/link';

const businessPackages = [
  {
    "name": "Starter Business Website Package",
    "price": "$1,000 - $2,500",
    "duration": "5 Weeks",
    "features": [
      "- Up to 5 Pages | Home, About Us, Services, Contact, One Additional Page",
      "- Basic Template-Based Design",
      "- Mobile-Responsive Layout",
      "- Basic SEO Setup",
      "- Social Media Integration",
      "- Contact Form and Basic Location Map",
      "- Standard Security Features"
    ],
    "websiteIncludes": [
      "Home",
      "About Us",
      "Services",
      "Contact",
      "One additional page | Customizable, Typically used for Special Content"
    ],
    "totalPages": "5",
    "idealFor": "Ideal for Small Businesses or Startups Needing a Basic Online Presence."
  },
  {
    "name": "Professional Business Website Package",
    "price": "$2,500 - $5,000",
    "duration": "16 Weeks",
    "features": [
      "- Up to 10 Pages including a Blog or News Section",
      "- Customized Design Aligned with Brand Identity",
      "- Enhanced Mobile Responsiveness",
      "- Basic CMS for Content Management",
      "- Intermediate SEO Optimization",
      "- Email Subscription Setup",
      "- Basic Analytics Integration",
      "- Enhanced Security Features"
    ],
    "websiteIncludes": [  
      "Home Page",
      "About Us Page",
      "Services or Products Page",
      "Contact Page",
      "Blog or News Section | Included in the 10 Pages",
      "One or More Additional Content Pages | Depending on Customization",
      "Privacy Policy Page | If Required",
      "Terms and Conditions Page If Required"
    ],
    "totalPages": "10",
    "idealFor": "Growing Businesses Requiring a More Robust Website for Expanding Their Online Presence."
  },
  {
    "name": "Advanced Business Website Package",
    "price": "$5,000 - $10,000",
    "duration": "20 Weeks",
    "features": [
      "- Up to 20 Pages with Advanced Functionalities",
      "- Fully Custom and Interactive Design",
      "- Advanced SEO Strategies",
      "- Comprehensive CMS with Rich Media and Blog Management",
      "- Integration with CRM Systems",
      "- Advanced Analytics and Reporting Tools",
      "- Email Marketing and Automation Integration",
      "- Advanced Security Features like SSL Certificates",
      "- Ongoing Technical Support for a Specified Period"
    ],
    "websiteIncludes": [
      "Home Page",
      "About Us Page",
      "Services or Products Page",
      "Contact Page",
      "Blog or News Section | Included in the 20 Pages",
      "One or More Additional Content Pages | Depending on Customization",
      "Privacy Policy Page | If Required",
      "Terms and Conditions Page If Required"
    ],
    "totalPages": "20",
    "idealFor": "Established Businesses Seeking a Comprehensive and Dynamic Website to Reflect Their brand and Scale Operations."
  },
  {
    "name": "Enterprise Business Website Package",
    "price": "$10,000+",
    "duration": "6 Months",
    "features": [
      "- Unlimited Pages With Custom Functionalities",
      "- High-End Bespoke Design Tailored To Unique Brand Requirements",
      "- Full-Scale SEO And Digital Marketing Strategy",
      "- Advanced CMS With E-Commerce, Multilingual, And Multimedia Capabilities",
      "- Custom Integrations (CRM, ERP, Third-Party APIs)",
      "- Personalized User Experience And Interactive Features",
      "- Comprehensive Security Measures Including Regular Audits",
      "- Extensive Analytics, Reporting, And A/B Testing",
      "- Dedicated Project Management And Ongoing Support"
    ],
    "websiteIncludes": [
      "Home Page",
      "About Us Page",
      "Product/Service Page",
      "E-Commerce Section",
      "Multilingual Pages",
      "Blog/News Section",
      "Customer Support/FAQ",
      "Contact Page",
      "Testimonials/Case Studies",
      "Careers Page",
      "Privacy/Legal Page",
      "Interactive Features",
      "User Accounts",
      "CRM/ERP Integrations",
      "Analytics Dashboard",
      "Security/Compliance",
      "Marketing Landing Pages"
    ],
    "totalPages": "No Limit",
    "idealFor": "Large Corporations or Enterprises Requiring a Top-Tier Website with Extensive Customization, Integrations, and the Highest Level of Functionality."
  }
];

const Business = () => {
  return (
    <div>

<div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 6px rgba(0, 255, 0, 0.1)" }}>
<div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "0px 3px 2px rgba(0, 128, 0, 0.5)" }}>
    <div className="p-2 sm:p-3">
      <div className="bg-gradient-to-b from-green-500 to-green-700 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-green-900 transition-colors duration-300 p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        Redefining Business with Web Design
        </h1>
        <p className="text-sm sm:text-md md:text-lg text-gray-100 mt-2 sm:mt-4">
        Redefine your businesss online presence with our web design solutions.
        </p>
      </div>
    </div>

    <div className="p-3">

    <h4 className="text-4xl font-semibold text-gray-800 mt-2">Professional <span className="text-green-600">Business</span> Website Package</h4>
    <p className="text-md text-gray-700 mt-2">Transform your companys online image with our Professional Business Website Package. This package is expertly designed for corporations, small businesses, and professionals keen on enhancing their digital footprint with a sophisticated and user-friendly website.</p>
 
    <div class="custom-category-card-container">
  <div class="custom-category-card">
  <div class="custom-category-icon">📱</div>
  <span class="custom-category-title">Mobile-Responsive Layout</span>
  <div class="custom-category-description">
    Take your business everywhere! Our designs ensure your site looks great on all devices.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🔍</div>
  <span class="custom-category-title">SEO Optimization</span>
  <div class="custom-category-description">
    Climb the search engine ranks and get noticed by more customers.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📲</div>
  <span class="custom-category-title">Social Media Integration</span>
  <div class="custom-category-description">
    Connect your site seamlessly with social media for greater reach and engagement.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">✉️</div>
  <span class="custom-category-title">Contact Form</span>
  <div class="custom-category-description">
    Make it easy for clients to reach out with user-friendly contact forms.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🔐</div>
  <span class="custom-category-title">Security Features</span>
  <div class="custom-category-description">
    Protect your site and customer data with top-notch security.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🖌️</div>
  <span class="custom-category-title">Customizable Pages</span>
  <div class="custom-category-description">
    Express your brands unique style with fully customizable web pages.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🏠</div>
  <span class="custom-category-title">Inviting Home Page</span>
  <div class="custom-category-description">
    Create a compelling first impression that captivates visitors.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">👥</div>
  <span class="custom-category-title">About Us Page</span>
  <div class="custom-category-description">
    Share your story and connect personally with customers.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">💼</div>
  <span class="custom-category-title">Services or Products Page</span>
  <div class="custom-category-description">
    Showcase what you offer in a compelling, clear format.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📞</div>
  <span class="custom-category-title">Contact Page</span>
  <div class="custom-category-description">
    Ensure customers can easily find ways to get in touch.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📰</div>
  <span class="custom-category-title">Blog & News Section</span>
  <div class="custom-category-description">
    Keep your audience updated and engaged with regular posts.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">💻</div>
  <span class="custom-category-title">CMS - Content Management System</span>
  <div class="custom-category-description">
    Manage your content effortlessly, keeping your site fresh and engaging.
  </div>
</div>
</div>
</div>


{/* Section for Benefits of the Business Package */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Benefits of having a Business Website</h5>

{/* Benefit Descriptions */}
<p className="text-md text-gray-700 mt-4"><b>Availability 24/7</b> | Your website is open 24/7 for sales and leads.</p>
<p className="text-md text-gray-700 mt-4"><b>Competitive Edge</b> | Stay ahead in the digital age.</p>
<p className="text-md text-gray-700 mt-4"><b>Credibility</b> | Enhance trust with a professional online presence.</p>
<p className="text-md text-gray-700 mt-4"><b>Information Hub</b> | Offer resources and contact info.</p>
<p className="text-md text-gray-700 mt-4 mb-4"><b>Lead Generation</b> | Capture leads for customer engagement.</p>

{/* Ideal For */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Ideal For</h5>
<div class="custom-category-card-container">
  
      {/* Individual Card for Corporations */}
      <div class="custom-category-card">
        <div class="custom-category-icon">🏢</div>
        <span class="custom-category-title">Corporations</span>
        <div class="custom-category-descrigption">
          Larger companies looking to establish a strong online presence with a sophisticated website that reflects their brand and offers advanced features.
        </div>
      </div>

      {/* Individual Card for Small Businesses */}
      <div class="custom-category-card">
        <div class="custom-category-icon">🏬</div>
        <span class="custom-category-title">Small Businesses</span>
        <div class="custom-category-descrgiption">
          Small businesses seeking to improve their digital footprint and compete effectively in the online marketplace by having a professional and user-friendly website.
        </div>
      </div>

      {/* Individual Card for Professionals */}
      <div class="custom-category-card">
        <div class="custom-category-icon">👩‍💼</div>
        <span class="custom-category-title">Professionals</span>
        <div class="custom-category-descgription">
          Individuals or professionals, such as consultants, freelancers, or service providers, who want to showcase their expertise and services with an elegant and interactive online platform.
        </div>
      </div>
  
       {/* Individual Card for Entrepreneurs */}
      <div class="custom-category-card">
  <div class="custom-category-icon">🚀</div>
  <span class="custom-category-title">Entrepreneurs</span>
  <div class="custom-category-descrigption">
    Entrepreneurs, whether solo entrepreneurs or those leading a startup, can use a website to showcase their innovative ideas, attract investors, and connect with potential customers.
  </div>
</div>
</div>

      
      {/* Call to Action for Contact */}
      <p className="mt-6 mb-4 text-md text-gray-700">
        For a custom solution that fits your business needs, contact us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or click below to discuss your project.
      </p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 mb-4 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-800 hover:to-green-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Elevate Your Business Today
        </a>
      </Link>
    </div>
  </div>


<section></section>
<h1 className="text-3xl lg:text-5xl font-bold text-center mb-8 mt-10 underline decoration-green-900 decoration-4 underline-offset-8">
  Business Package Pricing
</h1>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
  {businessPackages.map((pkg, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-green-500 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <div className="flex flex-col h-full"> 
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-800 hover:text-green-800 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
          <p className="text-md mb-1 font-medium text-green-500">{pkg.price}</p>
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
        <div className="bg-green-600 p-4 text-white mt-auto"> 
          {pkg.idealFor}
        </div>
      </div>
    </div>
  ))}
</div>

<div className="text-center mt-8">
  <p className="text-2xl text-green-700 font-semibold">
    Interested in our Business Web Design Package?
  </p>
  <p className="text-lg text-gray-600">
    Contact us today to request a <span className="text-green-700">free price quote</span>.
  </p>
  <Link href="/contact" legacyBehavior>
    <a className="inline-block bg-green-700 hover:bg-green-800 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
      Request a Free Price Quote
    </a>
  </Link>
</div>
    </div>
  );
};

export default Business;



