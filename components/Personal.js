import React from 'react';
import Link from 'next/link';

const personalPackages = [
  {
    "name": "Personal Blog Starter Package",
    "price": "$500 - $1,200",
    "duration": "3 Weeks",
    "features": [
      "- Basic Responsive Design",
      "- User-Friendly Blogging Platform",
      "- Social Media Integration",
      "- Basic SEO Setup"
    ],
    "websiteIncludes": [
      "Home Page with Blog Feed",
      "About Me Page",
      "Blog Post Pages",
      "Contact Form Page"
    ],
    "totalPages": "4-6",
    "idealFor": "Individuals Starting a Personal Blog or Hobby Site."
  },
  {
    "name": "Professional Personal Website Package",
    "price": "$1,500 - $3,000",
    "duration": "5 Weeks",
    "features": [
      "- Customized Design Reflecting Personal Brand",
      "- Enhanced SEO for Better Online Presence",
      "- Portfolio or Gallery Integration",
      "- Blog with Advanced Features"
    ],
    "websiteIncludes": [
      "Custom Home Page",
      "Professional Portfolio or Gallery Page",
      "Detailed About/Bio Page",
      "Contact Page with Enhanced Functionality"
    ],
    "totalPages": "5-8",
    "idealFor": "Professionals, Artists, or Freelancers Looking to Showcase Their Work and Expand Their Reach."
  },
  {
    "name": "Advanced Personal Branding Website Package",
    "price": "$3,500 - $6,000",
    "duration": "8 Weeks",
    "features": [
      "- High-End Custom Design",
      "- Advanced SEO and Social Media Integration",
      "- Interactive Content Features",
      "- E-commerce Integration for Merchandising"
    ],
    "websiteIncludes": [
      "Personalized Landing Page",
      "Comprehensive Blog with Categories",
      "Professional Portfolio Showcasing Work",
      "Online Store for Products or Services"
    ],
    "totalPages": "10-15",
    "idealFor": "Influencers, Creatives, or Entrepreneurs Seeking a Robust Platform for Personal Branding and E-commerce."
  },
  {
    "name": "Elite Personal Web Presence and Marketing Suite",
    "price": "$7,000+",
    "duration": "12+ Weeks",
    "features": [
      "- State-of-the-Art Website Design",
      "- Comprehensive Digital Marketing Tools",
      "- Full-Scale SEO and Analytics",
      "- Custom Mobile App for Enhanced Engagement"
    ],
    "websiteIncludes": [
      "Advanced Custom Home Page",
      "Interactive Multimedia Portfolio",
      "Integrated Personal Blog with Rich Media",
      "Personalized Mobile App for Direct Engagement"
    ],
    "totalPages": "15+",
    "idealFor": "High-Profile Individuals or Public Figures Seeking an Extensive Online Presence with Advanced Marketing and Engagement Tools."
  }
];

