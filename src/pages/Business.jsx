import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../styles/components/Business.css";

const Business = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    queryType: "Concern",
    message: "",
  });

  const [greeting, setGreeting] = useState("");
  const [businessResources, setBusinessResources] = useState([]);
  const [vipMember, setVipMember] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "businessType") {
      loadResources(e.target.value);
    }
  };

  const loadResources = (businessType) => {
    const resources = {
      "Tech": ["Tech Innovations Webinar", "Digital Transformation Strategies"],
      "Retail": ["E-commerce Growth Strategies", "Customer Experience Best Practices"],
      "Finance": ["Financial Management eBook", "Market Expansion Tactics"]
    };
    setBusinessResources(resources[businessType] || []);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
  };

  const handleVipJoin = () => {
    setVipMember(true);
    alert("Welcome to the Exclusive Business Network! Enjoy your VIP perks.");
  };

  return (
    <div>

      {/* Hero Section */}
      <section className="heros" id="homes">
        <div className="heros-content">
          <h1>{greeting}, Business Leader!</h1>
          <p>Welcome to a platform designed to help your business grow, solve problems, and achieve your goals with personalized advice and exclusive resources.</p>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section id="infos" className="infos-section">
        <h2>Tailored Solutions for Your Business</h2>
        <p>Whether you're looking for guidance on scaling, optimizing processes, or overcoming specific challenges, we have the tools and resources to support your business.</p>
        <button className="vip-button" onClick={handleVipJoin}>
          Join Exclusive Business Connect
        </button>
      </section>

      {/* Contact and Form Section */}
      <section id="forms" className="forms-section">
        <h2>Let Us Help Your Business</h2>
        <form onSubmit={handleSubmit} className="forms-container">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Business Type</label>
            <select
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
            >
              <option value="Tech">Tech</option>
              <option value="Retail">Retail</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
          <div>
            <label>Query Type</label>
            <select
              name="queryType"
              value={formData.queryType}
              onChange={handleChange}
            >
              <option value="Concern">Concern</option>
              <option value="Learning">Learning</option>
              <option value="Help">Help</option>
            </select>
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>

        {/* Community and Networking Section */}
        <section id="community" className="community-section">
          <h2>Join Our Exclusive Business Network</h2>
          <p>Join a community of like-minded business leaders. Share insights, network, and grow your business with access to exclusive content and events.</p>
          <button onClick={handleVipJoin} className="vip-button">Become a VIP Member</button>
        </section> 
        
        <h3>Tailored Resources for Your Business</h3>
        <ul>
          {businessResources.length > 0 ? businessResources.map((resource, index) => (
            <li key={index}>{resource}</li>
          )) : <p>Choose a business type to see relevant resources.</p>}
        </ul>
      </section>

      

      
    </div>
  );
};

export default Business
