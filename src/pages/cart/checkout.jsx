import React from "react";
import "./checkout.css";

export const Checkout = () => {
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <p>Please review your order details:</p>
      <button className="place-order-button">Place Order</button>
    </div>
  );
};
