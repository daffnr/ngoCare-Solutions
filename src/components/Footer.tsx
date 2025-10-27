import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import '@/styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo">
              <img 
                src="/images/logo/logo.png" 
                alt="MediCare Solutions" 
                className="footer-logo-icon"
                width={40}
                height={40}
              />
              <span className="footer-logo-text">MediCare Solutions</span>
            </div>
            <p className="footer-description">
              Solusi alat kesehatan terpercaya untuk keluarga Anda. 
              Berpengalaman lebih dari 10 tahun melayani kebutuhan medis masyarakat.
            </p>
            <div className="footer-social">
              <a
                href="https://facebook.com/medicare-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Facebook className="social-icon" />
              </a>
              <a
                href="https://instagram.com/medicare_solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram className="social-icon" />
              </a>
              <a
                href="https://twitter.com/medicare_sol"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Twitter className="social-icon" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-section-header">Menu Utama</h3>
            <ul className="footer-list">
              <li>
                <Link href="/" className="footer-link">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/products" className="footer-link">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="footer-section-header">Kategori Produk</h3>
            <ul className="footer-list">
              <li>
                <Link href="/products?category=mobilitas" className="footer-link">
                  Alat Mobilitas
                </Link>
              </li>
              <li>
                <Link href="/products?category=diagnostik" className="footer-link">
                  Alat Diagnostik
                </Link>
              </li>
              <li>
                <Link href="/products?category=terapi" className="footer-link">
                  Alat Terapi
                </Link>
              </li>
              <li>
                <Link href="/products?category=perawatan" className="footer-link">
                  Alat Perawatan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-section-header">Kontak Kami</h3>
            <div className="footer-contact-item">
              <div className="footer-contact-icon-wrapper">
                <MapPin className="footer-contact-icon" />
              </div>
              <div>
                <p className="footer-contact-text">
                  Jl. Kesehatan No. 123<br />
                  Jakarta Pusat 10110
                </p>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon-wrapper">
                <Phone className="footer-contact-icon" />
              </div>
              <div>
                <a
                  href="tel:+622112345678"
                  className="footer-contact-link"
                >
                  +62 21 1234 5678
                </a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon-wrapper">
                <Mail className="footer-contact-icon" />
              </div>
              <div>
                <a
                  href="mailto:info@medicare-solutions.com"
                  className="footer-contact-link"
                >
                  info@medicare-solutions.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2024 MediCare Solutions. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link href="/privacy" className="footer-bottom-link">
                Privacy Policy
              </Link>
              <Link href="/terms" className="footer-bottom-link">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
