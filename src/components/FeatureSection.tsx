'use client';

import { motion } from 'framer-motion';
import { Truck, Shield, Award, Headphones, Clock, CheckCircle } from 'lucide-react';
import '@/styles/components/FeatureSection.css';

const FeatureSection = () => {
  const features = [
    {
      icon: Truck,
      title: 'Pelayanan Cepat',
      description: 'Pengiriman cepat dan aman ke seluruh Indonesia dengan tracking real-time.',
      iconClass: 'feature-icon-green',
    },
    {
      icon: Shield,
      title: 'Produk Berkualitas',
      description: 'Semua produk telah teruji kualitas dan memenuhi standar kesehatan internasional.',
      iconClass: 'feature-icon-blue',
    },
    {
      icon: Award,
      title: 'Garansi Terjamin',
      description: 'Garansi resmi 2 tahun untuk semua produk dengan layanan purna jual terbaik.',
      iconClass: 'feature-icon-purple',
    },
    {
      icon: Headphones,
      title: 'Konsultasi Gratis',
      description: 'Tim ahli kami siap membantu memilih produk yang tepat untuk kebutuhan Anda.',
      iconClass: 'feature-icon-orange',
    },
    {
      icon: Clock,
      title: 'Layanan 24/7',
      description: 'Customer service tersedia 24 jam untuk melayani kebutuhan Anda kapan saja.',
      iconClass: 'feature-icon-red',
    },
    {
      icon: CheckCircle,
      title: 'Sertifikasi Resmi',
      description: 'Memiliki sertifikasi resmi dari Kementerian Kesehatan dan lembaga internasional.',
      iconClass: 'feature-icon-indigo',
    },
  ];

  return (
    <section className="feature-section">
      <div className="feature-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="feature-header"
        >
          <h2 className="feature-header-title">
            Mengapa Memilih Kami?
          </h2>
          <p className="feature-header-description">
            Kami berkomitmen memberikan pelayanan terbaik dengan standar kualitas tinggi 
            untuk memastikan kepuasan pelanggan yang maksimal.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-item"
            >
              <div className="feature-content">
                <div className={`feature-icon-wrapper ${feature.iconClass}`}>
                  <feature.icon className="feature-icon" />
                </div>
                <h3 className="feature-title">
                  {feature.title}
                </h3>
                <p className="feature-description">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="feature-cta"
        >
          <div className="feature-cta-card">
            <h3 className="feature-cta-title">
              Siap Melayani Kebutuhan Kesehatan Anda
            </h3>
            <p className="feature-cta-description">
              Hubungi kami sekarang untuk konsultasi gratis dan temukan solusi alat kesehatan 
              yang tepat untuk keluarga Anda.
            </p>
            <div className="feature-cta-buttons">
              <a
                href="https://wa.me/62895325378235"
                target="_blank"
                rel="noopener noreferrer"
                className="feature-cta-button feature-cta-button-primary"
              >
                Konsultasi WhatsApp
              </a>
              <a
                href="tel:+622112345678"
                className="feature-cta-button feature-cta-button-secondary"
              >
                Hubungi Sekarang
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
