import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/CTA.css";

const CTA = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    services: "",
    goals: "",
    whatsappNumber: "", // Added WhatsApp number
  });

  const handleGetStartedClick = () => {
    setShowForm(!showForm); // Toggle the form visibility
  };

  const handleCloseForm = () => {
    setShowForm(false); // Hide the form
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Ensure `name` is used to dynamically update state
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check that all required fields are filled (can also validate individually)
    if (
      !formData.businessName ||
      !formData.businessType ||
      !formData.services ||
      !formData.goals ||
      !formData.whatsappNumber
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    // Send the form data using EmailJS
    emailjs
      .send(
        "service_q3m6g6n", // Replace with your EmailJS service ID
        "template_zn92oou", // Replace with your EmailJS template ID
        {
          ...formData, // Use form data directly
        },
        "Nzo2xPey3Sn2O9Cd9" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          alert("Form submitted successfully!");
          console.log("SUCCESS!", response.status, response.text);

          // Clear the form after submission
          setFormData({
            businessName: "",
            businessType: "",
            services: "",
            goals: "",
            whatsappNumber: "",
          });

          handleCloseForm(); // Close the form after submission
        },
        (error) => {
          alert("Failed to send form. Please try again.");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section className="cta-container">
      <div className="cta-content">
        <h1>Take Your Business to New Heights</h1>
        <p>
          Join Triche Nest today and discover innovative solutions to grow,
          manage, and scale your business seamlessly.
        </p>
        <div className="cta-buttons">
          <a href="/learn-more" className="btn-primary">
            Learn More
          </a>
          <button className="btn-secondary" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>

        {showForm && (
          <div className="cta-form-container">
            <h2>Tell Us About Your Business</h2>
            <form className="cta-form" onSubmit={handleSubmit}>
              <label htmlFor="businessName">Business Name:</label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                required
                value={formData.businessName}
                onChange={handleChange}
              />

              <label htmlFor="businessType">Business Type:</label>
              <input
                type="text"
                id="businessType"
                name="businessType"
                required
                value={formData.businessType}
                onChange={handleChange}
              />

              <label htmlFor="services">Services We Offer:</label>
              <select
                id="services"
                name="services"
                required
                value={formData.services}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="webDesign">Web Design</option>
                <option value="seo">SEO</option>
                <option value="socialMediaMarketing">
                  Social Media Marketing
                </option>
                <option value="graphicDesign">Graphic Design</option>
                <option value="consulting">Consulting</option>
                <option value="branding">Branding</option>
                <option value="contentWriting">Content Writing</option>
              </select>

              <label htmlFor="goals">What Are Your Goals?</label>
              <textarea
                id="goals"
                name="goals"
                rows="4"
                required
                value={formData.goals}
                onChange={handleChange}
              ></textarea>

              <label htmlFor="whatsappNumber">WhatsApp Number:</label>
              <input
                type="number"
                id="whatsappNumber"
                name="whatsappNumber"
                required
                value={formData.whatsappNumber || ""} // Ensure empty string as fallback
                onChange={handleChange}
              />

              <div className="cta-form-actions">
                <button type="submit" className="cta-form-submit">
                  Submit
                </button>
                <button
                  type="button"
                  className="cta-form-close"
                  onClick={handleCloseForm}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
