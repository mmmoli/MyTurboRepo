/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  concurrentFeatures: true,
  swcMinify: true,
  experimental: {
    reactRoot: true,
  },
};

module.exports = nextConfig;
