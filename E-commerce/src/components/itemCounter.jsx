import React, { useState } from 'react';

export const ItemCounter = ({ onAdd, stock, initial }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 1 && inputValue <= stock) {
      setCount(inputValue);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <input type="text" value={count} onChange={handleChange} />
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};
