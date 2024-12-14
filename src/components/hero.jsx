import { useEffect, useState } from 'react';
import '../styles/components/Hero.css';

const heroData = [
  {
    image: "/assets/web.png",
    title: 'Transform Your Vision into a Stunning, High-Performing Website',
    ctaText: 'Register Here',
    link: "https://example.com/web", 
  },
  {
    image: "/assets/seo.png",
    title: 'Engage, Inspire, and Convert with Powerful Content That Speaks to Your Audience',
    ctaText: 'Book A Session',
    link: "https://calendly.com/trichenest/30min", 
  },
  {
    image: "/assets/content.png",
    title: 'Boost Your Visibility & Drive Traffic with Proven SEO Strategies',
    ctaText: 'Join Our Community',
    link: "https://whatsapp.com/channel/0029VaulQVgK0IBpjNpENJ1I", 
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroData.length);
    }, 5000);
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
