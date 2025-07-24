import React, { useContext, useState } from 'react';
import CartContext from '../CartContext.js';

const plants = [
  { id: 1, name: 'Monstera', price: 200, category: 'Tropical', image: 'https://florastore.com/cdn/shop/files/1711701_Atmosphere_01_SQ_MJ.jpg?v=1751966314&width=1800' },
  { id: 2, name: 'Snake Plant', price: 150, category: 'Succulent', image: 'https://thursd.com/storage/media/51170/snake-plant-in-green-jar.jpg' },
  { id: 3, name: 'Peace Lily', price: 180, category: 'Flowering', image: 'https://americanplantexchange.com/cdn/shop/products/peacelily-1.jpg?v=1672881763&width=990' },
  { id: 4, name: 'ZZ Plant', price: 170, category: 'Tropical', image: 'https://budsnblush.com/cdn/shop/products/ZZplant.jpg?v=1708871717&width=713' },
  { id: 5, name: 'Aloe Vera', price: 130, category: 'Succulent', image: 'https://plantify.co.za/cdn/shop/products/aloevera1200x1200.jpg?v=1620828484&width=1080' },
  { id: 6, name: 'Orchid', price: 250, category: 'Flowering', image: 'https://www.interflora.co.za/wp-content/uploads/2022/04/Phalaenopsis-Orchid-in-Pot%E2%80%93602PP-768x768.jpg' },
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
