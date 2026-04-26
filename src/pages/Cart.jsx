import { Trash2, CreditCard, ChevronRight } from 'lucide-react';
import './Cart.css';

const Cart = () => {
  return (
    <div className="cart-page">
      <h1 className="page-title">Your Cart</h1>
      
      <div className="cart-container">
        <div className="cart-items glass-panel">
          <div className="cart-item">
            <img src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80" alt="Earbuds" className="cart-item-img" />
            <div className="cart-item-details">
              <h3>Quantum Wireless Earbuds</h3>
              <p className="item-category">Electronics</p>
            </div>
            <div className="cart-item-quantity">
              <input type="number" defaultValue="1" min="1" className="input-field qty-input" />
            </div>
            <div className="cart-item-price">$129.99</div>
            <button className="remove-btn">
              <Trash2 size={20} />
            </button>
          </div>

          <div className="cart-item">
            <img src="https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80" alt="Keyboard" className="cart-item-img" />
            <div className="cart-item-details">
              <h3>Aero Mechanical Keyboard</h3>
              <p className="item-category">Accessories</p>
            </div>
            <div className="cart-item-quantity">
              <input type="number" defaultValue="2" min="1" className="input-field qty-input" />
            </div>
            <div className="cart-item-price">$318.00</div>
            <button className="remove-btn">
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        <div className="cart-summary glass-panel">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>$447.99</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>$15.00</span>
          </div>
          <div className="summary-row">
            <span>Tax</span>
            <span>$35.84</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total">
            <span>Total</span>
            <span>$498.83</span>
          </div>
          <button className="btn-primary checkout-btn">
            Proceed to Checkout
            <ChevronRight size={20} />
          </button>
          <div className="payment-methods">
            <CreditCard size={24} color="var(--text-secondary)" />
            <span className="secure-text">Secure Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
