'use client';

import { motion } from 'framer-motion';
import { Product } from '@/types';
import ProductCard from './ProductCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import '@/styles/components/FeaturedProducts.css';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => {
  const featuredProducts = products.filter(product => product.isFeatured);

  return (
    <section className="featured-products-section">
      <div className="featured-products-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="featured-products-header"
        >
          <h2 className="featured-products-title">
            Produk Unggulan Kami
          </h2>
          <p className="featured-products-description">
            Temukan produk alat kesehatan berkualitas tinggi yang telah terbukti 
            memberikan solusi terbaik untuk kebutuhan medis keluarga Anda.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="featured-products-grid"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="featured-products-cta"
        >
          <Link
            href="/products"
            className="featured-products-cta-button"
          >
            Lihat Semua Produk
            <ArrowRight className="featured-products-cta-icon" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
