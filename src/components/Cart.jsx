import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    navigate('/checkout');  // Redirige al checkout
  };

  if (cart.length === 0) {
    return <p>Tu carrito está vacío</p>;
  }

  const totalPrice = cart.reduce((total, item) => total + item.precio * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Tu Carrito</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.imageUrl} alt={item.nombre} style={{ width: '50px', height: '50px' }} />
            <span>{item.nombre}</span>
            <span>Cantidad: {item.quantity}</span>
            <span>Precio: ${item.precio}</span>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <button onClick={handleCheckout}>Proceder al Checkout</button>  {/* Redirigir al checkout */}
    </div>
  );
};
