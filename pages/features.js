import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBlog, FaBriefcase, FaUser, FaSchool, FaUserCircle, FaHeart, FaLaptop, FaCalendarAlt, FaHospital, FaHome, FaFilm, FaUtensils, FaUsers } from 'react-icons/fa';
import Link from 'next/link';


const Features = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const categoryCards = document.querySelectorAll('.category-card');

    function showCategory(index) {
      categoryCards.forEach((card, i) => {
        card.style.display = i === index ? 'flex' : 'none';
      });
    }

    // Show the first category initially
    showCategory(currentIndex);

    function handleNextButtonClick() {
      const newIndex = (currentIndex + 1) % categoryCards.length;
      setCurrentIndex(newIndex);
      showCategory(newIndex);
    }

    // Add event listener
    document.getElementById('nextButton').addEventListener('click', handleNextButtonClick);

    return () => {
      // Cleanup event listener when component unmounts
      document.getElementById('nextButton').removeEventListener('click', handleNextButtonClick);
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
<div className="mb-29"></div>
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
      <h4 className="text-4xl font-semibold text-gray-800">Effortless E-commerce Launch Package</h4>
      <p className="text-md text-gray-700 mt-4">Kickstart your online business with our comprehensive e-commerce web design package. Designed to help you start selling online effortlessly, this package offers everything you need to establish a strong digital presence and expand your business reach.</p>
<div class="text-md text-gray-700 mt-4">

<h5 className="text-2xl font-semibold text-gray-800 mt-6">Ideal For</h5>
  {/* ECOMMERCE IDEAL FOR Package */}
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



{/* BLOG Package */}
<div id="blog-package" className="container mx-auto py-10">
<div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 6px rgba(0, 0, 255, 0.1)" }}>
<div className="p-8">
<h4 className="text-4xl font-semibold text-gray-800">Dynamic Blog Creation Package</h4>
<p className="text-md text-gray-700 mt-4">Elevate your digital voice with our Dynamic Blog Creation Package. Tailored to empower your storytelling and idea sharing, this package is designed for influencers, thought leaders, and businesses aiming to engage a wider audience through compelling and informative content.</p>

<h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
<p className="text-md text-gray-700 mt-4"><b>Attractive Blog Layout:</b> Our team of skilled designers creates visually captivating blog layouts that are tailored to keep your readers fully engaged. We understand the importance of aesthetics in capturing and retaining your audience's attention.</p>
<p className="text-md text-gray-700 mt-4"><b>Mobile-Responsive Design:</b> In an era where mobile browsing is prevalent, our package ensures that your blog maintains an impeccable appearance and functionality across all devices. Whether your audience accesses your content on a smartphone, tablet, or desktop, their reading experience will remain seamless and enjoyable.</p>
<p className="text-md text-gray-700 mt-4"><b>User-Friendly CMS:</b> We provide you with an intuitive and user-friendly CMS that simplifies the process of managing your blog's content. You'll have the tools and flexibility needed to effortlessly update and publish new articles, keeping your digital narrative fresh and up-to-date.</p>
<p className="text-md text-gray-700 mt-4"><b>Social Media Integration:</b> Expand the reach of your thought-provoking content by seamlessly integrating your blog with various social media platforms. This feature enables you to effortlessly share your articles and engage with your audience on social networks, enhancing your blog's visibility and impact.</p>
<p className="mt-6 text-md text-gray-700">Connect with us for a personalized consultation at{' '}
<a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a> or click the button below to begin your blogging journey.</p>
<Link href="/contact" legacyBehavior>
<a className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
    Start Your Blogging Adventure</a></Link>
    </div>
  </div>
</div>

{/* Bussiness Package */}
<div id="business-package" className="container mx-auto py-10">
<div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 6px rgba(0, 255, 0, 0.1)" }}>
<div className="p-8">
<h4 className="text-4xl font-semibold text-gray-800">Professional Business Website Package</h4>
<p className="text-md text-gray-700 mt-4">Transform your company's online image with our Professional Business Website Package. This package is expertly designed for corporations, small businesses, and professionals keen on enhancing their digital footprint with a sophisticated and user-friendly website.</p>

{/* Bussiness Ideal For Package */}
<div class="custom-category-card">
  <div class="custom-category-icon">🏢</div>
  <span class="custom-category-title">Corporations</span>
  <div class="custom-category-description">
    Larger companies looking to establish a strong online presence with a sophisticated website that reflects their brand and offers advanced features.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🏬</div>
  <span class="custom-category-title">Small Businesses</span>
  <div class="custom-category-description">
    Small businesses seeking to improve their digital footprint and compete effectively in the online marketplace by having a professional and user-friendly website.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">👩‍💼</div>
  <span class="custom-category-title">Professionals</span>
  <div class="custom-category-description">
    Individuals or professionals, such as consultants, freelancers, or service providers, who want to showcase their expertise and services with an elegant and interactive online platform.
  </div>
</div>


{/* Business Key Features */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
<p className="text-md text-gray-700 mt-4"><b>Elegant Corporate Design:</b> Aesthetic and professional look tailored to your brand.</p>
<p className="text-md text-gray-700 mt-4"><b>Responsive and Interactive Interface:</b> Smooth user experience on all devices.</p>
<p className="text-md text-gray-700 mt-4"><b>Integrated Business Tools:</b> Incorporate essential tools like appointment scheduling, customer management, and more.</p>
<p className="text-md text-gray-700 mt-4"><b>Analytics Integration:</b> Track visitor behavior and website performance.</p>
<p className="mt-6 text-md text-gray-700">
For a custom solution that fits your business needs, contact us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or click below to discuss your project.</p>
<Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-800 hover:to-green-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Elevate Your Business Today</a></Link>
    </div>
  </div>
</div>


{/* Portfolio Package */}
<div id="portfolio-package" className="container mx-auto py-10">
<div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 6px rgba(255, 255, 0, 0.1)" }}>
<div className="p-8">
<h4 className="text-4xl font-semibold text-gray-800">Stunning Portfolio Website Package</h4>
<p className="text-md text-gray-700 mt-4">Dazzle the digital world with our Stunning Portfolio Website Package. This exclusive offering is meticulously designed to empower individuals and professionals from various creative domains. Elevate your online presence and leave an indelible mark in your industry with a captivating and visually immersive digital portfolio.</p>

{/* Portfolio Ideal For Package */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Ideal For</h5>
<p className="text-md text-gray-700 mt-4"><b>Visual Artists:</b> Painters, sculptors, and creatives seeking a stunning platform to exhibit their artwork.</p>
<p className="text-md text-gray-700 mt-4"><b>Designers:</b> Graphic, web, interior, and fashion designers looking to display their innovative projects and design concepts.</p>
<p className="text-md text-gray-700 mt-4"><b>Photographers:</b> Professionals aiming to showcase their photography skills, from captivating landscapes to striking portraits.</p>
<p className="text-md text-gray-700 mt-4"><b>Freelancers:</b> Writers, developers, marketers, and consultants wanting to highlight their expertise and services.</p>

{/* Portfolio KEY FEATURES Package */}
<h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
<p className="text-gray-700 mt-4"><b>Creative and Custom Design:</b> Unique layouts that reflect your personal style and brand, ensuring your portfolio is as distinctive as your work.</p>
<p className="text-gray-700 mt-4"><b>High-Resolution Image Galleries:</b> Present your work in the best light with stunning, high-quality image galleries that captivate your audience.</p>
<p className="text-gray-700 mt-4"><b>Mobile-Friendly Interface:</b> Your portfolio will flawlessly display on all device types, guaranteeing a wide reach for your potential clients and admirers.</p>
<p className="text-gray-700 mt-4"><b>Easy-to-Use CMS:</b> Update your portfolio effortlessly with a user-friendly content management system, allowing you to keep your digital narrative fresh and up-to-date.</p>
<p className="mt-6 text-md text-gray-700">To create a portfolio that truly represents you and your work, reach out to us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or press the button to get started.</p>

{/* Portfolio CONTACT BUTTON Package */}
<Link href="/contact" legacyBehavior>
<a className="inline-block mt-4 bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-800 hover:to-yellow-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
Launch Your Portfolio Now
</a>
</Link>
</div>
</div>
</div>


<div id="educational-package" className="container mx-auto py-10">
<div className="bg-white rounded-lg overflow-hidden" style={{ boxShadow: "0px 4px 6px rgba(128, 0, 128, 0.1)" }}>
    <div className="p-8">
      <h4 className="text-4xl font-semibold text-gray-800">Innovative Educational Website Package</h4>
      <p className="text-md text-gray-700 mt-4">Revolutionize the learning experience with our Innovative Educational Website Package. This package is designed for educational institutions, tutors, and e-learning platforms seeking to create interactive, engaging, and informative online educational experiences.</p>
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <p className="text-md text-gray-700 mt-4"><b>Interactive Learning Tools:</b> Engaging features like quizzes, interactive lessons, and multimedia content.</p>
      <p className="text-md text-gray-700 mt-4"><b>Responsive Design:</b> Ensures accessibility and a great experience on any device, from desktops to mobile phones.</p>
      <p className="text-md text-gray-700 mt-4"><b>User-Friendly Content Management:</b> Easy to update and manage educational content and resources.</p>
      <p className="text-md text-gray-700 mt-4"><b>Student and Teacher Portals:</b> Dedicated areas for different users with customized functionalities.</p>
      <p className="text-md text-gray-700 mt-4"><b>Integration with Educational Resources:</b> Seamlessly connect with existing educational tools and platforms.</p>
      <p className="mt-6 text-md text-gray-700">Get in touch with us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a> for a personalized approach to your educational needs, or click below to learn more.</p>
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
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
        <li><b>Inclusive and Accessible Design:</b> Ensuring that everyone in your community feels welcomed and engaged.</li>
        <li><b>Community Engagement Tools:</b> Features such as forums, event calendars, and membership sign-ups to boost participation.</li>
        <li><b>Mobile-Friendly Interface:</b> Accessible on all devices for wider reach and engagement.</li>
        <li><b>Content Management System:</b> Easy update and management of community news, events, and resources.</li>
        <li><b>Social Media Integration:</b> Seamlessly connect with popular social media platforms to enhance outreach.</li>
 
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
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <ul className="list-disc list-inside text-gray-700 mt-4">
        <li><b>Customized Aesthetic Design:</b> Reflect your personal style and brand with a unique design.</li>
        <li><b>Responsive and Intuitive Layout:</b> Ensure a smooth and engaging user experience on all devices.</li>
        <li><b>Blog and Gallery Integration:</b> Showcase your thoughts, work, or portfolio with integrated blogging and gallery features.</li>
        <li><b>Social Media Connectivity:</b> Link your website to your social media accounts for increased engagement.</li>
        <li><b>SEO Optimization:</b> Enhance your online presence and reach a broader audience.</li>
      </ul>
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
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <ul className="list-disc list-inside text-gray-700 mt-4">
        <li><b>Compelling Call-to-Action:</b> Strategically placed prompts to encourage user action.</li>
        <li><b>High-Quality Visual Design:</b> Visually appealing elements to capture and retain visitor interest.</li>
        <li><b>Responsive Design:</b> Ensuring an excellent user experience across all devices.</li>
        <li><b>SEO Optimization:</b> Boost your page's visibility on search engines.</li>
        <li><b>Analytics Integration:</b> Track visitor behavior and conversion metrics to refine strategies.</li>
      </ul>
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
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <ul className="list-disc list-inside text-gray-700 mt-4">
        <li><b>Intuitive Event Scheduling:</b> Easy-to-use tools for event creation and management.</li>
        <li><b>Responsive Design:</b> Accessible and functional on any device.</li>
        <li><b>Online Registration and Ticketing:</b> Streamlined process for attendee sign-ups and ticket sales.</li>
        <li><b>Integrated Social Media:</b> Promote your events across various social platforms.</li>
        <li><b>Real-Time Analytics:</b> Track event interest and attendance statistics for better planning.</li>
      </ul>
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
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <ul className="list-disc list-inside text-gray-700 mt-4">
        <li><b>Professional Health-Focused Design:</b> Aesthetically pleasing layouts tailored to health and wellness themes.</li>
        <li><b>Responsive and Accessible:</b> Ensures a seamless experience across all devices for all users.</li>
        <li><b>Health Blog Integration:</b> Share valuable health tips, articles, and insights with an integrated blog.</li>
        <li><b>Appointment Booking System:</b> Easy scheduling features for consultations or sessions.</li>
        <li><b>SEO Optimized:</b> Increase your visibility and reach to those seeking health information and services.</li>
      </ul>
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
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <ul className="list-disc list-inside text-gray-700 mt-4">
        <li><b>Elegant Property Galleries:</b> Showcase properties with high-resolution images and detailed descriptions.</li>
        <li><b>Responsive Design:</b> Flawless functionality on desktops, tablets, and mobile devices.</li>
        <li><b>Advanced Search Filters:</b> Help users find exactly what they're looking for with ease.</li>
        <li><b>Interactive Maps:</b> Incorporate location-based features for an intuitive property search experience.</li>
        <li><b>Client Testimonials and Reviews:</b> Build trust with prospective clients through authentic feedback.</li>
      </ul>
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
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <p className="text-md text-gray-700 mt-4">
        <b>Creative and Dynamic Design:</b> Eye-catching layouts that capture the essence of your entertainment brand.
      </p>
      <p className="text-md text-gray-700">
        <b>Responsive and Interactive Experience:</b> Smooth navigation on all devices, enhancing user engagement.
      </p>
      <p className="text-md text-gray-700">
        <b>Media Galleries:</b> Showcase your photos, videos, and artwork in high-quality formats.
      </p>
      <p className="text-md text-gray-700">
        <b>Event Calendars and Booking Systems:</b> Efficiently manage and promote your events or shows.
      </p>
      <p className="text-md text-gray-700">
        <b>Social Media Integration:</b> Extend your reach by connecting with fans and followers across various platforms.
      </p>
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
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <p className="text-md text-gray-700 mt-4"><b>Elegant Menu Displays:</b> Visually appealing layouts to exhibit your dishes and specialties.</p>
      <p className="text-md text-gray-700"><b>Responsive Design:</b> Perfect viewing experience on all devices, from smartphones to desktops.</p>
      <p className="text-md text-gray-700"><b>Online Reservation System:</b> Convenient booking options for your guests.</p>
      <p className="text-md text-gray-700"><b>Photo Galleries:</b> Showcase your restaurant's ambiance and culinary delights.</p>
      <p className="text-md text-gray-700"><b>Social Media Integration:</b> Connect with customers and promote your brand on various platforms.</p>
      <p className="mt-6 text-md text-gray-700">To take your restaurant's online presence to the next level, contact us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or click the button below to get started.</p>
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
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Key Features</h5>
      <ul className="list-disc list-inside text-gray-700 mt-4">
        <li><b>Member Registration and Management:</b> Streamlined processes for new member sign-ups and existing member management.</li>
        <li><b>Responsive Design:</b> A seamless interface across all devices, enhancing member engagement.</li>
        <li><b>Exclusive Content Access:</b> Specialized areas for members to access exclusive content or services.</li>
        <li><b>Payment Gateway Integration:</b> Secure and efficient payment solutions for membership fees and transactions.</li>
        <li><b>Community Engagement Tools:</b> Features such as forums, polls, and newsletters to keep your community connected and active.</li>
      </ul>
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