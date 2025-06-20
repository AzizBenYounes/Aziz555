import React, { useState } from 'react';
import './BasketBall-Jersey.css';

const basketballProducts = [
  // 👕 T-Shirts
  {
    id: 1,
    name: 'Lakers Jersey',
    price: '$110',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyJVoxSYBp-jpGWIVOgEjYeSGEhFtfqk9zmQ&s',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Chicago Bulls Jersey',
    price: '$105',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UXyR6ir3AZz5FKHcprmzqJ7yIHlGCmAdvA&s',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3,
    name: 'Warriors Jersey',
    price: '$108',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCD3GuXqmAtu0H71EJOPMnhmFSnLIvN09U6w&s',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4,
    name: 'Celtics Jersey',
    price: '$102',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRatmmTuiwhtCoK_PpIwSTrFiVVx1Z7NDASUA&s',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 5,
    name: 'Brooklyn Nets Jersey',
    price: '$100',
    image: 'https://m.media-amazon.com/images/I/811kP1GquqL._AC_SL1500_.jpg',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 6,
    name: 'Phoenix Suns Jersey',
    price: '$103',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwEO3w5EK3kaiYbn_wFp50tT5hqb2mN86giQ&s',
    sizes: ['S', 'M', 'L', 'XL']
  },

  // 🩳 Shorts
  {
    id: 7,
    name: 'Lakers Shorts',
    price: '$55',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbDBI7nBwwut7eWYW-OyD1ukfKmL2VqqlOA&s',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 8,
    name: 'Bulls Shorts',
    price: '$53',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PCbgz40xdvNpfYiWyvOytt7yR0OQ-hon0A&s',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 9,
    name: 'Warriors Shorts',
    price: '$50',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAuQzkVpbjAcTjFptipPT8OAXe3diUvWkj6Q&s',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 10,
    name: 'Celtics Shorts',
    price: '$52',
    image: 'https://m.media-amazon.com/images/I/41-fQ8+WYGL._AC_.jpg',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 11,
    name: 'Nets Shorts',
    price: '$51',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFD0fxYaX2sHOJ7_plf5qgHZ-mHwQVjmwGbA&s',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 12,
    name: 'Phoenix Suns Shorts',
    price: '$54',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBfxZRh5dYFut1JHNoWKi1s2sv-u1eIkZe9Q&s',
    sizes: ['S', 'M', 'L', 'XL']
  }
];

const Basketball = () => {
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeChange = (id, size) => {
    setSelectedSizes(prev => ({ ...prev, [id]: size }));
  };

  return (
    <div className="basketball-container">
      <h2>Basketball T-Shirts & Shorts</h2>
      <div className="product-grid">
        {basketballProducts.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>{item.price}</p>

            <select
              value={selectedSizes[item.id] || ''}
              onChange={(e) => handleSizeChange(item.id, e.target.value)}
            >
              <option value="">Select Size</option>
              {item.sizes.map((size, idx) => (
                <option key={idx} value={size}>{size}</option>
              ))}
            </select>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basketball;
