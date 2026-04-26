import { Link } from 'react-router-dom';
import { Mail, Lock, UserPlus, User } from 'lucide-react';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-card glass-panel">
        <div className="auth-header">
          <h2>Create Account</h2>
          <p>Join us to get the best gear</p>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <label className="input-label" htmlFor="name">Full Name</label>
            <div className="input-with-icon">
              <User className="input-icon" size={20} />
              <input 
                type="text" 
                id="name" 
                className="input-field" 
                placeholder="John Doe" 
                required 
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="email">Email Address</label>
            <div className="input-with-icon">
              <Mail className="input-icon" size={20} />
              <input 
                type="email" 
                id="email" 
                className="input-field" 
                placeholder="you@example.com" 
                required 
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="password">Password</label>
            <div className="input-with-icon">
              <Lock className="input-icon" size={20} />
              <input 
                type="password" 
                id="password" 
                className="input-field" 
                placeholder="••••••••" 
                required 
              />
            </div>
          </div>

          <button type="submit" className="btn-primary auth-submit">
            <UserPlus size={20} />
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
