
import React, { useState } from 'react';
import './styles/Seo.css'

function Seo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission (e.g., send data to a server)
    console.log(formData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Drive Traffice, Increase Leads</h1>
        <p>Boost your online visibility and rank higher on search engines</p>
      </header>

      <section className="seo-details">
        <h2>Your Go-To SEO Experts</h2>
        <p>SEO (Search Engine Optimization) is the key to improving your website's visibility and attracting organic traffic. Our team specializes in enhancing your online presence and helping you rank higher on search engines like Google, Yahoo, and Bing.</p>

        <h3>Our Full Range of SEO Solutions!</h3>
        <ul>
          <li>Keyword Research & Strategy</li>
          <li>On-Page SEO (Meta Tags, Content Optimization, Internal Linking)</li>
          <li>Technical SEO (Site Speed, Mobile Optimization, SSL, URL Structure)</li>
          <li>Off-Page SEO (Backlinks, Local SEO)</li>
          <li>Content Marketing & Blogging</li>
          <li>SEO Audits & Reporting</li>
        </ul>

        <h3>Our Pricing Options</h3>
        <p>We offer affordable SEO packages based on your business needs. Below are our prices:</p>
        <div className="price">
          <div>
            <h4>Basic SEO</h4>
            <p>Price: $300</p>
            <p>Delivery: 2 weeks</p>
          </div>
          <div>
            <h4>Advanced SEO</h4>
            <p>Price: $600</p>
            <p>Delivery: 4 weeks</p>
          </div>
          <div>
            <h4>Premium SEO</h4>
            <p>Price: $1000</p>
            <p>Delivery: 6 weeks</p>
          </div>
        </div>

        <div className="cta-butt">
          <a href="/buy-now" className="buy-now-button">Buy Now</a>
          <a href="https://wa.me/254788120422" target="_blank" className="whatsapp-button">Talk with us on WhatsApp</a>
        </div>
      </section>

      <section className="seo-form">
        <h2>Submit you site for SEO Analysis</h2>
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

export default Seo;
