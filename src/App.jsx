import React, { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import Header from './components/Header';
import { cartReducer, initialCartState } from './store/cartReducer';
import CartContext from './CartContext.js';
import './index.css';
import './App.css';

export default function App() {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}