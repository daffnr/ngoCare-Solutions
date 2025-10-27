'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Search, Grid, List } from 'lucide-react';
import productsData from '@/data/products.json';
import '@/styles/pages/ProductsPage.css';

export default function ProductsPage() {
  const products: Product[] = productsData as unknown as Product[];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, searchTerm, selectedCategory, sortBy]);

  return (
    <div className="products-page">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="products-hero">
          <div className="products-hero-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="products-hero-title">
                Katalog Produk Alat Kesehatan
              </h1>
              <p className="products-hero-description">
                Temukan berbagai macam alat kesehatan berkualitas tinggi untuk kebutuhan medis keluarga Anda
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="products-filters">
          <div className="products-filters-container">
            <div className="products-filters-content">
              {/* Search */}
              <div className="products-search">
                <Search className="products-search-icon" />
                <input
                  type="text"
                  placeholder="Cari produk..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="products-search-input"
                />
              </div>

              {/* Filters */}
              <div className="products-filters-group">
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="products-filter-select"
                >
                  <option value="all">Semua Kategori</option>
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                {/* Sort Filter */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="products-filter-select"
                >
                  <option value="name">Urutkan: Nama</option>
                  <option value="price-low">Urutkan: Harga Rendah ke Tinggi</option>
                  <option value="price-high">Urutkan: Harga Tinggi ke Rendah</option>
                  <option value="category">Urutkan: Kategori</option>
                </select>

                {/* View Mode */}
                <div className="products-view-toggle">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`products-view-button ${viewMode === 'grid' ? 'products-view-button-active' : 'products-view-button-inactive'}`}
                  >
                    <Grid className="products-view-icon" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`products-view-button ${viewMode === 'list' ? 'products-view-button-active' : 'products-view-button-inactive'}`}
                  >
                    <List className="products-view-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="products-section">
          <div className="products-section-container">
            {/* Results Count */}
            <div className="products-results-count">
              Menampilkan {filteredAndSortedProducts.length} dari {products.length} produk
              {searchTerm && ` untuk "${searchTerm}"`}
              {selectedCategory !== 'all' && ` dalam kategori "${selectedCategory}"`}
            </div>

            {/* Products */}
            {filteredAndSortedProducts.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? 'products-grid-layout'
                  : 'products-list-layout'
              }>
                {filteredAndSortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="products-no-results"
              >
                <div className="products-no-results-icon-wrapper">
                  <Search className="products-no-results-icon" />
                </div>
                <h3 className="products-no-results-title">
                  Produk tidak ditemukan
                </h3>
                <p className="products-no-results-text">
                  Coba ubah kata kunci pencarian atau filter kategori
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="products-no-results-button"
                >
                  Reset Filter
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="products-cta">
          <div className="products-cta-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="products-cta-title">
                Tidak Menemukan Produk yang Anda Cari?
              </h2>
              <p className="products-cta-description">
                Tim konsultan kami siap membantu Anda menemukan solusi alat kesehatan 
                yang tepat untuk kebutuhan spesifik Anda.
              </p>
              <div className="products-cta-buttons">
                <a
                  href="https://wa.me/62895325378235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="products-cta-button products-cta-button-primary"
                >
                  Konsultasi WhatsApp
                </a>
                <a
                  href="/contact"
                  className="products-cta-button products-cta-button-secondary"
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
