import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Health from '../components/Health';                                      // HEALTH COMPONENT


const HealthAndWellnessWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="🍃 Health and Wellness Website Development Services | Bham Web Design and SEO Co."
              description="💚 Bham Web Design and SEO Co. offers expert health and wellness website development services. Create informative and engaging sites for your health-related business or organization."
              openGraph={{
                  title: '🍃 Health and Wellness Website Development Services | Bham Web Design and SEO Co.',
                  description: '💚 Bham Web Design and SEO Co. offers expert health and wellness website development services. Create informative and engaging sites for your health-related business or organization.',
                  url: 'https://bhamseoanddesignco.com/health-and-wellness-website-services',
                  type: 'website',
              }}
          />
<div className="bg-gradient-to-br from-teal-300 to-green-500 text-center p-10 shadow-2xl rounded-3xl mb-10 relative overflow-hidden">
  <h2 className="text-6xl font-bold text-white mb-6 drop-shadow-md">🌿 Health & Wellness Web Services </h2>
  <p className="text-xl text-white mb-8"> Elevate Your Health-Related Business Online 🧘</p>
  <div className="bg-white bg-opacity-80 p-6 rounded-xl max-w-4xl mx-auto text-left shadow-md">
    <p className="text-2xl mb-4 font-semibold text-gray-800">Join us at Bham Web Design and SEO Co. to bring health and wellness to the digital forefront. Our expertise lies in developing websites for healthcare providers, fitness centers, wellness coaches, and the health industry.</p>
    <p className="text-2xl mb-4 font-semibold text-gray-800">What We Offer:</p>
    <ul className="list-inside list-disc space-y-2 text-lg text-gray-700">
      <li>🖥️ Tailored website design and development</li>
      <li>📚 Educational content and articles</li>
      <li>🔗 Integrated health resources and tools</li>
      <li>📅 Online appointment systems</li>
      <li>🥗 Nutrition and fitness trackers</li>
      <li>💬 Trust-building testimonials and stories</li>
      <li>📱 Mobile-responsive for all devices</li>
    </ul>
    <p className="text-2xl mt-4 font-semibold text-gray-800">💪 Get started on your journey to impact the health community positively. Connect with us today!</p>
  </div>
  <Link href="/webDesignConsultation" legacyBehavior>
    <a className="inline-block bg-yellow-600 hover:bg-green-700 text-white text-lg py-3 px-6 rounded-full mt-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg">
      Start Your Wellness Website Journey!
    </a>
  </Link>
<div></div>
  <Link href="/webDesignConsultation" legacyBehavior>
    <a className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg py-3 px-6 rounded-full mt-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg">
      Start your consultation!
    </a>
  </Link>
</div>

<Health />

        
      </>
  );
}

export default HealthAndWellnessWebsiteServices;
