import { Shield, Zap, Globe } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Elevating Your Tech Experience</h1>
        <p className="hero-subtitle">
          We curate the finest digital tools and accessories to seamlessly integrate with your modern lifestyle.
        </p>
      </div>

      <div className="about-content">
        <div className="about-image-container">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" 
            alt="Our Team" 
            className="about-image glass-panel" 
          />
        </div>
        
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            Founded in 2024, NexusCart started with a simple mission: to bridge the gap between premium technology and accessible design. We believe that the tools you use every day should not only function flawlessly but also inspire creativity and efficiency.
          </p>
          <p>
            From ergonomic accessories to high-fidelity audio, every product in our catalogue is meticulously selected and tested by our team of tech enthusiasts.
          </p>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card glass-panel">
          <div className="feature-icon-wrapper">
            <Shield size={32} />
          </div>
          <h3>Premium Quality</h3>
          <p>Uncompromising build quality and materials in every product we offer.</p>
        </div>

        <div className="feature-card glass-panel">
          <div className="feature-icon-wrapper">
            <Zap size={32} />
          </div>
          <h3>Fast Delivery</h3>
          <p>Global shipping network ensuring your gear arrives when you need it.</p>
        </div>

        <div className="feature-card glass-panel">
          <div className="feature-icon-wrapper">
            <Globe size={32} />
          </div>
          <h3>Eco-Conscious</h3>
          <p>Committed to sustainable packaging and partnering with green manufacturers.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
