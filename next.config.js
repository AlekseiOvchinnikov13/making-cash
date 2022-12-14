/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.coingecko.com', 'cdn-images-1.medium.com'],
    remotePatterns: [{protocol: 'https:', hostname: '**.imgur.com',}]
  }
};

module.exports = nextConfig;
