/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'], // Add your domain here for production
  },
  env: {
    API_URL: process.env.VITE_API_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.VITE_API_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
