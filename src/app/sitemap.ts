import { MetadataRoute } from 'next';
import productsData from '@/data/products.json';
import { Product } from '@/types';

export default function sitemap(): MetadataRoute.Sitemap {
  const products: Product[] = productsData as unknown as Product[];
  
  const staticPages = [
    {
      url: 'https://medicare-solutions.com',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: 'https://medicare-solutions.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://medicare-solutions.com/products',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: 'https://medicare-solutions.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  const productPages = products.map((product) => ({
    url: `https://medicare-solutions.com/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages];
}
