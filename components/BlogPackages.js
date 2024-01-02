import React from 'react';
import Link from 'next/link';

const BlogPackageData = [
  {
    "name": "Basic Blog Package",
    "price": "$500 - $1500",
    "duration": "3 Weeks",
    "features": [
      "- Up to 10 Initial Blog Posts Setup",
      "- User Friendly Layout for Beginners",
      "- Basic SEO to Boost Online Visibility",
      "- Responsive Design for Mobile and Desktop",
      "- Social Media Integration to Connect with Audiences",
      "- Efficient CMS for Easy Blog Post Management"
    ],
    "websiteIncludes": [
      "Home | Featured Posts",
      "About | Personal or Brand Story",
      "Standard Blog Layout with up to 10 Posts",
      "Contact | Simple Inquiry Form",
      "Social Media Links & Integration"  
    ],
    "totalPages": "10",
    "idealFor": "Individuals or Hobbyists Starting a Personal Blog."
  },
  {
    "name": "Standard Blog Package",
    "price": "$1500 - $3000",
    "duration": "8 Weeks",
    "features": [
      "- Up to 20 Initial Blog Posts Setup",
      "- Enhanced Customizable Templates",
      "- Advanced SEO Tools for Greater Reach",
      "- Integrated Blog Analytics to Track Performance",
      "- Email Subscription for Audience Engagement",
      "- Multi Category Blog Support"
    ],
    "websiteIncludes": [
      "Customizable Home Page with Dynamic Layout",
      "Detailed About Section",
      "Expanded Blog Section with up to 20 Posts",
      "Contact Page with Enhanced Functionality",
      "Dedicated Category and Archive Pages"
    ],
    "totalPages": "20",
    "idealFor": "Emerging Bloggers or Small Businesses Focusing on Content Marketing."
  },
  {
    "name": "Premium Blog Package",
    "price": "$3,000 - $6,000",
    "duration": "12 Weeks",
    "features": [
      "- Premium Custom Design Aligning With Brand Identity",
      "- Comprehensive SEO And Content Strategy",
      "- Advanced CMS With Diverse Content Capabilities",
      "- Social Media Strategy And Integration",
      "- Robust Security And Advanced Analytics"
    ],
    "websiteIncludes": [
      "Custom Designed Home and Landing Pages",
      "In-Depth About Page with Team Profiles",
      "Extensive Blog Section with Unlimited Posts",
      "Interactive Contact Page with Social Media Feeds",
      "Specialized Pages for Email Sign-up, Privacy Policies"
    ],
    "totalPages": "25+",
    "idealFor": "Professional Bloggers, Influencers, or Businesses That Require a Robust Blogging Platform with Advanced Features."
  },
  {
    "name": "Enterprise Blogger's Premium Suite",
    "price": "$6000+",
    "duration": "24 Weeks",
    "features": [
      "- Fully Customized Design and Interactive Features",
      "- Unlimited Blog Post Capability",
      "- Full Scale CMS with E-Commerce Integration",
      "- Personalized User Experience Design",
      "- Dedicated Account and Multilingual Support"
    ],
    "websiteIncludes": [
      "State-of-the-Art Landing Page with Interactive Elements",
      "Comprehensive About Us Page with Detailed Company Story",
      "Unlimited Blog Posts with Advanced Layouts",
      "E-Commerce Integration for Merchandising",
      "Multi-Language Support Pages for Global Reach"
    ],
    "totalPages": "30+",
    "idealFor": "Large Businesses Or Media Companies Needing a High-End Blogging Platform With Full Customization And Extensive Features."
  }
];

