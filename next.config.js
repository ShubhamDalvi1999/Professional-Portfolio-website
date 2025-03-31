/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shadcnblocks.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.shadcnblocks.com',
        pathname: '**',
      }
    ]
  },
  // Ensure Docker compatibility
  experimental: {
    // Enable if needed for middleware or edge functions
    // appDir: true,
    outputFileTracingRoot: process.env.NODE_ENV === 'production' ? '/app' : undefined,
  },
};

module.exports = nextConfig; 