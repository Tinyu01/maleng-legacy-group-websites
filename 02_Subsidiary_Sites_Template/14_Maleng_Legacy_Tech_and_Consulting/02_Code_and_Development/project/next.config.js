/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/pricing/design-creative',
        destination: '/pricing',
        permanent: false,
      },
      {
        source: '/services/hosting-infrastructure/cloud-it-infrastructure',
        destination: '/services/hosting-infrastructure',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig