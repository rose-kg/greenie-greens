import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing" style={{ backgroundImage: 'url(/assets/plant-bg.jpg)' }}>
      <h1>Greenie Greens</h1>
      <p>Your home for lush, healthy houseplants delivered to your door.</p>
      <button onClick={() => navigate('/products')}>tarted</button>
    </div>
    
  );
}