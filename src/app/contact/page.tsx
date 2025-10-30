'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import '@/styles/pages/ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      details: ['+62812345678'],
      action: 'tel:+62812345678'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ngocare-solutions.com'],
      action: 'mailto:info@ngocare-solutions.com'
    },
    {
      icon: MapPin,
      title: 'Alamat',
      details: ['Jln. Mayor Oking Jayaatmaja No 107', 'Citeureup. Bogor 16810', 'Indonesia'],
      action: 'https://maps.google.com/?q=Jl+Kesehatan+No+123+Jakarta+Pusat'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: ['Senin - Jumat: 08:00 - 17:00', 'Sabtu: 08:00 - 15:00', 'Minggu: Tutup'],
      action: null
    }
  ];

  return (
    <div className="contact-page">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="contact-hero-title">
                Hubungi Kami
              </h1>
              <p className="contact-hero-description">
                Tim customer service kami siap membantu Anda dengan pertanyaan, 
                konsultasi produk, atau kebutuhan lainnya.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="contact-content">
          <div className="contact-content-container">
            <div className="contact-content-grid">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="contact-form-card">
                  <h2 className="contact-form-title">
                    Kirim Pesan
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="contact-form-field">
                      <label htmlFor="name" className="contact-form-label">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="contact-form-input"
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>

                    <div className="contact-form-field">
                      <label htmlFor="email" className="contact-form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="contact-form-input"
                        placeholder="contoh@email.com"
                      />
                    </div>

                    <div className="contact-form-field">
                      <label htmlFor="message" className="contact-form-label">
                        Pesan *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="contact-form-textarea"
                        placeholder="Tuliskan pesan Anda di sini..."
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="contact-form-status contact-form-status-success">
                        <CheckCircle className="contact-form-status-icon" />
                        <span>Pesan berhasil dikirim! Kami akan segera menghubungi Anda.</span>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="contact-form-status contact-form-status-error">
                        <AlertCircle className="contact-form-status-icon" />
                        <span>Terjadi kesalahan. Silakan coba lagi.</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="contact-form-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <div style={{
                            width: '1.25rem',
                            height: '1.25rem',
                            border: '2px solid white',
                            borderTopColor: 'transparent',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                          }} />
                          <span>Mengirim...</span>
                        </>
                      ) : (
                        <>
                          <Send className="contact-form-submit-icon" />
                          <span>Kirim Pesan</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="contact-info-section"
              >
                <div>
                  <h2 className="contact-info-title">
                    Informasi Kontak
                  </h2>
                  <div className="contact-info-list">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="contact-info-item"
                      >
                        <div className="contact-info-icon-wrapper">
                          <info.icon className="contact-info-icon" />
                        </div>
                        <div className="contact-info-content">
                          <h3 className="contact-info-item-title">
                            {info.title}
                          </h3>
                          <div className="contact-info-item-details">
                            {info.details.map((detail, idx) => (
                              <div key={idx} className="contact-info-item-detail">
                                {info.action ? (
                                  <a
                                    href={info.action}
                                    className="contact-info-item-link"
                                  >
                                    {detail}
                                  </a>
                                ) : (
                                  <span>{detail}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="contact-quick-actions">
                  <h3 className="contact-quick-actions-title">
                    Butuh Bantuan Cepat?
                  </h3>
                  <div className="contact-quick-actions-list">
                    <a
                      href="https://wa.me/62895325378235"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-quick-action-button contact-quick-action-whatsapp"
                    >
                      <MessageCircle className="contact-quick-action-icon" />
                      <span>Chat WhatsApp</span>
                    </a>
                    <a
                      href="tel:+62812345678"
                      className="contact-quick-action-button contact-quick-action-phone"
                    >
                      <Phone className="contact-quick-action-icon" />
                      <span>Telepon Langsung</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="contact-map-section">
          <div className="contact-map-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="contact-map-header"
            >
              <h2 className="contact-map-title">
                Lokasi Kami
              </h2>
              <p className="contact-map-description">
                Kunjungi kantor kami untuk konsultasi langsung atau melihat produk
              </p>
            </motion.div>

            {/* Google Maps Embed */}
            <div className="contact-map-card">
              <div className="contact-map-iframe-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5235!2d106.8456!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNyJTIDEwNsKwNTAnNDQuMiJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ngoCare solutions Location"
                />
              </div>
              <div className="contact-map-info">
                  <h3 className="contact-map-info-title">
                    ngoCare solutions
                  </h3>
                  <p className="contact-map-info-text">
                    Jln. Mayor Oking Jayaatmaja No 107, Citeureup. Bogor 16810
                  </p>
                <a
                  href="https://maps.google.com/?q=Jln+Mayor+Oking+Jayaatmaja+No+107+Citeureup+Bogor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-info-link"
                >
                  <MapPin className="contact-map-info-icon" />
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="contact-faq-section">
          <div className="contact-faq-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="contact-faq-header"
            >
              <h2 className="contact-faq-title">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="contact-faq-description">
                Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami
              </p>
            </motion.div>

            <div className="contact-faq-list">
              {[
                {
                  question: "Apakah produk yang dijual sudah bersertifikat?",
                  answer: "Ya, semua produk kami telah memiliki sertifikat resmi dari Kementerian Kesehatan dan lembaga internasional yang diakui."
                },
                {
                  question: "Berapa lama waktu pengiriman?",
                  answer: "Untuk area Jakarta, pengiriman dilakukan dalam 1-2 hari kerja. Untuk luar Jakarta, pengiriman memakan waktu 3-7 hari kerja tergantung lokasi."
                },
                {
                  question: "Apakah ada garansi untuk produk?",
                  answer: "Ya, semua produk kami dilengkapi dengan garansi resmi 2 tahun dengan layanan purna jual yang terjamin."
                },
                {
                  question: "Bagaimana cara melakukan pemesanan?",
                  answer: "Anda dapat memesan melalui WhatsApp, telepon, atau mengisi form kontak di website ini. Tim kami akan segera menghubungi Anda untuk konfirmasi pesanan."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="contact-faq-item"
                >
                  <h3 className="contact-faq-question">
                    {faq.question}
                  </h3>
                  <p className="contact-faq-answer">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
