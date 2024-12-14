import React, { useState } from "react";
import '../styles/components/Abut.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faBullhorn, faPenFancy, faSearch, faUserTie, faHeartbeat, faBook } from '@fortawesome/free-solid-svg-icons';
import career from '/assets/caree2r.jpg';  
import CTA from '../components/CTA';

const About = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleThumbnailClick = () => {
      setIsVideoPlaying(true);
    };
  
    const handleCloseVideo = () => {
      setIsVideoPlaying(false);
    };
    return (
       
        <section className="about-section">
            <div className="about-container">
                {/* About Section */}
                <div className="about-image">
                    <img src={career} alt="Triche Nest" />
                </div>
                <div className="about-content">
                    <p>
                        Triche Nest is a forward-thinking company dedicated to providing high-quality digital solutions and professional services to empower businesses and individuals. We specialize in:
                    </p>
                    <ul className="services-list">
                        <li><FontAwesomeIcon icon={faLaptopCode} /> Web & App Development</li>
                        <li><FontAwesomeIcon icon={faBullhorn} /> Digital Marketing</li>
                        <li><FontAwesomeIcon icon={faPenFancy} /> Content Writing</li>
                        <li><FontAwesomeIcon icon={faSearch} /> SEO Optimization</li>
                        <li><FontAwesomeIcon icon={faUserTie} /> Career Development</li>
                        <li><FontAwesomeIcon icon={faHeartbeat} /> Mental Health & Wellness</li>
                        <li><FontAwesomeIcon icon={faBook} /> Courses & Workshops</li>
                    </ul>
                    <p>
                        Our mission is to help clients navigate the digital world, grow their brand, and achieve success. Whether you're an entrepreneur, a small business, or a professional seeking development, Triche Nest is here to support you with innovative solutions.
                    </p>
                </div>
            </div>



            <CTA/>
            {/* Vision Section */}
            <div className="vision-section">
                <h2>Our Vision</h2>
                <p>
                    To be a global leader in providing transformative digital solutions and professional services that empower businesses and individuals to achieve their fullest potential.
                </p>
            </div>

            {/* Mission Section */}
            <div className="mission-section">
                <h2>Our Mission</h2>
                <p>
                    To deliver innovative, tailored solutions that drive growth, enhance brand visibility, and foster professional development, all while maintaining a commitment to excellence and customer satisfaction.
                </p>
            </div>

            {/* Core Values Section */}
            <div className="core-values-section">
                <h2>Core Values</h2>
                <ul className="core-values-list">
                    <li><strong>Innovation:</strong> We embrace creativity and forward-thinking to provide cutting-edge solutions.</li>
                    <li><strong>Integrity:</strong> Honesty and transparency are the cornerstones of our relationships with clients and partners.</li>
                    <li><strong>Excellence:</strong> We strive for the highest standards in everything we do.</li>
                    <li><strong>Customer-Centric:</strong> Our clients  success is our success, and we work tirelessly to exceed their expectations.</li>
                    <li><strong>Empowerment:</strong> We are dedicated to fostering growth and providing resources for individuals and businesses to thrive.</li>
                    <li><strong>Collaboration:</strong> Teamwork and partnership drive our ability to achieve shared goals.</li>
                </ul>
            </div>

            <div className="founder-section">
                <div className="founder-heading">
                    <h1>Meet the Founder</h1>
                </div>
                <div className="founder-content">
                    <div className="founder-image">
                    {isVideoPlaying ? (
                        <div className="video-container">
                        <button className="close-button" onClick={handleCloseVideo}>
                            ✖
                        </button>
                        <video controls autoPlay>
                            <source src="/path-to-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        </div>
                    ) : (
                        <img
                        src="/assets/tumb.svg"
                        alt="Emmanuel Kerich"
                        onClick={handleThumbnailClick}
                        />
                    )}
                    </div>
                    <div className="founder-info">
                    <div className="founder-name">
                        <h2>Emmanuel Kerich</h2>
                    </div>
                    <p className="founder-description">
                        Triche Nest was founded by Emmanuel Kerich, a visionary Web Developer & Entrepreneur
                        dedicated to transforming industries through innovation. With a
                        focus on empowering businesses to grow, Triche Nest aims to create
                        impactful solutions that make a real difference.
                    </p>
                    <div className="social-links">
                        <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className="fab fa-twitter"></i>
                        </a>
                        <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                    </div>
                </div>
                </div>

            
        </section>
       
    );
};

export default About;
