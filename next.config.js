/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  eslint: {
    // Disable ESLint during production builds for faster builds
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
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
      },
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'fonts.gstatic.com',
        pathname: '**',
      }
    ]
  },
  basePath: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : '',
  // Ensure Docker compatibility
  experimental: {
    // Enable if needed for middleware or edge functions
    // appDir: true,
    outputFileTracingRoot: process.env.NODE_ENV === 'production' ? '/app' : undefined,
  },
};

module.exports = nextConfig; 