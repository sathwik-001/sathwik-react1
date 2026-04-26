import { ShoppingCart } from 'lucide-react';
import './Catalogue.css';

const products = [
  {
    id: 1,
    name: 'Quantum Wireless Earbuds',
    price: 129.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80',
    description: 'Immersive sound with active noise cancellation.'
  },
  {
    id: 2,
    name: 'Aero Mechanical Keyboard',
    price: 159.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80',
    description: 'Tactile feedback with customizable RGB backlighting.'
  },
  {
    id: 3,
    name: 'Nexus Smartwatch Pro',
    price: 249.50,
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    description: 'Track your fitness and stay connected on the go.'
  },
  {
    id: 4,
    name: 'Lumina Desk Lamp',
    price: 45.00,
    category: 'Home Office',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',
    description: 'Adjustable color temperature to reduce eye strain.'
  },
  {
    id: 5,
    name: 'Orbit Portable Speaker',
    price: 89.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
    description: '360-degree sound in a compact, waterproof design.'
  },
  {
    id: 6,
    name: 'Zenith Laptop Stand',
    price: 35.00,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
    description: 'Ergonomic aluminum stand for optimal viewing angles.'
  }
];

const Catalogue = () => {
  return (
    <div className="catalogue-page">
      <div className="catalogue-header">
        <h1>Discover Top Products</h1>
        <p className="subtitle">Premium gear for modern professionals.</p>
      </div>

      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="product-card glass-panel">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-category">{product.category}</div>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">${product.price.toFixed(2)}</span>
                <button className="btn-primary add-to-cart-btn">
                  <ShoppingCart size={18} />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
