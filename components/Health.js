import React from 'react';
import Link from 'next/link';

const healthPackages = [
  {
    "name": "Basic Health and Wellness Website Package",
    "price": "$1,500 - $3,000",
    "duration": "4 Weeks",
    "features": [
      "- Simple and Informative Design",
      "- Basic Contact Form and Location Map",
      "- Mobile-Responsive Layout",
      "- Basic SEO for Local Search Visibility"
    ],
    "websiteIncludes": [
      "Home Page with Services Overview",
      "About Page with Practitioner Information",
      "Contact Page with Map and Form",
      "Health Blog or Tips Section"
    ],
    "totalPages": "4-6",
    "idealFor": "Small Clinics, Individual Practitioners, or Wellness Coaches Starting Their Online Presence."
  },
  {
    "name": "Comprehensive Health Services Website Package",
    "price": "$3,000 - $5,000",
    "duration": "6 Weeks",
    "features": [
      "- Engaging, Professional Design",
      "- Online Appointment Booking System",
      "- Health Service Descriptions with FAQs",
      "- SEO Optimized for Broader Reach"
    ],
    "websiteIncludes": [
      "Detailed Services Pages",
      "Team and Practitioner Profiles",
      "Patient Testimonials and Reviews",
      "Integrated Blog for Health Articles"
    ],
    "totalPages": "8-12",
    "idealFor": "Established Clinics and Health Professionals Looking to Expand Their Online Services and Patient Engagement."
  },
  {
    "name": "Advanced Healthcare Provider Website Package",
    "price": "$5,000 - $8,000",
    "duration": "8 Weeks",
    "features": [
      "- Custom, Cutting-Edge Website Design",
      "- Patient Portal Integration",
      "- Advanced SEO and Content Strategy",
      "- HIPAA Compliant Forms and Information Handling"
    ],
    "websiteIncludes": [
      "Interactive Services and Treatment Pages",
      "Patient Resource Center",
      "Customized Contact and Booking Pages",
      "Healthcare Blog with Expert Articles"
    ],
    "totalPages": "15-20",
    "idealFor": "Larger Health Facilities, Specialized Clinics, or Healthcare Organizations Seeking a Robust Online Presence."
  },
  {
    "name": "Elite Digital Health Platform Package",
    "price": "$10,000+",
    "duration": "12+ Weeks",
    "features": [
      "- State-of-the-Art Web Design",
      "- Full EHR/EMR System Integration",
      "- Telehealth Functionality",
      "- Comprehensive SEO and Digital Marketing"
    ],
    "websiteIncludes": [
      "Customized Patient Onboarding Experience",
      "Telemedicine Consultation Pages",
      "Advanced Patient Education and Resource Sections",
      "Fully Integrated Health Blog and Newsroom"
    ],
    "totalPages": "20+",
    "idealFor": "Advanced Medical Institutions and Large Healthcare Providers Needing a Comprehensive Digital Health Platform."
  }
];
            
const Health = () => {
        return (
                <div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "0px 3px 2px rgba(0, 0, 0, 0.5)" }}>
                    <div className="p-4 sm:p-3">
                      <div className="bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-gray-900 transition-colors duration-300 p-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                          Health Web Design Package
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg text-gray-300 mt-2 sm:mt-4">
  Transform Your Health Website with Us
</p>
</div>
                   
{/* Health Web Design Package */}           
<h4 className="text-4xl font-semibold text-gray-800 mt-4">Comprehensive <span className="text-gray-400">Health</span> Web Design Package</h4>
<p className="text-md text-gray-700 mt-2 mb-2">Promote a healthier lifestyle and well-being with our Wellness and Health Website Package. This package is perfect for healthcare providers, fitness trainers, wellness coaches, and anyone looking to create an informative and engaging online presence in the health and wellness industry.</p>
                

