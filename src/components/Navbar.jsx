import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Package, Phone, Info } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar glass-panel">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <Package className="logo-icon" />
          <span>NexusCart</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/')}`}>
            Catalogue
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>
            About
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
            Contact
          </Link>
        </div>

        <div className="nav-actions">
          <Link to="/login" className="nav-icon-link" title="Login">
            <User size={20} />
          </Link>
          <Link to="/cart" className="nav-icon-link cart-link" title="Cart">
            <ShoppingCart size={20} />
            <span className="cart-badge">3</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
