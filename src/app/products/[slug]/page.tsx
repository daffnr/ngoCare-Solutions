'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { Product } from '@/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  CheckCircle, 
  Truck, 
  Shield, 
  RotateCcw,
  ArrowLeft,
  Plus,
  Minus
} from 'lucide-react';
import Link from 'next/link';
import productsData from '@/data/products.json';
import '@/styles/pages/ProductDetailPage.css';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const products: Product[] = productsData as unknown as Product[];
  const product = products.find(p => p.slug === slug);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-detail-page">
        <Navbar />
        <main style={{ padding: '5rem 0' }}>
          <div className="contact-content-container" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Produk tidak ditemukan
            </h1>
            <Link href="/products" style={{ color: 'var(--primary-color)' }}>
              Kembali ke katalog produk
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppOrder = () => {
    const message = `Halo, saya tertarik dengan produk ${product.name} (${formatPrice(product.price)}). Apakah masih tersedia? Saya ingin memesan ${quantity} unit.`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="product-detail-page">
      <Navbar />
      
      <main>
        {/* Breadcrumb */}
        <section className="product-detail-breadcrumb">
          <div className="product-detail-breadcrumb-container">
            <nav className="product-detail-breadcrumb-nav">
              <Link href="/" className="product-detail-breadcrumb-link">Beranda</Link>
              <span className="product-detail-breadcrumb-separator">/</span>
              <Link href="/products" className="product-detail-breadcrumb-link">Produk</Link>
              <span className="product-detail-breadcrumb-separator">/</span>
              <span className="product-detail-breadcrumb-current">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Detail */}
        <section className="product-detail-section">
          <div className="product-detail-container">
            <div className="product-detail-grid">
              {/* Product Images */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="product-detail-images"
              >
                {/* Main Image */}
                <div className="product-detail-main-image">
                  <img
                    src={product.images[selectedImage] || product.image}
                    alt={product.name}
                  />
                </div>

                {/* Thumbnail Images */}
                {product.images.length > 1 && (
                  <div className="product-detail-thumbnails">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`product-detail-thumbnail ${
                          selectedImage === index ? 'product-detail-thumbnail-active' : ''
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="product-detail-info"
              >
                {/* Category & Stock */}
                <div className="product-detail-meta">
                  <span className="product-detail-category">
                    {product.category}
                  </span>
                  <div className="product-detail-stock">
                    {product.inStock ? (
                      <span className="product-detail-stock-available">
                        <CheckCircle style={{ width: '1rem', height: '1rem', marginRight: '0.25rem', display: 'inline' }} />
                        Tersedia
                      </span>
                    ) : (
                      <span className="product-detail-stock-unavailable">Stok Habis</span>
                    )}
                  </div>
                </div>

                {/* Product Name */}
                <h1 className="product-detail-name">{product.name}</h1>

                {/* Price */}
                <div className="product-detail-price-group">
                  <div className="product-detail-price">
                    <span className="product-detail-price-current">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="product-detail-price-original">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <div className="product-detail-savings">
                      Hemat {formatPrice(product.originalPrice - product.price)}
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <h3 className="product-detail-section-title">Deskripsi Produk</h3>
                  <p className="product-detail-description">{product.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="product-detail-section-title">Fitur Utama</h3>
                  <ul className="product-detail-features-list">
                    {product.features.map((feature, index) => (
                      <li key={index} className="product-detail-feature-item">
                        <CheckCircle className="product-detail-feature-icon" />
                        <span className="product-detail-feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quantity */}
                <div className="product-detail-quantity-group">
                  <h3 className="product-detail-section-title">Jumlah</h3>
                  <div className="product-detail-quantity-selector">
                    <div className="product-detail-quantity-controls">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="product-detail-quantity-button"
                      >
                        <Minus style={{ width: '1rem', height: '1rem' }} />
                      </button>
                      <span className="product-detail-quantity-input">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="product-detail-quantity-button"
                      >
                        <Plus style={{ width: '1rem', height: '1rem' }} />
                      </button>
                    </div>
                    <span className="product-detail-quantity-total">
                      Total: {formatPrice(product.price * quantity)}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="product-detail-actions">
                  <button
                    onClick={handleWhatsAppOrder}
                    disabled={!product.inStock}
                    className={`product-detail-action-button product-detail-action-whatsapp ${!product.inStock ? 'product-detail-action-disabled' : ''}`}
                  >
                    <ShoppingCart style={{ width: '1.25rem', height: '1.25rem' }} />
                    <span>Pesan via WhatsApp</span>
                  </button>

                  <div className="product-detail-action-secondary-group">
                    <button className="product-detail-action-button product-detail-action-secondary">
                      <Heart style={{ width: '1.25rem', height: '1.25rem' }} />
                      <span>Simpan</span>
                    </button>
                    <button className="product-detail-action-button product-detail-action-gray">
                      <Share2 style={{ width: '1.25rem', height: '1.25rem' }} />
                      <span>Bagikan</span>
                    </button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="product-detail-trust-badges">
                  <div className="product-detail-trust-badge">
                    <Truck className="product-detail-trust-icon" />
                    <p className="product-detail-trust-text">Gratis Ongkir</p>
                  </div>
                  <div className="product-detail-trust-badge">
                    <Shield className="product-detail-trust-icon" />
                    <p className="product-detail-trust-text">Garansi 2 Tahun</p>
                  </div>
                  <div className="product-detail-trust-badge">
                    <RotateCcw className="product-detail-trust-icon" />
                    <p className="product-detail-trust-text">Return 30 Hari</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="product-detail-specs">
          <div className="product-detail-specs-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="product-detail-specs-title">Spesifikasi Produk</h2>
              <div className="product-detail-specs-card">
                <div className="product-detail-specs-grid">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div
                      key={key}
                      className="product-detail-spec-item"
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span className="product-detail-spec-key">{key}</span>
                        <span className="product-detail-spec-value">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Back to Products */}
        <section className="product-detail-back">
          <div className="product-detail-back-container">
            <Link
              href="/products"
              className="product-detail-back-link"
            >
              <ArrowLeft className="product-detail-back-icon" />
              Kembali ke Katalog Produk
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
