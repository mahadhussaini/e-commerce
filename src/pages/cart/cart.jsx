import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../data/products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./checkout";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  const checkout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout-summary">
          <p className="subtotal">Subtotal: PKR {totalAmount.toFixed(2)}</p>
          <div className="checkout-buttons">
            <button className="continue-shopping" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
            <button
              className="checkout-button"
              onClick={() => {
                checkout();
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h2 className="empty-cart-message">Your shopping cart is empty</h2>
      )}
    </div>
  );
};
