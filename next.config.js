/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['img.icons8.com', 'picsum.photos'],
  },
};

module.exports = nextConfig;
