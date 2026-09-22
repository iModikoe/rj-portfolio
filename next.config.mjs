/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Modern formats with automatic responsive sizing.
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
