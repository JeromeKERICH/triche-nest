import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo and Description */}
        <div className="footer-section footer-logo">
          <img src="assets/logo.png"></img>
          <p>
            Transforming ideas into reality with innovative web solutions, career development, and impactful copywriting.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section footer-social">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/profile.php?id=100094034859883&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/pro-write-consultancy/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/triche_nest/profilecard/?igsh=MTd2Z205ZXo5emUxNQ==" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Triche Nest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
