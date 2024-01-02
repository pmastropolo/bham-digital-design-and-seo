import React from 'react';
import Link from 'next/link';

const packages = [
        {
          name: 'Basic SEO Package',
          price: '$499 | monthly',
          description: 'Ideal For Small Businesses And Startups Looking To Establish An Online Presence.',
          features: [
            'Keyword Research | - Identification Of 10 Key Phrases',
            'On-Page SEO | - Basic Optimization Of Title Tags And Meta Descriptions For Up To 10 Pages',
            'Content Recommendations | - Basic Guidelines For Content Creation',
            'Monthly Performance Report | - Overview Of Rankings And Traffic'
          ]
        },
        {
          name: 'Standard SEO Package',
          price: '$999 | monthly',
          description: 'Perfect for growing businesses aiming to enhance their online visibility and reach.',
          features: [
            'Advanced Keyword Research | - Up To 25 Key Phrases',
            'Comprehensive On-Page SEO | - Optimization For Up To 25 Pages',
            'Technical SEO Audit | - Basic Site Audit And Recommendations',
            'Content Strategy | - Creation Of A Detailed Content Plan',
            'Backlink Analysis | - Basic Analysis And Strategy For Link Building',
            'Bi-Weekly Performance Reports'
          ]
        },
        {
          name: 'Premium SEO Package',
          price: '$1,999 | monthly',
          description: 'Designed for Established Businesses Targeting Aggressive Growth and Market Leadership.',
          features: [
            'Expert Keyword Research | - Unlimited Key Phrases',
            'Full On-Page SEO Optimization | - For All Website Pages',
            'In-Depth Technical SEO Audit | - Including Performance Optimization',
            'Advanced Content Strategy | - Including Content Creation For Blogs And Landing Pages',
            'Robust Backlink Strategy | - Comprehensive Analysis And Active Link Building',
            'Weekly Performance Reports | - Detailed Insights With Action Plans',
            'Dedicated SEO Account Manager | - Personalized Consultancy And Support'
          ]
        },
        {
          name: 'Enterprise SEO Package',
          price: 'Custom Pricing',
          description: 'Tailored for Large Organizations with Complex Websites Needing Bespoke SEO Strategies.',
          features: [
            'Custom Keyword Research | - Tailored To Business Needs And Industry',
            'End-To-End On-Page And Off-Page SEO | - Including International SEO If Required',
            'Deep Technical SEO Optimization | - Focused On Scalability And Efficiency',
            'Comprehensive Content Strategy | - Covering All Types Of Digital Content',
            'Advanced Backlink Development | - Using Premium Tools And Resources',
            'Real-Time Performance Dashboards | - Custom-Built Reports And Analytics',
            'Dedicated SEO Team | - Including Strategists, Analysts, And Content Creators',
            'Regular Consultation And Strategy Meetings'
          ]
        }
      ];

const SEOPackages = () => {
        return (
            <div className="container mx-auto px-4">
                {packages.map((pkg, index) => (
                    <div key={index} className="mb-6 p-4 border rounded-lg">
                        <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-800 hover:text-blue-600 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
                        <p className="text-md mb-1 font-medium text-gray-800">{pkg.price}</p>
                        <hr className="mb-2" />
                        <p>{pkg.description}</p>
                        <ul className="list-disc list-inside">
                            {pkg.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="my-2">
                                    <span className="font-semibold">{feature.split(' | ')[0]}</span>
                                    <span className="ml-2">{feature.split(' | ')[1]}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

  {/* Contact Information */}
<div className="text-center mt-8">
        <p className="text-2xl text-blue-700 font-semibold">
          Interested in our SEO Packages?
        </p>
        <p className="text-lg text-gray-600">
          Contact us today to request a <span className="text-blue-700">free price quote</span>.
        </p>
        <Link href="/contact" legacyBehavior>
          <a className="inline-block bg-blue-600 hover:bg-blue-800 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
            Request a Free Price Quote
          </a>
        </Link>
      </div>

            </div>
        );
    };

export default SEOPackages;