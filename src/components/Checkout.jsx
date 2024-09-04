import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
    const { cart, clearCart } = useContext(CartContext);
  
    const generatePDF = () => {
      const doc = new jsPDF();
      doc.text("Recibo de compra", 10, 10);
      cart.forEach((item, index) => {
        doc.text(`${index + 1}. ${item.nombre} - Cantidad: ${item.quantity} - Precio: $${item.precio}`, 10, 20 + index * 10);
      });
      doc.text(`Total a pagar: $${cart.reduce((total, item) => total + item.precio * item.quantity, 0).toFixed(2)}`, 10, 30 + cart.length * 10);
      doc.save("recibo-compra.pdf");
    };
  
    return (
      <div>
        <h1>Resumen de tu compra</h1>
        <button onClick={generatePDF}>Generar Recibo PDF</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.nombre}</span>
            <span>Cantidad: {item.quantity}</span>
            <span>Precio: ${item.precio}</span>
          </li>
        ))}
      </ul>
      <h2>Total a pagar: ${totalPrice.toFixed(2)}</h2>

      {/* Aquí podrías colocar un formulario para los datos del cliente */}
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Dirección:</label>
          <input type="text" required />
        </div>
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
};

export default Checkout;
