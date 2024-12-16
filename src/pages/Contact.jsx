import React from 'react';
import '../styles/components/Contact.css'; 
import { FaShoppingCart, FaPaintBrush, FaFileAlt, FaBriefcase, FaUniversity, FaHeart, FaNewspaper, FaMobileAlt, FaWhatsapp } from 'react-icons/fa'; // Import icons

const Contact = () => {
  

  const handleWhatsapp = () => {
    window.open('https://wa.me/254788120422', '_blank'); 
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left Section: Contact Details */}
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out to us via the form or through the contact details provided below.</p>
          <ul>
            <li>
              <strong>Address:</strong> Remote
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:+254788120422">+254 716 668 668</a>
            </li>
            <li>
              <strong>Email:</strong> <a href="mailto:info@trichenest.com">info@kitumbuic.com</a>
            </li>
            
          </ul>
        </div>

        {/* Right Section: Contact Form */}
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Write your message"></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        {/* Service Explanation Section */}
        <section id="explanation">
          <h2>Need Something Urgent? We've Got You Covered</h2>
          <p>
          Got questions? We’ve got answers—fast! Chat with us on WhatsApp and get instant support. No waiting, no hassles—just solutions, right when you need them!
          </p>
          <button className="whatsapp-btn" onClick={handleWhatsapp}>
            <FaWhatsapp size={20} /> Talk with Us on WhatsApp
          </button>
        </section>
      </div>
    </div>
  );
};

export default Contact;
