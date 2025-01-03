import React, { useState } from 'react';
import "../styles/FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: "What does your Web Development service include?",
      answer:
        "We specialize in creating responsive websites, e-commerce platforms, and custom web applications that align with your business needs. My focus is on performance, design, and functionality.",
    },
    {
      question: "How can your Career Development services help me?",
      answer:
        "We provide tailored coaching, CV/LinkedIn optimization, and job application strategies to help you excel in your career and stand out in the competitive job market.",
    },
    {
      question: "What does your Copywriting service offer?",
      answer:
        "We craft compelling, persuasive, and SEO-friendly content that drives engagement and converts readers into customers. From website copy to marketing materials, I've got you covered.",
    },
    {
      question: "How do your SEO services benefit my business?",
      answer:
        "Our SEO services improve your website's search engine rankings, increase organic traffic, and boost your online visibility through on-page optimization, keyword research, and content strategy.",
    },
  ];

  return (
    <section className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq-grid">
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </div>
            <div
              className="faq-answer"
              style={{ maxHeight: activeIndex === index ? "200px" : "0" }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
