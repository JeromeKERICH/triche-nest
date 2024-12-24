import { Link } from 'react-router-dom';
import { FaCode, FaPaintBrush, FaMobileAlt, FaSearch, FaPen, FaBriefcase } from 'react-icons/fa';
import '../styles/components/Service.css';
const services = [
  { id: 'web', title: 'Web Development', icon: <FaCode />, description: 'Building responsive and modern websites for your business.' },
  { id: 'business', title: 'Business Consulting', icon: <FaPaintBrush />, description: 'Organizational structure, strategy, and operational efficiency' },
  { id: 'quality', title: 'Web Quality Assurance (QA)', icon: <FaMobileAlt />, description: 'Ensuring that a website meets predefined quality standards' },
  { id: 'seo', title: 'SEO', icon: <FaSearch />, description: 'Optimizing your website to rank higher on search engines.' },
  { id: 'content', title: 'Content Writing', icon: <FaPen />, description: 'Crafting engaging and SEO-optimized content.' },
  { id: 'career', title: 'Career Development', icon: <FaBriefcase />, description: 'Providing guidance and resources for career growth.' }
];

const Services = () => {
  return (
    <section className="services">
      <h2>Unmatched Solutions</h2>
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <Link to={`${service.id}`} className="learn-more">Learn More</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
