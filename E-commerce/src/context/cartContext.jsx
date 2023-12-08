/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const clear = () => setItems([]);

  const onAdd = (item, quantity) => {
    const exist = items.some((it) => it.id === item.id);

    if (exist) {
      const updatedItems = items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
      );
      setItems(updatedItems);
    } else {
      setItems((prev) => [...prev, { ...item, quantity }]);
    }
  };

  const onRemove = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
  };

  const updateQuantity = (id, newQuantity) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setItems(updatedItems);
  };

  console.log(items);

  return (
    <CartContext.Provider
      value={{ items, clear, onAdd, onRemove, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
