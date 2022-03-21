/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    concurrentFeatures: true,
  },
};

module.exports = nextConfig;
