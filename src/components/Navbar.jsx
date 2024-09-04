import React from 'react';
import CartWidget from './CartWidget';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Marca y enlace al Home */}
        <Link className="navbar-brand neon-text" to="/">Computo Store</Link>

        {/* Botón toggle para pantallas pequeñas */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces y botones */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link neon-text" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link neon-text" to="/productos">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link neon-text" to="/checkout">Checkout</Link>
            </li>
          </ul>

          {/* Botón de carrito */}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;