import type { NextConfig } from 'next';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
