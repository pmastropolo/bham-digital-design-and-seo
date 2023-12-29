import React from 'react';
import Link from 'next/link';

const educationalPackageData = [

        {
                "name": "Starter Academic Website Package",
                "price": "$1,500-$3,000",
                "duration": "8 Weeks",

                "features": [
                        "- Up To 10 Pages | Home, About, Courses/Programs, Admissions, Contact, Etc.",
                        "- Basic Template-Based Design With Institution Branding",
                        "- Mobile Responsive Layout",
                        "- Basic SEO Setup For Educational Content",
                        "- Contact Form & Basic Location Map",
                        "- Simple Course Listings Or Program Descriptions",
                        "- Basic CMS For Content Updates"
                ],

                "websiteIncludes": [
                        "Home",
                        "About Us",
                        "Course | Program Overview",
                        "Admissions Information",
                        "Contact Page with Form & Map",
                        "Faculty & Staff Overview",
                        "News & Events",
                        "Gallery | Media",
                        "Testimonials",
                        "FAQ"
                ],

                "totalPages": "10",
                "idealFor": "Small Educational Institutions Or Individual Educators Starting With Online Presence."
        },


        {
                "name": "Enhanced Learning Website Package",
                "price": "$3,000 - $7,000",
                "duration": "16 Weeks",
                "features": [
                        "- Expanded Content Pages Including Faculty, Events, And Student Testimonials",
                        "- Enhanced Design Customization",
                        "- Advanced SEO Features",
                        "- Interactive Contact Forms And Maps",
                        "- Detailed Course And Program Listings",
                        "- User Friendly CMS With Enhanced Capabilities"
                ],
                "websiteIncludes": [
                        "Individual Course | Program Details",
                        "Faculty | Staff Individual Profile Pages",
                        "Upcoming Events Calendar",
                        "Student Life | Activities",
                        "Alumni",
                        "Research & Innovation Highlights",
                        "Partnerships & Collaborations",
                        "Detailed Testimonials | Success Stories",
                        "Blog or News Update Section"
                ],
                "totalPages": "15-20",
                "idealFor": "Growing Educational Institutions Needing A More Comprehensive Online Platform."
              },

              {
                "name": "Premium Educational Experience Package",
                "price": " $7,000-$15,000",
                "duration": "24 Weeks",
                "features": [
                  "- Extensive Range Of Custom Pages",
                  "- High-End Custom Design Tailored To Brand Identity",
                  "- Comprehensive SEO And Marketing Tools",
                  "- Dynamic Contact Forms And Interactive Features",
                  "- In-Depth Course And Faculty Information Pages",
                  "- Advanced CMS With Multi-User Access"
                ],
                "websiteIncludes": [
                  "Dedicated Pages for Each Department or Faculty",
                  "In-Depth Admissions Procedure and Guidelines Pages",
                  "Interactive Campus/Virtual Tour Page",
                  "Advanced Research and Publications Page",
                  "Comprehensive Alumni Network Page",
                  "Online Learning Resources or E-Library Page",
                  "International Students Information Page",
                  "Community Engagement and Outreach Page",
                  "Detailed Career and Placement Services Page"
                ],
                "totalPages": "25-30 Pages",
                "idealFor": "Established Educational Institutions Seeking A Robust And Feature-Rich Website."
              },
              {
                "name": "Elite University Web Suite",
                "price": "$15,000+",
                "duration": "6 Months+",
                "features": [
                  "- Comprehensive Custom Web Design",
                  "- Full Range SEO And Digital Marketing Integration",
                  "- Multi Language Support And Global Accessibility Features",
                  "- Advanced Interactivity With Virtual Tours, Maps, And More",
                  "- Comprehensive Course, Faculty, And Departmental Pages",
                  "- High-End Scalable CMS With Full Customization"
                ],
                "websiteIncludes": [
                  "Multilingual Versions of Key Pages",
                  "Advanced Interactive Campus Map",
                  "Extensive Online Course Catalog with Interactive Features",
                  "Specialized Pages for Major Research Initiatives",
                  "Comprehensive Fundraising and Donations Page",
                  "Detailed Governance and Policies Page",
                  "Student and Faculty Portals",
                  "Integration with External Educational Platforms",
                  "Advanced Custom Pages for Unique University Needs"
                ],
                "totalPages": "35+ Pages",
                "idealFor": "Large Universities And Educational Enterprises Requiring A Top-Tier, Extensive Web Presence."
              }

        ];

