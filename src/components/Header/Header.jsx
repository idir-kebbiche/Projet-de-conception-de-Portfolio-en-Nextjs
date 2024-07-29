// src/components/Header/Header.jsx
import React from 'react';
import Link from 'next/link';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h1>Mon Portfolio</h1>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link href="/" className="header__nav-link">Accueil</Link>
            </li>
            <li className="header__nav-item">
              <Link href="/projects" className="header__nav-link">Projets</Link>
            </li>
            <li className="header__nav-item">
              <Link href="/contact" className="header__nav-link">Contact</Link>
            </li>
            <li className="header__nav-item">
              <Link href="/testimonials" className="header__nav-link">Témoignages</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
