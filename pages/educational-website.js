import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Educational from '../components/Educational';                            // EDUCATIONAL COMPONENT

const EducationalWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="🎓 Educational Website Development Services | Bham Web Design and SEO Co."
              description="🌟 Bham Web Design and SEO Co. offers professional educational website development services. Create an immersive and interactive online learning experience with us."
              openGraph={{
                  title: '🎓 Educational Website Development Services | Bham Web Design and SEO Co.',
                  description: '🌟 Bham Web Design and SEO Co. offers professional educational website development services. Create an immersive and interactive online learning experience with us.',
                  url: 'https://bhamseoanddesignco.com/educational-website-services',
                  type: 'website',
              }}
          />

          
<div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white mt-6 py-16 px-6 shadow-2xl rounded-3xl mb-12 overflow-hidden">
  <div className="animate-pulse absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-purple-400 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 bg-purple-400 rounded-full w-80 h-80 filter blur-3xl"></div>
  </div>

  <div className="relative z-10">
    <h2 className="text-6xl font-bold text-center mb-6">
      📚 Elevate Online Learning with Educational Excellence!
    </h2>
    <p className="text-3xl text-center mb-8">
      Create Engaging Online Learning Experiences with Our Cutting-Edge Educational Websites.
    </p>

    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8">
      <p className="text-2xl font-semibold text-gray-900 mb-6">
        Join Bham Web Design and SEO Co. in revolutionizing the world of online education. We specialize in crafting educational websites that offer dynamic, interactive, and immersive learning experiences. Our services cater to educational institutions, e-learning platforms, and individual educators, aiming to deliver knowledge effectively and engagingly.
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Transform Online Education with Our Services:
      </h3>

      <ul className="list-disc pl-10 text-xl text-gray-800 mb-6 space-y-2 text-left">
        <li><strong>Custom Designs</strong> | Create unique learning experiences with custom educational website design and development.</li>
        <li><strong>User-Friendly CMS</strong> | Easily update and manage content with our user-friendly CMS.</li>
        <li><strong>Interactive Learning</strong> | Enhance engagement with interactive e-learning modules and quizzes.</li>
        <li><strong>Mobile-Responsive</strong> | Enable learning on the go with mobile-responsive designs.</li>
        <li><strong>Multimedia Integration</strong> | Incorporate multimedia like video and audio for comprehensive learning.</li>
        <li><strong>User Analytics</strong> | Gain insights with user analytics and reporting tools.</li>
        <li><strong>Secure Student Portals</strong> | Ensure safety and confidentiality with secure student portals.</li>
      </ul>

      <p className="text-2xl font-semibold text-gray-900 mb-8">
        Ready to transform online education? Contact us today to start building an educational website that empowers and enlightens your audience.
      </p>

      <div className="text-center">
      <Link href="/webDesignConsultation" legacyBehavior>
          <a className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
            Begin Your Educational Journey
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>

<Educational />

      </>
  );
}

export default EducationalWebsiteServices;
