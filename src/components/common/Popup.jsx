import React, { useState, useEffect } from "react";
import "../styles/Popup.css";

const Popup = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const isFirstVisit = !localStorage.getItem("popupDisplayed");
    if (isFirstVisit) {
      setPopupVisible(true);
      // Hide popup after 4 seconds
      setTimeout(() => {
        setPopupVisible(false);
        localStorage.setItem("popupDisplayed", "true");
      }, 4000);
    }
  }, []);

  const services = [
    { name: "Web Development", redirect: "/web" },
    { name: "Web Quality Assurance", redirect: "/quality" },
    { name: "SEO", redirect: "/seo" },
    { name: "Content Writing", redirect: "/content" },
    { name: "Career Development", redirect: "/career" },
    { name: "Mental Health", redirect: "/mental" },
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
            <p>Get instant access to our services with just one click!</p>
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

      {/* Floating Button */}
      <button
        className="floating-btn"
        onClick={() => setPopupVisible(true)}
        aria-label="EazNav Navigation Button"
      >
      EazNav
      </button>
    </div>
  );
};

export default Popup;
