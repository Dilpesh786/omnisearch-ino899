import { Shield, FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#privacy" className="footer-link"><Shield size={16} /><span>Privacy Policy</span></a>
            <a href="#terms" className="footer-link"><FileText size={16} /><span>Terms of Service</span></a>
            <a href="mailto:onlineerning33@gmail.com" className="footer-link"><Mail size={16} /><span>Contact Us</span></a>
          </div>
          <div className="footer-divider" />
          <p className="footer-copyright">© {new Date().getFullYear()} OmniSearch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
