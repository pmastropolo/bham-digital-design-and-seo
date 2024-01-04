// pages/seo-consultation.js
import React from 'react';
import SEOConsultationForm from '../components/SEOConsultationForm';

const SEOConsultationPage = () => {
  return (
<div>
  <h1 className="text-5xl lg:text-6xl font-bold text-center mb-10 mt-10 underline decoration-blue-200 decoration-4 underline-offset-8">SEO -  Initial Consultation Form</h1>  
  <p className="text-lg mb-8 leading-relaxed font-light text-center">Please fill out all lines in the form. Every field is <span className="font-bold underline">required</span>. If a particular question does not apply to you, simply enter N/A.</p>
  <SEOConsultationForm />
</div>
  );
};

export default SEOConsultationPage;