import React, { useState } from "react";
import { Form, FormGroup, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreditCardForm from "./CreditCard.js";
import VerifyPayment from "./tez";
import classes from "./pay.css";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const PayPage = () => {
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const stripePromise = loadStripe('pk_live_51MpLvlHIYE1J0eGYmZfWV7hVvM1S8lSopQRWCdb3Dy7oUg0pjEWYRPKTyuLdkux6aY7dazjtjLeEDC7FwlIWhLcp00EjRbhszK');


  const handlePaymentSubmit = () => {
    // handle payment submission logic here
    setPaymentSubmitted(true);
  };

  return (
    <div className={classes.PayWrapper}>
      <h1 style={{marginLeft:"550px", marginTop: "50px"}}>Payment</h1>

      {paymentSubmitted && (
        <Alert variant="success">
          Payment has been submitted successfully!
        </Alert>
      )}

      <Form onSubmit={handlePaymentSubmit} className={classes.Form}>



      <FormGroup>
          <VerifyPayment />
        </FormGroup>
<div style={{color: "white", marginLeft: "625px"}}>Or</div>

        <FormGroup>
        <Elements stripe={stripePromise}>
      <CreditCardForm />
    </Elements>
        </FormGroup>

      

       
      </Form>

      {/* <Link to="/cancel-payment">Cancel Payment</Link> */}
    </div>
  );
};

export default PayPage;