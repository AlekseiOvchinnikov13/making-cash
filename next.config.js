/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.coingecko.com', 'cdn-images-1.medium.com', 'coin-images.coingecko.com', 'miro.medium.com']
  }
};

module.exports = nextConfig;
