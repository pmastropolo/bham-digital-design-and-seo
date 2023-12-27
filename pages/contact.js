import React from 'react';

// Contact Form Component
import ContactForm from '../components/ContactForm';

function Contact() {

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Page Header */}
      <header className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-4">
        <div className="container mx-auto text-white text-center max-w-xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Reach Out to Us</h1>
          <p className="mb-6">Connect with Our Team</p>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="container mx-auto py-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-md shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
          <p className="mb-6">
            Please fill out the form below to get in contact with us. If you dont have information for some lines, you can keep them 
            <span style={{ textDecoration: 'underline' }}>blank</span>.
          </p>

          <ContactForm />

          <p className="mt-6 text-gray-500 text-center">
            We will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Reach Us Today
          </h2>
          <p className="text-lg text-white mb-2">
            Email: <a href="mailto:services@bhamseoanddesignco.com" className="text-purple-300 hover:underline">services@bhamseoanddesignco.com</a>
          </p>
          <p className="text-lg text-white mb-4">
            Phone: <a href="tel:(205) 705-7145" className="text-purple-300 hover:underline">(205) 705-7145</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
