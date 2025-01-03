import React from 'react';
import './styles/Policy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <header className="privacy-header">
        <h1>Triche Nest Privacy Policy</h1>
        <p>Last updated: January 3, 2025</p>
      </header>

      <div className="privacy-content">
        <section className="privacy-section">
          <h2>Introduction</h2>
          <p>
            Welcome to Triche Nest! This privacy policy outlines the types of personal information we collect
            and how we use, protect, and share that information.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Information We Collect</h2>
          <p>
            We collect various types of personal information when you use our website, such as your name,
            email address, and browsing data.
          </p>
        </section>

        <section className="privacy-section">
          <h2>How We Use Your Information</h2>
          <p>
            The information we collect is used to improve our services, communicate with you, and enhance your
            user experience.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Data Security</h2>
          <p>
            We take the security of your data seriously and use industry-standard security measures to protect
            it from unauthorized access.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data. Please contact us if you wish to
            exercise these rights.
          </p>
        </section>

        <section className="privacy-section">
          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any significant changes by
            posting the new privacy policy on this page.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
