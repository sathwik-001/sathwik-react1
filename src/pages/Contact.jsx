import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Drop us a line!</p>
      </div>

      <div className="contact-container">
        <div className="contact-info glass-panel">
          <h2>Contact Information</h2>
          <p className="info-desc">Fill up the form and our team will get back to you within 24 hours.</p>
          
          <div className="info-items">
            <div className="info-item">
              <Phone className="info-icon" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="info-item">
              <Mail className="info-icon" />
              <span>support@nexuscart.com</span>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" />
              <span>123 Nexus Way, Tech Valley, CA 94043</span>
            </div>
          </div>
        </div>

        <div className="contact-form-container glass-panel">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="input-group">
                <label className="input-label" htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" className="input-field" required />
              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" className="input-field" required />
              </div>
            </div>
            
            <div className="input-group">
              <label className="input-label" htmlFor="email">Email</label>
              <input type="email" id="email" className="input-field" required />
            </div>

            <div className="input-group">
              <label className="input-label" htmlFor="message">Message</label>
              <textarea id="message" rows="5" className="input-field" required></textarea>
            </div>

            <button type="submit" className="btn-primary send-btn">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
