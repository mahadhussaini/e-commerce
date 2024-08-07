import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./cart-item.css";

export const CartItem = (props) => {
  const {
    id,
    productName = "Unnamed Product",
    price = 0,
    productImage = "",
  } = props.data || {};
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const quantity = cartItems[id] || 0;

  return (
    <div className="cart-item">
      <img src={productImage} alt={productName} className="cart-item-image" />
      <div className="cart-item-details">
        <p className="product-name">
          <b>{productName}</b>
        </p>
        <p className="product-price">Price: PKR {price.toFixed(2)}</p>
        <div className="cart-item-actions">
          <button className="action-button" onClick={() => removeFromCart(id)}>
            -
          </button>
          <input
            type="number"
            value={quantity}
            min="0"
            className="quantity-input"
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              updateCartItemCount(value, id);
            }}
          />
          <button className="action-button" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
