import React from 'react';

const Features = () => {
  const services = [
    {
      title: 'E-commerce Websites',
      description: 'Create online stores and shopping platforms.',
    },
    {
      title: 'Blogs',
      description: 'Informative and engaging blog websites.',
    },
    {
      title: 'Business/Corporate Websites',
      description: 'Websites for businesses and corporate entities.',
    },
    {
      title: 'Portfolio Websites',
      description: 'Showcase your work and skills with portfolio websites.',
    },
    {
      title: 'Educational Websites',
      description: 'Websites for educational institutions and e-learning.',
    },
    {
      title: 'News and Magazine Websites',
      description: 'Publish news and articles with news/magazine websites.',
    },
    {
      title: 'Social Media Websites',
      description: 'Connect and share on social media platforms.',
    },
    {
      title: 'Non-profit and Community Websites',
      description: 'Websites for non-profits and community organizations.',
    },
    {
      title: 'Personal Websites',
      description: 'Showcase your personal brand with personal websites.',
    },
    {
      title: 'Landing Pages',
      description: 'Create effective landing pages for marketing campaigns.',
    },
    {
      title: 'Forums and Discussion Boards',
      description: 'Engage in discussions with forum and board websites.',
    },
    {
      title: 'Event and Booking Websites',
      description: 'Manage events and bookings with event websites.',
    },
    {
      title: 'Health and Wellness Websites',
      description: 'Promote health and wellness with dedicated websites.',
    },
    {
      title: 'Real Estate Websites',
      description: 'Buy, sell, and rent properties with real estate websites.',
    },
    {
      title: 'Review and Affiliate Websites',
      description: 'Share reviews and affiliate products with these websites.',
    },
    {
      title: 'Entertainment Websites',
      description: 'Engaging websites for entertainment and media industries.',
    },
    {
      title: 'Restaurant and Food Service Websites',
      description: 'Websites for restaurants and food-related businesses.',
    },
    {
      title: 'Government Websites',
      description: 'Websites for government and public sector organizations.',
    },
    {
      title: 'Membership Sites',
      description: 'Websites for creating and managing membership-based communities.',
    },
  ];


  return (
    <section className="mt-8">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Explore Our Web Development Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
  <div
    key={index}
    className={`bg-white rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
      index % 18 === 0
        ? 'shadow-red'
        : index % 18 === 1
        ? 'shadow-blue'
        : index % 18 === 2
        ? 'shadow-green'
        : index % 18 === 3
        ? 'shadow-yellow'
        : index % 18 === 4
        ? 'shadow-purple'
        : index % 18 === 5
        ? 'shadow-orange'
        : index % 18 === 6
        ? 'shadow-pink'
        : index % 18 === 7
        ? 'shadow-teal'
        : index % 18 === 8
        ? 'shadow-brown'
        : index % 18 === 9
        ? 'shadow-gray'
        : index % 18 === 10
        ? 'shadow-cyan'
        : index % 18 === 11
        ? 'shadow-magenta'
        : index % 18 === 12
        ? 'shadow-lime'
        : index % 18 === 13
        ? 'shadow-gold'
        : index % 18 === 14
        ? 'shadow-silver'
        : index % 18 === 15
        ? 'shadow-indigo'
        : 'shadow-olive'
    }`}
  >
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;