const Personal = () => {
        return (
                <div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-md" style={{ boxShadow: "0px 3px 2px rgba(230, 0, 0, 0.5)" }}>
                    <div className="p-4 sm:p-3">
                      <div className="bg-gradient-to-b from-pink-900 to-pink-900 rounded-lg overflow-hidden text-white text-center tracking-wide leading-tight hover:text-pink-200 transition-colors duration-300 p-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Elevate Your Online Presence
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg text-gray-100 mt-2 sm:mt-4">
                        Unlock the power of a stunning personal website.
                        </p>
                      </div>
              
                   
                

      <h4 className="text-4xl mt-2 font-semibold text-gray-800">Unique <span className="text-pink-800">Personal</span> Website Package</h4>
      <p className="text-md text-gray-700 mt-4">Create your individual online identity with our Unique Personal Website Package. This package is ideal for bloggers, artists, freelancers, and anyone looking to establish a personal brand or share their passions with the world in a distinctive and memorable way.</p>
      
      <div className="custom-category-card-container">
      <div class="custom-category-card">
  <div class="custom-category-icon">🎨</div>
  <span class="custom-category-title">Customized Design</span>
  <div class="custom-category-description">
    Your website will be a reflection of your unique style and personality, ensuring you stand out online.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">⏳</div>
  <span class="custom-category-title">Duration</span>
  <div class="custom-category-description">
    We will work efficiently to get your website up and running within your chosen timeframe, whether its 3 weeks or a more comprehensive 12+ weeks plan.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🔍</div>
  <span class="custom-category-title">SEO Integration</span>
  <div class="custom-category-description">
    Boost your online visibility and rank higher in search results to help more people discover your amazing content.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📬</div>
  <span class="custom-category-title">Contact Page</span>
  <div class="custom-category-description">
    Stay connected with your audience through a user-friendly contact form, making it easy for them to reach out to you.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📄</div>
  <span class="custom-category-title">Total Pages</span>
  <div class="custom-category-description">
    Choose the package that best suits your content needs, from 4-6 pages to expansive 15+ page websites.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">👤</div>
  <span class="custom-category-title">About Me/Bio Page</span>
  <div class="custom-category-description">
    Share your story and let your audience get to know the person behind the website.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📝</div>
  <span class="custom-category-title">Blog Integration</span>
  <div class="custom-category-description">
    Share your thoughts, experiences, and passions through a user-friendly blog platform.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📱</div>
  <span class="custom-category-title">Social Media Integration</span>
  <div class="custom-category-description">
    Seamlessly connect your website to your social media profiles, expanding your online presence across platforms.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📷</div>
  <span class="custom-category-title">Portfolio/Gallery</span>
  <div class="custom-category-description">
    Showcase your work or creations beautifully with integrated portfolios or galleries.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">📱💻</div>
  <span class="custom-category-title">Mobile Responsiveness</span>
  <div class="custom-category-description">
    Your website will look stunning and function perfectly on all devices, ensuring a great user experience for everyone.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">💼</div>
  <span class="custom-category-title">E-commerce Integration</span>
  <div class="custom-category-description">
    If you have products or services to offer, weve got you covered with e-commerce functionality.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🚀</div>
  <span class="custom-category-title">Advanced Marketing Tools</span>
  <div class="custom-category-description">
    Our top-tier package includes a suite of powerful digital marketing tools to supercharge your online engagement and promotion efforts.

</div>
</div>
</div>

<h5 className="text-2xl font-semibold text-gray-800 mt-6">Benefits of Having a Personal Website</h5>     
<p className="text-md text-gray-700 mt-4"><b>Online Portfolio:</b> Showcase your work, projects, and achievements in one place, making it easy for potential clients, employers, or collaborators to see your skills and accomplishments.</p>
<p className="text-md text-gray-700 mt-4"><b>Personal Branding:</b> Establish a strong personal brand by creating a website that reflects your unique identity, values, and expertise, helping you stand out in your field.</p>
<p className="text-md text-gray-700 mt-4"><b>Control and Ownership:</b> Unlike social media profiles or third-party platforms, you have complete control and ownership over your personal website, ensuring your content is presented the way you want it to be.</p>
<p className="text-md text-gray-700 mt-4"><b>Improved Credibility:</b> A well-designed website can enhance your credibility and professionalism, making you appear more trustworthy to potential clients, employers, or partners.</p>
<p className="text-md text-gray-700 mt-4"><b>Networking:</b> Use your website as a central hub for networking, sharing your contact information, and connecting with like-minded individuals or industry peers.</p>
<p className="text-md text-gray-700 mt-4"><b>Content Sharing:</b> Share your thoughts, insights, and expertise through a blog or articles, positioning yourself as an authority in your niche or industry.</p>
<p className="text-md text-gray-700 mt-4"><b>Online Resume:</b> Your website can serve as an interactive online resume, providing a comprehensive overview of your qualifications, experience, and skills to potential employers or clients.</p>
<p className="text-md text-gray-700 mt-4"><b>Career Advancement:</b> A personal website can help you advance in your career by showcasing your accomplishments and attracting new opportunities.</p>
<p className="text-md text-gray-700 mt-4"><b>Diversify Income:</b> If you offer services or products, your website can serve as an additional revenue stream by allowing you to sell products, offer online courses, or provide consulting services.</p>
<p className="text-md text-gray-700 mt-4"><b>Global Reach:</b> Reach a global audience with your website, breaking geographical boundaries and increasing your visibility to potential clients, customers, or collaborators from around the world.</p>

      

      <h5 className="text-2xl font-semibold text-gray-800 mt-6">Ideal For</h5>
      <div className="custom-category-card-container">
      <div class="custom-category-card">
  <div class="custom-category-icon">👩‍💻</div>
  <span class="custom-category-title">Bloggers</span>
  <div class="custom-category-descrhiption">
    Establish your personal brand and share your passions with the world using our Unique Personal Website Package. Reflect your style with a customized aesthetic design.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🎨</div>
  <span class="custom-category-title">Artists</span>
  <div class="custom-category-descrhiption">
    Showcase your work and portfolio in a distinctive and memorable way. Enjoy a responsive and intuitive layout for an engaging user experience.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">💼</div>
  <span class="custom-category-title">Freelancers</span>
  <div class="custom-category-deschription">
    Build your personal online identity and connect with clients. Benefit from blog and gallery integration, social media connectivity, and SEO optimization.
  </div>
</div>

<div class="custom-category-card">
  <div class="custom-category-icon">🌐</div>
  <span class="custom-category-title">Online Presence</span>
  <div class="custom-category-dehscription">
    Enhance your online presence and reach a broader audience with our Unique Personal Website Package. Craft your personal space today!
  </div>
</div>
</div>



      <p className="mt-6 text-md text-gray-700">Ready to build your online presence? Contact us at <a href="mailto:services@bhamseoanddesignco.com">services@bhamseoanddesignco.com</a> for a consultation, or click the button below to start your journey.</p>
      <Link href="/contact" legacyBehavior>
        <a className="inline-block mt-4 bg-gradient-to-r from-pink-800 to-pink-900 hover:from-pink-900 hover:to-pink-900 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
          Craft Your Personal Space
        </a>
      </Link>
      </div>
  </div>



<h1 className="text-3xl lg:text-5xl font-bold text-center mb-8 mt-10 underline decoration-pink-900 decoration-4 underline-offset-8">
        Personal Package Pricing
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-4">
  {personalPackages.map((pkg, index) => (
    <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-pink-900 hover:shadow-2xl transition-shadow duration-500 ease-in-out">
      <div className="flex flex-col h-full">
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-1 tracking-wide leading-relaxed text-gray-800 hover:text-pink-900 transition-colors duration-300 ease-in-out">{pkg.name}</h3>
          <p className="text-md mb-1 font-medium text-pink-800">{pkg.price}</p>
          <hr className="mb-2" />
          <p className="text-gray-800 mb-3"><strong>Duration |</strong> {pkg.duration}</p>
          <div className="bg-gray-50 p-2 rounded-lg mb-2">
            <p className="font-semibold text-gray-700 mb-1">Features</p>
            {pkg.features.map((feature, idx) => (
              <p key={idx} className="text-sm text-gray-600 font-medium mb-1">{feature}</p>
            ))}
          </div>
          <div className="space-y-2 text-sm text-gray-700">
            <p className="font-bold text-gray-900">Website Includes</p>
            {pkg.websiteIncludes.map((include, idx) => (
              <p key={idx} className="">{include}</p>
            ))}
            <p className="bold">Total Pages | {pkg.totalPages}</p>
          </div>
        </div>
        <div className="bg-pink-950 p-4 text-white mt-auto">
          {pkg.idealFor}
        </div>
      </div>
    </div>
  ))}
</div>

<div className="text-center mt-8">
  <p className="text-2xl text-pink-900 font-semibold">
    Interested in our Personal Web Design Package?
  </p>
  <p className="text-lg text-gray-600">
    Contact us today to request a <span className="text-pink-700">free price quote</span>.
  </p>
  <Link href="/contact" legacyBehavior>
    <a className="inline-block bg-pink-900 hover:bg-pink-950 text-white text-lg py-3 px-12 mb-6 mt-4 rounded-md transition duration-300 transform hover:-translate-y-1 shadow-md">
      Request a Free Price Quote
    </a>
  </Link>
</div>
    </div>
  );
};


export default Personal;
