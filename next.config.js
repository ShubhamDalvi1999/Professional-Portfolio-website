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
};

module.exports = nextConfig; 