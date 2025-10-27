'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Users, Award, Heart, Target, Eye } from 'lucide-react';
import '@/styles/components/AboutSection.css';

const AboutSection = () => {
  const stats = [
    { number: '500+', label: 'Produk Tersedia' },
    { number: '10+', label: 'Tahun Pengalaman' },
    { number: '1000+', label: 'Pelanggan Puas' },
    { number: '50+', label: 'Kota Terlayani' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Kepedulian',
      description: 'Kami peduli dengan kesehatan dan kesejahteraan setiap pelanggan.',
    },
    {
      icon: Target,
      title: 'Akurasi',
      description: 'Memberikan produk yang tepat sesuai kebutuhan medis pelanggan.',
    },
    {
      icon: Award,
      title: 'Kualitas',
      description: 'Menjaga standar kualitas tinggi dalam setiap produk yang kami tawarkan.',
    },
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-content">
              <div>
                <h2 className="about-title">
                  Tentang MediCare Solutions
                </h2>
                <p className="about-description">
                  Sejak didirikan pada tahun 2014, MediCare Solutions telah menjadi 
                  mitra terpercaya dalam menyediakan alat kesehatan berkualitas tinggi 
                  untuk masyarakat Indonesia. Kami berkomitmen memberikan solusi terbaik 
                  untuk kebutuhan medis keluarga Anda.
                </p>
              </div>

              <div className="about-values-group">
                <h3 className="about-values-title">Visi Kami</h3>
                <p className="about-text">
                  Menjadi perusahaan alat kesehatan terdepan di Indonesia yang memberikan 
                  solusi terbaik untuk meningkatkan kualitas hidup masyarakat.
                </p>

                <h3 className="about-values-title">Misi Kami</h3>
                <ul className="about-list">
                  <li className="about-list-item">
                    <span className="about-list-bullet">•</span>
                    <span className="about-list-text">Menyediakan produk alat kesehatan berkualitas tinggi dengan harga kompetitif</span>
                  </li>
                  <li className="about-list-item">
                    <span className="about-list-bullet">•</span>
                    <span className="about-list-text">Memberikan pelayanan prima dan konsultasi profesional</span>
                  </li>
                  <li className="about-list-item">
                    <span className="about-list-bullet">•</span>
                    <span className="about-list-text">Membangun kepercayaan melalui transparansi dan kualitas pelayanan</span>
                  </li>
                </ul>
              </div>

              <div>
                <Link
                  href="/about"
                  className="about-link"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="about-link-icon" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Stats */}
            <div className="about-stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="about-stat"
                >
                  <div className="about-stat-number">
                    {stat.number}
                  </div>
                  <div className="about-stat-label">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="about-values-section">
              <h3 className="about-values-title-center">
                Nilai-Nilai Kami
              </h3>
              <div className="about-values-list">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="about-value-item"
                  >
                    <div className="about-value-icon-wrapper">
                      <value.icon className="about-value-icon" />
                    </div>
                    <div className="about-value-content">
                      <h4 className="about-value-title">
                        {value.title}
                      </h4>
                      <p className="about-value-description">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
