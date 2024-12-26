import React, { useState } from 'react';
import './styles/Career.css';

const services = [
  { 
    id: 'resumeReview', 
    title: 'Resume Review', 
    price: 50, 
    description: 'Get expert feedback on your resume and improve your chances of landing a job.',
    features: [
      'Comprehensive review of your resume layout.',
      'Personalized feedback on your content.',
      'Optimizing for applicant tracking systems (ATS).',
      'Highlighting key achievements and skills.',
      'Ensuring grammatical and formatting consistency.'
    ]
  },
  { 
    id: 'coverLetterWriting', 
    title: 'Cover Letter Writing', 
    price: 60, 
    description: 'A well-crafted cover letter to make your application stand out.',
    features: [
      'Tailored cover letter for each job application.',
      'Highlighting your key qualifications.',
      'Creating a compelling introduction.',
      'Professional formatting and design.',
      'Ensuring alignment with resume content.'
    ]
  },
  { 
    id: 'interviewCoaching', 
    title: 'Interview Coaching', 
    price: 80, 
    description: 'Prepare for interviews with mock sessions and professional guidance.',
    features: [
      'Mock interview sessions with a professional coach.',
      'Tips on answering common interview questions.',
      'Guidance on how to highlight your strengths.',
      'Advice on body language and communication.',
      'Post-interview feedback for improvement.'
    ]
  },
  { 
    id: 'careerConsulting', 
    title: 'Career Consulting', 
    price: 100, 
    description: 'Personalized career advice to help you grow in your chosen field.',
    features: [
      'Identifying your strengths and weaknesses.',
      'Career path planning and goal setting.',
      'Job market research and insights.',
      'Skills gap analysis and recommendations.',
      'Building a personalized action plan.'
    ]
  } 
];

const CareerDevelopmentPage = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [selectedService, setSelectedService] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleResumeChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleServiceSelection = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedService((prev) => [...prev, value]);
    } else {
      setSelectedService((prev) => prev.filter((service) => service !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your submission, ${name}!`);
  };

  return (
    <div className="career-development-page">
      <h1>Career Growth Solutions</h1>
      <p>Choose from our various career development services designed to help you achieve your career goals. Whether it's resume review or career consulting, we offer tailored services to help you succeed in your professional journey.</p>

      <h2>Select a Package</h2>
      <div className="available-services">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.features.map((feature, index) => (
                <li key={index}>
                  <i className="fa fa-check-circle" aria-hidden="true"></i> {feature}
                </li>
              ))}
            </ul>
            <p><strong>Price: ${service.price.toFixed(2)}</strong></p>
            <input 
              type="checkbox" 
              value={service.title} 
              onChange={handleServiceSelection}
            /> Select
          </div>
        ))}
      </div>

      <div className="form-container">
        {/* Resume Form Section */}
        <div className="resume-upload-section">
          <h3>Submit Your Resume</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="resume">Upload Your Resume:</label>
            <input
              type="file"
              id="resume"
              onChange={handleResumeChange}
              required
              accept=".pdf,.doc,.docx"
            />

            <button type="submit">Submit Resume</button>
          </form>
        </div>

        {/* Checkout Section */}
        <div className="checkout-section">
          <h3>Checkout</h3>
          <div className="checkout-details">
            {selectedService.length > 0 ? (
              selectedService.map((service, index) => {
                const matchedService = services.find((s) => s.title === service);
                return (
                  <div key={index} className="checkout-item">
                    <h3>{service}</h3>
                    <p>${matchedService?.price?.toFixed(2) || "0.00"}</p>
                  </div>
                );
              })
            ) : (
              <p>No services selected.</p>
            )}
          </div>
          <button>Proceed to Payment</button>
        </div>
      </div>

      <div className="contact-us-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or need further assistance, feel free to reach out via WhatsApp.</p>
        <button>
          <a href="https://wa.me/254788120422" target="_blank" rel="noopener noreferrer">Talk to Us on WhatsApp</a>
        </button>
      </div>
    </div>
  );
};

export default CareerDevelopmentPage;
