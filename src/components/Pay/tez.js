import React, { useState } from 'react';
import './tez.css';

const VerifyPayment = () => {
  const [quantity, setQuantity] = useState('');
  const [tezosAddress, setTezosAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="verify-payment">
      <form className="verify-payment__form" onSubmit={handleSubmit}>
        <label htmlFor="quantity" className="verify-payment__label">Quantity of XTZ:</label>
        <div className="verify-payment__xtz-amount">40XTZ</div>
        <div className="verify-payment__send-to">Send To: tz1asdflh;adslfk</div>

        <label htmlFor="tezosAddress" className="verify-payment__label">Paste Your Tezos Address:</label>
        <input
          type="text"
          id="tezosAddress"
          value={tezosAddress}
          onChange={(e) => setTezosAddress(e.target.value)}
          placeholder="Enter Tezos address"
          required
          className="verify-payment__input"
        />

        <button type="submit" className="verify-payment__button">Verify Payment</button>
      </form>
    </div>
  );
};

export default VerifyPayment;