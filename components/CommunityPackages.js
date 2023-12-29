import React from 'react';
import Link from 'next/link';

const packages = [

        {
                "name": "Community Outreach Starter Package",
                "price": "$800 - $1,500",
                "duration": "3 Weeks",
                "features": [
                  "- Basic Responsive Design for Community Engagement",
                  "- Event Calendar for Local Activities",
                  "- Blog or News Section for Updates",
                  "- Contact Form for Member Inquiries"
                ],
                "websiteIncludes": [
                  "Home Page with Community Overview",
                  "About Us Page for Mission and Vision",
                  "Upcoming Events Calendar",
                  "Community News or Blog Section"
                ],
                "totalPages": "4-6",
                "idealFor": "Small Community Groups and Local Non-Profits Seeking Basic Online Presence."
              },

        {
                "name": "Engaged Community Platform Package",
                "price": "$2,500 - $5,000",
                "duration": "6 Weeks",
                "features": [
                  "- Interactive Event Registration and RSVPs",
                  "- Member Profiles and Directories",
                  "- Forum or Discussion Board for Member Interaction",
                  "- Social Media Integration for Wider Reach"
                ],
                "websiteIncludes": [
                  "Dynamic Home Page with Event Highlights",
                  "Detailed Member Directory",
                  "Interactive Community Forum",
                  "Resources and Documents Library"
                ],
                "totalPages": "8-12",
                "idealFor": "Growing Community Organizations Looking to Foster Engagement and Networking Online."
              },         

        {
                "name": "Comprehensive Community Network Package",
                "price": "$6,000 - $10,000",
                "duration": "10 Weeks",
                "features": [
                  "- Custom Design Tailored to Community Branding",
                  "- Advanced Member Management and CRM Integration",
                  "- Online Donation and Fundraising Capabilities",
                  "- Email Marketing Tools for Effective Communication"
                ],
                "websiteIncludes": [
                  "Branded Landing Page for Community",
                  "Advanced Event Management with Online Payments",
                  "Member Portal with Customized Access",
                  "Volunteer Sign-Up and Management Section"
                ],
                "totalPages": "15-20",
                "idealFor": "Large Community Organizations and Networks Seeking a Robust Online Platform for Member Management and Fundraising."
              },

        {
                "name": "Elite Community Ecosystem Package",
                "price": "$12,000+",
                "duration": "14+ Weeks",
                "features": [
                  "- State-of-the-Art Website and Mobile App Integration",
                  "- Multi-Lingual Support for Global Communities",
                  "- Full-Scale Analytics for Community Insights",
                  "- Custom API Integrations for Additional Functionality"
                ],
                "websiteIncludes": [
                  "Sophisticated Main Portal with High-End Features",
                  "Dedicated Sections for Different Community Groups",
                  "Integrated E-Commerce for Community Merchandise",
                  "Comprehensive Resource Center with Multi-Media Content"
                ],
                "totalPages": "20+",
                "idealFor": "National or International Community Organizations Needing an Extensive Digital Ecosystem."
              }
              

    ];


const CommunityPackages = () => {
        return (

                <div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "2px 6px 8px rgba(900, 105, 0.9, 0.4)" }}>
                  <div className="p-4 sm:p-3">
                    <div className="bg-gradient-to-b from-orange-800 to-orange-700 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-orange-900 transition-colors duration-300 p-8">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                      Stronger Communities Online
                      </h1>
                      <p className="text-sm sm:text-md md:text-lg text-gray-100 mt-2 sm:mt-4">
                      Uniting People, Unleashing Potential
                      </p>
                    </div>

    <h4 className="text-4xl mt-4 font-semibold text-gray-800">Empowering<span className="text-yellow-700"> Community </span> Website Package</h4>



      <p className="text-md text-gray-700 mt-4">Unite and inspire your community with our Empowering Community Website Package. This package is perfectly crafted for non-profits, social groups, and community organizations looking to foster engagement, collaboration, and positive change through an impactful online presence.</p>
      
      
      
      
      <div className="custom-category-card-container">
      <div class="custom-category-card">
  <div class="custom-category-icon">🌐</div>
  <span class="custom-category-title">Enhance Online Presence</span>
  <div class="custom-category-description">
    Build a dynamic and engaging online platform that embodies the spirit of your community and draws more interaction.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🤝</div>
  <span class="custom-category-title">Community Engagement</span>
  <div class="custom-category-description">
    Foster strong community bonds through interactive features, ensuring active participation and collaboration.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📱</div>
  <span class="custom-category-title">Responsive Web Design</span>
  <div class="custom-category-description">
    Ensure your website is accessible and efficient across all devices, enhancing user experience for everyone.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📅</div>
  <span class="custom-category-title">Event Management</span>
  <div class="custom-category-description">
    Seamlessly manage and promote community events with integrated calendars, registration, and RSVP systems.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📰</div>
  <span class="custom-category-title">Information Sharing</span>
  <div class="custom-category-description">
    Keep your community informed and engaged with dedicated news sections and blogs.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">✉️</div>
  <span class="custom-category-title">Contact and Inquiry Tools</span>
  <div class="custom-category-description">
    Provide easy and accessible ways for members to reach out and connect with you through contact forms and other inquiry tools.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">👥</div>
  <span class="custom-category-title">Member-Focused Features</span>
  <div class="custom-category-description">
    Engage members with personalized profiles, directories, and management systems for a thriving community network.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🔗</div>
  <span class="custom-category-title">Social Media Connectivity</span>
  <div class="custom-category-description">
    Expand your reach and influence with seamless social media integration, connecting your community across platforms.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎨</div>
  <span class="custom-category-title">Customization and Branding</span>
  <div class="custom-category-description">
    Reflect your community’s unique identity with customizable design options that resonate with your brand.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">💰</div>
  <span class="custom-category-title">Fundraising Tools</span>
  <div class="custom-category-description">
    Empower your community with integrated fundraising capabilities to support your causes and initiatives.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📧</div>
  <span class="custom-category-title">Communication Tools</span>
  <div class="custom-category-description">
    Maintain effective communication with your members through robust email marketing and notification tools.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📊</div>
  <span class="custom-category-title">Analytics and CRM</span>
  <div class="custom-category-description">
    Gain valuable insights and manage your community more efficiently with advanced analytics and CRM integration.
  </div>
