'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Product } from '@/types';
import { ShoppingCart, Eye } from 'lucide-react';
import '@/styles/components/ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="product-card"
    >
      {/* Product Image */}
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        {product.originalPrice && (
          <div className="product-badge">
            Diskon
          </div>
        )}
        {!product.inStock && (
          <div className="product-out-of-stock-overlay">
            <span className="product-out-of-stock-text">Stok Habis</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="product-info">
        <div className="product-category">
          {product.category}
        </div>
        
        <h3 className="product-name">
          {product.name}
        </h3>
        
        <p className="product-short-description">
          {product.shortDescription}
        </p>

        {/* Price */}
        <div className="product-price-group">
          <div className="product-price">
            <span className="product-price-current">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="product-price-original">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="product-features">
          <div className="product-features-list">
            {product.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="product-feature-tag"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="product-actions">
          <Link
            href={`/products/${product.slug}`}
            className="product-action-button product-action-primary"
          >
            <Eye className="product-action-icon" />
            <span>Lihat Detail</span>
          </Link>
          <button
            onClick={() => {
              const whatsappUrl = `https://wa.me/6281234567890?text=Halo, saya tertarik dengan produk ${product.name} (${formatPrice(product.price)}). Apakah masih tersedia?`;
              window.open(whatsappUrl, '_blank');
            }}
            disabled={!product.inStock}
            className={`product-action-button product-action-${!product.inStock ? 'disabled' : 'success'}`}
          >
            <ShoppingCart className="product-action-icon" />
            <span className="product-action-text-sm">WA</span>
            <span className="product-action-text-md">WhatsApp</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
