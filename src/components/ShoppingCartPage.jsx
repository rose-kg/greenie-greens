import React, { useContext } from 'react';
import CartContext from '../CartContext.js';
import { useNavigate } from 'react-router-dom';

export default function ShoppingCartPage() {
  const { cartState, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const increase = (item) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity + 1 } });
  };
  const decrease = (item) => {
    if (item.quantity > 1) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: item.quantity - 1 } });
    }
  };
  const remove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const totalCost = cartState.items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const totalItems = cartState.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: R{totalCost}</p>
      {cartState.items.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>Price: R{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => increase(item)}>+</button>
            <button onClick={() => decrease(item)}>-</button>
            <button onClick={() => remove(item.id)}>Delete</button>
          </div>
        </div>
      ))}
      <button onClick={() => alert('Checkout Coming Soon!')}>Checkout</button>
      <button onClick={() => navigate('/products')}>Continue Shopping</button>
    </div>
  );
}