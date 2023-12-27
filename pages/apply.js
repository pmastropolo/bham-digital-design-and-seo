import React from 'react';
import Image from 'next/image';

const Apply = () => {
    return (

<div className="apply-container bg-gray-100 text-gray-800 py-16">
<div className="max-w-6xl mx-auto">

    {/* ABOUT US TITLE SECTION */}
    <h1 id="about-us" className="text-5xl lg:text-6xl font-bold text-center mb-10">About Us</h1>

    <div className="about-section grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="text-center lg:text-left">

{/* OUR MISSION SECTION */}
<h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-indigo-600">Our Mission</h2>
<p className="text-xl mb-8 leading-relaxed">
At Bham SEO & Design Co., our mission is to empower businesses with innovative web design and digital solutions. We are driven by a passion for creativity, technology, and client success.
</p>
<p className="text-xl mb-8 leading-relaxed">
What sets us apart is our commitment to tailoring each project to our clients unique needs. We take the time to understand your business, goals, and target audience to create customized solutions that make a lasting impact. We stand out in the industry by consistently staying ahead of design trends and emerging technologies. Our mission is to make your online presence shine and help your business thrive in the digital landscape.
</p>
</div>

{/* TEAMWORK IMAGE */}
<div>
    <Image 
        src="/images/teammmmmy.png" 
        alt="Team Photo" 
        className="rounded-lg shadow-lg" 
        width={500} 
        height={300} 
        layout="responsive" 
    />
</div>
</div>

{/* TABLE OF CONTENTS */}
<nav className="table-of-contents text-center my-10">
    <ul className="toc-list">
        <li className="toc-item"><a className="toc-link" href="#about-us">About Us</a></li>
        <li className="toc-item"><a className="toc-link" href="#web-design-questions">Web Design Questions</a></li>
        <li className="toc-item"><a className="toc-link" href="#seo-questions">SEO Questions</a></li>         
    </ul>
</nav>

{/* FAQ SECTION */}
<div className="container mx-auto px-16 py-10 bg-white">

    <h1 className="text-5xl lg:text-6xl font-bold text-center mb-12 underline decoration-blue-500 decoration-4 underline-offset-8">FAQ</h1>

{/* WEB DESIGN SECTION */}
<h2 id="web-design-questions" className="text-4xl font-extrabold text-indigo-600 mt-12 mb-8">Web Design</h2>

 {/* FIRST QUESTION - HOW MUCH WEBSITE COST */} 
 <div class="custom-category-card">
<span class="custom-category-title">How much will it cost to build a website for my business?</span>
<div class="custom-category-description">
The cost varies based on complexity. Basic websites start at a few hundred dollars, while complex ones may cost more.
</div>
</div>

{/* QUESTION TWO - WHAT IS PROCESS OF BUILDING WEBSITE*/}
<div class="custom-category-card">
<span class="custom-category-title">What is the process of designing and developing a website?</span>
<div class="custom-category-description">
The process involves planning, design, development, content creation, testing, launch, and ongoing maintenance.
</div>
</div>

{/* QUESTION THREE - WHAT FEATURES AND FUNCTIONALITIES */}
<div class="custom-category-card">
<span class="custom-category-title">What features and functionalities does my website need to meet my business needs?</span>
<div class="custom-category-description">
Consider responsive design, easy navigation, a content management system, contact info, SEO, e-commerce, security, and analytics.
</div>
</div>

{/* QUESTION FOUR - HOW LONG DOES IT TAKE */}
<div class="custom-category-card">
<span class="custom-category-title">How Long Will It Take to Build the Website?</span>
<div class="custom-category-description">
A standard website typically takes between 4 to 6 weeks to complete, depending on the complexity and our current workload. For more complex projects, it could take longer. We will give you a more accurate timeline once weve discussed your requirements.
</div>
</div>

{/* QUESTION FIVE - WEBSITE MOBILE FRIENDLY */}
<div class="custom-category-card">
<span class="custom-category-title">Will My Website Be Mobile-Friendly?</span>
<div class="custom-category-description">
Absolutely, all our websites are designed to be responsive and mobile friendly. This ensures a seamless experience for users on various devices.
</div>
</div>

{/* QUESTION SIX - IMPROVE EXISTING WEBSITE */}
<div class="custom-category-card">
<span class="custom-category-title">Can You Improve My Existing Website?</span>
<div class="custom-category-description">
Yes, we can work with your existing website for redesigns, functionality improvements, or content updates. We will first assess your current site to recommend the best course of action.
</div>
</div>


{/* QUESTION SEVEN - SOCIAL MEDIA ON WEBSITE */}
<div class="custom-category-card">
<span class="custom-category-title">Can You Integrate Social Media into My Website?</span>
<div class="custom-category-description">
Yes, we can integrate your social media profiles with your website and make your content easily shareable across social platforms.
</div>
</div>

{/* QUESTION EIGHT - WEBSITE MATIENCE */}
<div class="custom-category-card">
<span class="custom-category-title">How Do We Handle Website Maintenance?</span>
<div class="custom-category-description">
We offer ongoing maintenance packages to keep your website updated, secure, and performing optimally. These packages can be tailored to your specific needs.
</div>
</div>

{/* QUESTION NINE -  DOMAIN REGISTRATION */}
<div class="custom-category-card">
<span class="custom-category-title">Can You Help with Domain Registration and Hosting?</span>
<div class="custom-category-description">
We can certainly assist with domain registration and hosting services. While these are not included in the standard design package, we can offer them as additional services or guide you through the process.
</div>
</div>

{/* QUESTION TEN - UPDATE WEBSITE THEMSELVES */}
<div class="custom-category-card">
<span class="custom-category-title">Can I Update the Website Myself?</span>
<div class="custom-category-description">
Our websites are built on user friendly platforms, allowing you to easily make updates and changes. We also provide training and resources to help you manage your site effectively.
</div>
</div>

{/* QUESTION ELEVEN - SUPPORT AFTER LAUNCH */}
<div class="custom-category-card">
<span class="custom-category-title">What Kind of Support Will I Receive After the Website Goes Live?</span>
<div class="custom-category-description">
After your website goes live, we provide a period of post-launch support to address any immediate concerns. We are also available for ongoing support and updates as needed.
</div>
</div>

{/* QUESTION TWELVE - USER SUPPORT */}
<div class="custom-category-card">
<span class="custom-category-title">How Do You Approach Usability and User Experience?</span>
<div class="custom-category-description">
User experience is at the forefront of our design process. We focus on creating intuitive, user friendly websites that engage and retain visitors.
</div>
</div>

{/* WEB DESIGN SECTION */}
<h2 id="seo-questions" className="text-4xl font-extrabold text-indigo-600 mt-12 mb-8">SEO ( Search Engine Optimization )</h2>

{/* QUESTION ONE - What is SEO and How Does it Work? */}
<div className="custom-category-card">
    <span className="custom-category-title">What is SEO and How Does it Work?</span>
    <div className="custom-category-description">
    SEO, or Search Engine Optimization, is the process of optimizing your website to improve its visibility in search engine results pages. 
    This involves various strategies like keyword optimization, content creation, and improving site structure, all aimed at making your site more attractive to search engines like Google.
    </div>
</div>

{/* QUESTION TWO - How Long Does it Take to See Results from SEO? */}
<div className="custom-category-card">
    <span className="custom-category-title">How Long Does it Take to See Results from SEO?</span>
    <div className="custom-category-description">
    SEO is a long-term strategy. Generally, you can start seeing initial results in about 3-6 months, but significant changes can take up to a year. It depends on factors like the competitiveness of your industry and the current state of your website.
    </div>
</div>

{/* QUESTION THREE - Can You Guarantee First Page Rankings? */}
<div className="custom-category-card">
    <span className="custom-category-title">Can You Guarantee First Page Rankings?</span>
    <div className="custom-category-description">
    No ethical SEO service can guarantee specific rankings, including first-page placements, due to the ever-changing nature of search engine algorithms. However, we use proven strategies to significantly improve your chances of ranking highly
    </div>
</div>

{/* QUESTION FOUR - What Strategies Will You Use to Improve Our SEO? */}
<div className="custom-category-card">
    <span className="custom-category-title">What Strategies Will You Use to Improve Our SEO?</span>
    <div className="custom-category-description">
    Our strategies include thorough keyword research, on-page optimization (like meta tags and URLs), quality content creation, and building reputable backlinks. We tailor our approach based on your unique business needs and industry standards.
    </div>
</div>

{/* QUESTION FIVE - How Do You Conduct Keyword Research? */}
<div className="custom-category-card">
    <span className="custom-category-title">How Do You Conduct Keyword Research?</span>
    <div className="custom-category-description">
    We use advanced tools to identify keywords relevant to your business and with a high potential for traffic. We also analyze search trends, competitor keywords, and user intent to create a comprehensive keyword strategy.
    </div>
</div>

{/* QUESTION SIX - How Do You Measure the Success of an SEO Campaign? */}
<div className="custom-category-card">
    <span className="custom-category-title">How Do You Measure the Success of an SEO Campaign?</span>
    <div className="custom-category-description">
    Success is measured using KPIs like improved rankings, increased website traffic, higher engagement rates, and ultimately, more conversions or sales. We provide regular reports to track these metrics.
    </div>
</div>

{/* QUESTION SEVEN - What's Included in Your SEO Services? */}
<div className="custom-category-card">
    <span className="custom-category-title">Whats Included in Your SEO Services?</span>
    <div className="custom-category-description">
    Our services include technical website audits, on-page optimization, content strategy and creation, link building, local SEO (if applicable), and ongoing performance monitoring and adjustments.
    </div>
</div>

{/* QUESTION EIGHT - How Will SEO Integrate with Our Overall Marketing Strategy? */}
<div className="custom-category-card">
    <span className="custom-category-title">How Will SEO Integrate with Our Overall Marketing Strategy?</span>
    <div className="custom-category-description">
    SEO complements other marketing efforts by increasing your online visibility and driving organic traffic. We will align our SEO tactics with your broader marketing goals for a cohesive strategy.
    </div>
</div>

{/* QUESTION NINE - How Do You Stay Updated with SEO Changes and Google Algorithm Updates? */}
<div className="custom-category-card">
    <span className="custom-category-title">How Do You Stay Updated with SEO Changes and Google Algorithm Updates?</span>
    <div className="custom-category-description">
    We continuously stay informed about the latest SEO trends and Google algorithm updates through industry resources, forums, and training. This ensures our strategies remain effective and up-to-date.
    </div>
</div>

{/* QUESTION ELEVEN - Can You Provide Case Studies or References? */}
<div className="custom-category-card">
    <span className="custom-category-title">Can You Provide Case Studies or References?</span>
    <div className="custom-category-description">
        Certainly! We have several case studies and client references that demonstrate our success in various projects. We would be happy to share these with you.
    </div>
</div>

{/* QUESTION TWELVE - What Are Your Payment Terms and Contract Length? */}
<div className="custom-category-card">
    <span className="custom-category-title">What Are Your Payment Terms and Contract Length?</span>
    <div className="custom-category-description">
        Our payment terms and contract lengths are flexible, depending on the project scope. We typically work with monthly retainers, but we can discuss a plan that suits your budget and requirements.
    </div>
</div>

{/* QUESTION THIRTEEN - How Do You Handle SEO for Local vs. Global Audiences? */}
<div className="custom-category-card">
    <span className="custom-category-title">How Do You Handle SEO for Local vs. Global Audiences?</span>
    <div className="custom-category-description">
        For local SEO, we focus on optimizing your Google My Business listing and local citations. For a global audience, we implement broader keyword strategies and consider multilingual SEO if applicable.
    </div>
</div>

{/* QUESTION FOURTEEN - How Will We Communicate and How Often? */}
<div className="custom-category-card">
    <span className="custom-category-title">How Will We Communicate and How Often?</span>
    <div className="custom-category-description">
        Communication is key. We will set up regular meetings (weekly or monthly) and provide frequent email updates. You qill also have a dedicated account manager as your point of contact.
    </div>
</div>
    
</div>
                </div>
            </div>
    );
};
  
  export default Apply;
