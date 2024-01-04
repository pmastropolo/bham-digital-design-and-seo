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

const SEOConsultationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
        <form name="seo-consultation" onSubmit={handleSubmit} style={styles.form} data-netlify="true">
          <input type="text" name="businessName" placeholder="Business Name" required style={styles.input} />
          
          <textarea name="businessDescription" placeholder="Describe your business and its primary services/products" required style={styles.textarea}></textarea>
      
          <textarea name="seoGoals" placeholder="What are your main objectives with SEO?" required style={styles.textarea}></textarea>
      
          <input type="text" name="websiteUrl" placeholder="Your current website URL" required style={styles.input} />
      
          <textarea name="competitors" placeholder="Who are your main competitors? (please provide their websites if possible)" required style={styles.textarea}></textarea>
      
          <textarea name="uniqueSellingPoint" placeholder="What makes your business stand out from these competitors?" required style={styles.textarea}></textarea>
      
          <textarea name="targetAudience" placeholder="Who is your target audience or typical customer?" required style={styles.textarea}></textarea>
      
          <textarea name="geographicalFocus" placeholder="Do you have a specific geographical focus for your SEO efforts?" required style={styles.textarea}></textarea>
      
          <textarea name="previousSeoEfforts" placeholder="Have you undertaken any SEO efforts in the past? If so, what were they?" required style={styles.textarea}></textarea>
      
          <textarea name="seoChallenges" placeholder="What challenges have you faced with your website's SEO?" required style={styles.textarea}></textarea>
      
          <textarea name="additionalInformation" placeholder="Is there any other information you believe is important for us to know?" required style={styles.textarea}></textarea>
      
          <textarea name="digitalMarketingActivities" placeholder="Are you currently engaged in any other digital marketing activities besides SEO?" required style={styles.textarea}></textarea>

    <input type="text" name="targetKeywords" placeholder="Specific keywords or phrases you believe are crucial for your business" style={styles.input} />

    <textarea name="seoKnowledge" placeholder="Your current knowledge or understanding of SEO" required style={styles.textarea}></textarea>

    <textarea name="successMetrics" placeholder="How do you define success for your SEO efforts?" required style={styles.textarea}></textarea>

    <textarea name="contentCreation" placeholder="Do you need assistance with SEO-optimized content creation?" required style={styles.textarea}></textarea>

    <textarea name="websiteManagement" placeholder="Who currently manages your website?" required style={styles.textarea}></textarea>

    <textarea name="seoTools" placeholder="Any specific SEO tools or reports you currently use or would like to use" style={styles.textarea}></textarea>

    <input type="text" name="seoBudget" placeholder="Your budget range for SEO initiatives" style={styles.input} />

    <textarea name="longTermSeoGoals" placeholder="Your business's online presence goals for the next 1-2 years" required style={styles.textarea}></textarea>

    <input type="text" name="preferredCommunication" placeholder="Phone number" style={styles.input} />

          <button type="submit" style={styles.button}>Submit</button>
          {submitted && <p style={styles.submittedMessage}>Thank you for your inquiry!</p>}
        </form>
      );
};

export default SEOConsultationForm;     