import React, { useState } from 'react';
import '../styles/CTA.css';

const CTA = () => {
  const [showForm, setShowForm] = useState(false);

  const handleGetStartedClick = () => {
    setShowForm(!showForm); // Toggle the form visibility
  };

  const handleCloseForm = () => {
    setShowForm(false); // Hide the form
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API)
    alert("Form submitted!");
    handleCloseForm(); // Close the form after submission
  };

  return (
    <section className="cta-container">
      <div className="cta-content">
        <h1>Take Your Business to New Heights</h1>
        <p>Join Triche Nest today and discover innovative solutions to grow, manage, and scale your business seamlessly.</p>
        <div className="cta-buttons">
          <a href="/businesspage" className="btn-primary">Learn More</a>
          <button 
            className="btn-secondary"
            onClick={handleGetStartedClick}
          >
            Get Started
          </button>
        </div>
        
        {/* Conditional rendering of the form */}
        {showForm && (
          <div className="cta-form-container">
            <h2>Tell Us About Your Business</h2>
            <form className="cta-form" onSubmit={handleSubmit}>
              <label htmlFor="businessName">Business Name:</label>
              <input type="text" id="businessName" name="businessName" required />
              
              <label htmlFor="businessType">Business Type:</label>
              <input type="text" id="businessType" name="businessType" required />
              
              <label htmlFor="services">Services We Offer:</label>
              <select id="services" name="services" required>
                <option value="">Select a service</option>
                <option value="webDesign">Web Design</option>
                <option value="seo">SEO</option>
                <option value="socialMediaMarketing">Social Media Marketing</option>
                <option value="graphicDesign">Graphic Design</option>
                <option value="consulting">Consulting</option>
                <option value="branding">Branding</option>
                <option value="contentWriting">Content Writing</option>
              </select>
              
              <label htmlFor="goals">What Are Your Goals?</label>
              <textarea id="goals" name="goals" rows="4" required></textarea>
              
              <div className="cta-form-actions">
                <button type="submit" className="cta-form-submit">Submit</button>
                <button type="button" className="cta-form-close" onClick={handleCloseForm}>Close</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
