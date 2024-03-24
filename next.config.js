/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['src/components/ui-parts/Sample', '@/components/ui-parts/Sample/HogeHoge'],
  },
};

module.exports = nextConfig;
