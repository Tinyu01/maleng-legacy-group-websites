/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['malenglegacy.co.za', 'www.malenglegacy.co.za'],
  },
  // Enable experimental features for 2026 performance optimization
  swcMinify: true,
};

module.exports = nextConfig;
