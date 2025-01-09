// src/components/MailchimpForm.jsx

import React, { useState } from 'react';
import "../styles/Newsletter.css"

const MailchimpForm = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('EMAIL', email);
    formData.append('b_4d0b748d4f9b831d8df57e760_2a9b94fd47', ''); 

    const res = await fetch('https://your-list-id.mailchimp.com/subscribe/post?', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="mailchimp-form">
      {!isSubscribed ? (
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="email">Subscribe to our Newsletter</label>
          <input
            type="email"
            id="email"
            name="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
          <button type="submit">Subscribe</button>
        </form>
      ) : (
        <div className="thank-you-message">Thank you for subscribing!</div>
      )}
    </div>
  );
};

export default MailchimpForm;
