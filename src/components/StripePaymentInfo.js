import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

function StripePaymentInfo() {
  return (
    <div>
      <CardElement/>
    </div>
  );
}

export default StripePaymentInfo;
