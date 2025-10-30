'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import '@/styles/components/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Produk', href: '/products' },
    { name: 'Kontak', href: '/contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            <img 
              src="/images/logo/logo.png" 
              alt="ngoCare solutions" 
              className="logo-icon"
              width={40}
              height={40}
            />
            <span className="logo-text">ngoCare solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-item"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="navbar-contact">
            <div className="contact-item">
              <Phone className="contact-icon" />
              <span>+62812345678</span>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <span>info@ngocare-solutions.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="navbar-menu-button">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="menu-toggle-btn"
            >
              {isOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="navbar-mobile"
          >
            <div className="mobile-nav-content">
              <ul className="mobile-nav-list">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="mobile-nav-item"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mobile-contact">
                <div className="mobile-contact-content">
                  <div className="mobile-contact-item">
                    <Phone className="mobile-contact-icon" />
                    <span>+62812345678</span>
                  </div>
                  <div className="mobile-contact-item">
                    <Mail className="mobile-contact-icon" />
                    <span>info@ngocare-solutions.com</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

