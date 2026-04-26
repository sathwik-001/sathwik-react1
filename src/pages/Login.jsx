import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';
import './Auth.css'; // Shared CSS for Login and Register

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-card glass-panel">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Sign in to access your account</p>
        </div>

        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
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
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
          </div>

          <button type="submit" className="btn-primary auth-submit">
            <LogIn size={20} />
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          <p>Don't have an account? <Link to="/register">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
