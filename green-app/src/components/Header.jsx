import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext.js';

export default function Header() {
  const { cartState } = useContext(CartContext);
  const totalItems = cartState.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart 🛒 ({totalItems})</Link>
      </nav>
    </header>
  );
}