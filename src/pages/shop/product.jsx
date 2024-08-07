import React from "react";
import "./product.css";

export const Product = ({ data, addToCart }) => {
  return (
    <div className="product-card">
      <img
        src={data.productImage}
        alt={data.productName}
        className="product-image"
      />
      <div className="product-info">
        <h2 className="product-name">{data.productName}</h2>
        <p className="product-price">PKR {data.price.toFixed(2)}</p>
        <button
          className="add-to-cart-button"
          onClick={() => addToCart(data.id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
