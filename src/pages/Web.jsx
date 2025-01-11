import { useEffect, useState } from 'react';
import emailjs from "@emailjs/browser";
import { FaLock, FaCheckCircle, FaWhatsapp, FaMobileAlt, FaGlobe, FaShoppingCart, FaBook, FaUsers, FaGamepad, FaArrowRight } from "react-icons/fa";
import './styles/Web.css';


const App = () => {
 

  const handleWhatsapp = () => {
    window.open('https://wa.me/254788120422', '_blank'); 
  };

 
    const essentials = [
      {
        title: "Domain",
        description:
          "A domain is your website's address on the internet (e.g., www.example.com). It's how people find and access your website online.",
      },
      {
        title: "Web Hosting",
        description:
          "Web hosting is the space on the internet where your website's files are stored and made accessible to visitors.",
      },
      {
        title: "Design",
        description:
          "The design is the layout, visuals, and user experience of your website, ensuring it looks professional and functions well.",
      },
    ];

    const categories = {
      Static: [
        {
          title: "Personal Blog",
          price: "15,000",
          features: [
            { icon: <FaGlobe />, text: "Custom Domain" },
            { icon: <FaLock />, text: "SSL Certificates" },
            { icon: <FaMobileAlt />, text: "Mobile Responsive Design" },
            { icon: <FaBook />, text: "SEO Optimized" },
            { icon: <FaUsers />, text: "User Engagement" },
            { icon: <FaGlobe />, text: "Social Media Integration" },
          ],
        },
        {
          title: "Portfolio",
          price: "25,000",
          features: [
            { icon: <FaUsers />, text: "Showcase Your Work" },
            { icon: <FaLock />, text: "SSL Certificates" },
            { icon: <FaMobileAlt />, text: "Optimized for Speed" },
            { icon: <FaBook />, text: "Customizable Templates" },
            { icon: <FaGlobe />, text: "SEO & Analytics" },
            { icon: <FaUsers />, text: "Social Media Links" },
          ],
        },
        {
          title: "Business Brochure",
          price: "30,000",
          features: [
            { icon: <FaGlobe />, text: "Professional Branding" },
            { icon: <FaLock />, text: "Secure Hosting" },
            { icon: <FaMobileAlt />, text: "Cross-Browser Compatibility" },
            { icon: <FaBook />, text: "About Us Page" },
            { icon: <FaUsers />, text: "Contact Form" },
            { icon: <FaGlobe />, text: "Google Maps Integration" },
          ],
        },
      ],
      Dynamic: [
        {
          title: "E-commerce",
          price: "50,000",
          features: [
            { icon: <FaShoppingCart />, text: "Integrated Payment Gateway" },
            { icon: <FaLock />, text: "Secure Checkout" },
            { icon: <FaMobileAlt />, text: "Responsive Product Pages" },
            { icon: <FaGlobe />, text: "International Shipping Options" },
            { icon: <FaUsers />, text: "Customer Reviews" },
            { icon: <FaBook />, text: "Inventory Management" },
          ],
        },
        {
          title: "Social Media",
          price: "60,000",
          features: [
            { icon: <FaUsers />, text: "User Registration" },
            { icon: <FaLock />, text: "Secure User Data" },
            { icon: <FaMobileAlt />, text: "Real-Time Notifications" },
            { icon: <FaBook />, text: "User-Generated Content" },
            { icon: <FaGlobe />, text: "Media Sharing" },
            { icon: <FaGamepad />, text: "Interactive Features" },
          ],
        },
        {
          title: "News Portal",
          price: "45,000",
          features: [
            { icon: <FaBook />, text: "Dynamic Content Updates" },
            { icon: <FaLock />, text: "SSL Certificates" },
            { icon: <FaMobileAlt />, text: "Optimized for SEO" },
            { icon: <FaGlobe />, text: "Breaking News Updates" },
            { icon: <FaUsers />, text: "Subscriber Newsletters" },
            { icon: <FaMobileAlt />, text: "Multilingual Support" },
          ],
        },
      ],
      Specialized: [
        {
          title: "Educational",
          price: "70,000",
          features: [
            { icon: <FaBook />, text: "Course Management System" },
            { icon: <FaLock />, text: "SSL Certificates" },
            { icon: <FaMobileAlt />, text: "Interactive Quizzes" },
            { icon: <FaUsers />, text: "Student Forums" },
            { icon: <FaGlobe />, text: "Live Webinars" },
            { icon: <FaGlobe />, text: "Progress Tracking" },
          ],
        },
        {
          title: "Gaming",
          price: "95,000",
          features: [
            { icon: <FaGamepad />, text: "Multiplayer Features" },
            { icon: <FaLock />, text: "High-Performance Servers" },
            { icon: <FaMobileAlt />, text: "Responsive UI" },
            { icon: <FaBook />, text: "Leaderboard Integration" },
            { icon: <FaUsers />, text: "In-Game Chat" },
            { icon: <FaGlobe />, text: "Multilingual Support" },
          ],
        },
        {
          title: "Government",
          price: "120,000",
          features: [
            { icon: <FaGlobe />, text: "Public Resources" },
            { icon: <FaLock />, text: "Enhanced Security" },
            { icon: <FaMobileAlt />, text: "Accessible Design" },
            { icon: <FaBook />, text: "Event Management" },
            { icon: <FaUsers />, text: "Service Booking" },
            { icon: <FaGlobe />, text: "Digital Signatures" },
          ],
        },
      ],
    };
  
    const [activeCategory, setActiveCategory] = useState("Static");

      useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

        const [formData, setFormData] = useState({
          fullName: "",
          email: "",
          phone: "",
          desiredDomain: "",
          plan: "Starter Plan (KSH 15,000)",
          websiteDetails: "",
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          // Validation (Optional)
          if (!formData.fullName || !formData.email || !formData.phone || !formData.plan) {
            alert("Please fill in all required fields.");
            return;
          }
      
          // Send email using EmailJS
          emailjs
            .send(
              "service_h8ruvmq", // Replace with your EmailJS Service ID
              "template_vafda6i", // Replace with your EmailJS Template ID
              {
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                desiredDomain: formData.desiredDomain || "Not specified",
                plan: formData.plan,
                websiteDetails: formData.websiteDetails || "No details provided",
              },
              "TSF5LVKpWju8AP9No" // Replace with your EmailJS Public Key
            )
            .then(
              (response) => {
                alert("Your application has been submitted successfully!");
                console.log("SUCCESS!", response.status, response.text);
      
                // Clear the form after submission
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  desiredDomain: "",
                  plan: "Starter Plan (KSH 15,000)",
                  websiteDetails: "",
                });
              },
              (error) => {
                alert("Failed to send the application. Please try again.");
                console.error("FAILED...", error);
              }
            );
        };

  return (
    <div className="app">
      <main>
        
      <section id="introduction">
        
        <div className="content-wrapper">
          <div className="text-content">
          <h2>Need a Website? </h2>
          <h3>Get your Website now from as low as <span>KSH 10,000</span></h3>
            <p>
              In today’s digital world, having a website is essential for any business or individual aiming to grow and succeed. A website acts as your online presence, showcasing your products, services, or portfolio, and offering a direct line of communication with your audience.
            </p>
            <ul>
              <li>
                <FaCheckCircle size={20} />   24/7 Availability
              </li>
              <li>
                <FaCheckCircle size={20} /> Global Reach
              </li>
              <li>
                <FaCheckCircle size={20} /> Build Credibility
              </li>
              <li>
                <FaCheckCircle size={20} /> Increase Customer Engagement
              </li>
              <li>
                <FaCheckCircle size={20} /> Easy Access to Information
              </li>
              <li>
                <FaCheckCircle size={20} /> Professional Branding
              </li>
            </ul>

            <div className='button'>
              <button className='btn'><a href="#websiteForm">Order your website</a></button>
            </div>
            
          </div>
          <div className="image-section">
            <img src="assets/we.jpg" alt="Web Design" />
          </div>
        </div>
      </section>



      <section id="essentials">
      <h2>Essentials To Get A Website</h2>
      <div className="essentials-wrapper">
        {essentials.map((item, index) => (
          <div key={index} className="essential-box">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>


    <section id="plans-section">
      <h2>Get the Best Plan</h2>
      <div className="category-buttons">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={category === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="website-boxes">
        {categories[activeCategory].map((website, index) => (
          <div
            key={index}
            className="website-box"
            style={{ backgroundColor: `hsl(${index * 60}, 70%, 85%)` }} 
          >
            <h3>{website.title}</h3>
            <div className="price-tag">KSH{website.price}</div>
            <ul>
              {website.features.map((feature, idx) => (
                <li key={idx}>
                  {feature.icon} {feature.text}
                </li>
              ))}
            </ul>
            <button className="learn-more-btn">
              Learn More <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>

    <section id="websiteForm" className="form">
      <h1>Website Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
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
          <label htmlFor="phone">Phone *</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="desiredDomain">Desired Domain</label>
          <input
            type="text"
            id="desiredDomain"
            name="desiredDomain"
            value={formData.desiredDomain}
            onChange={handleChange}
            placeholder="Ex: www.trichenest.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="plan">Select your Plan *</label>
          <select
            name="plan"
            id="plan"
            value={formData.plan}
            onChange={handleChange}
          >
            <option value="Starter Plan (KSH 15,000)">
              Starter Plan (KSH 15,000)
            </option>
            <option value="Advanced Plan (KSH 25,000)">
              Advanced Plan (KSH 25,000)
            </option>
            <option value="Premium Plan (KSH 30,000)">
              Premium Plan (KSH 30,000)
            </option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="websiteDetails">
            Share some details about the website you want
          </label>
          <textarea
            id="websiteDetails"
            name="websiteDetails"
            value={formData.websiteDetails}
            onChange={handleChange}
            maxLength="250"
            placeholder="0 of 250 max words"
          />
        </div>

        <button type="submit">Build Me a Website</button>
      </form>
    </section>

        {/* Services Section */}
        <section id="explanation">
          <h2>Why Choose Us?</h2>
          <p>
            We specialize in building responsive, user-friendly, and fast websites tailored to your business needs. 
            Whether you are looking for a simple landing page or a complex e-commerce platform, we have the expertise 
            to bring your vision to life. Our websites are fully optimized for all devices, ensuring a seamless experience 
            for your visitors. We also offer ongoing support and updates to keep your website running smoothly.
          </p>
          <button className="whatsapp-btn" onClick={handleWhatsapp}>
            <FaWhatsapp size={20} /> Talk with Us on WhatsApp
          </button>
        </section>

        
    
   
      </main>
    </div>
  );
};

export default App;
