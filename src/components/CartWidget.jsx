import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartWidget.css';


const CartWidget = () => {
  // Aquí podemos usar un estado global o contexto para mostrar el total de productos en el carrito.
  const totalItems = 0; // Esto debe ser dinámico

  return (
    <Link to="/cart" className="btn btn-outline-primary">
      <i className="fas fa-shopping-cart"></i> 
      <span className="badge bg-secondary">{totalItems}</span>
    </Link>
  );
}

export default CartWidget;
