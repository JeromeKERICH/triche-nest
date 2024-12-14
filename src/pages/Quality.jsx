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
      <h2>Our Web Quality Assurance Services</h2>
      <p>We provide top-notch QA services to ensure that your web projects meet the highest standards of quality, functionality, security, and performance. Every website or web application you launch needs thorough testing to make sure it delivers the best possible user experience, performs optimally, and runs smoothly. Our expert testing and auditing processes are designed to identify and resolve any issues, allowing you to launch your site with confidence.</p>
      <div>
        <h4>Service Price: $20 per website</h4>
        <p>Delivery Time: 5-7 Days</p>
      </div>
      
      <br />
      <a href="https://wa.me/254788120422" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
        Talk with us on WhatsApp
      </a>

      <div className="form-container">
        <h3>Submit Your Website for Quality Assurance</h3>
        <form onSubmit={handleSubmit} className="qa-form">
          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="website">Your Website URL:</label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">Submit Your Website</button>
        </form>
      </div>
    </div>
  );
}

export default QualityAssurance;
