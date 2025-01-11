import { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import './styles/Career.css';

const services = [
  { 
    id: 'resumeReview', 
    title: 'Resume Review', 
    price: 2500, 
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
    price: 1500, 
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
    price: 3000, 
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
    price: 2000, 
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null); // To track submission status
  const fileInputRef = useRef();

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleServiceSelection = (e) => {
    const service = e.target.value;
    setSelectedServices(prevState => 
      prevState.includes(service) 
      ? prevState.filter(item => item !== service) 
      : [...prevState, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setSubmitSuccess(null); // Reset submission status before submitting

    if (resume) {
      // Create a FormData object to send the resume as an attachment
      const formData = new FormData();
      formData.append('file', resume);
      formData.append('name', name);
      formData.append('email', email);

      // Use emailjs to send the form data along with the resume file
      emailjs
        .sendForm('service_h8ruvmq', 'template_2nuz0o5', formData, 'TSF5LVKpWju8AP9No')
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            setSubmitSuccess('Your resume has been submitted successfully!');
            setLoading(false);
          },
          (error) => {
            console.error('Error sending email:', error.text);
            setSubmitSuccess('There was an error submitting your resume.');
            setLoading(false);
          }
        );
    }
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
            <p><strong>Price: KSH {service.price.toFixed(2)}</strong></p>
            <input 
              type="checkbox" 
              value={service.title} 
              onChange={handleServiceSelection}
            /> Select
          </div>
        ))}
      </div>

      <div className="form-container">
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
              ref={fileInputRef}
              onChange={handleResumeChange}
              required
              accept=".pdf,.doc,.docx"
            />

            <button type="submit" disabled={loading}>Submit Resume</button>
          </form>

          {loading && (
            <div className="loading">
              <p>Please wait...</p>
              <div className="spinner"></div>
            </div>
          )}

          {submitSuccess && <p>{submitSuccess}</p>}
        </div>

        {/* Checkout Section */}
        <div className="checkout-section">
          <h3>Checkout</h3>
          <div className="checkout-details">
            {selectedServices.length > 0 ? (
              selectedServices.map((service, index) => {
                const matchedService = services.find((s) => s.title === service);
                return (
                  <div key={index} className="checkout-item">
                    <h3>{service}</h3>
                    <p>KSH {matchedService?.price?.toFixed(2) || "0.00"}</p>
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
