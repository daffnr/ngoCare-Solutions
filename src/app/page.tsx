import { Product } from '@/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import FeatureSection from '@/components/FeatureSection';
import productsData from '@/data/products.json';
import '@/styles/pages/HomePage.css';

export default function HomePage() {
  const products: Product[] = productsData as unknown as Product[];

  return (
    <div className="home-page">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProducts products={products} />
        <AboutSection />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}