import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Next.js overlay notifications
  reactStrictMode: true,
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  // Hide Next.js notifications
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
