# ngoCare solutions — Website Company Profile Alat Kesehatan

Website company profile dan katalog produk alat kesehatan menggunakan Next.js 16, TypeScript, dan CSS modular.

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

- **Next.js 16** - App Router
- **TypeScript** - Type safety dan better development experience
- **CSS Modules** - Styling terstruktur per komponen
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

4. Buka `http://localhost:3000` di browser

## 🏗️ Struktur Project

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products pages (list & detail)
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
- Peta (embed dinonaktifkan pada konfigurasi default)
- FAQ section
- Quick actions (WhatsApp, Telepon)

## 🎨 Desain dan Styling

- Warna: netral gelap, aksen biru muda (#60a5fa)
- Typography: Inter
- Responsive: Mobile-first
- Animasi: Framer Motion
- Icons: Lucide React

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

Jika diperlukan, buat `.env.local` untuk konfigurasi tambahan (opsional).

### Google Maps

Secara default, `iframe` Google Maps dinonaktifkan (src kosong). Untuk mengaktifkan, isi `src` dengan URL embed lokasi perusahaan.

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

## 📈 SEO

- Meta tags dasar dan sitemap (`src/app/sitemap.ts`)

## 🛡️ Catatan Keamanan

- Validasi basic pada form contoh

## 📱 Mobile Optimization

- Responsive layout & images

## 🔍 Performance

- Lazy-loading aset dan animasi ringan

## 📝 License

MIT License - lihat file LICENSE untuk detail.

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push ke branch
5. Create Pull Request

Catatan:

- Ikon sosial (Facebook/Instagram/Twitter) bersifat visual saja (non-clickable) pada konfigurasi default.
- Tautan `tel:` menggunakan nomor demo di atas.

---

**MediCare Solutions** - Solusi Alat Kesehatan Terpercaya untuk Keluarga Anda
