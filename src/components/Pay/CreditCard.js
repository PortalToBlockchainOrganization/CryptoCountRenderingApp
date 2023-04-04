import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CardholderNameElement } from '@stripe/react-stripe-js';
import './creditcard.css'; // Import the CSS file

const CreditCardForm = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    console.log('submit')
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    console.log('madeithere')
    await fetch('http://localhost:3001/auth/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payment_method_id: paymentMethod.id }),
      });

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      setSuccess(true);

      // Here, you can send the paymentMethod.id to your server to charge the card
      // Example server endpoint: POST /charge
      // const response = await fetch('/charge', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ payment_method_id: paymentMethod.id }),
      // });
      console.log('fetching')
      await fetch('http://localhost:3001/auth/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ payment_method_id: paymentMethod.id }),
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="form-group">
        <label htmlFor="card-element" className="form-label">Credit or debit card</label>
        <CardElement id="card-element" options={{}} className="card-element" />
        <label htmlFor="cardholder-name-element" className="form-label">Cardholder Name</label>
        {/* <CardholderNameElement id="cardholder-name-element" className="card-element" /> */}
        {error && <div className="error">{error}</div>}
        {success && <div className="success">Payment succeeded!</div>}
      </div>
      <button onClick={handleSubmit} className="btn btn-primary" disabled={!stripe}>
        Pay
      </button>
    </form>
  </div>
  );
};

export default CreditCardForm;