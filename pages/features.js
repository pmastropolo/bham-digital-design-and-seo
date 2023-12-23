import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBlog, FaBriefcase, FaUser, FaSchool, FaUserCircle, FaHeart, FaLaptop, FaCalendarAlt, FaHospital, FaHome, FaFilm, FaUtensils, FaUsers } from 'react-icons/fa';
import Link from 'next/link';


const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    {
      title: 'E-commerce',
      description: 'Start selling online effortlessly and expand your business reach with an e-commerce website.',
      icon: <FaShoppingCart />,
      id: 'ecommerce-package',
    },

    {
      title: 'Blog',
      description: 'Share your ideas and stories with the world through an engaging and informative blog website.',
      icon: <FaBlog />,
      id: 'blog-package',
    },

    {
      title: 'Business',
      description: 'Elevate your companys image and attract more customers with a professional business website.',
      icon: <FaBriefcase />,
      id: 'business-package',
    },

    {
      title: 'Portfolio',
      description: 'Impress clients and stand out in your field by showcasing your work and skills on a stunning portfolio website.',
      icon: <FaUser />,
      id: 'portfolio-package',
    },

    {
      title: 'Educational',
      description: 'Transform education and foster learning opportunities with websites for institutions and e-learning.',
      icon: <FaSchool />,
      id: 'educational-package',
    },

    {
      title: 'Community',
      description: 'Empower non-profits and drive positive change with dedicated websites for community organizations.',
      icon: <FaUserCircle />,
      id: 'community-package',
    },

    {
      title: 'Personal',
      description: 'Craft a unique online presence and share your passions with a personal website.',
      icon: <FaHeart />,
      id: 'personal-package',
    },

    {
      title: 'Landing Page',
      description: 'Fuel your marketing campaigns with compelling landing pages that convert visitors into customers.',
      icon: <FaLaptop />,
      id: 'landingpage-package',
    },

    {
      title: 'Event',
      description: 'Simplify event management and bookings with user-friendly websites',
      icon: <FaCalendarAlt />,
      id: 'event-package',
    },

    {
      title: 'Health',
      description: 'Inspire a healthier lifestyle and promote well-being with dedicated health and wellness websites.',
      icon: <FaHospital />,
      id: 'health-package',
    },

    {
      title: 'Real Estate',
      description: 'Effortlessly buy, sell, and rent properties while finding the perfect place or buyer with real estate websites.',
      icon: <FaHome />,
      id: 'realestate-package',
    },

    {
      title: 'Entertainment',
      description: 'Keep your audience entertained and informed with engaging websites in the world of entertainment and media.',
      icon: <FaFilm />,
      id: 'health-package',
    },

    {
      title: 'Restaurant',
      description: 'Enhance your food-related business, attract hungry customers, and boost sales with enticing websites.',
      icon: <FaUtensils />,
      id: 'restaurant-package',
    },


    {
      title: 'Membership',
      description: 'Build and grow exclusive online communities with ease using membership-based platform websites.',
      icon: <FaUsers />,
      id: 'membership-package',
    },
  ];

  useEffect(() => {
    const categoryCards = document.querySelectorAll('.category-card');
    
    function showCategory(index) {
      categoryCards.forEach((card, i) => {
        card.style.display = i === index ? 'flex' : 'none';
      });
    }
  
    showCategory(currentIndex);
  
    function handleNextButtonClick() {
      const newIndex = (currentIndex + 1) % categoryCards.length;
      setCurrentIndex(newIndex);
      showCategory(newIndex);
    }
  
    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
      nextButton.addEventListener('click', handleNextButtonClick);
    }
  
    return () => {
      const nextButtonCleanup = document.getElementById('nextButton');
      if (nextButtonCleanup) {
        nextButtonCleanup.removeEventListener('click', handleNextButtonClick);
      }
    };
  }, [currentIndex]);


  const scrollToPackage = (packageId) => {
    const packageElement = document.getElementById(packageId);
    if (packageElement) {
      packageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };



  return (
    <section className="mt-8">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Explore Our Web Development Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
  <div
    key={index}
    className={`bg-white rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
      index % 18 === 0
        ? 'shadow-red'
        : index % 18 === 1
        ? 'shadow-blue'
        : index % 18 === 2
        ? 'shadow-green'
        : index % 18 === 3
        ? 'shadow-yellow'
        : index % 18 === 4
        ? 'shadow-purple'
        : index % 18 === 5
        ? 'shadow-orange'
        : index % 18 === 6
        ? 'shadow-pink'
        : index % 18 === 7
        ? 'shadow-teal'
        : index % 18 === 8
        ? 'shadow-brown'
        : index % 18 === 9
        ? 'shadow-gray'
        : index % 18 === 10
        ? 'shadow-cyan'
        : index % 18 === 11
        ? 'shadow-magenta'
        : index % 18 === 12
        ? 'shadow-lime'
        : index % 18 === 13
        ? 'shadow-gold'
        : index % 18 === 14
        ? 'shadow-silver'
        : index % 18 === 15
        ? 'shadow-indigo'
        : 'shadow-olive'
    }`}
  >
<div className="p-6">
  <div className="flex items-center mb-2">
    <h4 className="text-3xl font-bold">
      {service.title}
    </h4>
    <span className="text-3xl ml-2">{service.icon}</span>
  </div>
  <p className="text-gray-600">{service.description}</p>
                {service.id && (
                  <button
                    onClick={() => scrollToPackage(service.id)}
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Learn More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

{/* WEB PACKAGE HEADING Package */}
<div className="mb-20"></div>
<div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
<h2 className="text-5xl font-extrabold text-gray-800 mb-6">Explore Our Web Design Packages</h2>
<p className="text-lg mb-8 text-gray-600">Dive into our diverse range of web design packages below, each meticulously crafted to meet your unique digital needs.</p>
<div className="flex justify-center items-center">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
</svg>
</div>
</div>



{/* ECOMMERCE Package */}
<div className="mb-29"></div>
<div id="ecommerce-package" className="container mx-auto py-10">
<div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 6px rgba(255, 0, 0, 0.1)" }}> 
<div className="p-8">

 {/* ECOMMERCE TITLE */} 
<h4 className="text-4xl font-semibold text-gray-800">Effortless E-commerce Launch Package</h4>
<p className="text-md text-gray-700 mt-4">Kickstart your online business with our comprehensive e-commerce web design package. Designed to help you start selling online effortlessly, this package offers everything you need to establish a strong digital presence and expand your business reach.</p>
<div class="text-md text-gray-700 mt-4">

<h5 className="text-2xl font-semibold text-gray-800 mt-6">Ideal For</h5>
<div class="category-carousel">
<div class="category-card">
    <div class="category-icon">🛒</div>
    <span class="category-description">Apparel and Fashion Boutiques</span>
  </div>
  <div class="category-card"><div class="category-icon">✍️</div><span class="category-description">Electronics and Gadgets Stores</span></div>
  <div class="category-card">
    <div class="category-icon">🏡</div>
    <span class="category-description">Home Decor and Furnishing Shops</span>
  </div>
  <div class="category-card">
    <div class="category-icon">📚</div>
    <span class="category-description">Bookstores and Library Shops</span>
  </div>
  <div class="category-card">
    <div class="category-icon">🎨</div>
    <span class="category-description">Art and Craft Supply Stores</span>
  </div>
  <div class="category-card">
    <div class="category-icon">🚗</div>
    <span class="category-description">Automotive Parts and Accessories Shops</span>
  </div>
<div class="category-card">
<div class="category-icon">💄</div>
<span class="category-description">Beauty and Cosmetics Retailers</span>
</div>
</div>
<button id="nextButton" class="mt-2 bg-gray-600 text-white py-2 px-4 rounded-md">Next</button>
</div>
{/* ECOMMERCE KEY FEATURES Package */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
<p className="text-md text-gray-700 mt-4"><b>Custom Website Design:</b> A unique and captivating design tailored to your brand identity and business needs.</p>
<p className="text-md text-gray-700 mt-4"><b>Responsive Layout:</b> Your website will look and perform flawlessly on desktops, tablets, and mobile devices, ensuring a seamless shopping experience for your customers.</p>
<p className="text-md text-gray-700 mt-4"><b>E-Commerce Functionality:</b> We provide a complete e-commerce solution, including a user-friendly shopping cart, product pages, secure checkout, and user account management.</p>
<p className="text-md text-gray-700 mt-4"><b>Social Media Integration:</b> Seamlessly connect your website with your social media profiles, allowing you to engage with customers and drive traffic to your store.</p>
<p className="mt-6 text-md text-gray-700">For inquiries and consultations, please{' '}
<a href="mailto:services@bhamseoanddesignco.com">contact us at services@bhamseoanddesignco.com</a> or press the button to get started.</p>
<Link href="/contact" legacyBehavior>
<a className="inline-block mt-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-800 hover:to-red-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
    Launch Your Store</a></Link>
    </div>
  </div>
</div>


{/* BLOG PACKAGE MAIN CONTAINER */}
<div id="blog-package" className="container mx-auto py-10">
  {/* Card Style for the Package with Custom Blue Shadow */}
  <div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 255, 0.1)" }}>
    <div className="p-8">
      <h4 className="text-4xl font-semibold text-gray-800">Dynamic Blog Creation Package</h4>
      <p className="text-md text-gray-700 mt-4">Elevate your digital voice with our Dynamic Blog Creation Package. Tailored to empower your storytelling and idea sharing, this package is designed for influencers, thought leaders, and businesses aiming to engage a wider audience through compelling and informative content.</p>
      
      {/* Custom Category Cards for Blog Features */}
      {/* Individual Card for Blog Layout */}
      <div class="custom-category-card">
        <div class="custom-category-icon">✍️</div>
        <span class="custom-category-title">Attractive Blog Layout</span>
        <div class="custom-category-description">
          Our skilled designers create visually captivating blog layouts to keep your readers engaged.
        </div>
      </div>

      {/* Individual Card for Mobile-Responsive Design */}
      <div class="custom-category-card">
        <div class="custom-category-icon">📱</div>
        <span class="custom-category-title">Mobile-Responsive Design</span>
        <div class="custom-category-description">
          Ensure your blog looks and works flawlessly on all devices, from smartphones to desktops.
        </div>
      </div>

      {/* Individual Card for User-Friendly CMS */}
      <div class="custom-category-card">
        <div class="custom-category-icon">🖋️</div>
        <span class="custom-category-title">User-Friendly CMS</span>
        <div class="custom-category-description">
          Manage your blog content effortlessly with an intuitive content management system.
        </div>
      </div>

      {/* Individual Card for Social Media Integration */}
      <div class="custom-category-card">
        <div class="custom-category-icon">📣</div>
        <span class="custom-category-title">Social Media Integration</span>
        <div class="custom-category-description">
          Expand the reach of your content by seamlessly integrating your blog with social media platforms.
        </div>
      </div>
{/* Key Features Section of the Blog Package */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
<p className="text-md text-gray-700 mt-4"><b>Attractive Blog Layout:</b> Our team of skilled designers creates visually captivating blog layouts that are tailored to keep your readers fully engaged. We understand the importance of aesthetics in capturing and retaining your audiences attention.</p>
<p className="text-md text-gray-700 mt-4"><b>Mobile-Responsive Design:</b> In an era where mobile browsing is prevalent, our package ensures that your blog maintains an impeccable appearance and functionality across all devices. Whether your audience accesses your content on a smartphone, tablet, or desktop, their reading experience will remain seamless and enjoyable.</p>
<p className="text-md text-gray-700 mt-4"><b>User-Friendly CMS:</b> We provide you with an intuitive and user friendly CMS that simplifies the process of managing your blogs content. Youll have the tools and flexibility needed to effortlessly update and publish new articles, keeping your digital narrative fresh and up to date.</p>
<p className="text-md text-gray-700 mt-4"><b>Social Media Integration:</b> Expand the reach of your thought-provoking content by seamlessly integrating your blog with various social media platforms. This feature enables you to effortlessly share your articles and engage with your audience on social networks, enhancing your blogs visibility and impact.</p>
      {/* Call to Action for Contact and Consultation */}
      <p className="mt-6 text-md text-gray-700">
        Connect with us for a personalized consultation at{' '}
        <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a> or click the button below to begin your blogging journey.
      </p>
      {/* Contact Button to Start Blogging */}
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Start Your Blogging Adventure
        </a>
      </Link>
    </div>
  </div>
</div>


{/* BUSINESS PACK MAIN CONTAINER */}
<div id="business-package" className="container mx-auto py-10">
  {/* Card Style for the Package with Custom Green Shadow */}
  <div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 6px rgba(0, 255, 0, 0.1)" }}>
    <div className="p-8">
      <h4 className="text-4xl font-semibold text-gray-800">Professional Business Website Package</h4>
      <p className="text-md text-gray-700 mt-4">Transform your companys online image with our Professional Business Website Package. This package is expertly designed for corporations, small businesses, and professionals keen on enhancing their digital footprint with a sophisticated and user-friendly website.</p>

      {/* Section for Business Ideal For Categories */}
      {/* Individual Card for Corporations */}
      <div class="custom-category-card">
        <div class="custom-category-icon">🏢</div>
        <span class="custom-category-title">Corporations</span>
        <div class="custom-category-description">
          Larger companies looking to establish a strong online presence with a sophisticated website that reflects their brand and offers advanced features.
        </div>
      </div>

      {/* Individual Card for Small Businesses */}
      <div class="custom-category-card">
        <div class="custom-category-icon">🏬</div>
        <span class="custom-category-title">Small Businesses</span>
        <div class="custom-category-description">
          Small businesses seeking to improve their digital footprint and compete effectively in the online marketplace by having a professional and user-friendly website.
        </div>
      </div>

      {/* Individual Card for Professionals */}
      <div class="custom-category-card">
        <div class="custom-category-icon">👩‍💼</div>
        <span class="custom-category-title">Professionals</span>
        <div class="custom-category-description">
          Individuals or professionals, such as consultants, freelancers, or service providers, who want to showcase their expertise and services with an elegant and interactive online platform.
        </div>
      </div>

      {/* Section for Key Features of the Business Package */}
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      {/* Feature Descriptions */}
      <p className="text-md text-gray-700 mt-4"><b>Elegant Corporate Design:</b> Aesthetic and professional look tailored to your brand.</p>
      <p className="text-md text-gray-700 mt-4"><b>Responsive and Interactive Interface:</b> Smooth user experience on all devices.</p>
      <p className="text-md text-gray-700 mt-4"><b>Integrated Business Tools:</b> Incorporate essential tools like appointment scheduling, customer management, and more.</p>
      <p className="text-md text-gray-700 mt-4"><b>Analytics Integration:</b> Track visitor behavior and website performance.</p>
      
      {/* Call to Action for Contact */}
      <p className="mt-6 text-md text-gray-700">
        For a custom solution that fits your business needs, contact us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or click below to discuss your project.
      </p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-800 hover:to-green-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Elevate Your Business Today
        </a>
      </Link>
    </div>
  </div>
</div>


{/* PORTFOLIO PACKAGE */}
<div id="portfolio-package" className="container mx-auto py-10">
<div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 6px rgba(255, 255, 0, 0.1)" }}>
<div className="p-8">
<h4 className="text-4xl font-semibold text-gray-800">Stunning Portfolio Website Package</h4>
<p className="text-md text-gray-700 mt-4">Dazzle the digital world with our Stunning Portfolio Website Package. This exclusive offering is meticulously designed to empower individuals and professionals from various creative domains. Elevate your online presence and leave an indelible mark in your industry with a captivating and visually immersive digital portfolio.</p>

{/* Section for Portfolio Ideal For Categories */}
      {/* Individual Card for Visual Artists */}
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

{/* Section for Key Features of the Portfolio Package */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      {/* Feature Descriptions */}
      <p className="text-gray-700 mt-4"><b>Creative and Custom Design:</b> Unique layouts that reflect your personal style and brand, ensuring your portfolio is as distinctive as your work.</p>
      <p className="text-gray-700 mt-4"><b>High-Resolution Image Galleries:</b> Present your work in the best light with stunning, high-quality image galleries that captivate your audience.</p>
      <p className="text-gray-700 mt-4"><b>Mobile-Friendly Interface:</b> Your portfolio will flawlessly display on all device types, guaranteeing a wide reach for your potential clients and admirers.</p>
      <p className="text-gray-700 mt-4"><b>Easy-to-Use CMS:</b> Update your portfolio effortlessly with a user-friendly content management system, allowing you to keep your digital narrative fresh and up-to-date.</p>
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
</div>


{/* EDUCATIONAL PACKAGE MAIN CONTAINER */}
<div id="educational-package" className="container mx-auto py-10">
  {/* Card Style for the Package with Custom Purple Shadow */}
  <div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 6px rgba(128, 0, 128, 0.1)" }}>
    <div className="p-8">
      <h4 className="text-4xl font-semibold text-gray-800">Innovative Educational Website Package</h4>
      <p className="text-md text-gray-700 mt-4">Revolutionize the learning experience with our Innovative Educational Website Package. This package is designed for educational institutions, tutors, and e-learning platforms seeking to create interactive, engaging, and informative online educational experiences.</p>
      
      {/* Custom Category Cards for Educational Target Groups */}
      {/* Individual Card for Educational Institutions */}
      <div class="custom-category-card">
        <div class="custom-category-icon">📚</div>
        <span class="custom-category-title">Educational Institutions</span>
        <div class="custom-category-description">
          Revolutionize the learning experience with our Innovative Educational Website Package. Create interactive and engaging online educational experiences.
        </div>
      </div>

      {/* Individual Card for Tutors */}
      <div class="custom-category-card">
        <div class="custom-category-icon">👩‍🏫</div>
        <span class="custom-category-title">Tutors</span>
        <div class="custom-category-description">
          Offer a personalized educational approach. Utilize interactive learning tools, responsive design, and user-friendly content management.
        </div>
      </div>

      {/* Individual Card for E-Learning Platforms */}
      <div class="custom-category-card">
        <div class="custom-category-icon">💻</div>
        <span class="custom-category-title">E-Learning Platforms</span>
        <div class="custom-category-description">
          Enhance your educational reach with our package. Provide interactive lessons, seamless content management, and dedicated student and teacher portals.
        </div>
      </div>

      {/* Individual Card for Online Learning */}
      <div class="custom-category-card">
        <div class="custom-category-icon">🌐</div>
        <span class="custom-category-title">Online Learning</span>
        <div class="custom-category-description">
          Connect with learners worldwide. Integrate with existing educational tools and platforms. Contact us for a personalized educational solution.
        </div>
      </div> 
  {/* Key Features Section of the Educational Package */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>

{/* Detailed Description of Interactive Learning Tools */}
<p className="text-md text-gray-700 mt-4">
  <b>Interactive Learning Tools:</b> Engaging features like quizzes, interactive lessons, and multimedia content to enhance the learning experience.
</p>

{/* Description of Responsive Design Feature */}
<p className="text-md text-gray-700 mt-4">
  <b>Responsive Design:</b> Ensures accessibility and a great experience on any device, from desktops to mobile phones, making the website versatile and user-friendly.
</p>

{/* Information about User-Friendly Content Management */}
<p className="text-md text-gray-700 mt-4">
  <b>User-Friendly Content Management:</b> Easy to update and manage educational content and resources, providing convenience for educators and administrators.
</p>

{/* Details on Student and Teacher Portals */}
<p className="text-md text-gray-700 mt-4">
  <b>Student and Teacher Portals:</b> Dedicated areas for different users with customized functionalities, enhancing the overall educational experience for all users.
</p>

{/* Integration with Other Educational Resources */}
<p className="text-md text-gray-700 mt-4">
  <b>Integration with Educational Resources:</b> Seamlessly connect with existing educational tools and platforms, ensuring a comprehensive learning environment.
</p>

{/* Call to Action for Contact and Further Information */}
<p className="mt-6 text-md text-gray-700">
  Get in touch with us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a> for a personalized approach to your educational needs, or click below to learn more.
</p>
{/* Contact Link to Enhance Educational Reach */}
<Link href="/contact" legacyBehavior>
  <a className="inline-block mt-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-800 hover:to-purple-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
    Enhance Your Educational Reach
  </a>
</Link>
    </div>
  </div>
</div>



<div id="community-package" className="container mx-auto py-10">
  <div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 6px rgba(255, 165, 0, 0.1)" }}>
    <div className="p-8">
      <h4 className="text-4xl font-semibold text-gray-800">Empowering Community Website Package</h4>
      <p className="text-md text-gray-700 mt-4">Unite and inspire your community with our Empowering Community Website Package. This package is perfectly crafted for non-profits, social groups, and community organizations looking to foster engagement, collaboration, and positive change through an impactful online presence.</p>
      <div class="custom-category-card">
  <div class="custom-category-icon">🤝</div>
  <span class="custom-category-title">Non-Profits</span>
  <div class="custom-category-description">
    Foster engagement, collaboration, and positive change in your community with our Empowering Community Website Package. Create an inclusive and accessible online presence.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">👥</div>
  <span class="custom-category-title">Social Groups</span>
  <div class="custom-category-description">
    Boost participation and interaction within your social group. Benefit from community engagement tools and a mobile-friendly interface.
  </div>
</div>

<div class="custom-category-card">
<div class="custom-category-icon">🏘️</div>
<span class="custom-category-title">Community Organizations</span>
<div class="custom-category-description">
    Strengthen your communitys online presence and outreach. Manage news, events, and resources effortlessly with our Content Management System.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🌍</div>
  <span class="custom-category-title">Online Community</span>
  <div class="custom-category-description">
    Connect with your community on a wider scale. Seamlessly integrate with popular social media platforms and build your online community space today!
  </div>
</div>
     
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <p className="text-md text-gray-700 mt-4"><b>Inclusive and Accessible Design:</b> Ensuring that everyone in your community feels welcomed and engaged.</p>
      <p className="text-md text-gray-700 mt-4"><b>Community Engagement Tools:</b> Features such as forums, event calendars, and membership sign-ups to boost participation.</p>
      <p className="text-md text-gray-700 mt-4"><b>Mobile-Friendly Interface:</b> Accessible on all devices for wider reach and engagement.</p>
      <p className="text-md text-gray-700 mt-4"><b>Content Management System:</b> Easy update and management of community news, events, and resources.</p>
      <p className="text-md text-gray-700 mt-4"><b>Social Media Integration:</b> Seamlessly connect with popular social media platforms to enhance outreach.</p>

      <p className="mt-6 text-md text-gray-700">To discuss how we can help your community thrive online, contact us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or press the button to get started.</p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-800 hover:to-orange-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Build Your Community Space
        </a>
      </Link>
    </div>
  </div>
</div>


<div id="personal-package" className="container mx-auto py-10">
  <div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 6px rgba(255, 182, 193, 0.1)" }}>
    <div className="p-8">
      <h4 className="text-4xl font-semibold text-gray-800">Unique Personal Website Package</h4>
      <p className="text-md text-gray-700 mt-4">Create your individual online identity with our Unique Personal Website Package. This package is ideal for bloggers, artists, freelancers, and anyone looking to establish a personal brand or share their passions with the world in a distinctive and memorable way.</p>
      <div class="custom-category-card">
  <div class="custom-category-icon">👩‍💻</div>
  <span class="custom-category-title">Bloggers</span>
  <div class="custom-category-description">
    Establish your personal brand and share your passions with the world using our Unique Personal Website Package. Reflect your style with a customized aesthetic design.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎨</div>
  <span class="custom-category-title">Artists</span>
  <div class="custom-category-description">
    Showcase your work and portfolio in a distinctive and memorable way. Enjoy a responsive and intuitive layout for an engaging user experience.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">💼</div>
  <span class="custom-category-title">Freelancers</span>
  <div class="custom-category-description">
    Build your personal online identity and connect with clients. Benefit from blog and gallery integration, social media connectivity, and SEO optimization.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🌐</div>
  <span class="custom-category-title">Online Presence</span>
  <div class="custom-category-description">
    Enhance your online presence and reach a broader audience with our Unique Personal Website Package. Craft your personal space today!
  </div>
</div>

      
      
      
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <p className="text-md text-gray-700 mt-4"><b>Customized Aesthetic Design:</b> Reflect your personal style and brand with a unique design.</p>
      <p className="text-md text-gray-700 mt-4"><b>Responsive and Intuitive Layout:</b> Ensure a smooth and engaging user experience on all devices.</p>
      <p className="text-md text-gray-700 mt-4"><b>Blog and Gallery Integration:</b> Showcase your thoughts, work, or portfolio with integrated blogging and gallery features.</p>
      <p className="text-md text-gray-700 mt-4"><b>Social Media Connectivity:</b> Link your website to your social media accounts for increased engagement.</p>
      
      <p className="mt-6 text-md text-gray-700">Ready to build your online presence? Contact us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a> for a consultation, or click the button below to start your journey.</p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 bg-gradient-to-r from-pink-600 to-pink-800 hover:from-pink-800 hover:to-pink-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Craft Your Personal Space
        </a>
      </Link>
    </div>
  </div>
</div>


<div id="landingpage-package" className="container mx-auto py-10">
  <div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 6px rgba(0, 128, 128, 0.1)" }}>
    <div className="p-8">
      <h4 className="text-4xl font-semibold text-gray-800">Conversion-Focused Landing Page Package</h4>
      <p className="text-md text-gray-700 mt-4">Maximize your marketing efforts with our Conversion-Focused Landing Page Package. Ideal for businesses and marketers, this package is designed to create high-impact landing pages that effectively convert visitors into leads, subscribers, or customers.</p>
      <div class="custom-category-card">
  <div class="custom-category-icon">💼</div>
  <span class="custom-category-title">Businesses</span>
  <div class="custom-category-description">
    Maximize your marketing efforts with our Conversion-Focused Landing Page Package. Create high-impact landing pages that effectively convert visitors into leads, subscribers, or customers.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📈</div>
  <span class="custom-category-title">Marketers</span>
  <div class="custom-category-description">
    Launch your next campaign with a high-converting landing page. Benefit from strategically placed prompts, visually appealing design, and analytics integration.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🚀</div>
  <span class="custom-category-title">High-Impact Pages</span>
  <div class="custom-category-description">
    Elevate your online presence with compelling call-to-action elements and responsive design for an excellent user experience on all devices.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📊</div>
  <span class="custom-category-title">Conversion Metrics</span>
  <div class="custom-category-description">
    Track visitor behavior and conversion metrics to refine your marketing strategies with our Conversion-Focused Landing Page Package.
  </div>
</div>
   
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <p className="text-md text-gray-700 mt-4"><b>Compelling Call-to-Action:</b> Strategically placed prompts to encourage user action.</p>
      <p className="text-md text-gray-700 mt-4"><b>High-Quality Visual Design:</b> Visually appealing elements to capture and retain visitor interest.</p>
      <p className="text-md text-gray-700 mt-4"><b>Responsive Design:</b> Ensuring an excellent user experience across all devices.</p>
      <p className="text-md text-gray-700 mt-4"><b>Analytics Integration:</b> Track visitor behavior and conversion metrics to refine strategies.</p>
      <p className="mt-6 text-md text-gray-700">Launch your next campaign with a high-converting landing page. Contact us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or click the button below for a detailed consultation.</p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 bg-gradient-to-r from-teal-600 to-teal-800 hover:from-teal-800 hover:to-teal-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Explore Landing Pages
        </a>
      </Link>
    </div>
  </div>
</div>


<div id="event-package" className="container mx-auto py-10">
  <div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 6px rgba(139, 69, 19, 0.1)" }}>
    <div className="p-8">
      <h4 className="text-4xl font-semibold text-gray-800">Streamlined Event Management Website Package</h4>
      <p className="text-md text-gray-700 mt-4">Simplify and enhance your event planning with our Streamlined Event Management Website Package. This package is designed for event organizers, businesses, and individuals who want to create an impactful and user-friendly online platform for managing and promoting events effectively.</p>
      <div class="custom-category-card">
  <div class="custom-category-icon">📆</div>
  <span class="custom-category-title">Event Organizers</span>
  <div class="custom-category-description">
    Simplify and enhance your event planning with our Streamlined Event Management Website Package. It includes intuitive event scheduling tools for easy event creation and management.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎉</div>
  <span class="custom-category-title">Businesses</span>
  <div class="custom-category-description">
    Create an impactful and user-friendly online platform for managing and promoting events effectively with our Streamlined Event Management Website Package.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">👥</div>
  <span class="custom-category-title">Individuals</span>
  <div class="custom-category-description">
    Revolutionize your event management experience with our Streamlined Event Management Website Package. It offers accessible and functional design on any device.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎟️</div>
  <span class="custom-category-title">Online Ticketing</span>
  <div class="custom-category-description">
    Streamline the process of attendee sign-ups and ticket sales with our Streamlined Event Management Website Package.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📊</div>
  <span class="custom-category-title">Real-Time Analytics</span>
  <div class="custom-category-description">
    Gain insights into event interest and attendance statistics for better planning with our Streamlined Event Management Website Package.
  </div>
</div>      
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <p className="text-md text-gray-700 mt-4"><b>Intuitive Event Scheduling:</b> Easy-to-use tools for event creation and management.</p>
      <p className="text-md text-gray-700 mt-4"><b>Responsive Design:</b> Accessible and functional on any device.</p>
      <p className="text-md text-gray-700 mt-4"><b>Online Registration and Ticketing:</b> Streamlined process for attendee sign-ups and ticket sales.</p>
      <p className="text-md text-gray-700 mt-4"><b>Integrated Social Media:</b> Promote your events across various social platforms.</p>
      <p className="text-md text-gray-700 mt-4"><b>Real-Time Analytics:</b> Track event interest and attendance statistics for better planning.</p>
      <p className="mt-6 text-md text-gray-700">To revolutionize your event management experience, reach out to us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or click the button below for more information.</p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Plan Your Event
        </a>
      </Link>
    </div>
  </div>
</div>


<div id="health-package" className="container mx-auto py-10">
  <div className="bg-white rounded-lg shadow-xl overflow-hidden">
    <div className="p-8">
      <h4 className="text-4xl font-semibold text-gray-800">Wellness and Health Website Package</h4>
      <p className="text-md text-gray-700 mt-4">Promote a healthier lifestyle and well-being with our Wellness and Health Website Package. This package is perfect for healthcare providers, fitness trainers, wellness coaches, and anyone looking to create an informative and engaging online presence in the health and wellness industry.</p>
      <div class="custom-category-card">
  <div class="custom-category-icon">🏥</div>
  <span class="custom-category-title">Healthcare Providers</span>
  <div class="custom-category-description">
    Promote a healthier lifestyle and well-being with our Wellness and Health Website Package. This package offers aesthetically pleasing layouts tailored to health and wellness themes.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🏋️‍♂️</div>
  <span class="custom-category-title">Fitness Trainers</span>
  <div class="custom-category-description">
    Create an informative and engaging online presence in the health and wellness industry with our Wellness and Health Website Package. Share valuable health tips, articles, and insights with an integrated blog.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🧘‍♀️</div>
  <span class="custom-category-title">Wellness Coaches</span>
  <div class="custom-category-description">
    Prioritize health and well-being with our Wellness and Health Website Package. It ensures a seamless experience across all devices for all users.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📅</div>
  <span class="custom-category-title">Easy Scheduling</span>
  <div class="custom-category-description">
    Make appointment scheduling easy with our Wellness and Health Website Package. It includes features for consultations or sessions.
  </div>
</div>
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <p className="text-md text-gray-700 mt-4"><b>Professional Health-Focused Design:</b> Aesthetically pleasing layouts tailored to health and wellness themes.</p>
      <p className="text-md text-gray-700 mt-4"><b>Responsive and Accessible:</b> Ensures a seamless experience across all devices for all users.</p>
      <p className="text-md text-gray-700 mt-4"><b>Health Blog Integration:</b> Share valuable health tips, articles, and insights with an integrated blog.</p>
      <p className="text-md text-gray-700 mt-4"><b>Appointment Booking System:</b> Easy scheduling features for consultations or sessions.</p>
      <p className="mt-6 text-md text-gray-700">To begin crafting your health and wellness digital platform, get in touch with us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or click the button below for more details.</p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-800 hover:to-gray-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Prioritize Health
        </a>
      </Link>
    </div>
  </div>
</div>

<div id="realestate-package" className="container mx-auto py-10">
  <div className="bg-white rounded-lg shadow-xl overflow-hidden">
    <div className="p-8">
      <h4 className="text-4xl font-semibold text-gray-800">Premier Real Estate Website Package</h4>
      <p className="text-md text-gray-700 mt-4">Elevate your property business with our Premier Real Estate Website Package. Designed for real estate agents, brokers, and property managers, this package offers a sophisticated platform to showcase properties, attract potential buyers or tenants, and streamline the real estate transaction process.</p>
      <div class="custom-category-card">
  <div class="custom-category-icon">🏡</div>
  <span class="custom-category-title">Real Estate Agents, Brokers, and Property Managers</span>
  <div class="custom-category-description">
    Elevate your property business with our Premier Real Estate Website Package. This package offers a sophisticated platform to showcase properties, attract potential buyers or tenants, and streamline the real estate transaction process.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🖼️</div>
  <span class="custom-category-title">Elegant Property Galleries</span>
  <div class="custom-category-description">
    Showcase properties with high-resolution images and detailed descriptions.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📱</div>
  <span class="custom-category-title">Responsive Design</span>
  <div class="custom-category-description">
    Flawless functionality on desktops, tablets, and mobile devices.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🔍</div>
  <span class="custom-category-title">Advanced Search Filters</span>
  <div class="custom-category-description">
    Help users find exactly what theyre looking for with ease.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🗺️</div>
  <span class="custom-category-title">Interactive Maps</span>
  <div class="custom-category-description">
    Incorporate location-based features for an intuitive property search experience.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">👥</div>
  <span class="custom-category-title">Client Testimonials and Reviews</span>
  <div class="custom-category-description">
    Build trust with prospective clients through authentic feedback.
  </div>
</div>

      
      
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <p className="text-md text-gray-700 mt-4"><b>Elegant Property Galleries:</b> Showcase properties with high-resolution images and detailed descriptions.</p>
      <p className="text-md text-gray-700 mt-4"><b>Responsive Design:</b> Flawless functionality on desktops, tablets, and mobile devices.</p>
      <p className="text-md text-gray-700 mt-4"><b>Advanced Search Filters:</b> Help users find exactly what theyre looking for with ease.</p>
      <p className="text-md text-gray-700 mt-4"><b>Interactive Maps:</b> Incorporate location-based features for an intuitive property search experience.</p>
      <p className="text-md text-gray-700 mt-4"><b>Client Testimonials and Reviews:</b> Build trust with prospective clients through authentic feedback.</p>
      <p className="mt-6 text-md text-gray-700">To create a dynamic online presence for your real estate business, contact us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or click the button below to start a conversation.</p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 bg-gradient-to-r from-cyan-600 to-cyan-800 hover:from-cyan-800 hover:to-cyan-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Explore Real Estate
        </a>
      </Link>
    </div>
  </div>
</div>


<div id="entertainment-package" className="container mx-auto py-10">
  <div className="bg-white rounded-lg shadow-xl overflow-hidden">
    <div className="p-8">
      <h4 className="text-4xl font-semibold text-gray-800">Vibrant Entertainment Website Package</h4>
      <p className="text-md text-gray-700 mt-4">Engage and captivate your audience with our Vibrant Entertainment Website Package. This package is perfectly suited for artists, performers, event organizers, and entertainment companies looking to create an engaging, visually stunning, and interactive online presence.</p>
      <div class="custom-category-card">
  <div class="custom-category-icon">🎭</div>
  <span class="custom-category-title">Artists, Performers, and Event Organizers</span>
  <div class="custom-category-description">
    Engage and captivate your audience with our Vibrant Entertainment Website Package. This package is perfectly suited for artists, performers, event organizers, and entertainment companies looking to create an engaging, visually stunning, and interactive online presence.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎨</div>
  <span class="custom-category-title">Creative and Dynamic Design</span>
  <div class="custom-category-description">
    Eye-catching layouts that capture the essence of your entertainment brand.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📱</div>
  <span class="custom-category-title">Responsive and Interactive Experience</span>
  <div class="custom-category-description">
    Smooth navigation on all devices, enhancing user engagement.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🗓️</div>
  <span class="custom-category-title">Event Calendars and Booking Systems</span>
  <div class="custom-category-description">
    Efficiently manage and promote your events or shows.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📣</div>
  <span class="custom-category-title">Social Media Integration</span>
  <div class="custom-category-description">
    Extend your reach by connecting with fans and followers across various platforms.
  </div>
</div>

      
      
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <p className="text-md text-gray-700 mt-4"><b>Creative and Dynamic Design:</b> Eye-catching layouts that capture the essence of your entertainment brand.</p>
      <p className="text-md text-gray-700 mt-4"><b>Responsive and Interactive Experience:</b> Smooth navigation on all devices, enhancing user engagement.</p>
      <p className="text-md text-gray-700 mt-4"><b>Media Galleries:</b> Showcase your photos, videos, and artwork in high-quality formats.</p>
      <p className="text-md text-gray-700 mt-4"><b>Event Calendars and Booking Systems:</b> Efficiently manage and promote your events or shows.</p>
      <p className="text-md text-gray-700 mt-4"><b>Social Media Integration:</b> Extend your reach by connecting with fans and followers across various platforms.</p>
      <p className="mt-6 text-md text-gray-700">To start building your entertainment empire online, get in touch with us at services@bhamseoanddesignco.com, or click the button below for further details.</p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 bg-purple-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Discover Entertainment
        </a>
      </Link>
    </div>
  </div>
</div>

<div id="restaurant-package" className="container mx-auto py-10">
  <div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 8px rgba(50, 205, 50, 0.1)" }}>
    <div className="p-8">
      <h4 className="text-4xl font-semibold text-gray-800">Gourmet Restaurant Website Package</h4>
      <p className="text-md text-gray-700 mt-4">Enhance your culinary presence online with our Gourmet Restaurant Website Package. Designed for restaurants, cafes, and culinary businesses, this package provides an enticing platform to showcase your menu, ambiance, and unique dining experiences to attract more food enthusiasts.</p>
      <div class="custom-category-card">
  <div class="custom-category-icon">🍽️</div>
  <span class="custom-category-title">Restaurants, Cafes, and Culinary Businesses</span>
  <div class="custom-category-description">
    Enhance your culinary presence online with our Gourmet Restaurant Website Package. Designed for restaurants, cafes, and culinary businesses, this package provides an enticing platform to showcase your menu, ambiance, and unique dining experiences to attract more food enthusiasts.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📜</div>
  <span class="custom-category-title">Visually Appealing Menus</span>
  <div class="custom-category-description">
    Offering visually appealing layouts to exhibit your dishes and specialties.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📱</div>
  <span class="custom-category-title">Perfect Viewing Experience</span>
  <div class="custom-category-description">
    Providing a perfect viewing experience on all devices, from smartphones to desktops.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🍽️</div>
  <span class="custom-category-title">Online Reservation System</span>
  <div class="custom-category-description">
    Offering convenient booking options for your guests.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📷</div>
  <span class="custom-category-title">Photo Galleries</span>
  <div class="custom-category-description">
    Showcasing your restaurants ambiance and culinary delights through photo galleries.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📣</div>
  <span class="custom-category-title">Social Media Integration</span>
  <div class="custom-category-description">
    Connecting with customers and promoting your brand on various social media platforms.
  </div>
</div>

      
      
      
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <p className="text-md text-gray-700 mt-4"><b>Elegant Menu Displays:</b> Visually appealing layouts to exhibit your dishes and specialties.</p>
      <p className="text-md text-gray-700 mt-4"><b>Responsive Design:</b> Perfect viewing experience on all devices, from smartphones to desktops.</p>
      <p className="text-md text-gray-700 mt-4"><b>Online Reservation System:</b> Convenient booking options for your guests.</p>
      <p className="text-md text-gray-700 mt-4"><b>Photo Galleries:</b> Showcase your restaurants ambiance and culinary delights.</p>
      <p className="text-md text-gray-700 mt-4"><b>Social Media Integration:</b> Connect with customers and promote your brand on various platforms.</p>
      <p className="mt-6 text-md text-gray-700">To take your restaurants online presence to the next level, contact us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or click the button below to get started.</p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 bg-gradient-to-r from-lime-600 to-lime-800 hover:from-lime-800 hover:to-lime-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Savor Dining Experiences
        </a>
      </Link>
    </div>
  </div>
</div>

<div id="membership-package" className="container mx-auto py-10">
  <div className="bg-white rounded-lg shadow-xl overflow-hidden">
    <div className="p-8">
      <h4 className="text-4xl font-semibold text-gray-800">Exclusive Membership Website Package</h4>
      <p className="text-md text-gray-700 mt-4">Foster a vibrant community with our Exclusive Membership Website Package. This package is ideal for organizations, clubs, and online platforms looking to build and manage a membership-based community, offering exclusive content, services, or products to their members.</p>
      
      {/* Bussiness Ideal For Package */}
<div class="custom-category-card">
  <div class="custom-category-icon">🌟 </div>
  <span class="custom-category-title">Clubs and Societies</span>
  <div class="custom-category-description">
  Ideal for social clubs, hobbyist groups, and alumni associations! Our Exclusive Membership Website Package simplifies event organization, news sharing, and community building. Create a central online hub to bring your members closer together.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🏬</div>
  <span class="custom-category-title">Subscription-Based Businesses</span>
  <div class="custom-category-description">
  Attention, subscription-based businesses! Elevate your subscriber engagement with our Exclusive Membership Website Package. Manage your subscriber base efficiently and offer exclusive perks like early access to new products, discounts, and subscriber-only content. Build lasting customer relationships and drive growth for your business.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📸</div>
  <span class="custom-category-title">Content Creators</span>
  <div class="custom-category-description">
  Calling all bloggers, YouTubers, and podcasters! Monetize your content with our Exclusive Membership Website Package. Offer premium, members-only content or provide an ad-free experience. Transform your passion into a thriving online business.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🤝</div>
  <span class="custom-category-title">Professional Associations</span>
  <div class="custom-category-description">
  Hello, professional organizations and associations! Our Exclusive Membership Website Package is tailor-made for you. Build a digital community where members access exclusive resources, network, and gain industry insights. Elevate your organizations digital presence and provide unparalleled value to your members.
  </div>
</div>
      
      
      
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <p className="text-md text-gray-700 mt-4"><b>Member Registration and Management:</b> Streamlined processes for new member sign-ups and existing member management.</p>
      <p className="text-md text-gray-700 mt-4"><b>Responsive Design:</b> A seamless interface across all devices, enhancing member engagement.</p>
      <p className="text-md text-gray-700 mt-4"><b>Exclusive Content Access:</b> Specialized areas for members to access exclusive content or services.</p>
      <p className="text-md text-gray-700 mt-4"><b>Payment Gateway Integration:</b> Secure and efficient payment solutions for membership fees and transactions.</p>
      <p className="text-md text-gray-700 mt-4"><b>Community Engagement Tools:</b> Features such as forums, polls, and newsletters to keep your community connected and active.</p>
      <p className="mt-6 text-md text-gray-700">To create a thriving online membership platform, connect with us at services@bhamseoanddesignco.com, or click the button below to explore your options.</p>
      <Link href="/contact" legacyBehavior>
      <a className="inline-block mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-400 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
  Join the Membership
</a>
      </Link>
    </div>
  </div>
</div>

    </section>   
  );
};

export default Features;
