import React, { useState } from 'react';

const ItemQuantitySelector = ({ stock, initial = 1, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button onClick={handleDecrease} className="btn btn-outline-danger">-</button>
      <span className="quantity">{quantity}</span>
      <button onClick={handleIncrease} className="btn btn-outline-success">+</button>
      <br />
      <button 
        onClick={() => onAdd(quantity)} 
        className="btn btn-primary mt-2"
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
