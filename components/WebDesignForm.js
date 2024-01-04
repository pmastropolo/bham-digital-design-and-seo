import React, { useState } from 'react';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    marginBottom: '15px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '80px',
  },
  button: {
    padding: '10px 15px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: '#007bff',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#0056b3',
    },
  },
  submittedMessage: {
    marginTop: '15px',
    color: '#28a745',
    fontSize: '16px',
  },
};

const WebDesignForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form name="web-design" onSubmit={handleSubmit} style={styles.form} data-netlify="true">
      <input type="text" name="projectPurpose" placeholder="Primary purpose of your website" required style={styles.input} />
      
      <textarea name="designPreferences" placeholder="Design preferences or inspirations" required style={styles.textarea}></textarea>
      
      <textarea name="keyFeatures" placeholder="Key features you want on your website (e.g., online store, blog, contact form)" required style={styles.textarea}></textarea>
      
      <textarea name="specialFunctionality" placeholder="Any special functionality needed (e.g., integrations with other systems)" required style={styles.textarea}></textarea>
      
      <textarea name="targetAudience" placeholder="Who is your website primarily aimed at?" required style={styles.textarea}></textarea>
      
      <textarea name="branding" placeholder="Do you have existing branding (like logos, color schemes, etc.) to incorporate into the design?" required style={styles.textarea}></textarea>
      
      <textarea name="competitorWebsites" placeholder="Websites of your competition (please provide URLs)" required style={styles.textarea}></textarea>
      
      <input type="text" name="budget" placeholder="Your budget range for this project" required style={styles.input} />
      
      <input type="text" name="timeline" placeholder="Your ideal timeline for the website's completion" required style={styles.input} />
      
      <textarea name="additionalPreferences" placeholder="Any other preferences or requirements for your website design" required style={styles.textarea}></textarea>
      
      <textarea name="websiteAccessibility" placeholder="Do you require your website to be accessible according to specific standards (e.g., WCAG)?" required style={styles.textarea}></textarea>

    <textarea name="mobileResponsiveness" placeholder="How important is mobile responsiveness for your website?" required style={styles.textarea}></textarea>

    <input type="text" name="cmsPreferences" placeholder="Do you have a preference for a specific Content Management System (CMS)?" style={styles.input} />

    <textarea name="seoNeeds" placeholder="Do you need Search Engine Optimization services for your website?" required style={styles.textarea}></textarea>

    <textarea name="socialMediaIntegration" placeholder="Specific social media platforms to integrate with your website" required style={styles.textarea}></textarea>

    <textarea name="multilingualSupport" placeholder="Does your website need to support multiple languages?" required style={styles.textarea}></textarea>

    <textarea name="ecommerceFunctionality" placeholder="Describe your e-commerce site's product categories and payment gateway preferences" required style={styles.textarea}></textarea>

    <input type="text" name="hostingDomain" placeholder="Do you need assistance with web hosting and domain registration?" style={styles.input} />

    <textarea name="maintenanceSupport" placeholder="Will you require ongoing maintenance and support services post-launch?" required style={styles.textarea}></textarea>

    <textarea name="previousWebsiteFeedback" placeholder="If you have an existing website, what do you like and dislike about it?" required style={styles.textarea}></textarea>

    <textarea name="inspirationalExamples" placeholder="Any websites you admire or would like to emulate in some way?" required style={styles.textarea}></textarea>

    <textarea name="analyticsTracking" placeholder="Do you require setup for website analytics and tracking (e.g., Google Analytics)?" required style={styles.textarea}></textarea>
      
      
      <input type="text" name="preferredCommunication" placeholder="Phone number" style={styles.input} />
      
      <button type="submit" style={styles.button}>Submit</button>
      
      {submitted && <p style={styles.submittedMessage}>Thank you for submitting your web design inquiry!</p>}
    </form>
  );
};

export default WebDesignForm;