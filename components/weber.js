import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBlog, FaBriefcase, FaUser, FaSchool, FaUserCircle, FaHeart, FaLaptop, FaCalendarAlt, FaHospital, FaHome, FaFilm, FaUtensils, FaUsers } from 'react-icons/fa';
import Link from 'next/link';

const WeberPackagesPage = () => {

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

  const scrollToPackage = (packageId) => {
    const packageElement = document.getElementById(packageId);
    if (packageElement) {
      packageElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (


      <section className="mt-8">
        <div className="container mx-auto">
        <div className="bg-white text-center p-10 shadow-lg rounded-lg mb-10 z-10 relative">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Explore Our Web Design Packages</h2>
          <p className="text-lg mb-8 text-gray-600">Dive into our diverse range of web design packages below, each meticulously crafted to meet your unique digital needs.</p>
          <div className="flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
        </div>

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

                </div>
              </div>
            ))}
          </div>
        </div>

                      <div className="text-center mt-8">
  <p className="text-2xl text-slate-900 font-semibold">
    Interested in our Web Design Packages?
  </p>
  <p className="text-lg text-gray-600">
  Begin with an initial consultation to understand the unique needs of your business.
  </p>
  <Link href="/webDesignConsultation" legacyBehavior>
    <a className="inline-block bg-slate-900 hover:bg-slate-950 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
     Start Form
    </a>
  </Link>
</div>

<div className="border-bottom-gray"></div>
 
     
        <div className="p-6"></div>
      </section>
    
  );
};

export default WeberPackagesPage;
