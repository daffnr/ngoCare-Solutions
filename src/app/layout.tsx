import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/mobile-responsiveness.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MediCare Solutions - Solusi Alat Kesehatan Terpercaya',
  description: 'MediCare Solutions menyediakan berbagai macam alat kesehatan berkualitas tinggi untuk kebutuhan medis keluarga Anda. Kursi roda, tensimeter, walker, dan produk kesehatan lainnya dengan harga kompetitif.',
  keywords: 'alat kesehatan, kursi roda, tensimeter, walker, oksimeter, termometer, alat medis, kesehatan, MediCare Solutions',
  authors: [{ name: 'MediCare Solutions' }],
  creator: 'MediCare Solutions',
  publisher: 'MediCare Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://medicare-solutions.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MediCare Solutions - Solusi Alat Kesehatan Terpercaya',
    description: 'MediCare Solutions menyediakan berbagai macam alat kesehatan berkualitas tinggi untuk kebutuhan medis keluarga Anda.',
    url: 'https://medicare-solutions.com',
    siteName: 'MediCare Solutions',
    images: [
      {
        url: '/images/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'MediCare Solutions - Alat Kesehatan Terpercaya',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MediCare Solutions - Solusi Alat Kesehatan Terpercaya',
    description: 'MediCare Solutions menyediakan berbagai macam alat kesehatan berkualitas tinggi untuk kebutuhan medis keluarga Anda.',
    images: ['/images/og-image.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Hide Next.js dev notifications */
            #__next-build-watcher,
            #__next-dev-indicator,
            #__next-dev-overlay,
            [data-nextjs-toast],
            [data-nextjs-dialog],
            .nextjs-toast-container,
            .nextjs-overlay {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              pointer-events: none !important;
            }
          `
        }} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}