const Educational = () => {
                return (
<div>
      {/* Header Section */}
      <div className="bg-blue rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "0px 6px 9px rgba(130, 0, 128, 0.1)" }}>
        <div className="p-2 sm:p-3">
          {/* Header Content */}
          <div className="bg-gradient-to-b from-purple-500 to-purple-700 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-purple-900 transition-colors duration-300 p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Transforming Education Online
            </h1>
            <p className="text-sm sm:text-md md:text-lg text-gray-300 mt-2 sm:mt-4">
              Transforming Education, One Click at a Time
            </p>
          </div>
        </div>
        
        <h4 className="text-4xl font-semibold text-gray-800 mt-4">
        Innovative <span className="text-purple-800">Educational</span> Website Package
        </h4>
        <p className="text-md text-gray-700 mt-2">
        Revolutionize the learning experience with our Innovative Educational Website Package. This package is designed for educational institutions, tutors, and e-learning platforms seeking to create interactive, engaging, and informative online educational experiences.
        </p>
                      
   
<div className="custom-category-card-container">
  {/* Multiple Pages */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📚</div>
    <span class="custom-category-title">Multiple Pages</span>
    <div class="custom-category-description">
      We will create multiple web pages to showcase every aspect of your educational institution or platform. Your online presence will be comprehensive and informative.
    </div>
  </div>

  {/* Mobile Responsiveness */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📱</div>
    <span class="custom-category-title">Mobile Responsiveness</span>
    <div class="custom-category-description">
      Your website will be fully responsive, ensuring that it looks great and functions smoothly on mobile devices. A seamless user experience is guaranteed!
    </div>
  </div>

  {/* SEO Setup */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🔍</div>
    <span class="custom-category-title">SEO Setup</span>
    <div class="custom-category-description">
      Boost your online visibility with our SEO features. We will help your educational content rank higher in search engine results, making it easier for students to find you.
    </div>
  </div>

  {/* Contact Form */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📬</div>
    <span class="custom-category-title">Contact Form</span>
    <div class="custom-category-description">
      We make it simple for users to get in touch with you. Our contact form ensures that potential students and partners can reach out effortlessly.
    </div>
  </div>

  {/* Faculty and Staff Information */}
  <div class="custom-category-card">
    <div class="custom-category-icon">👩‍🏫</div>
    <span class="custom-category-title">Faculty and Staff Information</span>
    <div class="custom-category-description">
      Showcase the expertise of your educators! We will create dedicated pages to highlight your talented faculty and staff.
    </div>
  </div>

  {/* Course and Program Listings */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎓</div>
    <span class="custom-category-title">Course and Program Listings</span>
    <div class="custom-category-description">
      Inform your visitors about the courses and programs you offer. We will provide detailed information to help students make informed choices.
    </div>
  </div>

  {/* Content Management System (CMS) */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🖥️</div>
    <span class="custom-category-title">Content Management System (CMS)</span>
    <div class="custom-category-description">
      Youll have the power to update your website easily with our user-friendly CMS. Managing your content has never been simpler.
    </div>
  </div>

  {/* Events Calendar */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🗓️</div>
    <span class="custom-category-title">Events Calendar</span>
    <div class="custom-category-description">
      Keep everyone in the loop with an interactive events calendar. Your users will always know about upcoming events and activities.
    </div>
  </div>

  {/* Testimonials */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🌟</div>
    <span class="custom-category-title">Testimonials</span>
    <div class="custom-category-description">
      Build trust and credibility with a testimonials section. Share success stories and feedback from your satisfied students and partners.
    </div>
  </div>

  {/* Blog or News Section */}
  <div class="custom-category-card">
    <div class="custom-category-icon">📰</div>
    <span class="custom-category-title">Blog or News Section</span>
    <div class="custom-category-description">
      Stay up-to-date with our blog or news section. Share important updates, educational content, and exciting news with your audience.
    </div>
  </div>

  {/* Advanced Custom Design */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🎨</div>
    <span class="custom-category-title">Advanced Custom Design</span>
    <div class="custom-category-description">
      Your website will be unique and tailored to your brand identity. We will provide custom design elements to make you stand out.
    </div>
  </div>

  {/* Global Accessibility */}
  <div class="custom-category-card">
    <div class="custom-category-icon">🌎</div>
    <span class="custom-category-title">Global Accessibility</span>
    <div class="custom-category-description">
      We ensure that your website is accessible to a global audience. Features like multi-language support and interactive maps for virtual tours will help you reach students worldwide.
    </div>
  </div>
</div>

  {/* Benefits of having an Educational Website */}
  <h5 className="text-2xl font-semibold text-gray-800 mt-6">Benefits of having an Educational Website</h5>
  <p className="text-md text-gray-700 mt-4"><b>Global Reach </b> | Share knowledge worldwide, breaking boundaries.</p>
  <p className="text-md text-gray-700 mt-4"><b>24/7 Access</b> | Learning materials available anytime, anywhere.</p>
  <p className="text-md text-gray-700 mt-4"><b>Engaging Learning</b> | Interactive courses for active participation.</p>
  <p className="text-md text-gray-700 mt-4"><b>Personal Branding </b> | Establish expertise and stand out.</p>
  <p className="text-md text-gray-700 mt-4"><b>Resource Hub </b> | Centralized learning materials for easy access.</p>
  <p className="text-md text-gray-700 mt-4"><b>Community Building</b> | Connect students, encourage collaboration.</p>

  {/* Ideal For */}
  <h5 className="text-2xl font-semibold text-gray-800 mt-6">Ideal For</h5>
  <div className="custom-category-card-container">
    {/* Elite University Web Suite */}
    <div class="custom-category-card">
      <div class="custom-category-icon">🎓</div>
      <span class="custom-category-title">Elite University Web Suite</span>
      <div class="custom-category-description">
        Large Universities And Educational Enterprises Requiring A Top-Tier, Extensive Web Presence.
      </div>
    </div>

    {/* Premium Educational Experience Package */}
    <div class="custom-category-card">
      <div class="custom-category-icon">🏫</div>
      <span class="custom-category-title">Premium Educational Experience Package</span>
      <div class="custom-category-description">
        Established Educational Institutions Seeking A Robust And Feature-Rich Website.
      </div>
    </div>

    {/* Enhanced Learning Website Package */}
    <div class="custom-category-card">
      <div class="custom-category-icon">🌱</div>
      <span class="custom-category-title">Enhanced Learning Website Package</span>
      <div class="custom-category-description">
        Growing Educational Institutions Needing A More Comprehensive Online Platform.
      </div>
    </div>

    {/* Starter Academic Website Package */}
    <div class="custom-category-card">
      <div class="custom-category-icon">⭐</div>
      <span class="custom-category-title">Starter Academic Website Package</span>
      <div class="custom-category-description">
        Small Educational Institutions Or Individual Educators Starting With Online Presence.
      </div>
    </div>
  </div>

  {/* Contact Information */}
  <p className="mt-6 text-md text-gray-700">
    Get in touch with us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a> for a personalized approach to your educational needs, or click below to learn more.
  </p>

  {/* Button for Learning More */}
  <Link href="/contact" legacyBehavior>
    <a className="inline-block mt-4 mb-6 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-800 hover:to-purple-600 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
      Enhance Your Educational Reach
    </a>
  </Link>
</div>
              
<section></section>


<h1 className="text-3xl lg:text-5xl font-bold text-center mb-8 mt-10 underline decoration-purple-900 decoration-4 underline-offset-8">
  Educational Package Pricing
</h1>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
  {educationalPackageData.map((pkg, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-purple-800 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
        <div className="flex flex-col h-full"> 
        <div className="p-4">
        <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-800 hover:text-purple-800 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
          <p className="text-md mb-1 font-medium text-purple-500">{pkg.price}</p>
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
        <div className="bg-purple-900 p-4 text-white mt-auto"> 
          {pkg.idealFor}
          </div>
      </div>
    </div>
  ))}
</div>

  {/* Contact Information */}
  <div className="text-center mt-8">
    <p className="text-2xl text-purple-900 font-semibold">
      Interested in our Educational Web Design Package?
    </p>
    <p className="text-lg text-gray-600">
      Contact us today to request a <span className="text-purple-700">free price quote</span>.
    </p>
    <Link href="/contact" legacyBehavior>
      <a className="inline-block bg-purple-800 hover:bg-purple-950 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
        Request a Free Price Quote
      </a>
    </Link>

          </div>
        </div>

   );
};
              

export default Educational;