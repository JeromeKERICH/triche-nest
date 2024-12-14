import React, { useState } from 'react';
import "../styles/components/Popup.css";
import { redirect } from 'react-router-dom';

const Popup = () => {
  const [isPopupVisible, setPopupVisible] = useState(true);

  const services = [
    { name: "Web Development", redirect: "/web" },
    { name: "Web Quality Assurance", redirect: "/quality" },
    { name: "SEO", redirect: "/seo"},
    { name: "Content Writing", redirect: "/content"},
    { name: "Career Development", redirect: "/career" },
    { name: "Mental Health", redirect: "/mental"},
  ];

  const handleExplore = () => {
    setPopupVisible(false);
  };

  const handleServiceClick = (redirect) => {
    window.location.href = redirect;
  };

  return (
    <div className="App">
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
          <h1>Welcome to Triche Nest</h1>
            <h2>What are you looking for?</h2>
            <p>Choose a service or explore our site for more details!</p>
            <div className="services-list">
              {services.map((service) => (
                <button
                  key={service.name}
                  className="service-button"
                  onClick={() => handleServiceClick(service.redirect)}
                >
                  {service.name}
                </button>
              ))}
            </div>
            <button className="explore-button" onClick={handleExplore}>
              Explore the Site
            </button>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Popup;