</div>



</div>
     
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Benefits</h5>
      <p className="text-md text-gray-700 mt-4"><b>Inclusive and Accessible Design:</b> Ensuring that everyone in your community feels welcomed and engaged.</p>
      <p className="text-md text-gray-700 mt-4"><b>Community Engagement Tools:</b> Features such as forums, event calendars, and membership sign-ups to boost participation.</p>
      <p className="text-md text-gray-700 mt-4"><b>Mobile-Friendly Interface:</b> Accessible on all devices for wider reach and engagement.</p>
      <p className="text-md text-gray-700 mt-4"><b>Content Management System:</b> Easy update and management of community news, events, and resources.</p>
      <p className="text-md text-gray-700 mt-4"><b>Social Media Integration:</b> Seamlessly connect with popular social media platforms to enhance outreach.</p>

      
      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Ideal For</h5>
      <div className="custom-category-card-container">
      <div class="custom-category-card">
  <div class="custom-category-icon">🌱</div>
  <span class="custom-category-title">The Emerging Non-Profit</span>
  <div class="custom-category-description">
    Perfect for new non-profits eager to establish their digital footprint and connect with the community.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🏘️</div>
  <span class="custom-category-title">Local Community Groups</span>
  <div class="custom-category-description">
    Ideal for neighborhood associations and community groups looking to strengthen local engagement and communication.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🤝</div>
  <span class="custom-category-title">Social Networking Platforms</span>
  <div class="custom-category-description">
    Great for platforms focused on building social networks and fostering interactions among members.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎗️</div>
  <span class="custom-category-title">Charity Organizations</span>
  <div class="custom-category-description">
    Suited for charities seeking to increase awareness, raise funds, and organize community support.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📚</div>
  <span class="custom-category-title">Educational Communities</span>
  <div class="custom-category-description">
    Perfect for educational groups and institutions aiming to create a collaborative space for learning and sharing.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🌍</div>
  <span class="custom-category-title">Global Networks</span>
  <div class="custom-category-description">
    Ideal for organizations with a global reach, looking to connect and engage with international communities.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🔊</div>
  <span class="custom-category-title">Advocacy Groups</span>
  <div class="custom-category-description">
    Suited for activist groups and advocacy organizations aiming to spread their message and mobilize support.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">💼</div>
  <span class="custom-category-title">Professional Associations</span>
  <div class="custom-category-description">
    Ideal for professional bodies looking to network, share resources, and provide value to members.
  </div>
</div>

      </div>
      
      
      <p className="mt-6 text-md text-gray-700">To discuss how we can help your community thrive online, contact us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a>, or press the button to get started.</p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 mb-6 bg-gradient-to-r from-orange-600 to-orange-800 hover:from-orange-800 hover:to-orange-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Build Your Community Space
        </a>
      </Link>
    </div>
  </div>


                <div className="container mx-auto px-4 py-5">
                <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8 underline decoration-orange-600 decoration-4 underline-offset-8">
                   Community Packages
                 </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <div key={index} className="border border-gray-200 shadow-lg p-4 rounded-lg">
                  <h3 className="font-semibold text-xl mb-2">{pkg.name}</h3>
                  <p className="text-orange-600">{pkg.price}</p>
                  <p className="mb-2"><strong>Duration:</strong> {pkg.duration}</p>
                  <ul className="mb-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="text-sm mb-1">- {feature}</li>
                    ))}
                  </ul>
                  <p className="italic">Ideal for: {pkg.idealFor}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
        <p className="text-2xl text-orange-600 font-semibold">
          Interested in our Community Web Design Package?
        </p>
        <p className="text-lg text-gray-600">
          Contact us today to request a <span className="text-orange-400">free price quote</span>.
        </p>
        <Link href="/contact" legacyBehavior>
          <a className="inline-block bg-orange-600 hover:bg-orange-800 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
            Request a Free Price Quote
          </a>
        </Link>
      </div>
</div>

          </div>
        );
      };
      
      export default CommunityPackages;