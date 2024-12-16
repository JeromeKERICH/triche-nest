import React, { useState } from 'react';
import '../styles/components/Quality.css'

function QualityAssurance() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  return (
    <div className="qa-section">
      <h2>Boost Your Website's performance with QA!</h2>
      <p>We provide top-notch QA services to ensure that your web projects meet the highest standards of quality, functionality, security, and performance. Every website or web application you launch needs thorough testing to make sure it delivers the best possible user experience, performs optimally, and runs smoothly. Our expert testing and auditing processes are designed to identify and resolve any issues, allowing you to launch your site with confidence.</p>
      <div>
        <h4>Cost: $20 per website</h4>
        <p>Delivery Time: 24 Hours</p>
      </div>
      
      <br />
      <a href="https://wa.me/254788120422" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        Talk with us on WhatsApp
      </a>

      <section className="qa-form">
        <h2>Submit Your Website for Comprehensive QA Review</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Email Address:
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Website URL:
            <input 
              type="url" 
              name="websiteUrl" 
              value={formData.websiteUrl} 
              onChange={handleChange} 
              required 
            />
          </label>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </section>
    
    </div>
  );
}

export default QualityAssurance;
