import { useState } from "react";
import emailjs from "@emailjs/browser";
import './styles/Contact.css'; 
import { FaWhatsapp } from 'react-icons/fa'; // Import icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);  // Loading state
  const [statusMessage, setStatusMessage] = useState(""); // To show success/failure messages

  const handleWhatsapp = () => {
    window.open('https://wa.me/254788120422', '_blank'); 
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all the fields.");
      return;
    }

    setLoading(true);  // Start loading
    setStatusMessage("Please wait, submitting your message...");  // Display loading message

    emailjs
      .send(
        "service_q3m6g6n", // Replace with your EmailJS service ID
        "template_41u8a1r", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Nzo2xPey3Sn2O9Cd9" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          setLoading(false);  // Stop loading
          setStatusMessage("Message sent successfully!");  // Success message
          console.log("SUCCESS!", response.status, response.text);

          // Clear the form after submission
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);  // Stop loading
          setStatusMessage("Failed to send the message. Please try again.");  // Failure message
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Contact Details */}
        <div className="contact-details">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out to us via the form or through the contact details provided below.</p>
          <ul>
            <li>
              <strong>Address:</strong> Remote
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:+254788120422">+254 788 120 422</a>
            </li>
            <li>
              <strong>Email:</strong> <a href="mailto:info@trichenest.com">info@trichenest.com</a>
            </li>
            <li>
              <strong>Book Free Discovery Call:</strong> <a href="https://calendly.com/trichenest/30min">Reserve Now</a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>

          {loading && (
            <div className="loading-message">
              <p>{statusMessage}</p>
            </div>
          )}

          {!loading && statusMessage && (
            <div className="status-message">
              <p>{statusMessage}</p>
            </div>
          )}
        </div>

        {/* Service Section */}
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
