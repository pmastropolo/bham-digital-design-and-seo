import React from 'react';
import Link from 'next/link';

const packages = [
        {
          name: 'Basic SEO Package',
          price: '$299 | monthly',
          description: 'Ideal For Small Businesses And Startups Looking To Establish An Online Presence.',
          features: [
            'Keyword Research | 10 Key Phrases',
            'On-Page SEO Optimize Title Tags & Meta Descriptions | Up to 10 Pages',
            'Content Recommendations Guidelines for Content Creation',
            'Performance Report Rankings & Traffic Overview',
            'Local SEO Optimization Boost Local Visibility',
            'Site Speed Optimization Faster Loading Times'
          ]
        },
        {
          name: 'Standard SEO Package',
          price: '$799 | monthly',
          description: 'Perfect for growing businesses aiming to enhance their online visibility and reach.',
          features: [
            'Everything In Basic SEO Package',
            'Advanced Keyword Research | Up To 25 Key Phrases',
            'Advanced Technical SEO | In-Depth Site Optimizations',
            'Local SEO Citations | Business Listing On Local Directories',
            'Comprehensive On-Page SEO | Optimization For 25 Pages',
            'Advanced Content Recommendations | Detailed Content Strategy',
            'Technical SEO Audit | Site Audit And Recommendations',
            'Content Strategy | Creation Of A Detailed Content Plan',
            'Backlink Analysis | Analysis And Strategy For Link Building',
            'Bi-Weekly Performance Reports',
            'Advanced Technical SEO | In-Depth Technical Optimizations',
            'Conversion Rate Optimization (CRO) | Improve Conversions',
            'Local SEO Citations | Business Listing On Local Directories',
            'Advanced Content Recommendations | Detailed Content Strategy',
            'Structured Data Markup | Schema Markup For Rich Search Results',
            'Monthly Competitor Reports | Monitor Competitors And Adjust Strategies',
            'Social Media Marketing | Manage And Promote Social Media Profiles',
          ],
        },
        {
          name: 'Premium SEO Package',
          price: '$1,600 | monthly',
          description: 'Designed for Established Businesses Targeting Aggressive Growth and Market Leadership.',
          features: [
            'Everything In Basic And Starter Package',
            'Expert Keyword Research | Unlimited Key Phrases',
            'Full On-Page SEO Optimization | For All Website Pages',
            'In-Depth Technical SEO Audit | Including Performance Optimization',
            'Advanced Content Strategy | Including Content Creation For Blogs And Landing Pages',
            'Robust Backlink Strategy | Comprehensive Analysis And Active Link Building',
            'Weekly Performance Reports | Detailed Insights With Action Plans',
            'Dedicated SEO Account Manager | Personalized Consultancy And Support',
            'International SEO | Expand Reach To International Markets (if applicable)',
            'E-commerce SEO | Optimize Product Pages And Shopping Carts',
            'Advanced Technical Audit | Comprehensive Site Audit And Performance Optimization',
            'Custom Link Building | Develop High-Quality Backlinks Through Outreach And Partnerships',
            'Custom Content Creation | Regular Blog Posts, Infographics, And Multimedia Content',
            'Advanced Analytics | In-Depth Tracking And Analysis Of User Behavior',
            'A/B Testing | Implement Split Testing To Improve Conversions',
          ]
        },
        {
          name: 'Enterprise SEO Package',
          price: 'Custom Pricing',
          description: 'Tailored for Large Organizations with Complex Websites Needing Bespoke SEO Strategies.',
          features: [
            'Custom Keyword Research | Tailored To Business Needs And Industry',
            'Everything In Lower Tier Packages',
            'End-To-End On-Page And Off-Page SEO | Including International SEO If Required',
            'Deep Technical SEO Optimization | Focused On Scalability And Efficiency',
            'Comprehensive Content Strategy | Covering All Types Of Digital Content',
            'Advanced Backlink Development | Using Premium Tools And Resources',
            'Real-Time Performance Dashboards | Custom-Built Reports And Analytics',
            'Dedicated SEO Team | Including Strategists, Analysts, And Content Creators',
            'Global SEO Strategy | Tailored International SEO Strategies For Multi-Location Businesses',
            'AI-Powered SEO | Utilize AI and Machine Learning For Advanced Insights',
            'Advanced Technical Scalability | Scalable Solutions For Complex Websites',
            'Full-Scale E-commerce Optimization | Advanced Product Optimization And Category Management',
            'Custom Analytics Dashboards | Track Specific KPIs With Custom Reports',
            'Multichannel Integration | Integrate SEO Efforts Across Various Marketing Channels',
            'Reputation Management | Monitor And Manage Online Reviews And Reputation',
            'Regular Consultation And Strategy Meetings',
          ]
        }
      ];

      const PackageCard = ({ pkg }) => {
        return (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{pkg.name}</h3>
              <p className="text-md font-medium text-gray-600 mb-2">{pkg.price}</p>
              <hr className="my-2 border-t-2 border-gray-300" />
              <p className="text-gray-700 mb-4">{pkg.description}</p>
            </div>
            <ul className="px-6 py-4">
              {pkg.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-center mb-2 text-gray-700"
                >

                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      };
      
      const SEOPackages = () => {
        return (
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {packages.map((pkg, index) => (
              <PackageCard key={index} pkg={pkg} />
            ))}
        
          </div>
       
        );
      };
      
      export default SEOPackages;
