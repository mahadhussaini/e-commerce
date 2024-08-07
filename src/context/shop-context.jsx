import React, { createContext, useState, useMemo, useCallback } from "react";
import { PRODUCTS } from "../data/products";

const getDefaultCart = () => {
  const cart = {};
  PRODUCTS.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const calculateTotalCartAmount = (cartItems) => {
  return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
    const item = PRODUCTS.find((product) => product.id === Number(itemId));
    return total + (item ? item.price * quantity : 0);
  }, 0);
};

const defaultContextValue = {
  cartItems: getDefaultCart(),
  addToCart: (id) => {},
  removeFromCart: (id) => {},
  updateCartItemCount: (count, id) => {},
  getTotalCartAmount: () => 0,
  checkout: () => {},
};

export const ShopContext = createContext(defaultContextValue);

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = useCallback((itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
  }, []);

  const updateCartItemCount = useCallback((newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  }, []);

  const checkout = useCallback(() => {
    setCartItems(getDefaultCart());
  }, []);

  const getTotalCartAmount = useCallback(
    () => calculateTotalCartAmount(cartItems),
    [cartItems]
  );

  const contextValue = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItemCount,
      getTotalCartAmount,
      checkout,
    }),
    [
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItemCount,
      getTotalCartAmount,
      checkout,
    ]
  );

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
