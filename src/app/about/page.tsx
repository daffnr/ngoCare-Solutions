'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Award, Shield, Heart, Target, Eye, CheckCircle, Star } from 'lucide-react';
import '@/styles/pages/AboutPage.css';

export default function AboutPage() {
  const achievements = [
    {
      icon: Award,
      title: 'Sertifikasi ISO 9001:2015',
      description: 'Sistem manajemen kualitas internasional',
    },
    {
      icon: Shield,
      title: 'Lisensi Kementerian Kesehatan',
      description: 'Izin resmi dari Kemenkes RI',
    },
    {
      icon: CheckCircle,
      title: 'Halal Certification',
      description: 'Sertifikasi halal untuk produk terkait',
    },
    {
      icon: Star,
      title: 'Customer Satisfaction 98%',
      description: 'Tingkat kepuasan pelanggan yang tinggi',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Kepedulian',
      description: 'Kami peduli dengan kesehatan dan kesejahteraan setiap pelanggan, memberikan perhatian khusus pada kebutuhan individual.',
    },
    {
      icon: Target,
      title: 'Akurasi',
      description: 'Memberikan produk yang tepat sesuai kebutuhan medis pelanggan dengan konsultasi profesional yang akurat.',
    },
    {
      icon: Award,
      title: 'Kualitas',
      description: 'Menjaga standar kualitas tinggi dalam setiap produk yang kami tawarkan, sesuai dengan standar internasional.',
    },
    {
      icon: Eye,
      title: 'Transparansi',
      description: 'Berkomitmen pada transparansi dalam setiap aspek bisnis, mulai dari harga hingga pelayanan.',
    },
  ];

  return (
    <div className="about-page">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="about-hero-title">
                Tentang MediCare Solutions
              </h1>
              <p className="about-hero-description">
                Mitra terpercaya dalam menyediakan solusi alat kesehatan berkualitas tinggi 
                untuk meningkatkan kualitas hidup masyarakat Indonesia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Company Story */}
        <section className="about-story-section">
          <div className="about-story-container">
            <div className="about-story-grid">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="about-story-title">
                  Perjalanan Kami
                </h2>
                <div className="about-story-text">
                  <p>
                    MediCare Solutions didirikan pada tahun 2014 dengan visi sederhana namun mulia: 
                    membuat alat kesehatan berkualitas tinggi dapat diakses oleh semua kalangan masyarakat Indonesia.
                  </p>
                  <p>
                    Berawal dari sebuah klinik kecil di Jakarta, kami menyadari betapa pentingnya 
                    akses terhadap alat kesehatan yang berkualitas dan terjangkau. Banyak keluarga 
                    yang kesulitan mendapatkan alat kesehatan yang mereka butuhkan.
                  </p>
                  <p>
                    Hari ini, setelah lebih dari 10 tahun beroperasi, kami telah melayani ribuan 
                    pelanggan di seluruh Indonesia dan menjadi salah satu distributor alat kesehatan 
                    terpercaya di tanah air.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="hero-image-card">
                  <div className="hero-image-placeholder">
                    <div>
                      <div className="hero-image-icon-container">
                        <Users className="hero-image-icon" />
                      </div>
                      <h3 className="hero-image-title">
                        Tim Profesional
                      </h3>
                      <p className="hero-image-description">
                        Didukung oleh tim ahli yang berpengalaman
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="about-vision-mission">
          <div className="about-vision-mission-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-vision-mission-header"
            >
              <h2 className="about-vision-mission-title">
                Visi & Misi Kami
              </h2>
              <p className="about-vision-mission-description">
                Komitmen kami untuk memberikan solusi terbaik dalam bidang alat kesehatan
              </p>
            </motion.div>

            <div className="about-vision-mission-grid">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="about-vision-mission-card"
              >
                <div>
                  <div className="about-vision-mission-icon-wrapper about-vision-mission-icon-blue">
                    <Eye className="about-vision-mission-icon" />
                  </div>
                  <h3 className="about-vision-mission-card-title">Visi</h3>
                  <p className="about-vision-mission-card-text">
                    Menjadi perusahaan alat kesehatan terdepan di Indonesia yang memberikan 
                    solusi terbaik untuk meningkatkan kualitas hidup masyarakat melalui 
                    produk berkualitas tinggi dan pelayanan prima.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="about-vision-mission-card"
              >
                <div>
                  <div className="about-vision-mission-icon-wrapper about-vision-mission-icon-green">
                    <Target className="about-vision-mission-icon" />
                  </div>
                  <h3 className="about-vision-mission-card-title">Misi</h3>
                  <ul className="about-vision-mission-list">
                    <li className="about-vision-mission-list-item">
                      <span className="about-vision-mission-list-bullet">•</span>
                      <span>Menyediakan produk alat kesehatan berkualitas tinggi dengan harga kompetitif</span>
                    </li>
                    <li className="about-vision-mission-list-item">
                      <span className="about-vision-mission-list-bullet">•</span>
                      <span>Memberikan pelayanan prima dan konsultasi profesional</span>
                    </li>
                    <li className="about-vision-mission-list-item">
                      <span className="about-vision-mission-list-bullet">•</span>
                      <span>Membangun kepercayaan melalui transparansi dan kualitas pelayanan</span>
                    </li>
                    <li className="about-vision-mission-list-item">
                      <span className="about-vision-mission-list-bullet">•</span>
                      <span>Mendukung peningkatan aksesibilitas alat kesehatan di Indonesia</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-values-page">
          <div className="about-values-page-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-values-page-header"
            >
              <h2 className="about-values-page-title">
                Nilai-Nilai Kami
              </h2>
              <p className="about-values-page-description">
                Prinsip-prinsip yang menjadi fondasi dalam setiap keputusan dan tindakan kami
              </p>
            </motion.div>

            <div className="about-values-page-grid">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="about-values-page-item"
                >
                  <div className="about-values-page-icon-wrapper">
                    <value.icon className="about-values-page-icon" />
                  </div>
                  <h3 className="about-values-page-item-title">
                    {value.title}
                  </h3>
                  <p className="about-values-page-item-description">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="about-achievements">
          <div className="about-achievements-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-achievements-header"
            >
              <h2 className="about-achievements-title">
                Pencapaian & Sertifikasi
              </h2>
              <p className="about-achievements-description">
                Pengakuan dan sertifikasi yang membuktikan komitmen kami terhadap kualitas
              </p>
            </motion.div>

            <div className="about-achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="about-achievement-card"
                >
                  <div className="about-achievement-icon-wrapper">
                    <achievement.icon className="about-achievement-icon" />
                  </div>
                  <h3 className="about-achievement-title">
                    {achievement.title}
                  </h3>
                  <p className="about-achievement-description">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="about-cta-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="about-cta-title">
                Bergabunglah dengan Ribuan Pelanggan Puas Kami
              </h2>
              <p className="about-cta-description">
                Dapatkan solusi alat kesehatan terbaik untuk keluarga Anda dengan 
                pelayanan profesional dan harga yang kompetitif.
              </p>
              <div className="about-cta-buttons">
                <a
                  href="/products"
                  className="about-cta-button about-cta-button-primary"
                >
                  Lihat Produk Kami
                </a>
                <a
                  href="/contact"
                  className="about-cta-button about-cta-button-secondary"
                >
                  Hubungi Kami
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