<div className="custom-category-card-container">
  {/* Healthcare Providers and Fitness Trainers */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🏥🏋️‍♂️</div>
    <span className="custom-category-title">Healthcare Providers & Fitness Trainers</span>
    <div className="custom-category-description">
      Perfect for healthcare and fitness professionals looking to promote wellness and provide health information online.
    </div>
  </div>

  {/* Wellness Coaches and Easy Scheduling */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🧘‍♀️📅</div>
    <span className="custom-category-title">Wellness Coaches & Easy Scheduling</span>
    <div className="custom-category-description">
      Ideal for wellness coaches offering seamless scheduling for consultations and sessions.
    </div>
  </div>

  {/* Professional Design and Mobile-Responsive Layout */}
  <div className="custom-category-card">
    <div className="custom-category-icon">✨📱</div>
    <span className="custom-category-title">Professional Design & Mobile-Responsive Layout</span>
    <div className="custom-category-description">
      Stylish and responsive website designs to capture your audiences attention on any device.
    </div>
  </div>

  {/* SEO and Informative Content */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🚀📚</div>
    <span className="custom-category-title">SEO & Informative Content</span>
    <div className="custom-category-description">
      Enhance your online visibility with SEO and provide valuable health and wellness content.
    </div>
  </div>

  {/* Contact Features and Health Blog */}
  <div className="custom-category-card">
    <div className="custom-category-icon">📅💡</div>
    <span className="custom-category-title">Contact Features & Health Blog</span>
    <div className="custom-category-description">
      Easy contact and booking features combined with an informative health blog or tips section.
    </div>
  </div>

  {/* Customization and Patient Engagement */}
  <div className="custom-category-card">
    <div className="custom-category-icon">🛠️🤝</div>
    <span className="custom-category-title">Customization & Patient Engagement</span>
    <div className="custom-category-description">
      Tailored website solutions to engage patients with testimonials, reviews, and resources.
    </div>
  </div>

  {/* Interactive Features */}
  <div className="custom-category-card">
    <div className="custom-category-icon">📱🖥️</div>
    <span className="custom-category-title">Interactive Features</span>
    <div className="custom-category-description">
      Engage your audience with interactive elements like quizzes, polls, and live chats.
    </div>
  </div>

  {/* Analytics and CRM */}
  <div className="custom-category-card">
    <div className="custom-category-icon">📊</div>
    <span className="custom-category-title">Analytics | Customer Relationship Management</span>
    <div className="custom-category-description">
      Gain valuable insights and manage your audience efficiently with CRM and analytics tools.
    </div>
  </div>

{/* Subheading for the section 'Why Invest?' */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Benefits of Owning a Health & Wellness Website</h5>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {/* Professionalism card */}
 <div className="bg-white rounded-lg overflow-hidden shadow-md mt-6">
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Professionalism</h2>
      <p className="text-md text-gray-700 mt-4">A well-designed website conveys professionalism and trustworthiness, making visitors more likely to take your health information seriously.</p>
    </div>
  </div>
  {/* First Impressions card */}
  <div className="bg-white rounded-lg overflow-hidden shadow-md mt-6">
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">First Impressions</h2>
      <p className="text-md text-gray-700 mt-4">Your website is often the first interaction potential patients or users have with your healthcare services. A visually appealing and user-friendly design creates a positive first impression.</p>
    </div>
  </div>
  {/* User Experience card */}
  <div className="bg-white rounded-lg overflow-hidden shadow-md mt-6">
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">User Experience</h2>
      <p className="text-md text-gray-700 mt-4">An intuitive and user-friendly design ensures that visitors can easily navigate your website, find the information they need, and have a pleasant experience.</p>
    </div>
  </div>
  {/* Content Presentation card */}
  <div className="bg-white rounded-lg overflow-hidden shadow-md mt-6">
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Content Presentation</h2>
      <p className="text-md text-gray-700 mt-4">Effective web design helps present your health information in a clear, organized, and engaging manner, making it easier for users to understand and trust your content.</p>
    </div>
  </div>
  {/* Brand Identity card */}
  <div className="bg-white rounded-lg overflow-hidden shadow-md mt-6">
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Brand Identity</h2>
      <p className="text-md text-gray-700 mt-4">Your website design can reflect your brands identity, reinforcing your message and creating brand consistency across all online platforms.</p>
    </div>
  </div>
  {/* Conversion Rates card */}
  <div className="bg-white rounded-lg overflow-hidden shadow-md mt-6">
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Conversion Rates</h2>
      <p className="text-md text-gray-700 mt-4">A user-friendly design with clear calls to action can increase conversion rates, whether its signing up for a newsletter, scheduling appointments, or purchasing health-related products or services.</p>
    </div>
</div>
</div>
</div>
              
{/* Closing paragraph with contact information */}
<p className="mt-6 text-md text-gray-700">To begin crafting your health and wellness digital platform, get in touch with us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or click the button below for more details.</p>

{/* Contact link */}
<Link href="/contact" legacyBehavior>
<a className="inline-block mt-4 mb-4 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-800 hover:to-gray-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
Prioritize Health
</a>
</Link>
</div>
</div>

{/* HEALTH PACKAGE PRICING TITLE*/}
<div className="relative py-5 px-6 lg:px-12 bg-gradient-to-br from-gray-500 via-gray-500 to-gray-600 rounded-3xl shadow-xl mx-4 my-10">
<div className="text-center">
<h1 className="text-xl lg:text-3xl font-extrabold text-white mb-2 mt-2 tracking-wide leading-tight hover:text-red-800 transition-colors duration-300">
Health Package Pricing
</h1>
<p className="text-md lg:text-lg font-medium text-white mb-2">
Find the Ideal Plan for Your Business
</p>
<span className="inline-block w-16 h-1 bg-gray-100 rounded"></span>
</div>
</div>

{/* Container for the health packages, laid out in a responsive grid */}
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
  {/* Mapping over healthPackages array to display each package */}
  {healthPackages.map((pkg, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-500 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <div className="flex flex-col h-full"> 
        <div className="p-4">
          {/* Package name */}
          <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-950 hover:text-gray-500 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
          
          {/* Package price */}
          <p className="text-md mb-1 font-medium text-gray-600">{pkg.price}</p>

          <hr className="mb-2" />

          {/* Package duration */}
          <p className="mb-3"><strong>Duration |</strong> {pkg.duration}</p>
          
          {/* Features list */}
          <div className="bg-gray-50 p-2 rounded-lg mb-2">
            <p className="font-semibold mb-1">Features</p>
            {pkg.features.map((feature, idx) => (
              <p key={idx} className="text-sm font-medium mb-1">{feature}</p>
            ))}
          </div>
          
          {/* Additional information about the package */}
          <div className="space-y-2 text-sm">
            <p className="font-bold">Website Includes</p>
            {pkg.websiteIncludes.map((include, idx) => (
              <p key={idx}>{include}</p>
            ))}
            <p className="bold">Total Pages | {pkg.totalPages}</p>
          </div>
        </div>

        {/* Ideal for section */}
        <div className="bg-gray-800 p-4 text-white mt-auto"> 
          {pkg.idealFor}
        </div>
      </div>
    </div>
  ))}
</div>
      
<div className="text-center mt-8">
{/* Heading indicating the main action */}
<p className="text-2xl text-gray-900 font-semibold">
Interested in our Health Web Design Package?
</p>

{/* Subtext to encourage user action */}
<p className="text-lg text-gray-600">
Contact us today to request a <span className="text-gray-400">free price quote</span>.
</p>

{/* Link to the contact page */}
<Link href="/webDesignConsultation" legacyBehavior>
{/* Call-to-action button */}
<a className="inline-block bg-gray-800 hover:bg-gray-900 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
Request a Free Price Quote
</a>
</Link>

</div>


{/* GRAY BORDER BOTTOM */} 
<div className="border-bottom-gray"></div>
</div>
   );
  };

export default Health;

