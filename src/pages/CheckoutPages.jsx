import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import '../styles/components/Checkout.css';


const stripePromise = loadStripe('your-stripe-public-key');


const MpezaPayment = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Initiating M-Pesa payment for number: ${phoneNumber}`);
  };

  return (
    <div className="payment-section">
      <h3>M-Pesa Payment</h3>
      <form onSubmit={handleSubmit}>
        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
          required
        />
        <button type="submit">Pay with M-Pesa</button>
      </form>
    </div>
  );
};


const CardPayment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      alert(`Payment Error: ${error.message}`);
    } else {
      alert(`Payment Successful! Payment Method ID: ${paymentMethod.id}`);
    }
    setIsProcessing(false);
  };

  return (
    <div className="payment-section">
      <h3>Card Payment</h3>
      <form onSubmit={handleSubmit}>
        <CardElement className="card-input" />
        <button type="submit" disabled={isProcessing}>
          {isProcessing ? 'Processing...' : 'Pay with Card'}
        </button>
      </form>
    </div>
  );
};

// Main Checkout Component
const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="payment-method-selection">
        <label>
          <input
            type="radio"
            name="payment-method"
            value="mpesa"
            checked={paymentMethod === 'mpesa'}
            onChange={() => setPaymentMethod('mpesa')}
          />
          M-Pesa
        </label>
        <label>
          <input
            type="radio"
            name="payment-method"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={() => setPaymentMethod('card')}
          />
          Card Payment
        </label>
      </div>

      {paymentMethod === 'mpesa' && <MpezaPayment />}
      {paymentMethod === 'card' && (
        <Elements stripe={stripePromise}>
          <CardPayment />
        </Elements>
      )}
    </div>
  );
};


export default CheckoutForm
