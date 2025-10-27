'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import Link from 'next/link';
import '@/styles/components/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Pattern */}
      <div className="hero-pattern">
        <div className="hero-pattern-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <div className="hero-title-group">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-title"
              >
                Solusi Alat Kesehatan
                <span className="hero-title-blue">Terpercaya</span>
                untuk Keluarga Anda
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hero-description"
              >
                Kami menyediakan berbagai macam alat kesehatan berkualitas tinggi 
                dengan pelayanan prima dan harga yang kompetitif. 
                Berpengalaman lebih dari 10 tahun melayani kebutuhan medis masyarakat.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-cta-group"
            >
              <Link
                href="/products"
                className="cta-button cta-primary"
              >
                Lihat Produk Kami
                <ArrowRight className="cta-icon" />
              </Link>
              <Link
                href="/about"
                className="cta-button cta-secondary"
              >
                Tentang Kami
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-stats"
            >
              <div className="hero-stat">
                <div className="hero-stat-number">500+</div>
                <div className="hero-stat-label">Produk Tersedia</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">10+</div>
                <div className="hero-stat-label">Tahun Pengalaman</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">1000+</div>
                <div className="hero-stat-label">Pelanggan Puas</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-image-container"
          >
            <div className="hero-image-card">
              <div className="hero-image-placeholder">
                <div>
                  <div className="hero-image-icon-container">
                    <Shield className="hero-image-icon" />
                  </div>
                  <h3 className="hero-image-title">
                    Alat Kesehatan Berkualitas
                  </h3>
                  <p className="hero-image-description">
                    Produk terpercaya untuk kebutuhan medis Anda
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="hero-floating-card hero-floating-card-top-left"
            >
              <div className="hero-floating-card-content">
                <div className="hero-floating-card-icon-wrapper hero-floating-card-icon-green">
                  <Award className="hero-floating-card-icon" />
                </div>
                <div className="hero-floating-card-text">
                  <div className="hero-floating-card-title">Garansi Terjamin</div>
                  <div className="hero-floating-card-subtitle">2 Tahun</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="hero-floating-card hero-floating-card-bottom-right"
            >
              <div className="hero-floating-card-content">
                <div className="hero-floating-card-icon-wrapper hero-floating-card-icon-blue">
                  <Users className="hero-floating-card-icon" />
                </div>
                <div className="hero-floating-card-text">
                  <div className="hero-floating-card-title">Pelayanan 24/7</div>
                  <div className="hero-floating-card-subtitle">Siap Membantu</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
