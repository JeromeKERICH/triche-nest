import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';
import '../styles/Reason.css';

const Reason = () => {
  const features = [
    {
      icon: faShieldAlt,
      title: 'Reliable & Secure',
      description: 'We ensure top-notch security and reliability in all our services.',
    },
    {
      icon: faUsers,
      title: 'Expert Team',
      description: 'Our experienced team is dedicated to delivering the best results.',
    },
    {
      icon: faHandshake,
      title: 'Customer Focused',
      description: 'We prioritize customer satisfaction above all else.',
    },
  ];

  return (
    <section className="why-choose-us">
      <h2 className="section-title">What Sets Us Apart</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={feature.icon} className="feature-icon" />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reason;
