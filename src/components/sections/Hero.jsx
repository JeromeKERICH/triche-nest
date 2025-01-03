import { useEffect, useState } from 'react';
import '../styles/Hero.css';

const heroData = [
  {
    image: "/assets/3.png",
    title: 'Transform Your Vision into a Stunning, High-Performing Website',
    ctaText: 'Start Here',
    link: "https://forms.gle/2Axp24PvvbVYMDAU9",
  },
  {
    image: "/assets/appo.png",
    title: 'Engage, Inspire, and Convert with Powerful Content That Speaks to Your Audience',
    ctaText: 'Book A Free Session',
    link: "https://calendly.com/trichenest/30min", 
  },
  {
    image: "/assets/connect.png",
    title: 'Enhance Your Visibility and Build Connections with Like-Minded Individuals',
    ctaText: 'Join Our Community',
    link: "https://whatsapp.com/channel/0029VaulQVgK0IBpjNpENJ1I", 
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroData.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroData.length);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={heroData[currentSlide].image} alt="Hero Slide" className="hero-slide-image" />
        </div>
        <div className="hero-text">
          <h1>{heroData[currentSlide].title}</h1>
          <a 
            href={heroData[currentSlide].link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            {heroData[currentSlide].ctaText}
          </a>
          <button className="arrow-button" onClick={nextSlide}>→</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
