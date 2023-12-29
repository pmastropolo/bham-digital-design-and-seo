import React, { useState } from 'react';
import EcommercePackages from '../components/EcommercePackages';                // ECOMMERCE COMPONENT
import CommunityPackages from '../components/CommunityPackages';                // COMMUNITY COMPONENT
import BlogPackages from '../components/BlogPackages';                          // BLOG COMPONENT
import WeberPackagesPage from '../components/weber'; 
import Business from '../components/Business';                  // BUSINESS COMPONENT
import Portfolio from '../components/Portfolio';                                // PORTFOLIO COMPONENT
import Educational from '../components/Educational';                            // EDUCATIONAL COMPONENT
import Personal from '../components/Personal';                                  // PERSONAL COMPONENT
import Lander from '../components/Lander';                                      // LANDING PAGE COMPONENT
import Evenflowp from '../components/Evenflowp';                                        // EVENT COMPONENT
import Health from '../components/Health';                                      // HEALTH COMPONENT
import RealEstate from '../components/RealEstate';                              // REAL ESTATE COMPONENT
import Entertainment from '../components/Entertainment';                        // ENTERTAINMENT COMPONENT
import Restaurant from '../components/Restaurant';                              // RESTAURANT COMPONENT
import Membership from '../components/Membership';                              // MEMBERSHIP COMPONENT



const PackagesPage = () => {
  const [activeTab, setActiveTab] = useState('webdesign');

  return (
        <div className="container mx-auto px-4">
        <div className="flex flex-wrap space-x-4 mb-4 overflow-x-auto">

          <button 
          onClick={() => setActiveTab('ecommerce')} 
          className={`px-4 py-2 ${activeTab === 'ecommerce' ? 'text-red-500 font-bold' : ''}`}
        >
          Ecommerce
        </button>
        <button 
          onClick={() => setActiveTab('blog')} 
          className={`px-4 py-2 ${activeTab === 'blog' ? 'text-blue-500 font-bold' : ''}`}
        >
          Blog
        </button>    
      
            <button
              onClick={() => setActiveTab('business')}
              className={`px-4 py-2 ${activeTab === 'business' ? 'text-green-600 font-bold' : ''}`}
            >
              Business
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-4 py-2 ${activeTab === 'portfolio' ? 'text-yellow-800 font-bold' : ''}`}
            >
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('educational')}
              className={`px-4 py-2 ${activeTab === 'educational' ? 'text-purple-800 font-bold' : ''}`}
            >
              Educational
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`px-4 py-2 ${activeTab === 'community' ? 'text-orange-800 font-bold' : ''}`}
            >
              Community
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`px-4 py-2 ${activeTab === 'personal' ? 'text-pink-900 font-bold' : ''}`}
            >
              Personal
            </button>
            <button
              onClick={() => setActiveTab('lander')}
              className={`px-4 py-2 ${activeTab === 'lander' ? 'text-orange-500 font-bold' : ''}`}
            >
              Landing Page
            </button>
            <button
              onClick={() => setActiveTab('evenflowp')}
              className={`px-4 py-2 ${activeTab === 'evenflowp' ? 'text-slate-400 font-bold' : ''}`}
            >
              Event
            </button>
            <button
              onClick={() => setActiveTab('health')}
              className={`px-4 py-2 ${activeTab === 'health' ? 'text-gray-900 font-bold' : ''}`}
            >
              Health
            </button>
            <button
              onClick={() => setActiveTab('real estate')}
              className={`px-4 py-2 ${activeTab === 'real estate' ? 'text-blue-400 font-bold' : ''}`}
            >
              Real Estate
            </button>
            <button
              onClick={() => setActiveTab('entertainment')}
              className={`px-4 py-2 ${activeTab === 'entertainment' ? 'text-indigo-400 font-bold' : ''}`}
            >
              Entertainment
            </button>
            <button
              onClick={() => setActiveTab('restaurant')}
              className={`px-4 py-2 ${activeTab === 'restaurant' ? 'text-emerald-900 font-bold' : ''}`}
            >
              Restaurant
            </button>
            <button
              onClick={() => setActiveTab('membership')}
              className={`px-4 py-2 ${activeTab === 'membership' ? 'text-yellow-400 font-bold' : ''}`}
            >
              Membership
            </button>

            <button 
          onClick={() => setActiveTab('webdesign')}   
          className={`px-4 py-2 ${activeTab === 'webdesign' ? 'text-blue-500 font-bold' : ''}`}
        >
          Explore Web Design Packages
        </button>
           
          </div>
    
          {/* Add the content for the new components */}
          {activeTab === 'ecommerce' && <EcommercePackages />}
          {activeTab === 'blog' && <BlogPackages />}
          {activeTab === 'business' && <Business />}
          {activeTab === 'portfolio' && <Portfolio />}
          {activeTab === 'educational' && <Educational />}
          {activeTab === 'community' && <CommunityPackages />}
          {activeTab === 'personal' && <Personal />}
          {activeTab === 'lander' && <Lander />}
          {activeTab === 'evenflowp' && <Evenflowp />}
          {activeTab === 'health' && <Health />}
          {activeTab === 'real estate' && <RealEstate />}
          {activeTab === 'entertainment' && <Entertainment />}
          {activeTab === 'restaurant' && <Restaurant />}
          {activeTab === 'membership' && <Membership />}
          {activeTab === 'webdesign' && <WeberPackagesPage />}
        </div>
      );
    };
    
    export default PackagesPage;