const BlogPackages = () => {
  return (
<div>
        <div className="bg-blue rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "0px 4px 2px rgba(0, 0, 255, 0.1)" }}>
        <div className="p-2 sm:p-3">
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-blue-900 transition-colors duration-300 p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        Unleash Your Blogging Potential
          </h1>
          <p className="text-sm sm:text-md md:text-lg text-gray-300 mt-2 sm:mt-4">
          Elevate your digital voice.
          </p>
          </div>
  </div>
          <h4 className="text-4xl font-semibold text-gray-800 mt-4">Dynamic <span className="text-blue-800">Blog</span> Creation Package</h4>
<p className="text-md text-gray-700 mt-2">Elevate your digital voice with our Dynamic Blog Creation Package. Tailored to empower your storytelling and idea sharing, this package is designed for influencers, thought leaders, and businesses aiming to engage a wider audience through compelling and informative content.</p>
      
        
        <div class="custom-category-card-container">

      <div class="custom-category-card">
  <div class="custom-category-icon">🚀</div>
  <span class="custom-category-title">Start Strong with Initial Blog Posts</span>
  <div class="custom-category-description">Get your blog off to a flying start with our packages that include the setup of initial blog posts. No need to begin from scratch!</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">👩‍💻</div>
  <span class="custom-category-title">User-Friendly for Everyone</span>
  <div class="custom-category-description">We&apos;ve designed our blogs with beginners in mind. You don&apos;t need to be tech-savvy to create and manage your content.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🔍</div>
  <span class="custom-category-title">Boost Your Visibility with SEO</span>
  <div class="custom-category-description">Our packages include basic SEO features to help your blog shine on search engines, making it easy for readers to find you.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📱</div>
  <span class="custom-category-title">Looks Great Everywhere</span>
  <div class="custom-category-description">Whether your readers are on a smartphone or a computer, your blog will look fantastic with our responsive design.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📱</div>
  <span class="custom-category-title">Connect with Your Audience on Social Media</span>
  <div class="custom-category-description">Easily link your blog to your social media accounts and engage with your audience across various platforms.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">💼</div>
  <span class="custom-category-title">Effortless Content Management</span>
  <div class="custom-category-description">Say goodbye to blogging hassles. Our efficient Content Management System (CMS) makes managing your posts a breeze.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🏠</div>
  <span class="custom-category-title">All the Essential Pages</span>
  <div class="custom-category-description">Your blog will come with all the essential pages, including Home, About, Contact, and links to your social media profiles.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">💌</div>
  <span class="custom-category-title">Keep Your Readers Coming Back</span>
  <div class="custom-category-description">Some packages offer email subscription features, helping you keep your audience informed and engaged.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">✨</div>
  <span class="custom-category-title">Get Creative with Customizable Templates</span>
  <div class="custom-category-description">With advanced packages, you&apos;ll have the freedom to customize your blog&apos;s look and feel to match your style.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📈</div>
  <span class="custom-category-title">Track Your Success</span>
  <div class="custom-category-description">Stay on top of your blog&apos;s performance with integrated analytics tools, giving you insights into your readers&apos; behavior.</div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📂</div>
  <span class="custom-category-title">Organize Your Content with Ease</span>
  <div class="custom-category-description">Categorize your content effortlessly with support for multiple categories.</div>
</div>


      </div>

<h5 className="text-2xl font-semibold text-gray-800 mt-6">Benefits of having a Blog WebSite</h5>
<p className="text-md text-gray-700 mt-4"><b>Expand Your Reach</b> | A blog website is your ticket to reaching a wider audience. Its a powerful tool to extend your online presence and connect with potential customers globally.</p>
<p className="text-md text-gray-700 mt-4"><b>Build Trust and Credibility</b> | Blogging establishes you as an industry expert. Share valuable insights and information to gain trust and credibility among your target market.</p>
<p className="text-md text-gray-700 mt-4"><b>Capture Leads</b> | Your blog can be a lead generation machine. Offer valuable resources, such as ebooks or webinars, in exchange for visitor contact information to build a robust email list.</p>
<p className="text-md text-gray-700 mt-4"><b>Drive Sales</b> | A blog is a subtle yet effective sales tool. Showcase your products or services through informative posts that guide visitors toward making purchasing decisions.</p>
<p className="text-md text-gray-700 mt-4"><b>Engage Your Audience</b> | Interact with your audience through comments and social media. Create a community around your brand and engage customers in meaningful conversations.</p>
<p className="text-md text-gray-700 mt-4"><b>Stay Competitive</b> | In todays digital age, having a blog is a competitive advantage. Keep up with or surpass your competitors by delivering valuable content and insights.</p>

<div className="flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-4 my-8">
    <div className="flex-1 bg-white border border-gray-300 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700">SEO Powerhouses</h2>
        <p className="text-sm text-gray-600">
            Blogs are excellent for SEO (Search Engine Optimization). Regular, quality content updates boost search engine rankings, drawing more traffic to websites.
        </p>
    </div>

    <div className="flex-1 bg-white border border-gray-300 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700">Global Reach, Global Earnings</h2>
        <p className="text-sm text-gray-600">
            Bloggers can earn in multiple currencies if they have an international audience, tapping into various markets and monetization opportunities.
        </p>
    </div>

    <div className="flex-1 bg-white border border-gray-300 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700">From Hobby to Career</h2>
        <p className="text-sm text-gray-600">
            Many bloggers start as hobbyists and eventually turn their passion into a full-time income source, illustrating the potential for blogs to evolve into lucrative careers.
        </p>
    </div>
</div>



</div>
<section></section>

 
<h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-8 mt-10 underline decoration-blue-800 decoration-4 underline-offset-8">
  Blog Package Pricing
</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {BlogPackageData.map((pkg, index) => (
    <div
      key={index}
      className="bg-white rounded-lg overflow-hidden shadow-lg border border-blue-500 hover:shadow-2xl transition-shadow duration-500 ease-in-out"
    >
      <div className="p-4 md:p-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-1 text-gray-700">{pkg.name}</h3>
        <p className="text-md mb-1 font-medium text-blue-800">{pkg.price}</p>
        <hr className="mb-2" />
        <p className="text-gray-800 mb-3">
          <strong>Duration |</strong> {pkg.duration}
        </p>
        <div className="bg-gray-50 p-2 rounded-lg mb-2">
          <p className="font-semibold text-gray-700 mb-1">Features</p>
          {pkg.features.map((feature, idx) => (
            <p key={idx} className="text-sm text-gray-600 font-medium mb-1">
              {feature}
            </p>
          ))}
        </div>
        <div className="space-y-2 text-sm text-gray-700">
          <p className="font-bold text-gray-900">Website Pages Includes</p>
          {pkg.websiteIncludes.map((include, idx) => (
            <p key={idx}>{include}</p>
          ))}
          <p className="bold">Total Pages | {pkg.totalPages}</p>
        </div>
      </div>
      <div className="bg-blue-800 p-4 text-white">
        {pkg.idealFor}
      </div>
    </div>
  ))}
</div>

      <div className="text-center mt-10">
        <p className="text-2xl text-blue-800 font-semibold">
          Interested in our Blog Web Design Package?
        </p>
        <p className="text-lg text-gray-600">
          Contact us today to request a <span className="text-blue-700">free price quote</span>.
        </p>
        <Link href="/contact" legacyBehavior>
          <a className="inline-block bg-blue-700 hover:bg-blue-900 text-white text-lg py-3 px-12 mb-10 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
            Request a Free Price Quote
          </a>
        </Link>
      </div>


    </div>
  );
};

export default BlogPackages;
