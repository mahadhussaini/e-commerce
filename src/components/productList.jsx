import React from "react";
import { PRODUCTS } from "../data/products";
import "./productList.css";

export function ProductList() {
  return (
    <div className="product-list">
      {PRODUCTS.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.productImage}
            alt={product.productName}
            className="product-image"
          />
          <h2 className="product-name">{product.productName}</h2>
          <p className="product-price">PKR {product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
