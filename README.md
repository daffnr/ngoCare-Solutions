# MediCare Solutions - Website Company Semi E-commerce

Website company profile sekaligus katalog produk untuk penjualan alat kesehatan menggunakan Next.js 14, Tailwind CSS, dan TypeScript.

## 🚀 Fitur Utama

- **Home Page** - Hero section, produk unggulan, tentang kami, keunggulan
- **About Page** - Profil perusahaan, visi misi, tim, pencapaian
- **Products Page** - Katalog produk dengan filter dan pencarian
- **Product Detail Page** - Detail produk dengan spesifikasi lengkap
- **Contact Page** - Form kontak, informasi perusahaan, Google Maps
- **Responsive Design** - Optimized untuk desktop dan mobile
- **Animasi** - Smooth animations dengan Framer Motion
- **SEO Optimized** - Meta tags, sitemap, robots.txt

## 🛠️ Teknologi yang Digunakan

- **Next.js 14** - React framework dengan App Router
- **TypeScript** - Type safety dan better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Instalasi

1. Clone repository ini
2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## 🏗️ Struktur Project

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products pages
│   │   └── [slug]/        # Dynamic product detail
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── sitemap.ts         # Sitemap generation
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   ├── ProductCard.tsx    # Product card component
│   ├── HeroSection.tsx    # Hero section component
│   ├── FeatureSection.tsx # Features section
│   ├── AboutSection.tsx   # About section
│   └── FeaturedProducts.tsx # Featured products section
├── data/                  # Data files
│   ├── products.json      # Product data
│   └── company.json       # Company information
├── types/                 # TypeScript type definitions
│   └── index.ts           # Type definitions
└── lib/                   # Utility functions
```

## 📱 Halaman yang Tersedia

### 1. Home Page (`/`)
- Hero section dengan CTA
- Produk unggulan (3-6 produk)
- Section tentang kami
- Keunggulan perusahaan
- Footer dengan informasi kontak

### 2. About Page (`/about`)
- Profil singkat perusahaan
- Visi dan misi
- Nilai-nilai perusahaan
- Pencapaian dan sertifikasi
- Tim dan foto kantor

### 3. Products Page (`/products`)
- Grid daftar semua produk
- Filter berdasarkan kategori
- Pencarian produk
- Sorting (nama, harga, kategori)
- View mode (grid/list)

### 4. Product Detail Page (`/products/[slug]`)
- Gambar produk dengan thumbnail
- Deskripsi lengkap
- Spesifikasi produk
- Tombol pesan WhatsApp
- Produk terkait

### 5. Contact Page (`/contact`)
- Form kontak
- Informasi perusahaan
- Google Maps embed
- FAQ section
- Quick actions (WhatsApp, Telepon)

## 🎨 Desain dan Styling

- **Warna Dominan**: Putih, Biru Muda (#2563eb), Abu-abu
- **Typography**: Inter font family
- **Responsive**: Mobile-first approach
- **Animasi**: Smooth transitions dengan Framer Motion
- **Icons**: Lucide React icons

## 📊 Data Produk

Data produk disimpan dalam `src/data/products.json` dengan struktur:

```typescript
interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  specifications: { [key: string]: string };
  features: string[];
  inStock: boolean;
  isFeatured: boolean;
}
```

## 🔧 Konfigurasi

### Environment Variables
Buat file `.env.local` untuk konfigurasi:

```env
NEXT_PUBLIC_SITE_URL=https://medicare-solutions.com
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
NEXT_PUBLIC_PHONE_NUMBER=+622112345678
NEXT_PUBLIC_EMAIL=info@medicare-solutions.com
```

### Google Maps
Untuk mengaktifkan Google Maps di halaman kontak, ganti URL embed di `src/app/contact/page.tsx` dengan koordinat yang sesuai.

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Connect repository ke Vercel
3. Deploy otomatis

### Manual Deployment
```bash
npm run build
npm start
```

## 📈 SEO Features

- Meta tags yang lengkap
- Open Graph tags
- Twitter Card tags
- Sitemap.xml otomatis
- Robots.txt
- Structured data (JSON-LD)
- Responsive images
- Fast loading

## 🛡️ Security

- Input validation
- XSS protection
- CSRF protection
- Secure headers
- Content Security Policy

## 📱 Mobile Optimization

- Responsive design
- Touch-friendly interface
- Fast loading
- Optimized images
- Mobile navigation

## 🔍 Performance

- Image optimization
- Code splitting
- Lazy loading
- Caching strategies
- Bundle optimization

## 📝 License

MIT License - lihat file LICENSE untuk detail.

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push ke branch
5. Create Pull Request

## 📞 Support

Untuk pertanyaan atau dukungan, hubungi:
- Email: info@medicare-solutions.com
- WhatsApp: +62 812 3456 7890
- Telepon: +62 21 1234 5678

---

**MediCare Solutions** - Solusi Alat Kesehatan Terpercaya untuk Keluarga Anda