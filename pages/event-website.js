import React from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Evenflowp from '../components/Evenflowp';                                        // EVENT COMPONENT

const EventWebsiteServices = () => {
  return (
      <>
          <NextSeo
              title="🎉 Event Website Development Services | Bham Web Design and SEO Co."
              description="Bham Web Design and SEO Co. offers professional event website development services. Craft stunning websites for your events, conferences, and gatherings."
              openGraph={{
                  title: '🎉 Event Website Development Services | Bham Web Design and SEO Co.',
                  description: 'Bham Web Design and SEO Co. offers professional event website development services. Craft stunning websites for your events, conferences, and gatherings.',
                  url: 'https://bhamseoanddesignco.com/event-website-services',
                  type: 'website',
              }}
          />


<div className="bg-gradient-to-r from-slate-400 to-slate-500 text-white mt-6 py-16 px-6 shadow-2xl rounded-3xl mb-12 overflow-hidden">
  <div className="animate-pulse absolute inset-0 z-0 opacity-20">
    <div className="absolute inset-0 bg-slate-200 rounded-full filter blur-3xl"></div>
    <div className="absolute bottom-0 right-0 bg-slate-500 rounded-full w-80 h-80 filter blur-3xl"></div>
  </div>

  <div className="relative z-10">
    <h2 className="text-6xl font-bold text-center mb-6">
      Event Website Development Services 🚀
    </h2>
    <p className="text-3xl text-center mb-8">
      Create Captivating Websites for Your Events, Conferences, and Gatherings 🏆
    </p>

    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl p-8">
      <p className="text-2xl font-semibold text-slate-900 mb-6">
        At Bham Web Design and SEO Co., were passionate about bringing your events to life online. Whether its a conference, seminar, trade show, or any other gathering, our expert team specializes in creating event websites that capture the essence of your event and offer a memorable experience to your attendees.
      </p>

      <h3 className="text-2xl font-bold text-slate-900 mb-4">
        Explore Our Event Web Development Services:
      </h3>

      <ul className="list-disc pl-10 text-xl text-slate-800 mb-6 space-y-2 text-left">
        <li><strong>Custom Designs</strong> | Create a unique online presence with custom event website design and development.</li>
        <li><strong>Event Engagement</strong> | Enhance attendee engagement with event schedules, agendas, and speaker profiles.</li>
        <li><strong>Online Registration</strong> | Streamline access with online registration and ticketing systems.</li>
        <li><strong>Interactive Maps</strong> | Improve navigation with interactive event maps and floor plans.</li>
        <li><strong>Social Media Integration</strong> | Promote your event effectively with social media integration.</li>
        <li><strong>Media Galleries</strong> | Showcase event highlights with photo and video galleries.</li>
        <li><strong>Mobile-Responsive Design</strong> | Ensure an optimal user experience across devices with mobile-responsive design.</li>
      </ul>

      <p className="text-2xl font-semibold text-slate-900 mb-8">
        Ready to make your event stand out? Contact us today to discuss your event website project and ensure your event is an unforgettable experience.
      </p>

      <div className="text-center">
        <Link href="/webDesignConsultation" legacyBehavior>
          <a className="bg-slate-500 hover:bg-slate-700 text-white text-lg py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
            🎫 Start Your Event Website Journey Now!
          </a>
        </Link>
      </div>
    </div>
  </div>
</div>

<Evenflowp />

      </>
  );
}

export default EventWebsiteServices;
