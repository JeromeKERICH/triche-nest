import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isIconsOpen, setIsIconsOpen] = useState(false);

  
  const toggleIcons = (e) => {
    e.preventDefault(); 
    setIsIconsOpen(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src='assets/logo.png'></img></div>

      {/* Social Media Links */}
      <div className="social-media">
        <a href="https://www.facebook.com/profile.php?id=100094034859883&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com/company/triche-nest/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/triche_nest/profilecard/?igsh=MTd2Z205ZXo5emUxNQ==" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>

        <a href="https://whatsapp.com/channel/0029VaulQVgK0IBpjNpENJ1I" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>

        <a href="/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok"></i>
        </a>

      </div>

      {/* Desktop Navigation Links */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/business">Business</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About Us</a></li>
        
        <li>
          <li><Link to="/contact" className="contact-button onClick+{toggleIcons}">Contact</Link>
        </li>
          
        </li>
      </ul>

      {/* Mobile Navigation Links */}
      <nav className="mobile-navbar">
        <a href="/" className="nav-item">
          <i className="fas fa-home"></i>
          <span className="nav-text">Home</span>
        </a>
        <a href="/about" className="nav-item">
          <i className="fas fa-user"></i>
          <span className="nav-text">About</span>
        </a>
        <a href="/business" className="nav-item">
          <i className="fas fa-briefcase"></i>
          <span className="nav-text">Business</span>
        </a>
        <a href="/courses" className="nav-item">
          <i className="fas fa-feather-alt"></i>
          <span className="nav-text">Blog</span>
        </a>
        <a href="/contact" className="nav-item" onClick={toggleIcons}>
         <i className="fa fa-phone"></i>
          <span className="nav-text">Contact</span>
        </a>
      </nav>
    </nav>
  );
};

export default Navbar;
