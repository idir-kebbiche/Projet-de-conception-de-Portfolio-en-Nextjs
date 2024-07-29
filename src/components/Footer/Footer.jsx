// src/components/Footer/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>&copy; {new Date().getFullYear()} Mon Portfolio | Idir Kebbiche</p>
        <div className="footer__links">
          {/* Liens avec icônes */}
          <a href="https://github.com/idir-kebbiche" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/idir-kebbiche-753289232/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
