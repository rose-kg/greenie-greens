import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing" style={{ backgroundImage: 'url(https://images.immediate.co.uk/production/volatile/sites/10/2019/01/2048x1365-Collection-feature-garden-design-LI4135057-8165afd.jpg?quality=90&webp=true&resize=1200,800)' }}>
      <h1>Greenie Greens</h1>
      <p> Welcome to Greenie Greens, your premier destination for beautiful, healthy houseplants. We specialize in bringing
          nature indoors with our carefully curated collection of plants that will transform your living space into a
          green oasis. From low-maintenance succulents to statement-making tropical plants, we have everything you need
          to create your perfect indoor garden.</p>
      <button onClick={() => navigate('/products')}>Started</button>
    </div>

  );
}