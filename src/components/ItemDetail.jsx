import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ItemQuantitySelector from './ItemQuantitySelector';
import '../styles/ItemDetail.css';

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
  };

  return (
    <div className="item-card">
      {/* Usamos la URL proporcionada como src */}
      <img src={product.imageurl} alt={product.nombre} className="item-image" />
      <h2 className="neon-text">{product.nombre}</h2>
      <p>${product.precio}</p>
      <ItemQuantitySelector stock={product.stock} onAdd={handleAddToCart} />
    </div>
  );
};

export default ItemDetail;
