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
        source: '/portal',
        destination: 'https://billing.malenglegacy.co.za/',
        permanent: true,
      },
      {
        source: '/portal/:path*',
        destination: 'https://billing.malenglegacy.co.za/:path*',
        permanent: true,
      },
      {
        source: '/billing',
        destination: 'https://billing.malenglegacy.co.za/',
        permanent: true,
      },
      {
        source: '/billing/:path*',
        destination: 'https://billing.malenglegacy.co.za/:path*',
        permanent: true,
      },
      {
        source: '/client-area',
        destination: 'https://billing.malenglegacy.co.za/',
        permanent: true,
      },
      {
        source: '/client-area/:path*',
        destination: 'https://billing.malenglegacy.co.za/:path*',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig