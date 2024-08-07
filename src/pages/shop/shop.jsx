import React, { useContext } from "react";
import "./shop.css";
import { PRODUCTS } from "../../data/products";
import { Product } from "./product";
import { ShopContext } from "../../context/shop-context";

export const Shop = () => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>StyleTech</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};
