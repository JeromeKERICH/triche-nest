import React, { useState, useEffect } from "react";
import './styles/Business.css';
import CTA from "../components/common/CTA";

const Business = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour > 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
     
      <section className="heros" id="homes">
        <div className="heros-content">
          <h1>{greeting}, Business Leader!</h1>
          <p>Welcome to a platform designed to help your business grow, solve problems, and achieve your goals with personalized advice and exclusive resources.</p>
        </div>
      </section>


     
      <section className="features-section">
        <h2>Why Choose Our Approach?</h2>
        <div className="features-list">
          <div className="features-item">
            <i className="fas fa-clock"></i>
            <h3>Save Time and Effort</h3>
            <p>Our automation tools streamline your workflow, letting you focus on what you do best.</p>
          </div>
          <div className="features-item">
            <i className="fas fa-users"></i>
            <h3>Reach More Clients</h3>
            <p>Mobile-first designs ensure your business looks great on any device, increasing engagement.</p>
          </div>
          <div className="features-item">
            <i className="fas fa-chart-line"></i>
            <h3>Empower Your Growth</h3>
            <p>Personalized training gives you the tools and confidence to scale your digital presence.</p>
          </div>
          <div className="features-item">
            <i className="fas fa-thumbs-up"></i>
            <h3>Proven Results</h3>
            <p>We deliver systems that attract high-paying clients and double your leads in just 3 months.</p>
          </div>
        </div>
      </section>

      <CTA/>

      

      <section className="case-studies-section">
        <h2 className="section-title">Case Studies: Real Results</h2>
        <div className="case-study-container">
          <div className="case-study-item">
            <div className="case-study-info">
              <h3>Highland Training Centre</h3>
              <p>HTC saw a 50% increase in leads within the first 2 months with our mobile-first website design and automated systems.</p>
              <div className="impact-box">
                <p><strong>Impact:</strong> +50% leads in 3 months</p>
              </div>
            </div>
            <img src="assets/htc.jpg" alt="HTC" className="case-study-img" />
          </div>

          <div className="case-study-item">
            <div className="case-study-info">
              <h3>Abthan Technologies Growth</h3>
              <p>After implementing our website design and automation tools, Abthan doubled its conversion rate within 1 months.</p>
              <div className="impact-box">
                <p><strong>Impact:</strong> +100% conversion rate in 2 months</p>
              </div>
            </div>
            <img src="assets/abtstat.jpg" alt="Abthan Tech" className="case-study-img" />
          </div>
        </div>
      </section>

      <section className="download-section">
          <div className="download-container">
            <div className="download-text">
              <h2>Download Full Case Study Report</h2>
              <p>
                Gain detailed insights into our transformative work. Learn how we
                helped businesses achieve their goals and how we can do the same
                for you.
              </p>
              <a href="assets/case.png" download className="download-btn">
                Download Now
              </a>
            </div>
            <div className="download-image">
              <img
                src="assets/case.png"
                alt="Case Study Preview"
              />
            </div>
          </div>
        </section>


      
    </div>
  );
};

export default Business;
