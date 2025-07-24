import React, { useContext, useState } from 'react';
import CartContext from '../CartContext.js';

const plants = [
  { id: 1, name: 'Monstera', price: 200, category: 'Tropical', image: '/assets/monstera.jpg' },
  { id: 2, name: 'Snake Plant', price: 150, category: 'Succulent', image: '/assets/snakeplant.jpg' },
  { id: 3, name: 'Peace Lily', price: 180, category: 'Flowering', image: '/assets/peacelily.jpg' },
  { id: 4, name: 'ZZ Plant', price: 170, category: 'Tropical', image: '/assets/zzplant.jpg' },
  { id: 5, name: 'Aloe Vera', price: 130, category: 'Succulent', image: '/assets/aloevera.jpg' },
  { id: 6, name: 'Orchid', price: 250, category: 'Flowering', image: '/assets/orchid.jpg' },
];

export default function ProductListingPage() {
  const { dispatch } = useContext(CartContext);
  const [addedIds, setAddedIds] = useState([]);

  const addToCart = (plant) => {
    dispatch({ type: 'ADD_ITEM', payload: plant });
    setAddedIds([...addedIds, plant.id]);
  };

  return (
    <div className="products">
      <h2>Our Plants</h2>
      <div className="plant-grid">
        {plants.map(plant => (
          <div className="plant-card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>R{plant.price}</p>
            <button disabled={addedIds.includes(plant.id)} onClick={() => addToCart(plant)}>
              {addedIds.includes(plant.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
