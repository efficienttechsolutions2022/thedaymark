/** @type {import('next').NextConfig} */
const withOptimizedImages = require("next-optimized-images");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["via.placeholder.com"],
    loader: "akamai",
    path: "/",
    unoptimized: true,
  },
};

module.exports = nextConfig;
