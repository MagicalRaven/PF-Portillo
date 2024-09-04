import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout'; 
import CartProvider from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<h1>Checkout</h1>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
